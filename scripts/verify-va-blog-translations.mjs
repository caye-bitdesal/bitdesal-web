import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter, splitMarkdownFile } from './blog-frontmatter.mjs';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const BLOG_ES = join(ROOT, 'src/content/blog');
const BLOG_VA = join(ROOT, 'src/content/blog/va');

function loadFm(path) {
	const parts = splitMarkdownFile(readFileSync(path, 'utf8'));
	if (!parts) throw new Error('no frontmatter');
	return parseFrontmatter(parts.frontText);
}

const esPosts = readdirSync(BLOG_ES).filter((f) => f.endsWith('.md'));
const errors = [];

for (const file of esPosts) {
	const vaPath = join(BLOG_VA, file);
	try {
		readFileSync(vaPath);
	} catch {
		errors.push(`va/${file}: missing Valencian translation`);
		continue;
	}
	const es = loadFm(join(BLOG_ES, file));
	const va = loadFm(vaPath);

	if (es.subtitle && va.subtitle && va.subtitle === es.subtitle) {
		errors.push(`va/${file}: subtitle is still identical to Spanish`);
	}
	if (es.titleHighlight && va.titleHighlight && va.titleHighlight === es.titleHighlight) {
		errors.push(`va/${file}: titleHighlight is still identical to Spanish`);
	}
	if (es.faq?.length && va.faq?.length) {
		const same =
			JSON.stringify(es.faq.map((x) => ({ q: x.q, a: x.a }))) ===
			JSON.stringify(va.faq.map((x) => ({ q: x.q, a: x.a })));
		if (same) errors.push(`va/${file}: faq is still identical to Spanish`);
	}
	if (va.titleHighlight && va.title && !va.title.includes(va.titleHighlight)) {
		errors.push(
			`va/${file}: titleHighlight must appear literally inside title (got highlight=${JSON.stringify(va.titleHighlight)})`,
		);
	}
}

if (errors.length) {
	console.error('verify-va-blog-translations: failed\n');
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(`verify-va-blog-translations: OK (${esPosts.length} post(s))`);