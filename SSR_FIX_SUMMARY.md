# SSR Select Display Text Fix

## Problem
When server-side rendering (SSR) select elements using Lit SSR, the display text was showing `&nbsp;` instead of the actual selected option's text.

## Root Cause
During Lit SSR rendering:
1. The `queryAssignedElements` decorator doesn't work during SSR, so `slotItems` is empty
2. The `value` property setter has an `isServer` guard that prevents it from being set
3. Without access to slot items or the value, `updateValueAndDisplayText()` couldn't determine the display text
4. This resulted in `renderFieldContent()` rendering `&nbsp;` as a fallback

## Solution
Added a `willUpdate()` lifecycle method that executes during SSR to populate the `displayText` property:

1. Read the `value` attribute directly using `getAttribute('value')` (bypassing the guarded setter)
2. Attempt to find the matching option element using `querySelectorAll()` to get the actual display text
3. Fall back to using the `value` as the `displayText` if the option element cannot be accessed
4. Set `this.displayText` so it will be rendered during SSR

```typescript
protected override willUpdate(changed: PropertyValues<Select>) {
  if (isServer && !this.displayText) {
    const valueAttr = this.getAttribute('value');
    let displayTextFromOption: string | undefined;
    
    try {
      if (typeof this.querySelectorAll === 'function' && valueAttr) {
        const selector = this._possibleItemTags.join(',');
        const options = this.querySelectorAll(selector);
        if (options && options.length > 0) {
          for (let i = 0; i < options.length; i++) {
            const option = options[i];
            if (option.getAttribute('value') === valueAttr) {
              displayTextFromOption = option.textContent?.trim();
              break;
            }
          }
        }
      }
    } catch (e) {
      // querySelectorAll might not be available, fall through to fallback
    }
    
    this.displayText = displayTextFromOption || valueAttr || '';
  }

  super.willUpdate(changed);
}
```

## Testing
Verified the fix by building the docs-web project and checking the SSR output:

**Before:**
```html
<span part="value"><!--lit-part-->&nbsp;<!--/lit-part--></span>
```

**After:**
```html
<span part="value"><!--lit-part-->small<!--/lit-part--></span>
<span part="value"><!--lit-part-->rounded<!--/lit-part--></span>
<span part="value"><!--lit-part-->filled<!--/lit-part--></span>
```

## Files Modified
- `/tmp/seele/src/base/select.ts` - Added `willUpdate()` method for SSR support

## Note
The fix uses the `value` attribute as a fallback for `displayText` during SSR when the actual option text cannot be accessed. This works well for most cases where the value and display text are the same (e.g., "small", "rounded"). During client-side hydration, the actual display text from the option's `textContent` will replace this value if they differ.

## References
- Lit SSR Authoring Guide: https://lit.dev/docs/ssr/authoring/
- Material Web Select implementation for SSR patterns
