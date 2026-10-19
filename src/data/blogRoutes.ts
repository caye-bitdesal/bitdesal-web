import { getCollection } from 'astro:content';

export async function blogStaticPaths() {
	const posts = await getCollection('blog');
	return posts
		.filter((post) => !/^(en|fi)\//.test(post.id))
		.map((post) => ({ params: { slug: post.id }, props: { post } }));
}
