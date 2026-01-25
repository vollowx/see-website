import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build SSR components
await esbuild.build({
  entryPoints: ['./ssr.ts'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: './_middle/ssr/ssr.js',
  external: ['lit', 'lit/*', '@lit/*', '@vollowx/seele', '@floating-ui/dom', 'tslib'],
  target: 'node18',
  sourcemap: false,
});

console.log('SSR components built successfully');
