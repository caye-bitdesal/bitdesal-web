export type ProjectLine = 'automation' | 'software';

export type ProjectCard = {
	slug: string;
	line: ProjectLine;
	iconSrc: string;
	iconAlt: string;
	nameKey: string;
	tagKey: string;
	updatedKey: string;
	descriptionKey: string;
	href: string;
};

/** Public project listings (Yössä stays in Caye's trajectory only). */
export const projectCards: ProjectCard[] = [
	{
		slug: 'kivra',
		line: 'software',
		iconSrc: '/kivra-app-icon.png',
		iconAlt: 'Icono de Kivra Finland',
		nameKey: 'projects.kivra.name',
		tagKey: 'projects.kivra.tag',
		updatedKey: 'projects.kivra.updated',
		descriptionKey: 'projects.kivra.description',
		href: '/projects/kivra',
	},
	{
		slug: 'yossa',
		line: 'software',
		iconSrc: '/projects/yossa/yossa-app-icon.png',
		iconAlt: 'Icono de la app Yössä',
		nameKey: 'projects.yossa.name',
		tagKey: 'projects.yossa.tag',
		updatedKey: 'projects.yossa.updated',
		descriptionKey: 'projects.yossa.description',
		href: '/projects/yossa',
	},
];
