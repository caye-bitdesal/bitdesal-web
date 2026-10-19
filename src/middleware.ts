import { defineMiddleware } from 'astro:middleware';
import { supportedLanguages } from './i18n/translations';

export const onRequest = defineMiddleware((context, next) => {
	const url = context.url;
	const langParam = url.searchParams.get('lang');

	if (langParam && supportedLanguages.includes(langParam as (typeof supportedLanguages)[number])) {
		const path = url.pathname.replace(/\/$/, '') || '/';
		const without = path.replace(/^\/(en|fi)(?=\/|$)/, '') || '/';
		const target =
			langParam === 'es'
				? without === '/'
					? '/'
					: `${without}/`
				: without === '/'
					? `/${langParam}/`
					: `/${langParam}${without}/`;
		const redirectUrl = new URL(target, url.origin);
		url.searchParams.delete('lang');
		redirectUrl.search = url.searchParams.toString();
		return context.redirect(redirectUrl.toString(), 301);
	}

	return next();
});
