import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import litPlugin from '@lit-labs/eleventy-plugin-lit';
import { wrapTables } from './eleventy-helpers/wrap-tables.js';
import { addTocFilter } from './eleventy-helpers/toc.js';
import { minifyHtml } from './eleventy-helpers/minify-html.js';
import { markdownPreprocess } from './eleventy-helpers/markdown-preprocess.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Get current git commit information at build time
function getGitCommitInfo() {
  try {
    const commitSha = execSync('git rev-parse HEAD', { cwd: projectRoot, encoding: 'utf8' }).trim();
    const commitShortSha = execSync('git rev-parse --short HEAD', { cwd: projectRoot, encoding: 'utf8' }).trim();
    const remoteUrl = execSync('git config --get remote.origin.url', { cwd: projectRoot, encoding: 'utf8' }).trim();
    
    // Parse GitHub URL from remote (handles both HTTPS and SSH formats)
    let githubUrl = 'https://github.com/vollowx/seele-docs';
    if (remoteUrl) {
      const match = remoteUrl.match(/github\.com[:/](.+?)(\.git)?$/);
      if (match) {
        githubUrl = `https://github.com/${match[1]}`;
      }
    }
    
    return {
      sha: commitSha,
      shortSha: commitShortSha,
      githubUrl: githubUrl,
      commitUrl: `${githubUrl}/commit/${commitSha}`
    };
  } catch (error) {
    console.warn('Failed to get git commit info:', error.message);
    return {
      sha: 'unknown',
      shortSha: 'unknown',
      githubUrl: 'https://github.com/vollowx/seele-docs',
      commitUrl: '#'
    };
  }
}

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
  
  // Add git commit info as global data
  const gitInfo = getGitCommitInfo();
  eleventyConfig.addGlobalData('gitCommit', gitInfo);

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
