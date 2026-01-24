/**
 * SSR entry point for Lit components
 * 
 * This file imports only custom Lit components that should be server-side rendered.
 * Seele components are loaded client-side only to avoid SSR hydration issues with form elements.
 */

// Import custom Lit components for SSR
import './docs-web/components/demo.ts';
import './docs-web/components/toolbar.ts';

// Export custom components for SSR
export * from './docs-web/components/demo.ts';
export * from './docs-web/components/toolbar.ts';
