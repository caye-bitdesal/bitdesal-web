export type LanguageEntry = {
	id: string;
};

export const teamLanguagesByMember: Record<string, LanguageEntry[]> = {
	caye: [{ id: 'spanish' }, { id: 'english' }, { id: 'valencian' }, { id: 'finnish' }],
	ramiro: [{ id: 'spanish' }, { id: 'english' }],
};

export function languagesTranslationPrefix(memberId: string): string {
	if (memberId === 'caye') return 'about.languages';
	return `about.${memberId}.languages`;
}
