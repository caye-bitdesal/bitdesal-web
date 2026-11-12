// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { sitemapHreflangLinks } from './src/i18n/localizedRoutes.ts';
// https://astro.build/config
export default defineConfig({
	site: 'https://bitdesal.com',
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en', 'fi'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'es',
				locales: {
					es: 'es-ES',
					en: 'en-US',
					fi: 'fi-FI',
				},
			},
			filter(page) {
				const path = new URL(page).pathname.replace(/\/$/, '') || '/';
				if (/^(\/(en|fi))?\/(pricing|projects|prices|precios)$/.test(path)) return false;
				const exclude = new Set([
					'/about',
					'/en/nosotros',
					'/fi/about',
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
				return !exclude.has(path);
			},
			serialize(item) {
				return {
					...item,
					links: sitemapHreflangLinks(item.url),
				};
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
		'/blog/precio-cerrado-automatizacion-pyme': '/blog/precio-cerrado-automatizacion-empresa',
		'/post-1': '/blog/',
		'/blog-2': '/blog/',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
