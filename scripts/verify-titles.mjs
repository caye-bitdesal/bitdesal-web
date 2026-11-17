import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist', import.meta.url));
const MIN_LENGTH = 45;

function collectHtmlFiles(dir, acc = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) collectHtmlFiles(full, acc);
		else if (entry.endsWith('.html')) acc.push(full);
	}
	return acc;
}

function extractTitle(html) {
	const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
	return m ? m[1].trim() : null;
}

function isNotFoundPage(relPath) {
	return /(^|\/)404(\/index\.html|\.html)$/.test(relPath);
}

function isRedirectStub(title, html) {
	if (/^Redirecting/i.test(title)) return true;
	return html.includes('Redirecting to:') && html.includes('noindex');
}

const byTitle = new Map();
const tooShort = [];

for (const file of collectHtmlFiles(root, [])) {
	const rel = relative(root, file).replace(/\\/g, '/');
	const html = readFileSync(file, 'utf8');
	const title = extractTitle(html);
	const publicPath = `/${rel.replace(/index\.html$/, '').replace(/\.html$/, '')}`;
	if (isNotFoundPage(rel)) continue;
	if (title && isRedirectStub(title, html)) continue;
	if (!title) {
		tooShort.push({ path: publicPath, title: '(missing)', length: 0 });
		continue;
	}
	const list = byTitle.get(title) ?? [];
	list.push(publicPath);
	byTitle.set(title, list);

	if (title.length < MIN_LENGTH) {
		tooShort.push({ path: publicPath, title, length: title.length });
	}
}

const duplicates = [...byTitle.entries()].filter(([, paths]) => paths.length > 1);

const errors = [];
for (const [title, paths] of duplicates) {
	errors.push(`Duplicate title (${paths.length} pages): "${title}"\n    ${paths.join('\n    ')}`);
}
for (const { path, title, length } of tooShort) {
	errors.push(`Title under ${MIN_LENGTH} chars (${length}): ${path}\n    "${title}"`);
}

if (errors.length) {
	console.error(`verify-titles: ${errors.length} problem(s):\n`);
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(`verify-titles: OK (${byTitle.size} unique titles across ${collectHtmlFiles(root, []).length} HTML files)`);