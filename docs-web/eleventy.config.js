import path from 'path';
import { fileURLToPath } from 'url';
import litPlugin from '@lit-labs/eleventy-plugin-lit';
import { wrapTables } from './eleventy-helpers/transforms/wrap-tables.js';
import { generateToc } from './eleventy-helpers/transforms/generate-toc.js';
import { minifyHtml } from './eleventy-helpers/transforms/minify-html.js';
import { markdownPreprocessor } from './eleventy-helpers/plugins/markdown-preprocessor.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

export default function(eleventyConfig) {
  // Pass through built docs-web directory for JS/components and minified CSS
  eleventyConfig.addPassthroughCopy({
    '_middle/docs-web': 'docs-web'
  });
  
  // Add Lit SSR plugin for server-side rendering
  // Components are rendered on the server; client-side JS will upgrade them
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
      input: path.join(projectRoot, 'docs'),
      output: '_site',
      includes: '../docs-web/_includes'
    },
    templateFormats: ['md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
}
