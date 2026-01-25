/**
 * @param {string} content
 * @returns {string}
 */
export function handleDocsUncomment(content) {
  return content.replace(
    /<!--\s*@docs-uncomment\s*\n([\s\S]*?)\n\s*@docs-uncomment-end\s*-->/g,
    (match, uncommentedContent) => uncommentedContent,
  );
}
