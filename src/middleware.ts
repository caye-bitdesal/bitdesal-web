import { defineMiddleware } from 'astro:middleware';
import { isSupportedLang, shouldRedirectLangQuery, targetPathForLangQuery } from './i18n/langQueryRedirect';

export const onRequest = defineMiddleware((context, next) => {
	const url = context.url;
	const langParam = url.searchParams.get('lang');

	if (isSupportedLang(langParam) && shouldRedirectLangQuery(url.pathname, langParam)) {
		const redirectUrl = new URL(targetPathForLangQuery(url.pathname, langParam), url.origin);
		url.searchParams.delete('lang');
		redirectUrl.search = url.searchParams.toString();
		return context.redirect(redirectUrl.toString(), 301);
	}

	return next();
});
