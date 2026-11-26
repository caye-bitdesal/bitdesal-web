import { SITE_ORIGIN } from '../data/siteConstants';
import { supportedLanguages, type Language } from './translations';

/**
 * Slugs that differ by language. Keys are the slug without locale prefix or
 * trailing slash (e.g. "aviso-legal", "legal-notice").
 */
const SLUG_ALIASES: Record<string, Record<Language, string>> = {
	'aviso-legal': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus', va: 'avis-legal' },
	'legal-notice': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus', va: 'avis-legal' },
	'oikeudellinen-ilmoitus': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus', va: 'avis-legal' },
	'avis-legal': { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus', va: 'avis-legal' },
	privacidad: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja', va: 'privacitat' },
	privacy: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja', va: 'privacitat' },
	tietosuoja: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja', va: 'privacitat' },
	privacitat: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja', va: 'privacitat' },
	'casos-y-precios': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat', va: 'casos-i-preus' },
	'work-and-pricing': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat', va: 'casos-i-preus' },
	'referenssit-ja-hinnat': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat', va: 'casos-i-preus' },
	'casos-i-preus': { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat', va: 'casos-i-preus' },
	pricing: { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat', va: 'casos-i-preus' },
	projects: { es: 'casos-y-precios', en: 'work-and-pricing', fi: 'referenssit-ja-hinnat', va: 'casos-i-preus' },
	nosotros: { es: 'nosotros', en: 'about', fi: 'meista', va: 'nosaltres' },
	about: { es: 'nosotros', en: 'about', fi: 'meista', va: 'nosaltres' },
	meista: { es: 'nosotros', en: 'about', fi: 'meista', va: 'nosaltres' },
	nosaltres: { es: 'nosotros', en: 'about', fi: 'meista', va: 'nosaltres' },
};

/** Spanish articles that have no EN/FI/VA file. Hreflang must not point at missing URLs. */
const ES_ONLY_BLOG_SLUGS = new Set<string>(['agentes-ia-empresas-casos-oficios']);

/** Pages without a localized version only list themselves in hreflang / sitemap alternates. */
const ES_ONLY_SLUGS = new Set([
	'auditoria-app-android',
	'consultoria-android',
	'automatizacion-procesos-ia',
	'agentes-ia-empresas',
	'consultoria-ia-alicante-elche',
]);

export function alternatesForPathname(pathname: string): Language[] {
	const { slug } = stripLocalePrefix(pathname);
	if (slug.startsWith('blog/')) {
		const id = slug.slice('blog/'.length);
		if (ES_ONLY_BLOG_SLUGS.has(id)) return ['es'];
	}
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
	const match = clean.match(/^\/(en|fi|va)(?=\/|$)/);
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
	'automatizacion-procesos-ia': 'consultoria-ia',
	'agentes-ia-empresas': 'consultoria-ia',
	'consultoria-ia-alicante-elche': 'consultoria-ia',
};

export function localePathForSwitch(pathname: string, targetLang: Language): string {
	const locales = alternatesForPathname(pathname);
	if (locales.includes(targetLang)) {
		return alternateHrefs(pathname, locales)[targetLang];
	}
	const { slug } = stripLocalePrefix(pathname);
	if (slug.startsWith('blog/') && !locales.includes(targetLang)) {
		return localeHref('blog', targetLang);
	}
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
			? { es: 'aviso-legal', en: 'legal-notice', fi: 'oikeudellinen-ilmoitus', va: 'avis-legal' }
			: { es: 'privacidad', en: 'privacy', fi: 'tietosuoja', va: 'privacitat' };
	return localeHref(slugs[lang], lang);
}

/**
 * hreflang values (Google accepts only ISO 639-1 language + optional ISO 3166-1 region; no variants).
 * Valencian has no ISO 639-1 code of its own: it is Catalan, so it goes out as ca-ES.
 */
export const HREFLANG_BCP47: Record<Language, string> = {
	es: 'es-ES',
	en: 'en-US',
	fi: 'fi-FI',
	va: 'ca-ES',
};

/** <html lang> values (full BCP 47, variants allowed). */
export const HTML_LANG: Record<Language, string> = {
	es: 'es',
	en: 'en',
	fi: 'fi',
	va: 'ca-ES-valencia',
};

export function sitemapHreflangLinks(url: string): { url: string; lang: string }[] {
	const path = new URL(url).pathname;
	const locales = alternatesForPathname(path);
	const abs = absoluteAlternateHrefs(path, locales);
	const links = locales.map((locale) => ({ url: abs[locale], lang: HREFLANG_BCP47[locale] }));
	if (links.length > 1) {
		links.push({ url: abs.es, lang: 'x-default' });
	}
	return links;
}