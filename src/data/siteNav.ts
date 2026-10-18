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
	{ href: '/about', labelKey: 'nav.about', fallback: 'About' },
	{ href: '/pricing', labelKey: 'nav.pricing', fallback: 'Pricing' },
	{ href: '/projects', labelKey: 'nav.projects', fallback: 'Projects' },
	{ href: '/blog', labelKey: 'nav.blog', fallback: 'Blog' },
];

/** Company links in the footer (same destinations as header). */
export const footerCompanyLinks: NavLink[] = [
	{ href: '/about', labelKey: 'footer.aboutUs', fallback: 'About us' },
	{ href: '/pricing', labelKey: 'footer.pricing', fallback: 'Pricing' },
	{ href: '/projects', labelKey: 'footer.projects', fallback: 'Projects' },
	{ href: '/blog', labelKey: 'footer.blog', fallback: 'Blog' },
];

export function sitePath(path: string, lang: Language = 'es'): string {
	return localePath(path, lang);
}

/** Pricing page — approach section. */
export function pricingApproachHref(lang: Language): string {
	return `${sitePath('/pricing', lang)}#approach`;
}
