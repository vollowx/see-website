import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import litPlugin from '@lit-labs/eleventy-plugin-lit';
import { wrapTables } from './eleventy-helpers/wrap-tables.js';
import { addTocFilter } from './eleventy-helpers/toc.js';
import { minifyHtml } from './eleventy-helpers/minify-html.js';
import { markdownPreprocess } from './eleventy-helpers/markdown-preprocess.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

export default function (eleventyConfig) {
  // Pass through built docs-web directory for JS/components and minified CSS
  eleventyConfig.addPassthroughCopy({
    '_middle/docs-web': 'docs-web',
  });

  // SSR web components
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: ['./_middle/ssr/ssr.js'],
  });

  eleventyConfig.addShortcode('inlineCss', (filePath) => {
    const fullPath = path.resolve(__dirname, filePath);
    return fs.readFileSync(fullPath, 'utf8');
  });

  markdownPreprocess(eleventyConfig);

  wrapTables(eleventyConfig);
  addTocFilter(eleventyConfig);
  minifyHtml(eleventyConfig);

  return {
    dir: {
      input: path.join(projectRoot, 'docs'),
      output: '_site',
      includes: '../docs-web/_includes',
    },
    templateFormats: ['md'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
