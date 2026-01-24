# Theme Switcher Scroll-to-Top Issue - Analysis & Solution

## Problem Statement

When opening the theme switcher menu on any scrollable documentation page (e.g., the M3 Button page), the page automatically scrolls to the top. This occurs whenever the user:
1. Scrolls down on a page
2. Clicks the theme switcher button (palette icon) in the toolbar
3. The menu opens AND the page unexpectedly scrolls to the top

## Root Cause

The issue originates in the `@vollowx/seele` package, specifically in the base `Menu` component.

**File**: `node_modules/@vollowx/seele/src/base/menu.js`

**Problem Lines**: 109 and 120

When a menu opens or closes, it calls the `focus()` method without any options:

```javascript
// Line 108-111: When opening the menu
this.popoverController.animateOpen().then(() => {
    this.focus();  // ← This causes the scroll!
    this.listController.focusFirstItem();
});

// Line 118-123: When closing the menu
this.popoverController.animateClose().then(() => {
    if (this.$lastFocused) {
        this.$lastFocused.focus();  // ← This can also cause scroll!
        this.$lastFocused = null;
    }
});
```

### Why This Causes Scrolling

When `focus()` is called on an element without options, the browser's default behavior is to scroll that element into view. Since the menu uses `position: fixed` positioning and may be rendered at the top of the DOM or outside the current viewport, the browser scrolls the page attempting to bring the focused element into view.

## Solution

Add the `{ preventScroll: true }` option to both `focus()` calls. This prevents the automatic scroll-into-view behavior while still properly setting focus for keyboard accessibility.

### Code Changes

**File to modify**: `node_modules/@vollowx/seele/src/base/menu.js`

**Change #1 (Line 109)**:
```javascript
// BEFORE
this.focus();

// AFTER
this.focus({ preventScroll: true });
```

**Change #2 (Line 120)**:
```javascript
// BEFORE
this.$lastFocused.focus();

// AFTER
this.$lastFocused.focus({ preventScroll: true });
```

### Complete Context

Here's the full `updated()` method with the fixes applied:

```javascript
updated(changed) {
    if (changed.has('open')) {
        if (this.open) {
            this.$lastFocused = document.activeElement;
            if (this.$control) {
                this.$control.ariaExpanded = 'true';
            }
            this.popoverController.animateOpen().then(() => {
                this.focus({ preventScroll: true });  // ← FIXED
                this.listController.focusFirstItem();
            });
        }
        else {
            this.listController.clearSearch();
            if (this.$control) {
                this.$control.ariaExpanded = 'false';
            }
            this.popoverController.animateClose().then(() => {
                if (this.$lastFocused) {
                    this.$lastFocused.focus({ preventScroll: true });  // ← FIXED
                    this.$lastFocused = null;
                }
            });
        }
    }
}
```

## How to Apply the Fix

### Option 1: Local Testing (Temporary)

For testing in the seele-docs repository:

1. Edit the file `node_modules/@vollowx/seele/src/base/menu.js`
2. Make the two changes described above
3. Clear Vite's cache: `rm -rf node_modules/.vite`
4. Restart the dev server: `npm run dev`
5. Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)

### Option 2: Permanent Fix

The proper fix should be made in the `@vollowx/seele` repository:

1. Navigate to the seele source repository
2. Find `src/base/menu.js` (or the TypeScript source `src/base/menu.ts`)
3. Apply the same changes
4. Test thoroughly
5. Publish a new version (e.g., 0.7.1)
6. Update seele-docs to use the new version

## Technical Details

### Browser Compatibility

The `preventScroll` option for `focus()` is supported in:
- Chrome 64+
- Firefox 68+
- Safari 15+
- Edge 79+

This covers all modern browsers. For older browsers that don't support this option, the parameter is simply ignored and the original behavior occurs (with scrolling).

### Maintains Accessibility

This fix:
- ✅ Preserves keyboard navigation
- ✅ Maintains proper focus management
- ✅ Keeps ARIA attributes intact
- ✅ Only prevents the unwanted scroll side-effect

### No Side Effects

The change:
- Does not affect menu positioning
- Does not affect menu animations
- Does not affect click/touch interactions
- Only prevents automatic page scrolling

## Testing

### Reproduction Steps

1. Open any documentation page (e.g., http://localhost:5173/m3/components/button.html)
2. Scroll down 500-600px
3. Note the current scroll position
4. Click the theme switcher button (palette icon)
5. **Bug**: Page scrolls to top (scrollY becomes 0)
6. **After Fix**: Page stays at the same scroll position

### Verification

After applying the fix, verify:
- [x] Menu still opens correctly
- [x] Menu is positioned correctly
- [x] Keyboard navigation still works (Arrow keys, Enter, Escape)
- [x] Page does NOT scroll when menu opens
- [x] Page does NOT scroll when menu closes
- [x] Focus returns to the trigger button when menu closes

## Additional Notes

### Why Vite Caching Was an Issue

During testing, changes to `node_modules/@vollowx/seele/src/base/menu.js` weren't immediately reflected because:
1. Vite caches dependencies in `node_modules/.vite`
2. Browser may cache the JavaScript modules
3. Simply touching the file or reloading the page wasn't sufficient

### Recommended Development Workflow

When modifying dependencies during development:
1. Make the code changes
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Restart the dev server
4. Hard refresh the browser

## Conclusion

The scroll-to-top issue when opening menus is caused by the browser's default `focus()` behavior. The fix is simple and surgical: add `{ preventScroll: true }` to two `focus()` calls in the Menu component. This maintains all functionality and accessibility while preventing the unwanted scrolling behavior.

**Recommendation**: Apply this fix to the @vollowx/seele repository and release as version 0.7.1.
