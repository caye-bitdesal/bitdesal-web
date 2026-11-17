import { localizedPath } from '../i18n/localizedRoutes';
import type { Language } from '../i18n/translations';

export type NavLink = {
	href: string;
	labelKey: string;
	fallback: string;
};

/** Primary site navigation (header). */
export const primaryNavLinks: NavLink[] = [
	{ href: '/consultoria-ia', labelKey: 'nav.iaService', fallback: 'AI consulting' },
	{ href: '/consultoria-software', labelKey: 'nav.softwareService', fallback: 'Software development' },
	{ href: '/casos-y-precios', labelKey: 'nav.workAndPricing', fallback: 'Work & pricing' },
	{ href: '/nosotros', labelKey: 'nav.about', fallback: 'About' },
	{ href: '/blog', labelKey: 'nav.blog', fallback: 'Blog' },
];

/** Company links in the footer. */
export const footerCompanyLinks: NavLink[] = [
	{ href: '/consultoria-ia', labelKey: 'footer.iaService', fallback: 'AI consulting for business' },
	{ href: '/consultoria-software', labelKey: 'footer.softwareService', fallback: 'Software development' },
	{ href: '/casos-y-precios', labelKey: 'footer.workAndPricing', fallback: 'Work & pricing' },
	{ href: '/nosotros', labelKey: 'footer.aboutUs', fallback: 'About us' },
	{ href: '/blog', labelKey: 'footer.blog', fallback: 'Blog' },
];

export function sitePath(path: string, lang: Language = 'es'): string {
	return localizedPath(path, lang);
}

/** Pricing block on the combined work & pricing page. */
export function pricingApproachHref(lang: Language): string {
	return `${sitePath('/casos-y-precios', lang)}#ia`;
}

export function contactHref(lang: Language, topic?: 'ia' | 'software'): string {
	const base = sitePath('/contacto', lang);
	if (!topic) return base;
	return `${base}?tipo=${topic}`;
}
