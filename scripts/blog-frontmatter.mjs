import yaml from 'js-yaml';

export function splitMarkdownFile(raw) {
	const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!fmMatch) return null;
	return { frontText: fmMatch[1], body: fmMatch[2], rawFront: fmMatch[1] };
}

export function parseFrontmatter(frontText) {
	return yaml.load(frontText);
}

export function frontmatterKeyOrder(frontText) {
	const keys = [];
	for (const line of frontText.split('\n')) {
		const m = line.match(/^([\w-]+):/);
		if (m) keys.push(m[1]);
	}
	return keys;
}

function formatDateValue(value) {
	if (value instanceof Date) return value.toISOString().slice(0, 10);
	if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
	return null;
}

/** All string scalars use JSON.stringify (double quotes). */
export function serializeBlogFrontmatter(fm, keyOrder) {
	const seen = new Set();
	const order = [...keyOrder, ...Object.keys(fm)].filter((k) => {
		if (seen.has(k) || fm[k] === undefined || fm[k] === null) return false;
		seen.add(k);
		return true;
	});

	const BARE_SCALAR_KEYS = new Set(['audience', 'author', 'layout']);

	const lines = ['---'];
	for (const key of order) {
		const value = fm[key];
		if (key === 'tags' && Array.isArray(value)) {
			lines.push('tags:');
			for (const tag of value) lines.push(`  - ${tag}`);
			continue;
		}
		if (key === 'faq' && Array.isArray(value)) {
			lines.push('faq:');
			for (const item of value) {
				lines.push(`  - q: ${JSON.stringify(item.q)}`);
				lines.push(`    a: ${JSON.stringify(item.a)}`);
			}
			continue;
		}
		const dateStr = formatDateValue(value);
		if (dateStr) {
			lines.push(`${key}: ${dateStr}`);
			continue;
		}
		if (typeof value === 'string') {
			if (BARE_SCALAR_KEYS.has(key) && /^[\w-]+$/.test(value)) {
				lines.push(`${key}: ${value}`);
			} else {
				lines.push(`${key}: ${JSON.stringify(value)}`);
			}
			continue;
		}
		if (typeof value === 'number' || typeof value === 'boolean') {
			lines.push(`${key}: ${value}`);
			continue;
		}
		lines.push(`${key}: ${JSON.stringify(String(value))}`);
	}
	lines.push('---');
	return lines.join('\n');
}

/** Second barrier: fix any remaining single-quoted scalars that contain apostrophes. */
export function escapeRiskySingleQuotedLines(frontText) {
	return frontText
		.split('\n')
		.map((line) => {
			const m = line.match(/^(\s*(?:-\s+)?[\w-]+:\s*)'(.*)'\s*$/);
			if (!m || !m[2].includes("'")) return line;
			return `${m[1]}${JSON.stringify(m[2].replace(/''/g, "'"))}`;
		})
		.join('\n');
}

export function resolveTitleHighlight(vaTitle, translatedHighlight, esTitle, esHighlight, fileName) {
	if (!translatedHighlight) return { highlight: undefined, warning: null };
	if (vaTitle && vaTitle.includes(translatedHighlight)) {
		return { highlight: translatedHighlight, warning: null };
	}
	const colon = vaTitle?.indexOf(':') ?? -1;
	if (colon >= 0) {
		const after = vaTitle.slice(colon + 1).trim();
		if (after && vaTitle.includes(after)) {
			return {
				highlight: after,
				warning: `${fileName}: titleHighlight replaced with substring after ':' in translated title`,
			};
		}
	}
	if (esTitle && esHighlight && esTitle.endsWith(esHighlight)) {
		return {
			highlight: translatedHighlight,
			warning: `${fileName}: titleHighlight may not match title literally (check manually)`,
		};
	}
	return {
		highlight: translatedHighlight,
		warning: `${fileName}: titleHighlight not found inside translated title`,
	};
}