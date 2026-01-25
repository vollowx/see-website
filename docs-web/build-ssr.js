import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

await esbuild
  .build({
    entryPoints: [path.join(__dirname, 'ssr.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: path.join(__dirname, '_middle/ssr/ssr.js'),
    external: [
      'lit',
      'lit/*',
      '@lit/*',
      '@vollowx/seele',
      '@floating-ui/dom',
      'tslib',
    ],
    target: 'node18',
    sourcemap: false,
  })
  .catch(() => process.exit(1));

console.log('SSR entrypoint built successfully');
