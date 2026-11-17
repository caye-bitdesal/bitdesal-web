/**
 * Sector landings linked from /consultoria-ia/.
 * A card is shown only when the matching page exists under src/pages.
 * TODO(caye): confirmar sectores y slugs antes de publicar las landings.
 */
export type SectorLanding = {
	slug: string;
	title: string;
	href: string;
};

export const sectorLandings: SectorLanding[] = [
	{
		slug: 'carpinteria-aluminio-pvc',
		title: 'Carpintería de aluminio y PVC',
		href: '/consultoria-ia/carpinteria-aluminio-pvc/',
	},
	{
		slug: 'reformas-instaladores',
		title: 'Reformas e instaladores',
		href: '/consultoria-ia/reformas-instaladores/',
	},
	{
		slug: 'carpinteria-madera',
		title: 'Carpintería de madera',
		href: '/consultoria-ia/carpinteria-madera/',
	},
	{
		slug: 'climatizacion-placas-solares',
		title: 'Climatización y placas solares',
		href: '/consultoria-ia/climatizacion-placas-solares/',
	},
	{
		slug: 'electricistas',
		title: 'Electricistas',
		href: '/consultoria-ia/electricistas/',
	},
	{
		slug: 'fontaneros',
		title: 'Fontaneros',
		href: '/consultoria-ia/fontaneros/',
	},
];
