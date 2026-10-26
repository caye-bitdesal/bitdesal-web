import { localeHref, resolveLocalizedSlug, stripLocalePrefix } from './localizedRoutes';
import { supportedLanguages, type Language } from './translations';

/** Pathname (with trailing slash) after ?lang= is applied; empty search string. */
export function targetPathForLangQuery(pathname: string, lang: Language): string {
	const { slug } = stripLocalePrefix(pathname);
	const localizedSlug = slug ? resolveLocalizedSlug(slug, lang) : '';
	return localeHref(localizedSlug, lang);
}

export function isSupportedLang(value: string | null): value is Language {
	return value !== null && (supportedLanguages as readonly string[]).includes(value);
}

function normalizePath(pathname: string): string {
	if (pathname === '/') return '/';
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Whether a 301 is needed when the URL already uses `lang` in the query string. */
export function shouldRedirectLangQuery(pathname: string, lang: Language): boolean {
	return normalizePath(pathname) !== normalizePath(targetPathForLangQuery(pathname, lang));
}
