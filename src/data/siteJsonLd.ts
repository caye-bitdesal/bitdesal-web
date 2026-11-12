import { SITE_ORIGIN, CONTACT_EMAIL, CONTACT_PHONE_E164 } from './siteConstants';
import { getTeamMember } from './teamMembers';
import type { Language } from '../i18n/translations';

export const ORG_ID = `${SITE_ORIGIN}/#org`;
export const WEBSITE_ID = `${SITE_ORIGIN}/#website`;
export const CAYE_ID = `${SITE_ORIGIN}/#caye`;
export const RAMIRO_ID = `${SITE_ORIGIN}/#ramiro`;

const LINKEDIN_COMPANY = 'https://www.linkedin.com/company/112619745';

const KNOWS_ABOUT = [
	'consultoría de IA',
	'automatización de procesos',
	'agentes de IA',
	'desarrollo Android',
	'Kotlin',
	'Jetpack Compose',
	'Kotlin Multiplatform',
	'arquitectura de software',
];

const AREA_SERVED = [
	{ '@type': 'Country', name: 'España' },
	{ '@type': 'AdministrativeArea', name: 'Comunidad Valenciana' },
	{ '@type': 'AdministrativeArea', name: 'Alicante' },
	{ '@type': 'City', name: 'Elche' },
];

function cayeJobTitle(lang: Language): string {
	if (lang === 'en') return 'Founder and Android & AI consultant';
	if (lang === 'fi') return 'Perustaja sekä Android- ja tekoälykonsultti';
	return 'Fundador y consultor Android e IA';
}

export type JsonLdNode = Record<string, unknown>;

export function buildSiteGraph(lang: Language, extraNodes: JsonLdNode[] = []): JsonLdNode {
	const caye = getTeamMember('caye');
	const ramiro = getTeamMember('ramiro');

	const org: JsonLdNode = {
		'@type': ['Organization', 'ProfessionalService'],
		'@id': ORG_ID,
		name: 'Bitdesal',
		url: SITE_ORIGIN,
		logo: `${SITE_ORIGIN}/logo.png`,
		image: `${SITE_ORIGIN}/logo.png`,
		email: CONTACT_EMAIL,
		telephone: CONTACT_PHONE_E164,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Elche',
			addressRegion: 'Comunidad Valenciana',
			addressCountry: 'ES',
		},
		areaServed: AREA_SERVED,
		founder: { '@id': CAYE_ID },
		knowsAbout: KNOWS_ABOUT,
		priceRange: '€€',
		sameAs: [
			LINKEDIN_COMPANY,
			// TODO(caye): perfil Malt
			// TODO(caye): perfil GitHub de la empresa
			// TODO(caye): Perfil de Empresa de Google
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Servicios Bitdesal',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Consultoría de IA para empresas',
						url: `${SITE_ORIGIN}/consultoria-ia/`,
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Desarrollo y consultoría de software',
						url: `${SITE_ORIGIN}/consultoria-software/`,
					},
				},
			],
		},
	};

	const website: JsonLdNode = {
		'@type': 'WebSite',
		'@id': WEBSITE_ID,
		name: 'Bitdesal',
		url: SITE_ORIGIN,
		publisher: { '@id': ORG_ID },
	};

	const personCaye: JsonLdNode = {
		'@type': 'Person',
		'@id': CAYE_ID,
		name: 'Caye Ruiz',
		jobTitle: cayeJobTitle(lang),
		url: `${SITE_ORIGIN}/caye/`,
		worksFor: { '@id': ORG_ID },
		knowsAbout: KNOWS_ABOUT,
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
