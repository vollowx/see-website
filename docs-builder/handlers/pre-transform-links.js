import path from 'path';

/**
 * Pre-handler: Transform relative .md links to HTML paths
 */
export function transformMdLinks(context) {
  const { content, sourceMdFile } = context;
  // Match markdown links: [text](path)
  const transformedContent = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
    // Skip external links (http, https, mailto, etc.)
    if (url.match(/^(https?:|mailto:|#)/)) {
      return match;
    }
    
    // Transform .md links to HTML paths
    if (url.endsWith('.md')) {
      // Remove .md extension
      let htmlPath = url.replace(/\.md$/, '');
      
      // If it's a relative path, resolve it relative to the source file's directory
      if (!htmlPath.startsWith('/')) {
        // Normalize to forward slashes for consistent handling
        const sourceDir = path.dirname(sourceMdFile).replace(/\\/g, '/');
        const normalizedHtmlPath = htmlPath.replace(/\\/g, '/');
        const resolvedPath = path.posix.normalize(path.posix.join(sourceDir, normalizedHtmlPath));
        
        // Convert to absolute path for the website
        // docs/base/components/button -> /base/components/button/
        // docs/index -> /
        const baseName = path.posix.basename(resolvedPath);
        if (baseName === 'index' || resolvedPath === '.' || resolvedPath === '') {
          htmlPath = '/';
        } else {
          // Remove 'docs/' prefix if present and add trailing slash
          htmlPath = '/' + resolvedPath.replace(/^docs\//, '') + '/';
        }
      } else {
        // Already absolute, just add trailing slash
        htmlPath = htmlPath + '/';
      }
      
      return `[${text}](${htmlPath})`;
    }
    
    return match;
  });
  
  return { ...context, content: transformedContent };
}
