import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { plugin as markdown, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  base: '/',
  css: { transformer: 'lightningcss' },
  build: {
    minify: true,
    cssMinify: 'lightningcss',
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  plugins: [
    markdown({ mode: [Mode.HTML] }),
    createHtmlPlugin({ minify: true }),
  ],
});
