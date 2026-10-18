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

/** Absolute path from site root (respects Astro base URL). */
export function sitePath(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	if (!path || path === '/') return base || '/';
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
}

/** Pricing page — approach section. */
export const pricingApproachHref = sitePath('/pricing#approach');
