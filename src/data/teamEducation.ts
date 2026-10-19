export type EducationEntry = {
	id: string;
};

export const teamEducationByMember: Record<string, EducationEntry[]> = {
	caye: [{ id: 'main' }],
	ramiro: [
		{ id: 'licenciatura' },
		{ id: 'windowsServer' },
		{ id: 'irata' },
	],
};

export function educationTranslationPrefix(memberId: string): string {
	if (memberId === 'caye') return 'about.education';
	return `about.${memberId}.education`;
}
