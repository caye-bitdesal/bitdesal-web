import type { Language } from './translations';

const localeByLang: Record<Language, string> = {
	es: 'es-ES',
	en: 'en-GB',
	fi: 'fi-FI',
	va: 'ca-ES-valencia',
};

const vatSuffixByLang: Record<Language, string> = {
	es: ' + IVA',
	en: ' + VAT',
	fi: ' + ALV',
	va: ' + IVA',
};

export function currencyLocale(lang: Language): string {
	return localeByLang[lang] ?? 'es-ES';
}

/** Blog dates: Valencian pages use Catalan month names (set., gen., …). */
export function blogDateLocale(lang: Language): string {
	if (lang === 'va') return 'ca-ES';
	return currencyLocale(lang);
}

/** Short display label from ISO date (e.g. «7 de set. 2026» for VA). */
export function formatBlogDateShort(isoDate: string, lang: Language): string {
	const d = new Date(`${isoDate}T12:00:00`);
	return d.toLocaleDateString(blogDateLocale(lang), {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

const ES_STYLE_MONTH: Record<string, number> = {
	ene: 0,
	ena: 0,
	feb: 1,
	mar: 2,
	abr: 3,
	may: 4,
	jun: 5,
	jul: 6,
	ago: 7,
	sep: 8,
	set: 8,
	oct: 9,
	nov: 10,
	dic: 11,
	des: 11,
};

/**
 * Reformat career / education date strings that still use Spanish month abbreviations
 * (e.g. «may 2019 – sep 2025») into `ca-ES` month labels for Valencian.
 */
export function formatLocalizedMonthTokens(text: string, lang: Language): string {
	if (lang !== 'va' || !text) return text;
	return text.replace(/\b([a-z]{3})\.?\s+(\d{4})\b/gi, (match, mon, year) => {
		const idx = ES_STYLE_MONTH[mon.toLowerCase()];
		if (idx === undefined) return match;
		const d = new Date(Number(year), idx, 15);
		return d
			.toLocaleDateString('ca-ES', { month: 'short', year: 'numeric' })
			.replace(/\s+de\s+/g, ' ')
			.trim();
	});
}

export function vatSuffix(lang: Language): string {
	return vatSuffixByLang[lang] ?? vatSuffixByLang.es;
}

function formatEurAmount(amount: number, lang: Language): string {
	// es-ES CLDR skips grouping below 10.000; the site requires "1.080 €".
	if (lang === 'es' || lang === 'va') {
		const grouped = Math.round(amount)
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		return `${grouped} €`;
	}
	return new Intl.NumberFormat(currencyLocale(lang), {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(amount);
}

/** Formatted EUR amount with locale-appropriate VAT suffix (e.g. « + IVA »). */
export function formatEur(amount: number, lang: Language): string {
	return `${formatEurAmount(amount, lang)}${vatSuffix(lang)}`;
}

export function formatEurRange(min: number, max: number, lang: Language): string {
	return `${formatEurAmount(min, lang)}–${formatEurAmount(max, lang)}${vatSuffix(lang)}`;
}
