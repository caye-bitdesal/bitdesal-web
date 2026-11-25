import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Language } from '../i18n/translations';
import { CAYE_ID, ORG_ID, RAMIRO_ID, type JsonLdNode } from './siteJsonLd';
import { SITE_ORIGIN } from './siteConstants';

export type BlogAuthorId = 'caye' | 'ramiro';

export const authorBlurb: Record<Language, Record<BlogAuthorId, string>> = {
	es: {
		caye: 'Caye Ruiz es fundador de Bitdesal y consultor Android e IA. De 2019 a 2025 fue Lead Android de Kivra Finlandia.',
		ramiro:
			'Ramiro Santamaría es socio de Bitdesal. Se ocupa de la automatización con IA y de la parte de IT.',
	},
	en: {
		caye: 'Caye Ruiz is the founder of Bitdesal and an Android and AI consultant. From 2019 to 2025 he was Lead Android at Kivra Finland.',
		ramiro: 'Ramiro Santamaría is a partner at Bitdesal. He works on AI automation and IT.',
	},
	fi: {
		caye: 'Caye Ruiz on Bitdesalin perustaja sekä Android- ja tekoälykonsultti. Vuosina 2019–2025 hän oli Kivra Finlandin Lead Android.',
		ramiro: 'Ramiro Santamaría on Bitdesalin osakas. Hän vastaa tekoälyautomaatiosta ja IT:stä.',
	},
	va: {
		caye: 'Caye Ruiz és el fundador de Bitdesal i consultor Android i IA. Del 2019 al 2025 va ser Lead Android a Kivra Finlàndia.',
		ramiro:
			'Ramiro Santamaría és soci de Bitdesal. S\'ocupa de l\'automatització amb IA i de la part d\'IT.',
	},
};

type Taggable = {
	id: string;
	data: {
		title: string;
		description: string;
		pubDate: Date;
		audience: 'business' | 'technical';
		tags?: string[];
	};
};

export function readPostMarkdown(id: string): string {
	return readFileSync(join(process.cwd(), 'src/content/blog', `${id}.md`), 'utf8');
}

export function plainText(markdown: string): string {
	const body = markdown.replace(/^---[\s\S]*?---/, '');
	return body
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/[#>*_`|]/g, ' ');
}

export function wordCount(markdown: string): number {
	return plainText(markdown).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(markdown: string): number {
	return Math.max(1, Math.round(wordCount(markdown) / 200));
}

/** Close to GitHub’s slugger, which Astro uses for markdown heading ids. */
export function headingSlug(text: string): string {
	return text
		.trim()
		.toLowerCase()
		.replace(/<[^>]+>/g, '')
		.replace(/[^\p{L}\p{N}\s-]/gu, '')
		.trim()
		.replace(/\s+/g, '-');
}

export function extractH2(markdown: string): { id: string; text: string }[] {
	const body = markdown.replace(/^---[\s\S]*?---/, '');
	const found: { id: string; text: string }[] = [];
	for (const match of body.matchAll(/^##\s+(.+)$/gm)) {
		const text = match[1].replace(/[*_`]/g, '').trim();
		found.push({ id: headingSlug(text), text });
	}
	if (found.length > 0) return found;
	for (const match of body.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi)) {
		const attrs = match[1] ?? '';
		const withoutNum = match[2].replace(/<span[^>]*class="bf-section-num"[^>]*>[\s\S]*?<\/span>/gi, '');
		const text = withoutNum.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
		const idMatch = attrs.match(/\sid="([^"]+)"/i);
		if (!text) continue;
		found.push({ id: idMatch?.[1] ?? headingSlug(text), text });
	}
	return found;
}

export function relatedPosts<T extends Taggable>(current: T, all: T[], limit = 3): T[] {
	const tags = new Set(current.data.tags ?? []);
	return all
		.filter((post) => post.id !== current.id && !/^(en|fi|va)\//.test(post.id))
		.map((post) => {
			const shared = (post.data.tags ?? []).filter((tag) => tags.has(tag)).length;
			const audience = post.data.audience === current.data.audience ? 2 : 0;
			return { post, score: audience + shared, date: post.data.pubDate.valueOf() };
		})
		.sort((a, b) => b.score - a.score || b.date - a.date)
		.slice(0, limit)
		.map((item) => item.post);
}

export function blogLocales(postId: string, ids: string[]): Language[] {
	const locales: Language[] = ['es'];
	if (ids.includes(`en/${postId}`)) locales.push('en');
	if (ids.includes(`fi/${postId}`)) locales.push('fi');
	if (ids.includes(`va/${postId}`)) locales.push('va');
	return locales;
}

export function buildBlogPosting(options: {
	url: string;
	title: string;
	description: string;
	published: Date;
	modified?: Date;
	author: BlogAuthorId;
	image: string;
	lang: Language;
}): JsonLdNode {
	const inLanguage =
		options.lang === 'es'
			? 'es-ES'
			: options.lang === 'fi'
				? 'fi-FI'
				: options.lang === 'va'
					? 'ca-ES-valencia'
					: 'en-US';
	return {
		'@type': 'BlogPosting',
		'@id': `${options.url}#article`,
		headline: options.title,
		description: options.description,
		datePublished: options.published.toISOString(),
		dateModified: (options.modified ?? options.published).toISOString(),
		author: { '@id': options.author === 'ramiro' ? RAMIRO_ID : CAYE_ID },
		publisher: { '@id': ORG_ID },
		image: new URL(options.image, SITE_ORIGIN).href,
		inLanguage,
		mainEntityOfPage: { '@type': 'WebPage', '@id': options.url },
	};
}
