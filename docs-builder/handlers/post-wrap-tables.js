/**
 * Post-handler: Wrap tables in a scrollable container
 */
export function wrapTables(context) {
  const { content } = context;
  const transformedContent = content
    .replace(/<table([^>]*)>/g, '<div class="table-wrapper"><table$1>')
    .replace(/<\/table>/g, '</table></div>');
  
  return { ...context, content: transformedContent };
}
