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

// Read template
const template = fs.readFileSync(path.join(__dirname, 'src', 'template.html'), 'utf-8');

// Generate index.html
const indexMd = fs.readFileSync(path.join(__dirname, 'docs', 'index.md'), 'utf-8');
const indexParsed = parseFrontmatter(indexMd);
let indexContent = md.render(indexParsed.content);

const indexHtml = template
  .replace('{{TITLE}}', indexParsed.frontmatter.title || 'SEE')
  .replace('{{CONTENT}}', indexContent);

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);

// Generate component pages by iterating through files in docs/components
const componentsDir = path.join(__dirname, 'docs', 'components');
const componentFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.md'));

for (const file of componentFiles) {
  const comp = path.basename(file, '.md');
  const dir = path.join(__dirname, 'components', comp);
  fs.mkdirSync(dir, { recursive: true });
  
  const mdPath = path.join(componentsDir, file);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const parsed = parseFrontmatter(mdContent);
  
  const html = template
    .replace('{{TITLE}}', parsed.frontmatter.title || comp)
    .replace('{{CONTENT}}', md.render(parsed.content));
  
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

console.log('✓ Generated HTML pages');
