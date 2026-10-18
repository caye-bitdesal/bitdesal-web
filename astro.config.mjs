// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
	site: 'https://bitdesal.com',
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
		}),
	],
	redirects: {
		'/services': '/',
		'/contact': '/contacto',
		'/prices': '/pricing',
		'/precios': '/pricing',
		'/methodology': '/consultoria-software',
		'/about': '/nosotros',
		'/automatizacion-pymes': '/consultoria-ia',
		'/en/automatizacion-pymes': '/en/consultoria-ia',
		'/fi/automatizacion-pymes': '/fi/consultoria-ia',
		'/blog/precio-cerrado-automatizacion-pyme': '/blog/precio-cerrado-automatizacion-empresa',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
