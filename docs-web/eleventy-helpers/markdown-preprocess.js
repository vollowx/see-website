import path from 'path';
import { fileURLToPath } from 'url';
import { handleDocsUncomment } from './pre-docs-uncomment.js';
import { handleDocsDemoCodeBlock } from './pre-docs-demo-code-block.js';
import { convertLinks } from './pre-convert-links.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');
const docsRoot = path.join(projectRoot, 'docs');

/**
 * @param {object} eleventyConfig
 */
export function markdownPreprocess(eleventyConfig) {
  eleventyConfig.amendLibrary('md', (md) => {
    const render = md.render.bind(md);

    md.render = function (content, env) {
      const stash = new Map();

      content = handleDocsUncomment(content);
      content = handleDocsDemoCodeBlock(content, stash);
      content = convertLinks(content, env, docsRoot);

      let html = render(content, env);

      // Restore stashed content
      stash.forEach((value, key) => {
        // Handle case where markdown parser wrapped the token in <p>
        html = html.replace(
          new RegExp(`<p.*?>\\s*${key}\\s*</p>`),
          () => value,
        );
        // Handle unwrapped case
        html = html.replace(key, () => value);
      });

      return html;
    };
  });
}
