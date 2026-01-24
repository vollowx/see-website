import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function(eleventyConfig) {
  // Pass through docs-externals directory for CSS/JS/components
  eleventyConfig.addPassthroughCopy('docs-externals');
  
  // Customize Eleventy's built-in markdown library (markdown-it)
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
      const sourceMdFile = env?.page?.inputPath ? path.relative(path.join(__dirname, 'docs'), env.page.inputPath) : '';
      
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
  
  
  // Transform: Wrap tables in scrollable containers
  eleventyConfig.addTransform('wrapTables', function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }
    
    return content
      .replace(/<table([^>]*)>/g, '<div class="table-wrapper"><table$1>')
      .replace(/<\/table>/g, '</table></div>');
  });
  
  // Transform: Generate table of contents
  eleventyConfig.addTransform('generateToc', function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }
    
    // Check if TOC is disabled in frontmatter
    const tocEnabled = this.page?.data?.toc !== 'false' && this.page?.data?.toc !== false;
    
    if (!tocEnabled) {
      return content;
    }
    
    // Helper function to escape HTML
    function escapeHtml(text) {
      const htmlEscapes = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return text.replace(/[&<>"']/g, char => htmlEscapes[char]);
    }
    
    // Helper function to generate safe ID from text
    function generateId(text, level, higherIds) {
      const selfId = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      higherIds[level - 1] = selfId;
      return higherIds.slice(0, level).filter(id => id).join('-');
    }
    
    // Extract headings (h2-h6) and generate TOC
    const headings = [];
    const headingRegex = /<h([2-6])([^>]*)>(.*?)<\/h\1>/g;
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = parseInt(match[1]);
      const attributes = match[2];
      const fullHtml = match[3];
      
      // Strip HTML tags from heading text for TOC display
      // Remove all HTML tags completely, then remove any remaining angle brackets
      let text = fullHtml;
      // Remove complete HTML tags in multiple passes to handle nested/malformed tags
      let previousText;
      do {
        previousText = text;
        text = text.replace(/<[^>]*>/g, '');
      } while (text !== previousText);
      // Remove any remaining angle brackets to prevent injection
      text = text.replace(/[<>]/g, '');
      
      const offset = match.index;
      headings.push({ level, text, fullHtml, attributes, offset });
    }
    
    if (headings.length === 0) {
      return content;
    }
    
    // Build TOC HTML and add IDs to headings
    let tocHtml = '<nav id="toc" aria-label="Table of contents"><ol>';
    let currentLevel = 2;
    const levelStack = [2];
    let modifiedContent = content;
    const higherIds = [];
    
    // First pass: Generate IDs for all headings
    const headingIds = [];
    headings.forEach((heading) => {
      const { level, text } = heading;
      const formattedId = generateId(text, level, higherIds);
      headingIds.push(formattedId);
    });
    
    // Second pass: Replace headings with IDs (in reverse order to avoid offset issues)
    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      const { level, fullHtml } = heading;
      const formattedId = headingIds[i];
      
      const originalHeading = `<h${level}${heading.attributes}>${fullHtml}</h${level}>`;
      const newHeading = `<h${level} id="${formattedId}"${heading.attributes}>${fullHtml}</h${level}>`;
      
      const before = modifiedContent.substring(0, heading.offset);
      const after = modifiedContent.substring(heading.offset + originalHeading.length);
      modifiedContent = before + newHeading + after;
    }
    
    // Build TOC HTML (process headings in forward order for proper nesting)
    headings.forEach((heading, index) => {
      const { level, text } = heading;
      const formattedId = headingIds[index];
      
      // Adjust for deeper levels
      if (level > currentLevel) {
        for (let i = currentLevel; i < level; i++) {
          tocHtml += '<ol>';
          levelStack.push(level);
        }
      } else if (level < currentLevel) {
        while (levelStack[levelStack.length - 1] > level) {
          tocHtml += '</ol></li>';
          levelStack.pop();
        }
      } else if (index > 0) {
        tocHtml += '</li>';
      }
      
      tocHtml += `<li><a href="#${formattedId}">${escapeHtml(text)}</a>`;
      currentLevel = level;
    });
    
    // Close remaining open lists
    while (levelStack.length > 1) {
      tocHtml += '</li></ol>';
      levelStack.pop();
    }
    
    tocHtml += '</li></ol></nav>';
    
    // Inject TOC at the beginning of content (after first h1 if exists)
    let contentWithToc = modifiedContent;
    const h1Match = modifiedContent.match(/<h1[^>]*>.*?<\/h1>/);
    
    if (h1Match) {
      const h1End = h1Match.index + h1Match[0].length;
      contentWithToc = modifiedContent.slice(0, h1End) + '\n' + tocHtml + '\n' + modifiedContent.slice(h1End);
    } else {
      contentWithToc = tocHtml + '\n' + modifiedContent;
    }
    
    return contentWithToc;
  });
  
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
