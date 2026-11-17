import { createTranslator, defaultLanguage, supportedLanguages, type Language, translations } from './translations';

export type { Language };

export function resolveLanguage(currentLocale: string | undefined): Language {
	if (currentLocale && supportedLanguages.includes(currentLocale as Language)) {
		return currentLocale as Language;
	}
	return defaultLanguage;
}

export function useI18n(astro: { currentLocale?: string | undefined }) {
	const lang = resolveLanguage(astro.currentLocale);
	const t = createTranslator(lang);
	return { lang, t, translations: translations[lang] };
}
