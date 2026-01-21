import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const md = new MarkdownIt({ html: true });

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
  
  // Generate HTML
  let content = md.render(parsed.content);
  
  // Wrap tables in a scrollable container
  content = content.replace(/<table([^>]*)>/g, '<div class="table-wrapper"><table$1>');
  content = content.replace(/<\/table>/g, '</table></div>');
  
  const html = template
    .replace('{{TITLE}}', parsed.frontmatter.title || path.basename(mdFile, '.md'))
    .replace('{{CONTENT}}', content);
  
  fs.writeFileSync(outputPath, html);
}

console.log('✓ Generated HTML pages');
