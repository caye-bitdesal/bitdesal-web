export type TeamExtendedSection = 'journey' | 'education' | 'skills' | 'languages';

export type TeamMember = {
	id: string;
	portrait: string;
	portraitAlt: string;
	nameKey: string;
	titleKey: string;
	bioKey: string;
	website?: string;
	linkedin?: string;
	linkedinPending?: boolean;
	github?: string;
	showExtendedProfile: boolean;
	extendedSections: TeamExtendedSection[];
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
		extendedSections: ['journey', 'education', 'skills'],
	},
	{
		id: 'ramiro',
		portrait: '/team-member-placeholder.svg',
		portraitAlt: 'TODO(caye): foto Ramiro',
		nameKey: 'about.team.ramiro.name',
		titleKey: 'about.team.ramiro.title',
		bioKey: 'about.team.ramiro.bio',
		website: 'https://ramirosantamaria.com',
		linkedinPending: true,
		showExtendedProfile: true,
		extendedSections: ['journey', 'education', 'languages'],
	},
];
