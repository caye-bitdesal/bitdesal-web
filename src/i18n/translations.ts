export type Language = 'en' | 'es' | 'fi';

export const supportedLanguages: readonly Language[] = ['en', 'es', 'fi'] as const;
export const defaultLanguage: Language = 'en';

import { translations as makeTranslations } from './make-translations';

export const translations: Record<Language, any> = {
	es: {
		...makeTranslations.es,
		services: {
			...makeTranslations.es.services,
			ai: {
				title: 'Desarrollo asistido por IA',
				description:
					'Integramos agentes y herramientas (Cursor, revisiones automáticas, generación de tests, flujos con Figma) para acelerar la entrega y mejorar la calidad sin cambiar tu producto.',
				agentsTitle: 'Agentes y automatización para desarrollo',
				agent1: 'Code reviews asistidos por agentes',
				agent2: 'Generación de unit tests y UI tests',
				agent3: 'Diseño→código con Figma Make + Cursor (iteración rápida)',
				agent4: 'Refactors guiados, documentación y QA asistidos',
			},
		},
		prices: {
			...makeTranslations.es.prices,
			basePricing: {
				title: 'Tarifa única',
				subtitle: 'Una tarifa clara para todos los servicios',
				rateTitle: 'Tarifa única',
				price: '120',
				perHour: '/hora',
				description: 'Aplica a desarrollo Android, consultoría estratégica y mentoría.',
			},
			retainers: {
				...makeTranslations.es.prices.retainers,
				title: 'Planes mensuales',
				subtitle: 'Ahorra reservando horas cada mes',
			},
			examples: {
				...makeTranslations.es.prices.examples,
				consulting40: 'Consultoría (40h Enterprise): 4,320€/mes',
			},
		},
		nav: {
			home: 'Inicio',
			services: 'Servicios',
			methodology: 'Metodología',
			prices: 'Precios',
			about: 'Nosotros',
			blog: 'Blog',
			contact: 'Contacto',
		},
		footer: {
			tagline: 'Desarrollo Android, IA y Consultoría de alto nivel',
			servicesTitle: 'Servicios',
			androidDev: 'Desarrollo Android',
			ai: 'Inteligencia Artificial',
			mentorship: 'Mentoría',
			consulting: 'Consultoría',
			companyTitle: 'Empresa',
			aboutUs: 'Sobre nosotros',
			methodology: 'Metodología',
			blog: 'Blog',
			contactTitle: 'Contacto',
			contact: 'Contactar',
			linkedin: 'LinkedIn',
			rights: 'Todos los derechos reservados.',
		},
		notFound: {
			code: '404',
			title: 'Página no encontrada',
			description: 'Lo sentimos, la página que buscas no existe o ha sido movida.',
			home: 'Ir al inicio',
			back: 'Volver atrás',
		},
	},
	en: {
		...makeTranslations.en,
		services: {
			...makeTranslations.en.services,
			ai: {
				title: 'AI-assisted development',
				description:
					'We integrate agents and tools (Cursor workflows, automated reviews, test generation, Figma Make → code) to ship faster and raise quality—without “selling AI products”.',
				agentsTitle: 'Agents & automation for delivery',
				agent1: 'Agent-assisted code reviews',
				agent2: 'Unit + UI test generation',
				agent3: 'Design → code iteration with Figma Make + Cursor',
				agent4: 'Guided refactors, docs and QA assistance',
			},
		},
		prices: {
			...makeTranslations.en.prices,
			basePricing: {
				title: 'Single rate',
				subtitle: 'One clear rate across services',
				rateTitle: 'Single rate',
				price: '120',
				perHour: '/hour',
				description: 'Applies to Android development, strategic consulting, and mentorship.',
			},
			retainers: {
				...makeTranslations.en.prices.retainers,
				title: 'Monthly plans',
				subtitle: 'Save by booking hours each month',
			},
			examples: {
				...makeTranslations.en.prices.examples,
				consulting40: 'Consulting (40h Enterprise): €4,320/month',
			},
		},
		nav: {
			home: 'Home',
			services: 'Services',
			methodology: 'Methodology',
			prices: 'Pricing',
			about: 'About',
			blog: 'Blog',
			contact: 'Contact',
		},
		footer: {
			tagline: 'Android Development, AI and High-Level Consulting',
			servicesTitle: 'Services',
			androidDev: 'Android Development',
			ai: 'Artificial Intelligence',
			mentorship: 'Mentorship',
			consulting: 'Consulting',
			companyTitle: 'Company',
			aboutUs: 'About us',
			methodology: 'Methodology',
			blog: 'Blog',
			contactTitle: 'Contact',
			contact: 'Contact',
			linkedin: 'LinkedIn',
			rights: 'All rights reserved.',
		},
		notFound: {
			code: '404',
			title: 'Page not found',
			description: "Sorry, the page you're looking for doesn't exist or has been moved.",
			home: 'Go to home',
			back: 'Go back',
		},
	},
	fi: {
		...makeTranslations.fi,
		services: {
			...makeTranslations.fi.services,
			ai: {
				title: 'Tekoälyavusteinen kehitys',
				description:
					'Hyödynnämme agentteja ja työkaluja (Cursor-työnkulut, automaattiset katselmoinnit, testien generointi, Figma Make → koodi) nopeuttaaksemme toimitusta ja parantaaksemme laatua.',
				agentsTitle: 'Agentit ja automaatio toimitukseen',
				agent1: 'Agenttien tukemat code reviewt',
				agent2: 'Unit- ja UI-testien generointi',
				agent3: 'Design → code -iterointi Figma Make + Cursor',
				agent4: 'Ohjatut refaktoroinnit, dokumentaatio ja QA-avustus',
			},
		},
		prices: {
			...makeTranslations.fi.prices,
			basePricing: {
				title: 'Perushinta',
				subtitle: 'Yksi selkeä hinta kaikille palveluille',
				rateTitle: 'Yhden hinnan malli',
				price: '120',
				perHour: '/tunti',
				description: 'Sama hinta Android-kehitykselle, strategiselle konsultoinnille ja mentoroinnille.',
			},
			retainers: {
				...makeTranslations.fi.prices.retainers,
				title: 'Kuukausipaketit',
				subtitle: 'Säästä varaamalla tunteja kuukausittain',
			},
			examples: {
				...makeTranslations.fi.prices.examples,
				consulting40: 'Konsultointi (40h Enterprise): 4 320€/kk',
			},
		},
		nav: {
			home: 'Etusivu',
			services: 'Palvelut',
			methodology: 'Menetelmät',
			prices: 'Hinnoittelu',
			about: 'Tietoa',
			blog: 'Blogi',
			contact: 'Yhteystiedot',
		},
		footer: {
			tagline: 'Android-kehitys, tekoäly ja korkean tason konsultointi',
			servicesTitle: 'Palvelut',
			androidDev: 'Android-kehitys',
			ai: 'Tekoäly',
			mentorship: 'Mentorointi',
			consulting: 'Konsultointi',
			companyTitle: 'Yritys',
			aboutUs: 'Tietoa meistä',
			methodology: 'Menetelmät',
			blog: 'Blogi',
			contactTitle: 'Yhteystiedot',
			contact: 'Ota yhteyttä',
			linkedin: 'LinkedIn',
			rights: 'Kaikki oikeudet pidätetään.',
		},
		notFound: {
			code: '404',
			title: 'Sivua ei löytynyt',
			description: 'Pahoittelemme, etsimääsi sivua ei ole tai se on siirretty.',
			home: 'Etusivulle',
			back: 'Takaisin',
		},
	},
};

