import path from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';
import fs from 'fs';

// Import handlers
import { processUncommentBlocks } from './docs-builder/handlers/pre-uncomment-blocks.js';
import { transformMdLinks } from './docs-builder/handlers/pre-transform-links.js';
import { processDemoCodeBlocks } from './docs-builder/handlers/pre-demo-code-blocks.js';
import { wrapTables } from './docs-builder/handlers/post-wrap-tables.js';
import { generateToc } from './docs-builder/handlers/post-generate-toc.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function(eleventyConfig) {
  // Pass through docs-externals directory
  eleventyConfig.addPassthroughCopy('docs-externals');
  
  // Set up custom markdown processing with our handlers
  eleventyConfig.setLibrary('md', {
    render: (content) => {
      // This is a placeholder - actual processing happens in the extension
      return content;
    }
  });
  
  // Store frontmatter data for use in transform
  const frontmatterData = new Map();
  
  // Override the markdown template engine to process with our handlers
  eleventyConfig.addExtension('md', {
    compile: function(inputContent, inputPath) {
      return async (data) => {
        // Store the frontmatter for this file
        frontmatterData.set(inputPath, data);
        
        // Get relative path for the handlers
        const sourceMdFile = path.relative(__dirname, inputPath);
        
        // Create initial context with raw markdown
        let context = {
          content: inputContent,
          sourceMdFile: sourceMdFile,
          frontmatter: data
        };
        
        // Run pre-handlers on markdown content
        context = processUncommentBlocks(context);
        context = transformMdLinks(context);
        context = processDemoCodeBlocks(context);
        
        // Render markdown to HTML
        const md = new MarkdownIt({ html: true });
        context.content = md.render(context.content);
        
        // Run post-handlers on HTML content
        context = wrapTables(context);
        context = generateToc(context);
        
        return context.content;
      };
    },
    getData: async function(inputPath) {
      // This allows us to pass data through to the template
      return frontmatterData.get(inputPath) || {};
    }
  });
  
  // Transform HTML output to apply template
  eleventyConfig.addTransform('applyTemplate', function(content, outputPath) {
    // Only process HTML files from markdown
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }
    
    if (!this.inputPath || !this.inputPath.endsWith('.md')) {
      return content;
    }
    
    // Read the template
    const data = frontmatterData.get(this.inputPath) || {};
    const templateName = data.template || 'default';
    const templatePath = path.join(__dirname, 'docs-externals', 'templates', `${templateName}.html`);
    
    let template;
    if (fs.existsSync(templatePath)) {
      template = fs.readFileSync(templatePath, 'utf-8');
    } else {
      template = fs.readFileSync(
        path.join(__dirname, 'docs-externals', 'templates', 'default.html'),
        'utf-8'
      );
    }
    
    // Get title from frontmatter or default to filename
    const title = data.title || path.basename(this.inputPath, '.md');
    
    // Replace placeholders
    const html = template
      .replace('{{TITLE}}', title)
      .replace('{{CONTENT}}', content);
    
    return html;
  });
  
  return {
    dir: {
      input: 'docs',
      output: '.',
      includes: '../docs-externals/templates'
    },
    templateFormats: ['md'],
    markdownTemplateEngine: false,
    htmlTemplateEngine: false,
    dataTemplateEngine: false
  };
}
