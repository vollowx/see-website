/**
 * Pre-handler: Process @docs-demo-code-block pattern
 * Creates demo wrappers for code blocks marked with @docs-demo-code-block
 */
export function processDemoCodeBlocks(context) {
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
