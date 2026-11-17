import { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist', import.meta.url));

const indexPath = join(dist, 'sitemap-index.xml');
if (!existsSync(indexPath)) {
	console.error('finish-sitemap: missing dist/sitemap-index.xml — run astro build first.');
	process.exit(1);
}

copyFileSync(indexPath, join(dist, 'sitemap.xml'));

/** Readable XML (one url/line) — easier to diff and debug in Search Console. */
function formatSitemapXml(xml) {
	return xml.replace(/></g, '>\n<').trim() + '\n';
}

for (const name of readdirSync(dist)) {
	if (!/^sitemap(-\d+)?\.xml$/.test(name)) continue;
	const file = join(dist, name);
	writeFileSync(file, formatSitemapXml(readFileSync(file, 'utf8')));
}

console.log('finish-sitemap: wrote sitemap.xml and formatted sitemap chunk(s)');