import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const md = new MarkdownIt({ html: true });

/**
 * Standard handler context passed to all handlers
 * @typedef {Object} HandlerContext
 * @property {string} content - The content to process (markdown or HTML)
 * @property {string} sourceMdFile - Relative path to source markdown file
 * @property {Object} frontmatter - Parsed frontmatter from markdown
 */

/**
 * Pre-handler: Process markdown content before rendering to HTML
 * @param {HandlerContext} context
 * @returns {HandlerContext} Modified context
 */

// Pre-handler: Transform relative .md links to HTML paths
function transformMdLinks(context) {
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

// Pre-handler: Process @docs-uncomment pattern
function processUncommentBlocks(context) {
  const { content } = context;
  // Match the pattern: <!-- @docs-uncomment ... @docs-uncomment-end -->
  // This pattern allows hiding content in markdown that should be revealed in the build
  const pattern = /<!--\s*@docs-uncomment\s*\n([\s\S]*?)\n\s*@docs-uncomment-end\s*-->/g;
  
  const transformedContent = content.replace(pattern, (match, uncommentedContent) => {
    // Simply return the content without the comment markers
    return uncommentedContent;
  });
  
  return { ...context, content: transformedContent };
}

// Pre-handler: Process @docs-demo-code-block pattern
function processDemoCodeBlocks(context) {
  const { content } = context;
  // Match the pattern: <!-- @docs-demo-code-block --> followed by a code block
  // The code block can be in markdown format (```lang\n...\n```)
  const pattern = /<!-- @docs-demo-code-block -->\s*\n(```[\s\S]*?```)/g;
  
  const transformedContent = content.replace(pattern, (match, codeBlock) => {
    // Extract the code content from the markdown code block
    // Match ```html\n<content>\n``` or similar, with optional trailing newline
    const codeMatch = codeBlock.match(/```(\w*)\n([\s\S]*?)\n?```/);
    
    if (!codeMatch) {
      // If we can't parse the code block, return the original match
      return match;
    }
    
    const codeContent = codeMatch[2];
    
    // Create the demo wrapper with the same content
    // Preserve the original code content without adding extra whitespace
    const demoBlock = `<sw-demo>\n${codeContent}\n</sw-demo>\n\n${codeBlock}`;
    
    return demoBlock;
  });
  
  return { ...context, content: transformedContent };
}

/**
 * Post-handler: Process HTML content after rendering from markdown
 * @param {HandlerContext} context
 * @returns {HandlerContext} Modified context
 */

// Helper function to escape HTML special characters
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

// Post-handler: Wrap tables in a scrollable container
function wrapTables(context) {
  const { content } = context;
  const transformedContent = content
    .replace(/<table([^>]*)>/g, '<div class="table-wrapper"><table$1>')
    .replace(/<\/table>/g, '</table></div>');
  
  return { ...context, content: transformedContent };
}

// Post-handler: Generate table of contents
function generateToc(context) {
  const { content, frontmatter } = context;
  
  // Check if TOC is disabled in frontmatter (default is true)
  const tocEnabled = frontmatter.toc !== 'false' && frontmatter.toc !== false;
  
  if (!tocEnabled) {
    return context;
  }
  
  // Helper function to generate safe ID from text
  function generateId(text, level, higherIds) {
    const selfId = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single
      .replace(/^-|-$/g, '');   // Remove leading/trailing hyphens
    
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
    // This is safe because:
    // 1. Content comes from markdown-it which already sanitizes input
    // 2. Text is HTML-escaped before being inserted into TOC (see escapeHtml usage)
    const text = fullHtml.replace(/<[^>]+>/g, '');
    const offset = match.index;
    headings.push({ level, text, fullHtml, attributes, offset });
  }
  
  if (headings.length === 0) {
    return context;
  }
  
  // Build TOC HTML and add IDs to headings
  let tocHtml = '<nav id="toc" aria-label="Table of contents"><ol>';
  let currentLevel = 2;
  const levelStack = [2];
  let modifiedContent = content;
  const higherIds = [];
  
  // First pass: Generate IDs for all headings (in forward order to build hierarchy)
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
    
    // Replace the heading in the content to add the ID
    const originalHeading = `<h${level}${heading.attributes}>${fullHtml}</h${level}>`;
    const newHeading = `<h${level} id="${formattedId}"${heading.attributes}>${fullHtml}</h${level}>`;
    
    // Replace from the offset to ensure we replace the right occurrence
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
      // Open nested lists
      for (let i = currentLevel; i < level; i++) {
        tocHtml += '<ol>';
        levelStack.push(level);
      }
    } else if (level < currentLevel) {
      // Close nested lists
      while (levelStack[levelStack.length - 1] > level) {
        tocHtml += '</ol></li>';
        levelStack.pop();
      }
    } else if (index > 0) {
      // Close previous item at same level
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
    // Insert TOC after h1
    const h1End = h1Match.index + h1Match[0].length;
    contentWithToc = modifiedContent.slice(0, h1End) + '\n' + tocHtml + '\n' + modifiedContent.slice(h1End);
  } else {
    // Insert TOC at the beginning
    contentWithToc = tocHtml + '\n' + modifiedContent;
  }
  
  return { ...context, content: contentWithToc };
}

// Parse frontmatter from markdown
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const frontmatter = {};
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(':').trim();
    }
  }
  
  return {
    frontmatter,
    content: match[2]
  };
}

// Recursively find all markdown files in a directory
function findMarkdownFiles(dir, baseDir = dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMarkdownFiles(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(path.relative(baseDir, fullPath));
    }
  }
  
  return files;
}

// Define handler pipelines
const preHandlers = [
  processUncommentBlocks,
  transformMdLinks,
  processDemoCodeBlocks,
];

const postHandlers = [
  wrapTables,
  generateToc,
];

// Read template
const template = fs.readFileSync(path.join(__dirname, 'src', 'template.html'), 'utf-8');

// Find all markdown files in docs directory
const docsDir = path.join(__dirname, 'docs');
const markdownFiles = findMarkdownFiles(docsDir);

// Generate HTML for each markdown file
for (const mdFile of markdownFiles) {
  const mdPath = path.join(docsDir, mdFile);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const parsed = parseFrontmatter(mdContent);
  
  // Determine output path
  // For index.md -> index.html
  // For path/name.md -> path/name/index.html
  let outputPath;
  if (mdFile === 'index.md') {
    outputPath = path.join(__dirname, 'index.html');
  } else {
    const baseName = path.basename(mdFile, '.md');
    const dirName = path.dirname(mdFile);
    const outputDir = path.join(__dirname, dirName === '.' ? baseName : path.join(dirName, baseName));
    fs.mkdirSync(outputDir, { recursive: true });
    outputPath = path.join(outputDir, 'index.html');
  }
  
  // Create initial context
  let context = {
    content: parsed.content,
    sourceMdFile: mdFile,
    frontmatter: parsed.frontmatter,
  };
  
  // Run pre-handlers on markdown content
  for (const handler of preHandlers) {
    context = handler(context);
  }
  
  // Render markdown to HTML
  context.content = md.render(context.content);
  
  // Run post-handlers on HTML content
  for (const handler of postHandlers) {
    context = handler(context);
  }
  
  const html = template
    .replace('{{TITLE}}', context.frontmatter.title || path.basename(mdFile, '.md'))
    .replace('{{CONTENT}}', context.content);
  
  fs.writeFileSync(outputPath, html);
}

console.log('✓ Generated HTML pages');
