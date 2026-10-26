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
				return !/^(\/(en|fi))?\/(pricing|projects|prices|precios)$/.test(path);
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
