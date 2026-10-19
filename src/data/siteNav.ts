import { localePath } from '../i18n/paths';
import type { Language } from '../i18n/translations';

export type NavLink = {
	href: string;
	labelKey: string;
	fallback: string;
};

/** Primary site navigation (header). */
export const primaryNavLinks: NavLink[] = [
	{ href: '/', labelKey: 'nav.home', fallback: 'Home' },
	{ href: '/consultoria-ia', labelKey: 'nav.iaService', fallback: 'AI consulting' },
	{ href: '/consultoria-software', labelKey: 'nav.softwareService', fallback: 'Software development' },
	{ href: '/pricing', labelKey: 'nav.pricing', fallback: 'Pricing' },
	{ href: '/nosotros', labelKey: 'nav.about', fallback: 'About' },
	{ href: '/projects', labelKey: 'nav.projects', fallback: 'Projects' },
	{ href: '/blog', labelKey: 'nav.blog', fallback: 'Blog' },
];

/** Company links in the footer. */
export const footerCompanyLinks: NavLink[] = [
	{ href: '/consultoria-ia', labelKey: 'footer.iaService', fallback: 'AI consulting for business' },
	{ href: '/consultoria-software', labelKey: 'footer.softwareService', fallback: 'Software development' },
	{ href: '/pricing', labelKey: 'footer.pricing', fallback: 'Pricing' },
	{ href: '/nosotros', labelKey: 'footer.aboutUs', fallback: 'About us' },
	{ href: '/projects', labelKey: 'footer.projects', fallback: 'Projects' },
	{ href: '/blog', labelKey: 'footer.blog', fallback: 'Blog' },
];

export function sitePath(path: string, lang: Language = 'es'): string {
	return localePath(path, lang);
}

/** Pricing page — first content anchor (IA / automation block). */
export function pricingApproachHref(lang: Language): string {
	return `${sitePath('/pricing', lang)}#ia`;
}

export function contactHref(lang: Language, topic?: 'ia' | 'software'): string {
	const base = sitePath('/contacto', lang);
	if (!topic) return base;
	return `${base}?tipo=${topic}`;
}
