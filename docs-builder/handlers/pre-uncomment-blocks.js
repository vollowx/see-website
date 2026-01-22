/**
 * Pre-handler: Process @docs-uncomment pattern
 * Allows hiding content in markdown that should be revealed in the build
 */
export function processUncommentBlocks(context) {
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
