import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = (await getCollection('blog'))
		.filter((post) => !/^(en|fi)\//.test(post.id))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	return rss({
		title: 'Bitdesal',
		description:
			'Artículos de Bitdesal sobre consultoría de IA, automatización de procesos y desarrollo Android.',
		site: context.site ?? 'https://bitdesal.com',
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
		customData: '<language>es-es</language>',
	});
}
