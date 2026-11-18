import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
	INDEXNOW_API,
	INDEXNOW_HOST,
	INDEXNOW_KEY,
	INDEXNOW_KEY_LOCATION,
	INDEXNOW_MAX_URLS_PER_REQUEST,
} from './indexnow-config.mjs';

const dist = fileURLToPath(new URL('../dist', import.meta.url));

function extractLocs(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

function collectSitemapUrls() {
	const indexPath = join(dist, 'sitemap-index.xml');
	if (!existsSync(indexPath)) {
		console.error('submit-indexnow: missing dist/sitemap-index.xml — run npm run build first.');
		process.exit(1);
	}

	const childPaths = extractLocs(readFileSync(indexPath, 'utf8')).map((url) => {
		const pathname = new URL(url).pathname.replace(/^\//, '');
		return join(dist, pathname);
	});

	const urls = new Set();
	for (const file of childPaths) {
		if (!existsSync(file)) {
			console.error(`submit-indexnow: missing sitemap chunk ${file}`);
			process.exit(1);
		}
		for (const loc of extractLocs(readFileSync(file, 'utf8'))) {
			urls.add(loc);
		}
	}

	return [...urls].sort();
}

function chunk(array, size) {
	const out = [];
	for (let i = 0; i < array.length; i += size) {
		out.push(array.slice(i, i + size));
	}
	return out;
}

async function submitBatch(urlList) {
	const body = JSON.stringify({
		host: INDEXNOW_HOST,
		key: INDEXNOW_KEY,
		keyLocation: INDEXNOW_KEY_LOCATION,
		urlList,
	});

	const response = await fetch(INDEXNOW_API, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
		body,
	});

	return { status: response.status, statusText: response.statusText };
}

const keyFile = join(dist, `${INDEXNOW_KEY}.txt`);
if (!existsSync(keyFile)) {
	console.error(`submit-indexnow: missing dist/${INDEXNOW_KEY}.txt — key must deploy with the site.`);
	process.exit(1);
}
const keyOnDisk = readFileSync(keyFile, 'utf8').trim();
if (keyOnDisk !== INDEXNOW_KEY) {
	console.error('submit-indexnow: dist key file contents do not match indexnow-config.mjs');
	process.exit(1);
}

const urlList = collectSitemapUrls();
if (!urlList.length) {
	console.error('submit-indexnow: sitemap contained no URLs.');
	process.exit(1);
}

const batches = chunk(urlList, INDEXNOW_MAX_URLS_PER_REQUEST);
console.log(`submit-indexnow: notifying IndexNow (${urlList.length} URL(s), ${batches.length} batch(es))…`);

let failed = false;
for (let i = 0; i < batches.length; i++) {
	const batch = batches[i];
	const { status, statusText } = await submitBatch(batch);
	const ok = status === 200 || status === 202;
	const label = `batch ${i + 1}/${batches.length} (${batch.length} URL(s))`;
	if (ok) {
		console.log(`submit-indexnow: ${label} → HTTP ${status} ${statusText}`.trim());
	} else {
		failed = true;
		console.error(`submit-indexnow: ${label} → HTTP ${status} ${statusText}`.trim());
	}
}

if (failed) {
	console.error('submit-indexnow: one or more batches failed (deploy already finished; check key file is live).');
	process.exit(1);
}

console.log('submit-indexnow: done');