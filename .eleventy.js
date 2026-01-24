import path from 'path';
import { fileURLToPath } from 'url';
import litPlugin from '@lit-labs/eleventy-plugin-lit';
import { wrapTables } from './eleventy-helpers/transforms/wrap-tables.js';
import { generateToc } from './eleventy-helpers/transforms/generate-toc.js';
import { minifyHtml } from './eleventy-helpers/transforms/minify-html.js';
import { markdownPreprocessor } from './eleventy-helpers/plugins/markdown-preprocessor.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function(eleventyConfig) {
  // Pass through docs-web directory for CSS/JS/components
  eleventyConfig.addPassthroughCopy({
    'docs-web': 'docs-web'
  });
  
  // Pass through node_modules for client-side hydration support
  eleventyConfig.addPassthroughCopy({
    'node_modules/@lit-labs/ssr-client': '_lit-labs/ssr-client',
    'node_modules/@vollowx/seele/src': 'node_modules/@vollowx/seele/src',
    'node_modules/lit': 'node_modules/lit',
    'node_modules/lit-html': 'node_modules/lit-html',
    'node_modules/lit-element': 'node_modules/lit-element',
    'node_modules/@lit/reactive-element': 'node_modules/@lit/reactive-element',
    'node_modules/@floating-ui/dom/dist': 'node_modules/@floating-ui/dom/dist',
    'node_modules/@floating-ui/core/dist': 'node_modules/@floating-ui/core/dist',
    'node_modules/@floating-ui/utils/dist': 'node_modules/@floating-ui/utils/dist',
    'node_modules/tslib': 'node_modules/tslib'
  });
  
  // Add Lit SSR plugin for server-side rendering and hydration
  // Components are rendered on the server and then hydrated on the client
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: ['./_middle/ssr/ssr.js']
  });
  
  // Apply markdown preprocessor plugin
  markdownPreprocessor(eleventyConfig);
  
  // Apply transforms
  wrapTables(eleventyConfig);
  generateToc(eleventyConfig);
  minifyHtml(eleventyConfig);
  
  return {
    dir: {
      input: 'docs',
      output: '_site',
      includes: '../_includes'
    },
    templateFormats: ['md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
