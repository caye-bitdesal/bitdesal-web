import type { Language } from './translations';

const localeByLang: Record<Language, string> = {
	es: 'es-ES',
	en: 'en-GB',
	fi: 'fi-FI',
};

const vatSuffixByLang: Record<Language, string> = {
	es: ' + IVA',
	en: ' + VAT',
	fi: ' + ALV',
};

export function currencyLocale(lang: Language): string {
	return localeByLang[lang] ?? 'es-ES';
}

export function vatSuffix(lang: Language): string {
	return vatSuffixByLang[lang] ?? vatSuffixByLang.es;
}

function formatEurAmount(amount: number, lang: Language): string {
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
