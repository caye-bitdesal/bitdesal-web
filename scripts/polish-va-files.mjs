/**
 * Re-apply polishValencian to generated VA content without calling Apertium.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { polishValencian } from './generate-va-locale.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function polishFile(path) {
	writeFileSync(path, polishValencian(readFileSync(path, 'utf8')));
}

const files = [
	join(ROOT, 'src/i18n/generated/locale-va.ts'),
	join(ROOT, 'src/i18n/generated/seo-va.ts'),
	join(ROOT, 'src/data/generated/legal-va.ts'),
];
for (const f of files) polishFile(f);

const blogDir = join(ROOT, 'src/content/blog/va');
for (const name of readdirSync(blogDir)) {
	if (name.endsWith('.md')) polishFile(join(blogDir, name));
}

console.log('polish-va-files: done');