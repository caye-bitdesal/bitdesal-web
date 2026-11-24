import { SITE_ORIGIN, CONTACT_EMAIL, CONTACT_PHONE_E164, LEGAL_HOLDER_NAME, LEGAL_TAX_ID } from './siteConstants';
import { getTeamMember } from './teamMembers';
import { localizedPath } from '../i18n/localizedRoutes';
import type { Language } from '../i18n/translations';

export const ORG_ID = `${SITE_ORIGIN}/#org`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const CAYE_ID = `${SITE_ORIGIN}/#caye`;
export const RAMIRO_ID = `${SITE_ORIGIN}/#ramiro`;

const LINKEDIN_COMPANY = 'https://www.linkedin.com/company/112619745';

const KNOWS_ABOUT_BY_LANG: Record<Language, string[]> = {
	es: [
		'consultoría de IA',
		'automatización de procesos',
		'agentes de IA',
		'desarrollo Android',
		'Kotlin',
		'Jetpack Compose',
		'Kotlin Multiplatform',
		'arquitectura de software',
	],
	en: [
		'AI consulting',
		'process automation',
		'AI agents',
		'Android development',
		'Kotlin',
		'Jetpack Compose',
		'Kotlin Multiplatform',
		'software architecture',
	],
	fi: [
		'tekoälykonsultointi',
		'prosessiautomaatio',
		'tekoälyagentit',
		'Android-kehitys',
		'Kotlin',
		'Jetpack Compose',
		'Kotlin Multiplatform',
		'ohjelmistoarkkitehtuuri',
	],
	va: [
		"consultoria d'IA",
		'automatització de processos',
		"agents d'IA",
		'desenvolupament Android',
		'Kotlin',
		'Jetpack Compose',
		'Kotlin Multiplatform',
		'arquitectura de programari',
	],
};

function offerCatalog(lang: Language) {
	const path = (segment: string) => `${SITE_ORIGIN}${localizedPath(segment, lang)}`;
	if (lang === 'va') {
		return {
			'@type': 'OfferCatalog',
			name: 'Serveis Bitdesal',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: "Consultoria d'IA per a empreses",
						url: path('/consultoria-ia'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: "Consultoria d'IA en Alacant i Elx",
						url: path('/consultoria-ia-alicante-elche'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Automatització de processos amb IA',
						url: path('/automatizacion-procesos-ia'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: "Agents d'IA per a empreses",
						url: path('/agentes-ia-empresas'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Desenvolupament i consultoria de programari',
						url: path('/consultoria-software'),
					},
				},
			],
		};
	}
	if (lang === 'en') {
		return {
			'@type': 'OfferCatalog',
			name: 'Bitdesal services',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI consulting for business',
						url: path('/consultoria-ia'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI consulting in Alicante and Elche',
						url: path('/consultoria-ia-alicante-elche'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI process automation',
						url: path('/automatizacion-procesos-ia'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'AI agents for business',
						url: path('/agentes-ia-empresas'),
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Software development and consulting',
						url: path('/consultoria-software'),
					},
				},
			],
		};
	}
	return {
		'@type': 'OfferCatalog',
		name: 'Servicios Bitdesal',
		itemListElement: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Consultoría de IA para empresas',
					url: path('/consultoria-ia'),
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Consultoría de IA en Alicante y Elche',
					url: path('/consultoria-ia-alicante-elche'),
					areaServed: AREA_SERVED.slice(0, 3),
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Automatización de procesos con IA',
					url: path('/automatizacion-procesos-ia'),
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Agentes de IA para empresas',
					url: path('/agentes-ia-empresas'),
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Desarrollo y consultoría de software',
					url: path('/consultoria-software'),
				},
			},
		],
	};
}

const AREA_SERVED = [
	{ '@type': 'City', name: 'Elche', sameAs: 'https://es.wikipedia.org/wiki/Elche' },
	{ '@type': 'City', name: 'Alicante', sameAs: 'https://es.wikipedia.org/wiki/Alicante' },
	{
		'@type': 'AdministrativeArea',
		name: 'Provincia de Alicante',
		sameAs: 'https://es.wikipedia.org/wiki/Provincia_de_Alicante',
	},
	{ '@type': 'AdministrativeArea', name: 'Comunidad Valenciana' },
	{ '@type': 'Country', name: 'España' },
];

const AREA_SERVED_VA = [
	{ '@type': 'City', name: 'Elx', sameAs: 'https://ca.wikipedia.org/wiki/Elx' },
	{ '@type': 'City', name: 'Alacant', sameAs: 'https://ca.wikipedia.org/wiki/Alacant' },
	{
		'@type': 'AdministrativeArea',
		name: "Província d'Alacant",
		sameAs: 'https://ca.wikipedia.org/wiki/Prov%C3%ADncia_d%27Alacant',
	},
	{ '@type': 'AdministrativeArea', name: 'País Valencià' },
	{ '@type': 'Country', name: 'Espanya' },
];

const ORG_DESCRIPTION: Record<Language, string> = {
	es: 'Consultoría de inteligencia artificial y desarrollo de software con sede en Elche (Alicante). Automatiza presupuestos, citas, partes y papeleo para pymes de Elche, Alicante y el resto de España, con precio cerrado.',
	en: 'AI consulting and software development company based in Elche (Alicante, Spain). Automates quotes, appointments, job reports and paperwork for SMEs, with fixed pricing.',
	fi: 'Tekoälykonsultointia ja ohjelmistokehitystä Elchestä (Alicante, Espanja). Automatisoimme tarjoukset, ajanvaraukset ja paperityöt kiinteällä hinnalla.',
	va: 'Consultoria d\'intel·ligència artificial i desenvolupament de programari des d\'Elx (Alacant). Automatitzem pressupostos, cites i paperam per a pimes amb preu tancat.',
};

function cayeJobTitle(lang: Language): string {
	if (lang === 'en') return 'Founder and Android & AI consultant';
	if (lang === 'fi') return 'Perustaja sekä Android- ja tekoälykonsultti';
	if (lang === 'va') return 'Fundador i consultor Android i IA';
	return 'Fundador y consultor Android e IA';
}

export type JsonLdNode = Record<string, unknown>;

export function buildSiteGraph(lang: Language, extraNodes: JsonLdNode[] = []): JsonLdNode {
	const caye = getTeamMember('caye');
	const ramiro = getTeamMember('ramiro');
	const areaServed = lang === 'va' ? AREA_SERVED_VA : AREA_SERVED;
	const postalAddress =
		lang === 'va'
			? { '@type': 'PostalAddress', addressLocality: 'Elx', addressRegion: 'Alacant', addressCountry: 'ES' }
			: { '@type': 'PostalAddress', addressLocality: 'Elche', addressRegion: 'Alicante', addressCountry: 'ES' };

	const org: JsonLdNode = {
		'@type': ['Organization', 'ProfessionalService'],
		'@id': ORG_ID,
		name: 'Bitdesal',
		legalName: LEGAL_HOLDER_NAME,
		taxID: LEGAL_TAX_ID,
		description: ORG_DESCRIPTION[lang],
		url: SITE_ORIGIN,
		logo: `${SITE_ORIGIN}/logo.png`,
		image: `${SITE_ORIGIN}/logo.png`,
		email: CONTACT_EMAIL,
		telephone: CONTACT_PHONE_E164,
		address: postalAddress,
		areaServed,
		founder: { '@id': CAYE_ID },
		employee: [{ '@id': CAYE_ID }, { '@id': RAMIRO_ID }],
		knowsAbout: KNOWS_ABOUT_BY_LANG[lang],
		priceRange: '€€',
		sameAs: [
			LINKEDIN_COMPANY,
			// TODO(caye): perfil Malt
			// TODO(caye): perfil GitHub de la empresa
			// TODO(caye): Perfil de Empresa de Google
		],
		hasOfferCatalog: offerCatalog(lang),
	};

	const website: JsonLdNode = {
		'@type': 'WebSite',
		'@id': WEBSITE_ID,
		name: 'Bitdesal',
		url: SITE_ORIGIN,
		inLanguage: ['es', 'en', 'fi', 'va'],
		publisher: { '@id': ORG_ID },
	};

	const personCaye: JsonLdNode = {
		'@type': 'Person',
		'@id': CAYE_ID,
		name: 'Caye Ruiz',
		jobTitle: cayeJobTitle(lang),
		url: `${SITE_ORIGIN}/caye/`,
		worksFor: { '@id': ORG_ID },
		knowsAbout: KNOWS_ABOUT_BY_LANG[lang],
		sameAs: [
			caye?.linkedin,
			caye?.github,
			// TODO(caye): Medium
		].filter(Boolean),
	};

	const ramiroTitles: Record<Language, string> = {
		es: 'Automatización con IA e IT',
		en: 'AI automation and IT',
		fi: 'Tekoälyautomaatio ja IT',
		va: 'Automatització amb IA i IT',
	};

	const personRamiro: JsonLdNode = {
		'@type': 'Person',
		'@id': RAMIRO_ID,
		name: 'Ramiro Santamaría',
		jobTitle: ramiroTitles[lang],
		url: `${SITE_ORIGIN}/ramiro/`,
		worksFor: { '@id': ORG_ID },
		sameAs: [ramiro?.website, ramiro?.linkedin].filter(Boolean),
	};

	return {
		'@context': 'https://schema.org',
		'@graph': [org, website, personCaye, personRamiro, ...extraNodes],
	};
}

export type BreadcrumbItem = { name: string; href?: string };

export function buildBreadcrumbListJsonLd(canonical: string, items: BreadcrumbItem[]): JsonLdNode {
	return {
		'@type': 'BreadcrumbList',
		'@id': `${canonical}#breadcrumb`,
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			...(item.href ? { item: item.href } : {}),
		})),
	};
}

export function buildFaqPageJsonLd(canonical: string, qa: { question: string; answer: string }[]): JsonLdNode {
	return {
		'@type': 'FAQPage',
		'@id': `${canonical}#faq`,
		mainEntity: qa.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}
