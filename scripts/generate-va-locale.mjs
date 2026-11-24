/**
 * Generates Valencian (va) locale files via Apertium spa|cat_valencia
 * (same engine family as Softvalencià / Softcatalà neural pairs).
 *
 * Usage: npx tsx scripts/generate-va-locale.mjs [--only=locale|seo|legal|blog]
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_PATH = join(__dirname, '.va-translation-cache.json');

const LANGPAIR = 'spa|cat_valencia';
const APERTIUM_URL = 'https://apertium.org/apy/translate';

/** Terms left untranslated (order: longest first). */
const PROTECTED = [
	'Jetpack Compose',
	'GitHub Actions',
	'Kotlin Multiplatform',
	'Spec Driven Development',
	'LinkedIn',
	'Medium',
	'Firebase',
	'Formspree',
	'Cloudflare Turnstile',
	'Google Play',
	'Jetpack',
	'Kotlin',
	'Android',
	'Bitdesal',
	'Kivra',
	'Yössä',
	'Yossa',
	'Cursor',
	'OpenAI',
	'Gemini',
	'Claude',
	'Figma',
	'GitHub',
	'Ktor',
	'SQLite',
	'Gradle',
	'JUnit',
	'Espresso',
	'MVVM',
	'MVI',
	'SOLID',
	'RGPD',
	'Tabala',
	'Elche',
	'Elx',
	'Alicante',
	'Astro',
	'Compose',
	'OKR',
	'ROI',
	'B2',
	'B1',
];

let cache = {};
if (existsSync(CACHE_PATH)) {
	try {
		cache = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));
	} catch {
		cache = {};
	}
}

function saveCache() {
	writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 0));
}

function protect(text) {
	let out = text;
	const tokens = [];
	const sorted = [...PROTECTED].sort((a, b) => b.length - a.length);
	for (const term of sorted) {
		const re = new RegExp(escapeRe(term), 'g');
		out = out.replace(re, () => {
			const id = tokens.length;
			tokens.push(term);
			return `\uE000${id}\uE001`;
		});
	}
	return { out, tokens };
}

function unprotect(text, tokens) {
	return text.replace(/\uE000(\d+)\uE001/g, (_, i) => tokens[Number(i)] ?? '');
}

/** Apertium marks unknown words with * and stray chars with #. */
function cleanApertium(text) {
	return text
		.replace(/#([+\wÀ-ÿ])/gu, '$1')
		.replace(/\*([A-Za-zÀ-ÿ])/gu, '$1');
}

function escapeRe(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function translateOne(text) {
	if (!text || !text.trim()) return text;
	if (/^https?:\/\//.test(text)) return text;
	if (/^[\w.+-]+@[\w.-]+\.\w+$/.test(text)) return text;
	if (cache[text]) return cache[text];

	const { out, tokens } = protect(text);
	const url = `${APERTIUM_URL}?langpair=${encodeURIComponent(LANGPAIR)}&q=${encodeURIComponent(out)}`;
	let attempt = 0;
	while (attempt < 4) {
		attempt++;
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			const translated = cleanApertium(unprotect(data.responseData?.translatedText ?? text, tokens));
			cache[text] = translated;
			if (Object.keys(cache).length % 40 === 0) saveCache();
			return translated;
		} catch (e) {
			await sleep(500 * attempt);
			if (attempt === 4) {
				console.error('Failed:', text.slice(0, 60), e.message);
				cache[text] = text;
				return text;
			}
		}
	}
	return text;
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function mapPool(items, fn, concurrency = 6) {
	const results = new Array(items.length);
	let i = 0;
	async function worker() {
		while (i < items.length) {
			const idx = i++;
			results[idx] = await fn(items[idx], idx);
		}
	}
	await Promise.all(Array.from({ length: concurrency }, worker));
	return results;
}

async function deepTranslate(value) {
	if (typeof value === 'string') return translateOne(value);
	if (Array.isArray(value)) {
		return mapPool(value, (item) => deepTranslate(item));
	}
	if (value && typeof value === 'object') {
		const keys = Object.keys(value);
		const entries = await mapPool(keys, async (key) => [key, await deepTranslate(value[key])]);
		return Object.fromEntries(entries);
	}
	return value;
}

function serializeTs(obj, exportName) {
	return `/** Auto-generated Valencian locale (Apertium ${LANGPAIR}). Do not edit by hand; run scripts/generate-va-locale.mjs */\nexport const ${exportName} = ${JSON.stringify(obj, null, 2)} as const;\n`;
}

async function main() {
	const only = process.argv.find((a) => a.startsWith('--only='))?.split('=')[1] ?? 'all';
	const { translations } = await import(join(ROOT, 'src/i18n/translations.ts'));
	const { getLegalNotice, getPrivacyPolicy } = await import(join(ROOT, 'src/data/legalContent.ts'));
	const { getPageSeo } = await import(join(ROOT, 'src/i18n/seo.ts'));

	mkdirSync(join(ROOT, 'src/i18n/generated'), { recursive: true });
	mkdirSync(join(ROOT, 'src/data/generated'), { recursive: true });

	if (only === 'all' || only === 'locale') {
		console.log('Translating main locale (es → va)...');
		const va = await deepTranslate(translations.es);
		writeFileSync(join(ROOT, 'src/i18n/generated/locale-va.ts'), serializeTs(va, 'localeVa'));
		console.log('Wrote src/i18n/generated/locale-va.ts');
	}

	if (only === 'all' || only === 'seo') {
		console.log('Translating SEO entries...');
		const pageIds = [
			'home',
			'iaConsulting',
			'consultoria',
			'androidConsulting',
			'androidAudit',
			'processAutomation',
			'aiAgents',
			'localElche',
			'pricing',
			'workAndPricing',
			'about',
			'projects',
			'projectKivra',
			'projectMuixeranga',
			'projectAmarteVitalFlow',
			'projectRegalosKawaii',
			'projectYossa',
			'blog',
			'contact',
			'legalNotice',
			'privacy',
			'notFound',
			'cayeProfile',
			'ramiroProfile',
		];
		const seoVa = {};
		for (const id of pageIds) {
			const es = getPageSeo(id, 'es');
			seoVa[id] = await deepTranslate(es);
			console.log('  seo', id);
		}
		writeFileSync(join(ROOT, 'src/i18n/generated/seo-va.ts'), serializeTs(seoVa, 'seoVaByPage'));
	}

	if (only === 'all' || only === 'legal') {
		console.log('Translating legal documents...');
		const noticeEs = getLegalNotice('es', '/va/privacitat/');
		const privacyEs = getPrivacyPolicy('es');
		const legalVa = {
			notice: await deepTranslate(noticeEs),
			privacy: await deepTranslate(privacyEs),
			registry: await translateOne('Inscrita en el Registro Mercantil de Alicante'),
			updated: await translateOne('19 de octubre de 2026'),
		};
		writeFileSync(join(ROOT, 'src/data/generated/legal-va.ts'), serializeTs(legalVa, 'legalVa'));
	}

	if (only === 'all' || only === 'blog') {
		console.log('Translating blog posts (markdown body only)...');
		const { readdirSync } = await import('node:fs');
		const blogDir = join(ROOT, 'src/content/blog');
		const posts = readdirSync(blogDir).filter((f) => f.endsWith('.md'));
		mkdirSync(join(ROOT, 'src/content/blog/va'), { recursive: true });
		for (const file of posts) {
			const raw = readFileSync(join(blogDir, file), 'utf8');
			const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
			if (!fmMatch) continue;
			const front = fmMatch[1];
			const body = fmMatch[2];
			let newFront = front;
			const titleM = front.match(/^title:\s*["']?(.+?)["']?\s*$/m);
			const descM = front.match(/^description:\s*["']?(.+?)["']?\s*$/m);
			if (titleM) {
				const t = await translateOne(titleM[1]);
				newFront = newFront.replace(titleM[0], `title: ${JSON.stringify(t)}`);
			}
			if (descM) {
				const d = await translateOne(descM[1]);
				newFront = newFront.replace(descM[0], `description: ${JSON.stringify(d)}`);
			}
			const paras = body.split(/\n\n+/);
			const translatedParas = await mapPool(paras, async (p) => {
				if (!p.trim()) return p;
				if (p.startsWith('#') || p.startsWith('![') || p.startsWith('```') || p.startsWith('|')) return p;
				const hrefs = [...p.matchAll(/\]\(\/[^)]+\)/g)].map((m) => m[0]);
				let translated = await translateOne(p);
				for (const href of hrefs) {
					const originalPath = href.match(/\(\/[^)]+\)/)?.[0];
					if (!originalPath) continue;
					translated = translated.replace(/\(\/[^)]+\)/, originalPath);
				}
				return translated;
			});
			const out = `---\n${newFront}\n---\n\n${translatedParas.join('\n\n')}`;
			writeFileSync(join(blogDir, 'va', file), out);
			console.log('  blog', file);
		}
	}

	saveCache();
	console.log('Done. Cache:', Object.keys(cache).length, 'entries');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});