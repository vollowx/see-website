/**
 * @param {object} eleventyConfig
 */
export function minifyHtml(eleventyConfig) {
  const isDev = process.env.NODE_ENV === 'DEV';

  eleventyConfig.addTransform('htmlMinify', async function(content, outputPath) {
    if (isDev || !outputPath || !outputPath.endsWith('.html')) {
      return content;
    }

    // Dynamically import html-minifier
    const { minify } = await import('html-minifier');

    const minified = minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      // Don't remove quotes - breaks template attributes
      removeAttributeQuotes: false,
      // Don't minify CSS/JS - esbuild already does this
      minifyCSS: false,
      minifyJS: false,
    });

    return minified;
  });
}
