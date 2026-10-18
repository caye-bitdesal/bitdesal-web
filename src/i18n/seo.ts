import type { Language } from './translations';

export type PageSeoId =
	| 'home'
	| 'iaConsulting'
	| 'consultoria'
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
			title: 'Bitdesal · Consultoría de IA y desarrollo de software',
			description:
				'Consultoría de IA para automatizar presupuestos, citas y papeleo, y desarrollo de software con precio cerrado. Agenda 30 minutos gratis.',
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
	iaConsulting: {
		es: {
			title: 'Consultoría de IA para empresas: automatiza presupuestos, citas y papeleo · Bitdesal',
			description:
				'¿Presupuestos a mano, citas perdidas o partes en papel? Automatizamos los procesos de tu empresa con IA. Precio cerrado desde el estudio.',
		},
		en: {
			title: 'AI consulting for business · Bitdesal',
			description:
				'Automate quotes, appointments and paperwork with AI. Fixed pricing from a process study.',
		},
		fi: {
			title: 'Tekoälykonsultointi yrityksille · Bitdesal',
			description: 'Prosessien automatisointi tekoälyllä. Kiinteä hinta prosessitutkimuksesta.',
		},
	},
	consultoria: {
		es: {
			title: 'Consultoría de software y desarrollo Android · Bitdesal',
			description:
				'Desarrollo Android, arquitectura y calidad para equipos técnicos. Apps en producción con cientos de miles de usuarios.',
		},
		en: {
			title: 'Software consulting and Android · Bitdesal',
			description: 'Senior Android development, architecture and quality for product teams.',
		},
		fi: {
			title: 'Ohjelmistokonsultointi ja Android · Bitdesal',
			description: 'Senior Android -kehitys ja arkkitehtuuri tuotetiimeille.',
		},
	},
	pricing: {
		es: {
			title: 'Precios: estudio de procesos y proyectos a precio cerrado · Bitdesal',
			description:
				'Estudio de procesos desde 450 € + IVA, proyectos a precio cerrado y bolsas de soporte sin permanencia. Sabes lo que pagas antes de empezar.',
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
			title: 'Nosotros · Bitdesal',
			description:
				'Bitdesal ayuda a empresas con automatización, software a medida y consultoría Android. Conoce al equipo y nuestra forma de trabajar.',
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
				'Cuéntanos qué necesitas. Te respondemos en menos de 24 horas laborables. Elche · remoto en toda España e internacional.',
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
