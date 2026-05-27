import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const manifestPath = '.next/server/middleware-manifest.json';

if (!existsSync(manifestPath)) {
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(
    manifestPath,
    JSON.stringify({ version: 3, middleware: {}, functions: {}, sortedMiddleware: [] }, null, 2),
    'utf8'
  );
  console.log('Created missing .next/server/middleware-manifest.json');
} else {
  console.log('middleware-manifest.json already exists');
}
