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
};

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

export function alternateHrefs(pathname: string): Record<Language, string> {
	const { slug } = stripLocalePrefix(pathname);
	const aliases = SLUG_ALIASES[slug];
	const result = {} as Record<Language, string>;
	for (const lang of supportedLanguages) {
		const targetSlug = aliases ? aliases[lang] : slug;
		result[lang] = localeHref(targetSlug, lang);
	}
	return result;
}

export function absoluteAlternateHrefs(pathname: string): Record<Language, string> {
	const rel = alternateHrefs(pathname);
	return {
		es: new URL(rel.es, SITE_ORIGIN).href,
		en: new URL(rel.en, SITE_ORIGIN).href,
		fi: new URL(rel.fi, SITE_ORIGIN).href,
	};
}

export function localePathForSwitch(pathname: string, targetLang: Language): string {
	return alternateHrefs(pathname)[targetLang];
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

export function sitemapHreflangLinks(url: string): { url: string; lang: string }[] {
	const path = new URL(url).pathname;
	const abs = absoluteAlternateHrefs(path);
	return supportedLanguages.map((lang) => ({ url: abs[lang], lang }));
}
