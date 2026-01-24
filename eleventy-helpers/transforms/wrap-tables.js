/**
 * Transform: Wrap tables in scrollable containers
 * 
 * @param {object} eleventyConfig - The Eleventy configuration object
 */
export function wrapTables(eleventyConfig) {
  eleventyConfig.addTransform('wrapTables', function(content, outputPath) {
    if (!outputPath || !outputPath.endsWith('.html')) {
      return content;
    }
    
    return content
      .replace(/<table([^>]*)>/g, '<div class="table-wrapper"><table$1>')
      .replace(/<\/table>/g, '</table></div>');
  });
}
