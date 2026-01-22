/**
 * Post-handler: Generate table of contents
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

export function generateToc(context) {
  const { content, frontmatter } = context;
  
  // TOC is enabled by default unless toc: false is specified in frontmatter
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
    // Content is already sanitized by markdown-it, and will be HTML-escaped before insertion into TOC
    // First remove complete HTML tags, then remove any stray brackets
    let text = fullHtml;
    // Remove complete HTML tags (opening and closing)
    text = text.replace(/<[^>]*>/g, '');
    // Remove any remaining angle brackets to prevent any possible injection
    text = text.replace(/[<>]/g, '');
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
