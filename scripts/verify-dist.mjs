import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist', import.meta.url));

function pathToFile(urlPath) {
	const clean = urlPath.replace(/\/$/, '') || '/';
	if (clean === '/') return join(root, 'index.html');
	return join(root, clean.replace(/^\//, ''), 'index.html');
}

function collectHtmlFiles(dir, acc = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) collectHtmlFiles(full, acc);
		else if (entry.endsWith('.html')) acc.push(full);
	}
	return acc;
}

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const ASSET_EXT = /\.(svg|ico|css|js|woff2|png|jpg|jpeg|webp|avif|xml|txt)$/i;

function extractInternalHrefs(html) {
	const hrefs = new Set();
	const re = /href="(\/(?!\/)[^"#?]*)"/g;
	let match;
	while ((match = re.exec(html))) {
		let href = match[1];
		if (href.startsWith('/_astro/') || href.startsWith('/fonts/')) continue;
		if (ASSET_EXT.test(href)) continue;
		if (!href.endsWith('/')) href += '/';
		hrefs.add(href);
	}
	return hrefs;
}

const errors = [];

const REDIRECT_PATHS = new Set([
	'/about/',
	'/en/nosotros/',
	'/fi/about/',
	'/contact/',
	'/services/',
	'/methodology/',
	'/prices/',
	'/precios/',
	'/pricing/',
	'/projects/',
	'/post-1/',
	'/blog-2/',
	'/blog/precio-cerrado-automatizacion-pyme/',
	'/automatizacion-pymes/',
	'/en/automatizacion-pymes/',
	'/fi/automatizacion-pymes/',
]);

const sitemapIndex = join(root, 'sitemap-index.xml');
if (!existsSync(sitemapIndex)) {
	console.error('Missing dist/sitemap-index.xml — run npm run build first.');
	process.exit(1);
}

const indexXml = readFileSync(sitemapIndex, 'utf8');
const sitemapUrls = extractLocs(indexXml);

for (const mapUrl of sitemapUrls) {
	const mapPath = mapUrl.replace(/^https?:\/\/[^/]+/, '');
	const mapFile = join(root, mapPath.replace(/^\//, ''));
	if (!existsSync(mapFile)) {
		errors.push(`Sitemap file missing on disk: ${mapPath}`);
		continue;
	}
	const pageUrls = extractLocs(readFileSync(mapFile, 'utf8'));
	for (const pageUrl of pageUrls) {
		const pathname = new URL(pageUrl).pathname;
		const file = pathToFile(pathname);
		if (!existsSync(file)) {
			errors.push(`Sitemap URL not built as HTML: ${pathname} (expected ${file})`);
		}
	}
}

const htmlFiles = collectHtmlFiles(root, []);
for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	for (const href of extractInternalHrefs(html)) {
		if (REDIRECT_PATHS.has(href) || /\/404\/$/.test(href)) continue;
		const target = pathToFile(href);
		if (!existsSync(target)) {
			errors.push(`Broken internal link ${href} in ${file.replace(root, '')}`);
		}
	}
}

if (errors.length) {
	console.error(`verify-dist: ${errors.length} problem(s):\n`);
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(`verify-dist: OK (${sitemapUrls.length} sitemap(s), ${htmlFiles.length} HTML file(s))`);
