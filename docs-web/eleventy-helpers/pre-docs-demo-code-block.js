/**
 * @param {string} content
 * @param {Map<string, string>} stash
 * @returns {string}
 */
export function handleDocsDemoCodeBlock(content, stash) {
  return content.replace(
    /(^[ \t]*)<!--\s*@docs-demo-code-block\s*-->\s+(```[\s\S]*?```)/gm,
    (match, indent, codeBlock) => {
      const codeMatch = codeBlock.match(/```(\w*)\r?\n([\s\S]*?)\r?\n?```/);
      if (!codeMatch) return match;

      let codeContent = codeMatch[2];

      if (indent) {
        codeContent = codeContent
          .split('\n')
          .map((line) =>
            line.startsWith(indent) ? line.substring(indent.length) : line,
          )
          .join('\n');
      }

      const id = `SW_DEMO_PLACEHOLDER_${Math.random().toString(36).substr(2, 9)}`;
      stash.set(id, `<sw-demo>\n${codeContent}\n</sw-demo>`);

      return `\n\n${indent}${id}\n\n${indent}${codeBlock}`;
    },
  );
}
