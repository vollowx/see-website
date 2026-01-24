# Eleventy Helpers

This directory contains modular Eleventy configuration helpers, organized by type following the pattern used in material-components/material-web.

## Structure

- **transforms/** - HTML transformation plugins that process the final output
- **plugins/** - Eleventy plugins that extend functionality
- **filters/** - Custom Nunjucks filters (reserved for future use)

## Transforms

### wrap-tables.js
Wraps all `<table>` elements in a scrollable container div with class `table-wrapper` for responsive table display.

### generate-toc.js
Automatically generates a table of contents from h2-h6 headings:
- Extracts headings and creates hierarchical navigation
- Adds IDs to headings for anchor links
- Can be disabled via frontmatter: `toc: false`

## Plugins

### markdown-preprocessor.js
Pre-processes markdown content before rendering:
- Uncomments blocks marked with `@docs-uncomment` comments
- Processes demo code blocks with `@docs-demo-code-block` marker
- Transforms `.md` links to HTML paths with trailing slashes

## Usage

These helpers are imported and used in the main `.eleventy.js` configuration file:

```javascript
import { wrapTables } from './eleventy-helpers/transforms/wrap-tables.js';
import { generateToc } from './eleventy-helpers/transforms/generate-toc.js';
import { markdownPreprocessor } from './eleventy-helpers/plugins/markdown-preprocessor.js';

export default function(eleventyConfig) {
  markdownPreprocessor(eleventyConfig);
  wrapTables(eleventyConfig);
  generateToc(eleventyConfig);
  // ...
}
```

## Lit SSR & Hydration

The project uses `@lit-labs/eleventy-plugin-lit` for server-side rendering of ALL Lit components (custom and seele) with client-side hydration.

### How It Works

1. **Build Step**: `build-ssr.js` compiles TypeScript components to JavaScript using esbuild
2. **SSR**: Eleventy renders ALL components on the server with Declarative Shadow DOM (DSD)
3. **Hydration**: `@lit-labs/ssr-client` enables client-side hydration of pre-rendered components
4. **DSD Polyfill**: Inline polyfill for Firefox and browsers without native DSD support

### SSR Process

```
TypeScript Components → esbuild → dist-ssr/ssr.js → Lit SSR Plugin → HTML with DSD
                                                                           ↓
                                                    Hydration Support Script
                                                                           ↓
                                                                    Client Hydration
```

### Components Rendered

**All Components are SSR'd**:
- ✅ Custom components: `sw-demo`, `sw-toolbar`
- ✅ Seele components: `md-button`, `md-switch`, `md-menu`, `md-toolbar`, `md-ripple`, `md-focus-ring`, etc.
- ✅ All nested components (ripples, focus rings, fields, etc.)

**Hydration Order**: The hydration support script (`lit-element-hydrate-support.js`) MUST be loaded before any Lit components to prevent double-rendering.

**DSD Polyfill**: The template includes an inline polyfill for Declarative Shadow DOM to support Firefox and other browsers that don't natively support it.

### Benefits

- **Faster Initial Load**: ALL components render immediately without JavaScript
- **SEO-Friendly**: Search engines see fully rendered content with all component markup
- **Progressive Enhancement**: Pre-rendered components work even if JavaScript fails
- **Improved Performance**: No layout shift, instant interactivity
- **Firefox Support**: DSD polyfill ensures compatibility across all browsers
- **Complete SSR**: Every Lit component on the page is pre-rendered

### Build Commands

- `npm run prebuild`: Compiles SSR components + generates HTML pages
- `npm run build`: Full production build with Vite
- `npm run dev`: Development mode with hot reload
