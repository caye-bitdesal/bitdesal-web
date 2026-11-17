import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		audience: z.enum(['business', 'technical']).default('technical'),
		/** Rich article shell (hero, pull quotes, in-content visuals). */
		layout: z.enum(['default', 'feature']).default('default'),
		heroImage: z.string().optional(),
		/** Title segment shown in accent color (feature layout). */
		titleHighlight: z.string().optional(),
		/** Deck line under the title (feature layout). */
		subtitle: z.string().optional(),
		ogImage: z.string().optional(),
	}),
});

export const collections = { blog };
