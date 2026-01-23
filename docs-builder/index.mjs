import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

// Import handlers
import { processUncommentBlocks } from './handlers/pre-uncomment-blocks.js';
import { transformMdLinks } from './handlers/pre-transform-links.js';
import { processDemoCodeBlocks } from './handlers/pre-demo-code-blocks.js';
import { wrapTables } from './handlers/post-wrap-tables.js';
import { generateToc } from './handlers/post-generate-toc.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const md = new MarkdownIt({ html: true });

/**
 * Standard handler context passed to all handlers
 * @typedef {Object} HandlerContext
 * @property {string} content - The content to process (markdown or HTML)
 * @property {string} sourceMdFile - Relative path to source markdown file
 * @property {Object} frontmatter - Parsed frontmatter from markdown
 */

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

// Parse frontmatter from markdown using gray-matter
function parseFrontmatter(content) {
  const { data, content: markdownContent } = matter(content);
  return {
    frontmatter: data,
    content: markdownContent
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

/**
 * Get the template path, falling back to default if specified template doesn't exist
 */
function getTemplatePath(templatesDir, templateName) {
  const templatePath = path.join(templatesDir, `${templateName}.html`);
  const defaultTemplatePath = path.join(templatesDir, 'default.html');
  
  if (fs.existsSync(templatePath)) {
    return templatePath;
  }
  
  if (templateName !== 'default') {
    console.error(`Warning: Template '${templateName}' not found at ${templatePath}, using default template at ${defaultTemplatePath}`);
  }
  
  if (!fs.existsSync(defaultTemplatePath)) {
    throw new Error(`Default template not found at ${defaultTemplatePath}`);
  }
  
  return defaultTemplatePath;
}

/**
 * Build HTML pages from markdown files
 * @param {string} docsDir - Directory containing markdown files
 * @param {string} outputDir - Base output directory for HTML files
 * @param {string} templatesDir - Directory containing template files
 */
export function buildPages(docsDir, outputDir, templatesDir) {
  // Find all markdown files in docs directory
  const markdownFiles = findMarkdownFiles(docsDir);
  
  // Generate HTML for each markdown file
  for (const mdFile of markdownFiles) {
    const mdPath = path.join(docsDir, mdFile);
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    const parsed = parseFrontmatter(mdContent);
    
    // Determine which template to use (from frontmatter or default)
    const templateName = parsed.frontmatter.template || 'default';
    const templatePath = getTemplatePath(templatesDir, templateName);
    
    // Read template
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Determine output path
    // For index.md -> index.html
    // For path/name.md -> path/name/index.html
    let outputPath;
    if (mdFile === 'index.md') {
      outputPath = path.join(outputDir, 'index.html');
    } else {
      const baseName = path.basename(mdFile, '.md');
      const dirName = path.dirname(mdFile);
      const outputSubDir = path.join(outputDir, dirName === '.' ? baseName : path.join(dirName, baseName));
      fs.mkdirSync(outputSubDir, { recursive: true });
      outputPath = path.join(outputSubDir, 'index.html');
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
}
