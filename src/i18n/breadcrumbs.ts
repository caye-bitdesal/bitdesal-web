import { SITE_ORIGIN } from '../data/siteConstants';
import type { BreadcrumbItem } from '../data/siteJsonLd';
import { stripLocalePrefix, localeHref, resolveLocalizedSlug } from './localizedRoutes';
import type { Language } from './translations';

type Translator = (key: string, fallback?: string) => string;

const SECTION_PARENT: Record<string, { labelKey: string; slug: string }> = {
	'projects/kivra': { labelKey: 'nav.workAndPricing', slug: 'casos-y-precios' },
	'projects/yossa': { labelKey: 'nav.workAndPricing', slug: 'casos-y-precios' },
};

const SLUG_LABEL: Record<string, string> = {
	'consultoria-ia': 'nav.iaService',
	'consultoria-software': 'nav.softwareService',
	'casos-y-precios': 'nav.workAndPricing',
	'work-and-pricing': 'nav.workAndPricing',
	'referenssit-ja-hinnat': 'nav.workAndPricing',
	nosotros: 'nav.about',
	about: 'nav.about',
	blog: 'nav.blog',
	contacto: 'nav.contact',
	'aviso-legal': 'footer.legalNotice',
	'legal-notice': 'footer.legalNotice',
	'oikeudellinen-ilmoitus': 'footer.legalNotice',
	privacidad: 'footer.privacy',
	privacy: 'footer.privacy',
	tietosuoja: 'footer.privacy',
	caye: 'about.bio.name',
	ramiro: 'about.team.ramiro.name',
	'precio-cerrado-automatizacion-empresa': 'blog.hero.title',
};

function isHomePath(pathname: string): boolean {
	const { slug } = stripLocalePrefix(pathname);
	return !slug;
}

export function defaultBreadcrumbs(
	pathname: string,
	lang: Language,
	t: Translator,
	currentPageName?: string,
): BreadcrumbItem[] {
	if (isHomePath(pathname)) return [];

	const { slug } = stripLocalePrefix(pathname);
	const crumbs: BreadcrumbItem[] = [
		{ name: t('nav.home', 'Inicio'), href: new URL(localeHref('', lang), SITE_ORIGIN).href },
	];

	const section = SECTION_PARENT[slug];
	if (section) {
		const parentSlug = resolveLocalizedSlug(section.slug, lang);
		crumbs.push({
			name: t(section.labelKey),
			href: new URL(localeHref(parentSlug, lang), SITE_ORIGIN).href,
		});
		const leaf = slug.split('/').pop() ?? slug;
		crumbs.push({ name: currentPageName ?? leaf });
		return crumbs;
	}

	if (slug.startsWith('blog/')) {
		crumbs.push({
			name: t('nav.blog', 'Blog'),
			href: new URL(localeHref('blog', lang), SITE_ORIGIN).href,
		});
		crumbs.push({ name: currentPageName ?? t('blog.hero.title', 'Blog') });
		return crumbs;
	}

	const labelKey = SLUG_LABEL[slug];
	const pageName = currentPageName ?? (labelKey ? t(labelKey) : slug);
	crumbs.push({ name: pageName });
	return crumbs;
}
