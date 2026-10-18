import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		audience: z.enum(['business', 'technical']).default('technical'),
	}),
});

export const collections = { blog };
