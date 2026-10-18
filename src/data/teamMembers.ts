export type TeamMemberId = 'caye' | 'ramiro';

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
		extendedSections: ['journey', 'education', 'skills', 'languages'],
	},
	{
		id: 'ramiro',
		portrait: '/ramiro-santamaria-portrait.jpg',
		portraitAlt: 'Ramiro Santamaría',
		nameKey: 'about.team.ramiro.name',
		titleKey: 'about.team.ramiro.title',
		bioKey: 'about.team.ramiro.bio',
		website: 'https://ramirosantamaria.com',
		linkedin: 'https://www.linkedin.com/in/ramiro-santamaria-alvarez/',
		showExtendedProfile: true,
		extendedSections: ['journey', 'education', 'skills', 'languages'],
	},
];

export function getTeamMember(id: string): TeamMember | undefined {
	return teamMembers.find((member) => member.id === id);
}
