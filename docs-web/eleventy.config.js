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
  const defaultGithubUrl = 'https://github.com/vollowx/seele-docs';
  
  try {
    // Check if we're in a Vercel environment - use Vercel environment variables
    if (process.env.VERCEL_GIT_COMMIT_SHA) {
      const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
      const commitShortSha = commitSha.substring(0, 7);
      
      return {
        sha: commitSha,
        shortSha: commitShortSha,
        githubUrl: defaultGithubUrl,
        commitUrl: `${defaultGithubUrl}/commit/${commitSha}`,
        isUnknown: false
      };
    }
    
    // Otherwise try to get git info from local git repository
    const commitSha = execSync('git rev-parse HEAD', { cwd: projectRoot, encoding: 'utf8' }).trim();
    const commitShortSha = execSync('git rev-parse --short HEAD', { cwd: projectRoot, encoding: 'utf8' }).trim();
    const remoteUrl = execSync('git config --get remote.origin.url', { cwd: projectRoot, encoding: 'utf8' }).trim();
    
    // Parse GitHub URL from remote (handles both HTTPS and SSH formats)
    let githubUrl = defaultGithubUrl;
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
      commitUrl: `${githubUrl}/commit/${commitSha}`,
      isUnknown: false
    };
  } catch (error) {
    console.warn('Failed to get git commit info:', error.message);
    return {
      sha: 'unknown',
      shortSha: 'unknown',
      githubUrl: defaultGithubUrl,
      commitUrl: '#',
      isUnknown: true
    };
  }
}

// Get seele version from package.json
function getSeeleVersion() {
  try {
    const packageJsonPath = path.join(__dirname, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const seeleVersion = packageJson.dependencies['@vollowx/seele'];
    
    // Remove ^ or ~ prefix if present
    const cleanVersion = seeleVersion.replace(/^[\^~]/, '');
    
    return {
      version: cleanVersion,
      npmUrl: `https://www.npmjs.com/package/@vollowx/seele/v/${cleanVersion}`
    };
  } catch (error) {
    console.warn('Failed to get seele version:', error.message);
    return {
      version: 'unknown',
      npmUrl: 'https://www.npmjs.com/package/@vollowx/seele'
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
  
  // Add seele version info as global data
  const seeleInfo = getSeeleVersion();
  eleventyConfig.addGlobalData('seeleVersion', seeleInfo);

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
