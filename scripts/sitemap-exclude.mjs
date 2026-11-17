/** Paths that are only redirects — keep in sync with astro.config redirects + .htaccess. */
export const SITEMAP_EXCLUDE_PATHS = new Set([
	'/about',
	'/en/nosotros',
	'/fi/about',
	'/fi/nosotros',
	'/contact',
	'/services',
	'/methodology',
	'/prices',
	'/precios',
	'/pricing',
	'/projects',
	'/post-1',
	'/blog-2',
	'/blog/precio-cerrado-automatizacion-pyme',
	'/automatizacion-pymes',
	'/en/automatizacion-pymes',
	'/fi/automatizacion-pymes',
]);

export function shouldIncludeInSitemap(pageUrl) {
	const path = new URL(pageUrl).pathname.replace(/\/$/, '') || '/';
	if (/^(\/(en|fi))?\/(pricing|projects|prices|precios)$/.test(path)) return false;
	return !SITEMAP_EXCLUDE_PATHS.has(path);
}