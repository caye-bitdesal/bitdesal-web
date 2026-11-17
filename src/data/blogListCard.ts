import type { CollectionEntry } from 'astro:content';
import type { LinkedInPost } from './linkedInPosts';
import { currencyLocale } from '../i18n/formatCurrency';
import type { Language } from '../i18n/translations';

export type BlogListCardData = {
	href: string;
	title: string;
	excerpt: string;
	/** ISO date for `<time datetime>`. */
	dateIso: string;
	/** Human-readable date (already localized). */
	dateLabel: string;
	image?: string;
	imageAlt?: string;
	openInNewTab: boolean;
	linkedInUrl?: string;
	mediumUrl?: string;
};

type TranslateFn = (key: string) => string;

export function cardFromLinkedInPost(
	post: LinkedInPost,
	t: TranslateFn,
	options?: { showPlatformLinks?: boolean },
): BlogListCardData {
	const showPlatformLinks = options?.showPlatformLinks ?? true;
	const onSite = Boolean(post.siteHref);
	return {
		href: post.siteHref ?? post.url,
		title: t(post.titleKey),
		excerpt: t(post.excerptKey),
		dateIso: post.dateIso,
		dateLabel: t(post.dateKey),
		image: post.image,
		imageAlt: post.imageAltKey ? t(post.imageAltKey) : '',
		openInNewTab: !onSite,
		linkedInUrl: showPlatformLinks ? post.url : undefined,
		mediumUrl: showPlatformLinks ? post.mediumUrl : undefined,
	};
}

function heroImageSrc(heroImage: CollectionEntry<'blog'>['data']['heroImage']): string | undefined {
	if (!heroImage) return undefined;
	if (typeof heroImage === 'string') return heroImage;
	if (typeof heroImage === 'object' && heroImage !== null && 'src' in heroImage) {
		return String((heroImage as { src: string }).src);
	}
	return undefined;
}

export function cardFromBlogEntry(
	post: CollectionEntry<'blog'>,
	shown: CollectionEntry<'blog'>,
	href: string,
	lang: Language,
	fallbackImage?: string,
): BlogListCardData {
	const dateLabel = shown.data.pubDate.toLocaleDateString(currencyLocale(lang), {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return {
		href,
		title: shown.data.title,
		excerpt: shown.data.description,
		dateIso: post.data.pubDate.toISOString().slice(0, 10),
		dateLabel,
		image: heroImageSrc(shown.data.heroImage) ?? fallbackImage,
		imageAlt: shown.data.title,
		openInNewTab: false,
	};
}

export function linkedInImageForSlug(slug: string, posts: LinkedInPost[]): string | undefined {
	const normalized = `/blog/${slug}/`;
	return posts.find((p) => p.siteHref === normalized || p.siteHref === `/blog/${slug}`)?.image;
}