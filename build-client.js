/**
 * Build client-side JavaScript and CSS with esbuild
 * Based on material-web catalog approach
 */

import esbuild from 'esbuild';
import { glob } from 'glob';

const DEV = process.env.NODE_ENV === 'DEV';
const outdir = DEV ? '_middle/docs-web/build' : '_middle/docs-web/build';

// Entry points for client-side bundles
const entryPoints = await glob('./docs-web/**/*.ts', {
  ignore: ['**/node_modules/**', '**/lit-hydrate-support.ts']
});

// Shared esbuild config for main bundles
const config = {
  bundle: true,
  outdir,
  format: 'esm',
  target: 'es2020',
  treeShaking: true,
  sourcemap: DEV,
  minify: !DEV,
  splitting: true,
  // Don't mark anything as external - bundle everything
  // This way we don't need import maps for lit, tslib, etc.
};

// Build the hydration support separately (must be loaded first, no splitting)
await esbuild.build({
  entryPoints: ['./docs-web/lit-hydrate-support.ts'],
  bundle: true,
  outdir,
  format: 'esm',
  target: 'es2020',
  treeShaking: true,
  minify: !DEV,
  splitting: false, // Don't split - this must be standalone
  sourcemap: DEV,
}).catch(() => process.exit(1));

// Build client-side bundles
await esbuild.build({
  ...config,
  entryPoints,
}).catch(() => process.exit(1));

console.log('Client build completed successfully');
