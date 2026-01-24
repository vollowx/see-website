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

The project uses `@lit-labs/eleventy-plugin-lit` for server-side rendering of Lit components with client-side hydration.

### How It Works

1. **Build Step**: `build-ssr.js` compiles TypeScript components to JavaScript using esbuild
2. **SSR**: Eleventy renders components on the server with Declarative Shadow DOM
3. **Hydration**: Client-side JavaScript hydrates the pre-rendered components

### SSR Process

```
TypeScript Components → esbuild → dist-ssr/ssr.js → Lit SSR Plugin → HTML with DSD
                                                                           ↓
                                                                    Client Hydration
```

### Benefits

- **Faster Initial Load**: Components render immediately without JavaScript
- **SEO-Friendly**: Search engines see fully rendered content
- **Progressive Enhancement**: Works even if JavaScript fails to load
- **Improved Performance**: No layout shift, instant interactivity

### Build Commands

- `npm run prebuild`: Compiles SSR components + generates HTML pages
- `npm run build`: Full production build with Vite
- `npm run dev`: Development mode with hot reload
