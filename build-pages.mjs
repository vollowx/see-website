import path from 'path';
import { fileURLToPath } from 'url';
import { buildPages } from './docs-builder/index.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define paths
const docsDir = path.join(__dirname, 'docs');
const outputDir = __dirname;
const templatesDir = path.join(__dirname, 'docs-externals', 'templates');

// Build all pages
buildPages(docsDir, outputDir, templatesDir);
