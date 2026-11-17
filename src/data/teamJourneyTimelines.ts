export type JourneyIcon = 'briefcase' | 'phone' | 'code' | 'web';

export type JourneyTimelineEntry = {
	id: string;
	icon: JourneyIcon;
	itemCount: number;
};

/** Timeline entry order per team member (copy in i18n). */
export const teamJourneyByMember: Record<string, JourneyTimelineEntry[]> = {
	caye: [
		{ id: 'bitdesal', icon: 'briefcase', itemCount: 2 },
		{ id: 'kivra', icon: 'phone', itemCount: 3 },
		{ id: 'optiscan', icon: 'code', itemCount: 2 },
		{ id: 'frosmo', icon: 'web', itemCount: 2 },
		{ id: 'sankarimedia', icon: 'phone', itemCount: 2 },
		{ id: 'awimbawe', icon: 'phone', itemCount: 2 },
		{ id: 'sicpa', icon: 'code', itemCount: 3 },
		{ id: 'entropia', icon: 'web', itemCount: 1 },
		{ id: 'comeks', icon: 'web', itemCount: 1 },
	],
	ramiro: [
		{ id: 'aiAgents', icon: 'code', itemCount: 1 },
		{ id: 'ininin', icon: 'briefcase', itemCount: 2 },
		{ id: 'mobileFreelance', icon: 'phone', itemCount: 1 },
		{ id: 'webFreelance', icon: 'web', itemCount: 1 },
		{ id: 'alphaBiosciences', icon: 'briefcase', itemCount: 1 },
		{ id: 'bilbaoShopping', icon: 'phone', itemCount: 1 },
		{ id: 'awimbaweJava', icon: 'code', itemCount: 1 },
		{ id: 'citef', icon: 'code', itemCount: 1 },
		{ id: 'otherExperiences', icon: 'briefcase', itemCount: 0 },
	],
};

export function journeyTranslationPrefix(memberId: string): string {
	return memberId === 'caye' ? 'about.journey' : `about.${memberId}.journey`;
}
