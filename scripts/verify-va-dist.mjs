/**
 * Fail the build if rendered /va/ HTML still contains known Apertium calques or Spanish leftovers.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST_VA = join(fileURLToPath(new URL('.', import.meta.url)), '..', 'dist', 'va');

const FORBIDDEN = [
	/\bpressuposada\b/i,
	/\bfarcida\b/i,
	/\bparisques\b/i,
	/\bsale cap\b/i,
	/\bdetalladament\b/i,
	/\bnaturopatía\b/i,
	/\bConsultoría\b/,
	/\bElche\b/,
	/\bAlicante\b/,
	/\bcomunicat de treball\b/i,
	/\bretorne anomenades\b/i,
	/\bdeixem caminant\b/i,
	/\bfitem per escrit\b/i,
	/\benganxa el correu\b/i,
	/\bflama fora d'hora\b/i,
	/\babans de manar-lo\b/i,
	/\bManar el pressupost\b/,
	/\bque ja ús\b/i,
	/\bMane pressupostos\b/,
	/\bno torna les telefonades\b/i,
	/\bmodularización\b/i,
	/\bmodularizamos\b/i,
	/\bsobreingeniería\b/i,
	/\breforcem a equips\b/i,
	/\bsubstituir al teu equip\b/i,
	/\btu el decideixes\b/i,
	/\bdepens de nosaltres\b/i,
	/\bnivell de API\b/i,
	/\bslides genèriques\b/i,
	/\b(?:ene|feb|abr|may|jun|jul|ago|sep|oct|nov|dic)\s+\d{4}\b/i,
];

/** Allowed contexts (URLs, src attributes, etc.). */
function isAllowedContext(html, index) {
	const window = html.slice(Math.max(0, index - 80), index + 80);
	if (/href="[^"]*Elche/i.test(window)) return true;
	if (/src="[^"]*"/i.test(window) && window.includes('blog/')) return true;
	return false;
}

function walkHtml(dir, acc = []) {
	if (!existsSync(dir)) return acc;
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) walkHtml(full, acc);
		else if (name.endsWith('.html')) acc.push(full);
	}
	return acc;
}

if (!existsSync(DIST_VA)) {
	console.error('verify-va-dist: dist/va/ not found (run astro build first)');
	process.exit(1);
}

const errors = [];

for (const file of walkHtml(DIST_VA)) {
	const html = readFileSync(file, 'utf8');
	for (const re of FORBIDDEN) {
		re.lastIndex = 0;
		let match;
		while ((match = re.exec(html))) {
			if (isAllowedContext(html, match.index)) continue;
			const rel = file.replace(/.*\/dist\//, '');
			errors.push(`${rel}: matched ${re.source}`);
			break;
		}
	}
}

if (errors.length) {
	console.error('verify-va-dist: forbidden strings in /va/ HTML\n');
	for (const e of errors) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(`verify-va-dist: OK (${walkHtml(DIST_VA).length} HTML file(s))`);