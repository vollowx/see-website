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

// Component list
const components = [
  'button',
  'icon-button',
  'fab',
  'toolbar',
  'menu',
  'checkbox',
  'ripple',
  'switch',
  'text-field',
  'tooltip',
  'select',
];

// Read template
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8');

// Generate index.html
const indexMd = fs.readFileSync(path.join(__dirname, 'index.md'), 'utf-8');
const indexParsed = parseFrontmatter(indexMd);
let indexContent = md.render(indexParsed.content);

// Add all component content to index
for (const comp of components) {
  const mdPath = path.join(__dirname, 'components', `${comp}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const parsed = parseFrontmatter(mdContent);
  indexContent += md.render(parsed.content);
}

const indexHtml = template
  .replace('{{TITLE}}', indexParsed.frontmatter.title || 'SEE')
  .replace('{{CONTENT}}', indexContent)
  .replace('{{CSS_PATH}}', './main.css')
  .replace('{{SCRIPT_PATH}}', './main.ts');

fs.writeFileSync(path.join(__dirname, 'index.html'), indexHtml);

// Generate component pages
for (const comp of components) {
  const dir = path.join(__dirname, 'components', comp);
  fs.mkdirSync(dir, { recursive: true });
  
  const mdPath = path.join(__dirname, 'components', `${comp}.md`);
  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const parsed = parseFrontmatter(mdContent);
  
  const html = template
    .replace('{{TITLE}}', parsed.frontmatter.title || comp)
    .replace('{{CONTENT}}', md.render(parsed.content))
    .replace('{{CSS_PATH}}', '../../main.css')
    .replace('{{SCRIPT_PATH}}', '../../main.ts');
  
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

console.log('✓ Generated HTML pages');
