/**
 * SSR entry point for Lit components
 * 
 * This file imports all Lit components that should be server-side rendered.
 * With seele v0.8.4, select elements are intentionally empty on SSR and
 * filled with values on the client side.
 */

// Import all seele components for SSR (v0.8.4)
import '@vollowx/seele';

// Import custom Lit components for SSR
import './docs-web/components/demo.ts';
import './docs-web/components/toolbar.ts';

// Export all seele components for SSR
export * from '@vollowx/seele';

// Export custom components for SSR
export * from './docs-web/components/demo.ts';
export * from './docs-web/components/toolbar.ts';
