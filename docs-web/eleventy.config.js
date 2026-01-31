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

  // Add global data for languages
  eleventyConfig.addGlobalData('languages', {
    'en': { name: 'English', nativeName: 'English' },
    'zh-Hans': { name: 'Simplified Chinese', nativeName: '简体中文' },
    'zh-Hant': { name: 'Traditional Chinese', nativeName: '繁體中文' }
  });

  eleventyConfig.addGlobalData('siteUrl', 'https://vollowx.github.io/seele-docs');
  eleventyConfig.addGlobalData('basePath', '/seele-docs');

  // Add stripLang filter to remove language prefix from URLs
  eleventyConfig.addFilter('stripLang', function(url) {
    // Get language codes from the global languages object
    const languageCodes = Object.keys(this.ctx.languages);
    const langPattern = languageCodes.join('|');
    // Remove language prefixes from URL
    return url
      .replace(new RegExp(`^/(${langPattern})/`), '/')
      .replace(new RegExp(`^/(${langPattern})$`), '/');
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
