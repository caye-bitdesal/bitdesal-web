import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { splitMarkdownFile } from './blog-frontmatter.mjs';

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

const errors = [];

for (const file of walkMd(BLOG_ROOT)) {
	const raw = readFileSync(file, 'utf8');
	const parts = splitMarkdownFile(raw);
	const rel = relative(ROOT, file);
	if (!parts) {
		errors.push(`${rel}: missing YAML frontmatter delimiters`);
		continue;
	}
	try {
		yaml.load(parts.frontText);
	} catch (e) {
		const lineHint = e.mark ? ` (line ${e.mark.line + 1}, col ${e.mark.column + 1})` : '';
		errors.push(`${rel}: invalid frontmatter${lineHint}: ${e.message}`);
	}
}

if (errors.length) {
	console.error('verify-blog-frontmatter: failed\n');
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(`verify-blog-frontmatter: OK (${walkMd(BLOG_ROOT).length} markdown file(s))`);