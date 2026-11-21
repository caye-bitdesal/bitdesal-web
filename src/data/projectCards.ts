export type ProjectLine = 'automation' | 'software';
export type ProjectPlatform = 'web' | 'android';

export type ProjectCard = {
	slug: string;
	line: ProjectLine;
	platform: ProjectPlatform;
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
		slug: 'amartevitalflow',
		line: 'software',
		platform: 'web',
		iconSrc: '/projects/amartevitalflow/amartevitalflow-app-icon.png',
		iconAlt: "Am'Arte Vital Flow",
		nameKey: 'projects.amarteVitalFlow.name',
		tagKey: 'projects.amarteVitalFlow.tag',
		updatedKey: 'projects.amarteVitalFlow.updated',
		descriptionKey: 'projects.amarteVitalFlow.description',
		href: '/projects/amartevitalflow',
	},
	{
		slug: 'muixeranga',
		line: 'software',
		platform: 'web',
		iconSrc: '/projects/muixeranga/muixeranga-app-icon.png',
		iconAlt: "Icono de Muixeranga d'Elx",
		nameKey: 'projects.muixeranga.name',
		tagKey: 'projects.muixeranga.tag',
		updatedKey: 'projects.muixeranga.updated',
		descriptionKey: 'projects.muixeranga.description',
		href: '/projects/muixeranga',
	},
	{
		slug: 'regaloskawaii',
		line: 'software',
		platform: 'web',
		iconSrc: '/projects/regaloskawaii/regaloskawaii-app-icon.png',
		iconAlt: 'Icono de Regalos Kawaii',
		nameKey: 'projects.regalosKawaii.name',
		tagKey: 'projects.regalosKawaii.tag',
		updatedKey: 'projects.regalosKawaii.updated',
		descriptionKey: 'projects.regalosKawaii.description',
		href: '/projects/regaloskawaii',
	},
	{
		slug: 'kivra',
		line: 'software',
		platform: 'android',
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
		platform: 'android',
		iconSrc: '/projects/yossa/yossa-app-icon.png',
		iconAlt: 'Icono de la app Yössä',
		nameKey: 'projects.yossa.name',
		tagKey: 'projects.yossa.tag',
		updatedKey: 'projects.yossa.updated',
		descriptionKey: 'projects.yossa.description',
		href: '/projects/yossa',
	},
];
