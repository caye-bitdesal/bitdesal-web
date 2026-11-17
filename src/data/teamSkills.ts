export type SkillEntry = {
	id: string;
};

export const teamSkillsByMember: Record<string, SkillEntry[]> = {
	caye: [
		{ id: 'kotlin' },
		{ id: 'compose' },
		{ id: 'architecture' },
		{ id: 'testing' },
		{ id: 'ai' },
		{ id: 'mentoring' },
	],
	ramiro: [
		{ id: 'aiAutomation' },
		{ id: 'businessCentral' },
		{ id: 'webDev' },
		{ id: 'mobileApps' },
		{ id: 'itOps' },
		{ id: 'security' },
	],
};

export function skillsTranslationPrefix(memberId: string): string {
	if (memberId === 'caye') return 'about.skills';
	return `about.${memberId}.skills`;
}
