// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { sitemapHreflangLinks } from './src/i18n/localizedRoutes.ts';
import { shouldIncludeInSitemap } from './scripts/sitemap-exclude.mjs';
// https://astro.build/config
export default defineConfig({
	site: 'https://bitdesal.com',
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'fi', 'va'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			// Hreflang is set in serialize via sitemapHreflangLinks (slugs differ by locale).
			filter: shouldIncludeInSitemap,
			serialize(item) {
				const links = sitemapHreflangLinks(item.url);
				return links.length ? { ...item, links } : item;
			},
		}),
	],
	redirects: {
		'/services': '/',
		'/contact': '/contacto',
		'/prices': '/casos-y-precios/',
		'/precios': '/casos-y-precios/',
		'/methodology': '/consultoria-software',
		'/about': '/nosotros',
		'/en/nosotros': '/en/about',
		'/automatizacion-pymes': '/consultoria-ia',
		'/en/automatizacion-pymes': '/en/consultoria-ia',
		'/fi/automatizacion-pymes': '/fi/consultoria-ia',
		'/va/automatizacion-pymes': '/va/consultoria-ia',
		'/blog/precio-cerrado-automatizacion-pyme': '/blog/precio-cerrado-automatizacion-empresa',
		'/post-1': '/blog/',
		'/blog-2': '/blog/',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
