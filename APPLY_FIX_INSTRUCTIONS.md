# Instructions for Applying the SSR Fix

## Overview
The fix has been developed and tested in this repository. However, the actual change needs to be made in the **vollowx/seele** repository since that's where the select component source code lives.

## Apply the Fix

### Option 1: Manual Application
1. Clone the seele repository: `git clone https://github.com/vollowx/seele.git`
2. Copy the changes from `select.ts.patch` to `seele/src/base/select.ts`
3. Specifically, add the `willUpdate()` method shown in lines 171-207 of the patch file
4. Build seele: `npm run build` (or `bun run build`)
5. Publish a new version of @vollowx/seele to npm

### Option 2: Using the Patch File
The `select.ts.patch` file contains the complete modified `select.ts` source code. You can:
1. Replace `seele/src/base/select.ts` with this file
2. Build and publish

## Testing After Application
After publishing the new version of @vollowx/seele:
1. Update `docs-web/package.json` to use the new version
2. Run `npm install` in docs-web
3. Build the docs: `npm run build`
4. Verify SSR output shows correct display text instead of `&nbsp;`

## What the Fix Does
The fix adds a `willUpdate()` lifecycle method that:
- Detects when running during SSR (`isServer`)
- Reads the `value` attribute from the select element
- Tries to find the matching option and extract its text content
- Falls back to using the value as display text
- Sets `this.displayText` so SSR renders the correct text

## Files to Modify in seele Repository
- `src/base/select.ts` - Add the `willUpdate()` method

See `SSR_FIX_SUMMARY.md` for detailed technical information about the fix.
