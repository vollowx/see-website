/**
 * Build client-side JavaScript and CSS with esbuild
 * Based on material-web catalog approach
 */

import esbuild from 'esbuild';
import { glob } from 'glob';

const DEV = process.env.NODE_ENV === 'DEV';
const outdir = DEV ? 'docs-externals/build' : 'docs-externals/build';

// Entry points for client-side bundles
const entryPoints = await glob('./docs-externals/**/*.ts', {
  ignore: ['**/node_modules/**']
});

// Shared esbuild config
const config = {
  bundle: true,
  outdir,
  format: 'esm',
  target: 'es2020',
  treeShaking: true,
  sourcemap: DEV,
  minify: !DEV,
  splitting: true,
  external: ['@vollowx/seele'],
};

// Build client-side bundles
await esbuild.build({
  ...config,
  entryPoints,
}).catch(() => process.exit(1));

console.log('Client build completed successfully');
