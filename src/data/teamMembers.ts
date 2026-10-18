export type TeamMember = {
	id: string;
	portrait: string;
	portraitAlt: string;
	nameKey: string;
	titleKey: string;
	bioKey: string;
	linkedin?: string;
	github?: string;
	/** Journey, education and skills blocks (per-member CV on Nosotros). */
	showExtendedProfile: boolean;
};

export const teamMembers: TeamMember[] = [
	{
		id: 'caye',
		portrait: '/caye-ruiz-portrait.jpg',
		portraitAlt: 'Caye Ruiz',
		nameKey: 'about.bio.name',
		titleKey: 'about.bio.title',
		bioKey: 'about.team.cayeBio',
		linkedin: 'https://www.linkedin.com/in/cayeruiz',
		github: 'https://github.com/caye-bitdesal',
		showExtendedProfile: true,
	},
];
