import path from 'path';
import { fileURLToPath } from 'url';
import litPlugin from '@lit-labs/eleventy-plugin-lit';
import { wrapTables } from './eleventy-helpers/transforms/wrap-tables.js';
import { generateToc } from './eleventy-helpers/transforms/generate-toc.js';
import { markdownPreprocessor } from './eleventy-helpers/plugins/markdown-preprocessor.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function(eleventyConfig) {
  // Pass through docs-externals directory for CSS/JS/components
  eleventyConfig.addPassthroughCopy('docs-externals');
  
  // Add Lit SSR plugin for server-side rendering and hydration
  // Components are rendered on the server and then hydrated on the client
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: ['./dist-ssr/ssr.js']
  });
  
  // Apply markdown preprocessor plugin
  markdownPreprocessor(eleventyConfig);
  
  // Apply transforms
  wrapTables(eleventyConfig);
  generateToc(eleventyConfig);
  
  return {
    dir: {
      input: 'docs',
      output: '.',
      includes: '../_includes'
    },
    templateFormats: ['md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
