import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Language } from './translations';

/** Locale-aware path from site root (respects Astro base URL). */
export function localePath(path: string, lang: Language): string {
	const segment = path.replace(/^\//, '') || '';
	return getRelativeLocaleUrl(lang, segment);
}
