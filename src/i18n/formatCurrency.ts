import type { Language } from './translations';

const localeByLang: Record<Language, string> = {
	es: 'es-ES',
	en: 'en-GB',
	fi: 'fi-FI',
};

export function currencyLocale(lang: Language): string {
	return localeByLang[lang] ?? 'es-ES';
}

export function formatEur(amount: number, lang: Language): string {
	return new Intl.NumberFormat(currencyLocale(lang), {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(amount);
}

export function formatEurRange(min: number, max: number, lang: Language): string {
	return `${formatEur(min, lang)}–${formatEur(max, lang)}`;
}
