import { getCollection } from 'astro:content';

export async function blogStaticPaths(locale: 'es' | 'en' | 'fi' | 'va' = 'es') {
	const posts = await getCollection('blog');
	const spanish = posts.filter((post) => !/^(en|fi|va)\//.test(post.id));
	const visible =
		locale === 'es'
			? spanish
			: spanish.filter((post) => posts.some((item) => item.id === `${locale}/${post.id}`));
	return visible.map((post) => ({ params: { slug: post.id }, props: { post } }));
}
