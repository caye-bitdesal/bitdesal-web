/** Mirrors src/i18n/localizedRoutes.ts + langQueryRedirect.ts for Apache rule generation. */

export const supportedLanguages = ['en', 'es', 'fi'];

const SLUG_ALIASES = {
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
	nosotros: { es: 'nosotros', en: 'about', fi: 'meista' },
	about: { es: 'nosotros', en: 'about', fi: 'meista' },
	meista: { es: 'nosotros', en: 'about', fi: 'meista' },
};

const LEGACY_SLUG_TARGETS = {
	methodology: 'consultoria-software',
};

const ES_ONLY_FALLBACK = {
	'auditoria-app-android': 'consultoria-software',
	'automatizacion-procesos-ia': 'consultoria-ia',
	'agentes-ia-empresas': 'consultoria-ia',
	'consultoria-ia-alicante-elche': 'consultoria-ia',
};

export function resolveLocalizedSlug(slug, lang) {
	if (lang !== 'es' && ES_ONLY_FALLBACK[slug]) {
		return resolveLocalizedSlug(ES_ONLY_FALLBACK[slug], lang);
	}
	const canonical = LEGACY_SLUG_TARGETS[slug] ?? slug;
	const aliases = SLUG_ALIASES[canonical] ?? SLUG_ALIASES[slug];
	if (aliases) return aliases[lang];
	return canonical;
}

export function stripLocalePrefix(pathname) {
	const clean = pathname.replace(/\/$/, '') || '/';
	const match = clean.match(/^\/(en|fi)(?=\/|$)/);
	if (match) {
		return {
			lang: match[1],
			slug: clean.slice(match[0].length).replace(/^\//, ''),
		};
	}
	return { lang: 'es', slug: clean.replace(/^\//, '') };
}

export function localeHref(slug, lang) {
	if (!slug) return lang === 'es' ? '/' : `/${lang}/`;
	return lang === 'es' ? `/${slug}/` : `/${lang}/${slug}/`;
}

export function targetPathForLangQuery(pathname, lang) {
	const { slug } = stripLocalePrefix(pathname);
	const localizedSlug = slug ? resolveLocalizedSlug(slug, lang) : '';
	return localeHref(localizedSlug, lang);
}

function normalizePath(pathname) {
	if (pathname === '/') return '/';
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function shouldRedirectLangQuery(pathname, lang) {
	return normalizePath(pathname) !== normalizePath(targetPathForLangQuery(pathname, lang));
}
