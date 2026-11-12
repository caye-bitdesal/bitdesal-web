import { SITE_ORIGIN } from '../data/siteConstants';
import { supportedLanguages, type Language } from './translations';

/**
 * Slugs that differ by language. Keys are the slug without locale prefix or
 * trailing slash (e.g. "aviso-legal", "legal-notice").
 */
const SLUG_ALIASES: Record<string, Record<Language, string>> = {
	'aviso-legal': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus' },
	'legal-notice': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus' },
	'oikeudellinen-ilmoitus': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus' },
	privacidad: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja' },
	privacy: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja' },
	tietosuoja: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja' },
	'casos-y-precios': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat' },
	'work-and-pricing': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat' },
	'referenssit-ja-hinnat': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat' },
	pricing: { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat' },
	projects: { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat' },
	nosotros: { es: 'nosotros', en: 'about', fi: 'nosotros' },
	about: { es: 'nosotros', en: 'about', fi: 'nosotros' },
};

/** Pages without a localized version only list themselves in hreflang / sitemap alternates. */
const ES_ONLY_SLUGS = new Set(['auditoria-app-android']);

export function alternatesForPathname(pathname: string): Language[] {
	const { slug } = stripLocalePrefix(pathname);
	if (ES_ONLY_SLUGS.has(slug)) return ['es'];
	if (slug === 'caye' || slug === 'ramiro') return supportedLanguages;
	return supportedLanguages;
}

/** Old paths that map to a current slug in every locale (see astro redirects). Keep in sync with scripts/lang-redirect-core.mjs. */
const LEGACY_SLUG_TARGETS: Record<string, string> = {
	methodology: 'consultoria-software',
};

export function resolveLocalizedSlug(slug: string, lang: Language): string {
	const canonical = LEGACY_SLUG_TARGETS[slug] ?? slug;
	const aliases = SLUG_ALIASES[canonical] ?? SLUG_ALIASES[slug];
	if (aliases) return aliases[lang];
	return canonical;
}

export function stripLocalePrefix(pathname: string): { lang: Language; slug: string } {
	const clean = pathname.replace(/\/$/, '') || '/';
	const match = clean.match(/^\/(en|fi)(?=\/|$)/);
	if (match) {
		return {
			lang: match[1] as Language,
			slug: clean.slice(match[0].length).replace(/^\//, ''),
		};
	}
	return { lang: 'es', slug: clean.replace(/^\//, '') };
}

/** Site-root-relative path for a slug in a locale (always with a trailing slash). */
export function localeHref(slug: string, lang: Language): string {
	if (!slug) return lang === 'es' ? '/' : `/${lang}/`;
	return lang === 'es' ? `/${slug}/` : `/${lang}/${slug}/`;
}

export function alternateHrefs(pathname: string, locales: Language[] = supportedLanguages): Record<Language, string> {
	const { slug } = stripLocalePrefix(pathname);
	const aliases = SLUG_ALIASES[slug];
	const full = {} as Record<Language, string>;
	for (const lang of supportedLanguages) {
		const targetSlug = aliases ? aliases[lang] : slug;
		full[lang] = localeHref(targetSlug, lang);
	}
	const result = {} as Record<Language, string>;
	for (const lang of locales) {
		result[lang] = full[lang];
	}
	return result;
}

export function absoluteAlternateHrefs(
	pathname: string,
	locales: Language[] = supportedLanguages,
): Record<Language, string> {
	const rel = alternateHrefs(pathname, locales);
	const abs = {} as Record<Language, string>;
	for (const lang of locales) {
		abs[lang] = new URL(rel[lang], SITE_ORIGIN).href;
	}
	return abs;
}

const ES_ONLY_FALLBACK_SLUG: Record<string, string> = {
	'auditoria-app-android': 'consultoria-software',
};

export function localePathForSwitch(pathname: string, targetLang: Language): string {
	const locales = alternatesForPathname(pathname);
	if (locales.includes(targetLang)) {
		return alternateHrefs(pathname, locales)[targetLang];
	}
	const { slug } = stripLocalePrefix(pathname);
	const fallbackSlug = ES_ONLY_FALLBACK_SLUG[slug];
	if (fallbackSlug) {
		return localeHref(resolveLocalizedSlug(fallbackSlug, targetLang), targetLang);
	}
	return alternateHrefs(pathname, locales).es;
}

/** Locale-aware path that keeps a `#fragment` if one is present in `path`. */
export function localizedPath(path: string, lang: Language): string {
	const [pathname, hash] = path.split('#');
	const href = localePathForSwitch(pathname || '/', lang);
	return hash ? `${href}#${hash}` : href;
}

export function legalPath(page: 'notice' | 'privacy', lang: Language): string {
	const slugs =
		page === 'notice'
			? { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus' }
			: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja' };
	return localeHref(slugs[lang], lang);
}

const HREFLANG_BCP47: Record<Language, string> = {
	es: 'es-ES',
	en: 'en-US',
	fi: 'fi-FI',
};

export function sitemapHreflangLinks(url: string): { url: string; lang: string }[] {
	const path = new URL(url).pathname;
	const locales = alternatesForPathname(path);
	const abs = absoluteAlternateHrefs(path, locales);
	return locales.map((locale) => ({ url: abs[locale], lang: HREFLANG_BCP47[locale] }));
}
