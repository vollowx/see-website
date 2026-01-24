/**
 * SSR entry point for Lit components
 * 
 * This file imports all custom Lit components that should be server-side rendered.
 * The @lit-labs/eleventy-plugin-lit will use this to render components on the server.
 */

// Import custom Lit components for SSR
import './docs-externals/components/demo.ts';
import './docs-externals/components/toolbar.ts';

// Export all components for SSR
export * from './docs-externals/components/demo.ts';
export * from './docs-externals/components/toolbar.ts';
