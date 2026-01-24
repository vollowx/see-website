import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build SSR components
await esbuild.build({
  entryPoints: ['./ssr.js'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: './_middle/ssr/ssr.js',
  // Mark seele components as external to prevent SSR issues with form elements
  // The client-side bundle will handle their rendering
  external: ['lit', 'lit/*', '@lit/*', '@vollowx/seele', '@vollowx/seele/*', '@floating-ui/dom', 'tslib'],
  target: 'node18',
  sourcemap: false,
});

console.log('SSR components built successfully');
