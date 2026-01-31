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
  eleventyConfig.addPassthroughCopy('vercel.json');
  eleventyConfig.addPassthroughCopy({
    '_middle/built': 'built',
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
  eleventyConfig.addGlobalData('siteUrl', 'https://seele.v9.nz');
  eleventyConfig.addGlobalData('languages', {
    'en-US': { name: 'English', nativeName: 'English' },
    'zh-CN': { name: 'Simplified Chinese', nativeName: '中文（简体）' }
  });

  // Add stripLang filter to remove language prefix from URLs
  eleventyConfig.addFilter('stripLang', function(url) {
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
