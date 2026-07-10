export interface LinkedInPost {
	url: string;
	titleKey: string;
	excerptKey: string;
	dateKey: string;
	image?: string;
	imageAltKey?: string;
	mediumUrl?: string;
}

export const linkedInPosts: LinkedInPost[] = [
	{
		url: 'https://www.linkedin.com/pulse/guide-how-implement-cicd-android-using-github-actions-bitdesal-murze/',
		titleKey: 'home.blog.posts.cicd.title',
		excerptKey: 'home.blog.posts.cicd.excerpt',
		dateKey: 'home.blog.posts.cicd.date',
		image: '/blog/cicd-android-github-actions.png',
		imageAltKey: 'home.blog.posts.cicd.imageAlt',
		mediumUrl: 'https://medium.com/@caye.suomi/a-guide-on-how-to-implement-ci-cd-for-android-using-github-actions-839256696fdd',
	},
	{
		url: 'https://www.linkedin.com/pulse/insomnia-ai-agents-8-hour-simple-feature-bitdesal-ytkke/',
		titleKey: 'home.blog.posts.insomnia.title',
		excerptKey: 'home.blog.posts.insomnia.excerpt',
		dateKey: 'home.blog.posts.insomnia.date',
		image: '/blog/insomnia-ai-agents-simple-feature.png',
		imageAltKey: 'home.blog.posts.insomnia.imageAlt',
	},
	{
		url: 'https://www.linkedin.com/pulse/can-you-afford-your-ai-assisted-development-bitdesal-ubtpe',
		titleKey: 'home.blog.posts.afford.title',
		excerptKey: 'home.blog.posts.afford.excerpt',
		dateKey: 'home.blog.posts.afford.date',
		image: '/blog/can-you-afford-ai-assisted-development.png',
		imageAltKey: 'home.blog.posts.afford.imageAlt',
	},
	{
		url: 'https://www.linkedin.com/pulse/beyond-vibe-coding-manifesto-sustainable-ai-engineering-bitdesal-x5bxe',
		titleKey: 'home.blog.posts.manifesto.title',
		excerptKey: 'home.blog.posts.manifesto.excerpt',
		dateKey: 'home.blog.posts.manifesto.date',
		image: '/blog/beyond-vibe-coding-manifesto.png',
		imageAltKey: 'home.blog.posts.manifesto.imageAlt',
	},
];
