import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Get the project root (eleventy-helpers/plugins/ -> eleventy-helpers/ -> docs-web/ -> seele-docs/)
const projectRoot = path.resolve(__dirname, '..', '..', '..');
const docsRoot = path.join(projectRoot, 'docs');

/**
 * Plugin: Markdown preprocessor for custom transformations
 * 
 * @param {object} eleventyConfig - The Eleventy configuration object
 */
export function markdownPreprocessor(eleventyConfig) {
  eleventyConfig.amendLibrary('md', md => {
    // Store original render method
    const originalRender = md.render.bind(md);
    
    // Override render to apply pre-processing
    md.render = function(content, env) {
      // Pre-processing: Uncomment blocks
      content = content.replace(
        /<!--\s*@docs-uncomment\s*\n([\s\S]*?)\n\s*@docs-uncomment-end\s*-->/g,
        (match, uncommentedContent) => uncommentedContent
      );
      
      // Pre-processing: Process demo code blocks
      content = content.replace(
        /<!-- @docs-demo-code-block -->\s*\n(```[\s\S]*?```)/g,
        (match, codeBlock) => {
          const codeMatch = codeBlock.match(/```(\w*)\n([\s\S]*?)\n?```/);
          if (!codeMatch) return match;
          
          const codeContent = codeMatch[2];
          return `<sw-demo>\n${codeContent}\n</sw-demo>\n\n${codeBlock}`;
        }
      );
      
      // Pre-processing: Transform .md links to HTML paths
      // Get source file from env if available
      const sourceMdFile = env?.page?.inputPath ? path.relative(docsRoot, env.page.inputPath) : '';
      
      content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
        // Skip external links (http, https, mailto, etc.)
        if (url.match(/^(https?:|mailto:|#)/)) {
          return match;
        }
        
        // Transform .md links to HTML paths
        if (url.endsWith('.md')) {
          let htmlPath = url.replace(/\.md$/, '');
          
          // If it's a relative path, resolve it relative to the source file's directory
          if (!htmlPath.startsWith('/')) {
            const sourceDir = path.dirname(sourceMdFile).replace(/\\/g, '/');
            const normalizedHtmlPath = htmlPath.replace(/\\/g, '/');
            const resolvedPath = path.posix.normalize(path.posix.join(sourceDir, normalizedHtmlPath));
            
            const baseName = path.posix.basename(resolvedPath);
            if (baseName === 'index' || resolvedPath === '.' || resolvedPath === '') {
              htmlPath = '/';
            } else {
              // Remove 'docs/' prefix if present and add trailing slash
              htmlPath = '/' + resolvedPath.replace(/^docs\//, '') + '/';
            }
          } else {
            htmlPath = htmlPath + '/';
          }
          
          return `[${text}](${htmlPath})`;
        }
        
        return match;
      });
      
      return originalRender(content, env);
    };
  });
}
