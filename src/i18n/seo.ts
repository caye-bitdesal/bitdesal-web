import type { Language } from './translations';

export type PageSeoId =
	| 'home'
	| 'pricing'
	| 'about'
	| 'projects'
	| 'blog'
	| 'contact'
	| 'notFound';

type SeoEntry = { title: string; description: string };

const seoByPage: Record<PageSeoId, Record<Language, SeoEntry>> = {
	home: {
		es: {
			title: 'Automatización e IA para pymes · Bitdesal',
			description:
				'Automatizo procesos de tu pyme con software e IA a precio cerrado. Agenda 30 minutos gratis y te digo si compensa y cuánto costaría.',
		},
		en: {
			title: 'Android, AI and software consulting · Bitdesal',
			description:
				'Senior Android and AI consulting with clear specs and measurable delivery. Book a free 30-minute call to discuss your project.',
		},
		fi: {
			title: 'Android, tekoäly ja ohjelmistokonsultointi · Bitdesal',
			description:
				'Senior-tason Android- ja tekoälykonsultointia selkeillä spekseillä. Varaa ilmainen 30 minuutin kartoitus.',
		},
	},
	pricing: {
		es: {
			title: 'Precios: estudio de procesos y proyectos a precio cerrado · Bitdesal',
			description:
				'Estudio de procesos desde 450 €, proyectos a precio cerrado y bolsas de soporte sin permanencia. Sabes lo que pagas antes de empezar.',
		},
		en: {
			title: 'Pricing · Bitdesal',
			description: 'Transparent hourly rate and phased estimates. Request an initial assessment.',
		},
		fi: {
			title: 'Hinnasto · Bitdesal',
			description: 'Läpinäkyvä tuntihinta ja vaiheittaiset arviot.',
		},
	},
	about: {
		es: {
			title: 'Caye Ruiz, ingeniero de software con 20 años de experiencia · Bitdesal',
			description:
				'Fundador de Bitdesal. 20 años construyendo software en España, Suiza y Finlandia. Te ayudo a quitar papeleo con automatización e IA.',
		},
		en: {
			title: 'About Caye Ruiz · Bitdesal',
			description: 'Senior Android engineer and Bitdesal founder with 20 years of international experience.',
		},
		fi: {
			title: 'Caye Ruiz · Bitdesal',
			description: 'Senior Android -insinööri ja Bitdesalin perustaja.',
		},
	},
	projects: {
		es: {
			title: 'Proyectos y casos · Bitdesal',
			description: 'Casos reales: Kivra Finlandia y otros proyectos Android y de software.',
		},
		en: {
			title: 'Projects · Bitdesal',
			description: 'Selected Android and software projects delivered by Bitdesal.',
		},
		fi: {
			title: 'Projektit · Bitdesal',
			description: 'Valikoituja Android- ja ohjelmistoprojekteja.',
		},
	},
	blog: {
		es: {
			title: 'Blog sobre IA, software y digitalización · Bitdesal',
			description: 'Artículos sobre Android, IA e ingeniería de software para equipos y empresas.',
		},
		en: {
			title: 'Blog · Bitdesal',
			description: 'Articles on Android, AI and engineering from Bitdesal.',
		},
		fi: {
			title: 'Blogi · Bitdesal',
			description: 'Artikkeleita Androidista, tekoälystä ja insinöörityöstä.',
		},
	},
	contact: {
		es: {
			title: 'Contacto · Bitdesal',
			description:
				'Cuéntame qué tarea te roba más horas. Te respondo en menos de 24 horas laborables. Elche · remoto en toda España.',
		},
		en: {
			title: 'Contact · Bitdesal',
			description: 'Get in touch about your project. Remote across Europe.',
		},
		fi: {
			title: 'Yhteystiedot · Bitdesal',
			description: 'Ota yhteyttä projektistasi.',
		},
	},
	notFound: {
		es: {
			title: 'Página no encontrada · Bitdesal',
			description: 'La página que buscas no existe.',
		},
		en: {
			title: 'Page not found · Bitdesal',
			description: 'The page you are looking for does not exist.',
		},
		fi: {
			title: 'Sivua ei löydy · Bitdesal',
			description: 'Etsimääsi sivua ei ole olemassa.',
		},
	},
};

export function getPageSeo(page: PageSeoId, lang: Language): SeoEntry {
	return seoByPage[page][lang] ?? seoByPage[page].es;
}
