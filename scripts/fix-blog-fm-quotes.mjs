/**
 * Converts single-quoted YAML scalars that contain an apostrophe to JSON double-quoted form.
 * Safe to run on all markdown under src/content/blog/
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeRiskySingleQuotedLines, splitMarkdownFile } from './blog-frontmatter.mjs';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const BLOG_ROOT = join(ROOT, 'src/content/blog');

function walkMd(dir, acc = []) {
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walkMd(full, acc);
		else if (name.endsWith('.md')) acc.push(full);
	}
	return acc;
}

let changed = 0;
for (const file of walkMd(BLOG_ROOT)) {
	const raw = readFileSync(file, 'utf8');
	const parts = splitMarkdownFile(raw);
	if (!parts) continue;
	const fixed = escapeRiskySingleQuotedLines(parts.frontText);
	if (fixed === parts.frontText) continue;
	const out = `---\n${fixed}\n---\n\n${parts.body}`;
	writeFileSync(file, out);
	changed++;
	console.log('fix-blog-fm-quotes:', relative(ROOT, file));
}

console.log(`fix-blog-fm-quotes: ${changed} file(s) updated`);