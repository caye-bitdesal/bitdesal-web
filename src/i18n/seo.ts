import type { Language } from './translations';

export type PageSeoId =
	| 'home'
	| 'iaConsulting'
	| 'consultoria'
	| 'pricing'
	| 'workAndPricing'
	| 'about'
	| 'projects'
	| 'projectKivra'
	| 'projectYossa'
	| 'blog'
	| 'contact'
	| 'legalNotice'
	| 'privacy'
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
	workAndPricing: {
		es: {
			title: 'Casos y precios: proyectos y tarifas a precio cerrado · Bitdesal',
			description:
				'Proyectos reales y tarifas a precio cerrado: estudio de procesos, implementación y bolsas de soporte. Sin letra pequeña, con IVA desglosado.',
		},
		en: {
			title: 'Work & pricing: case studies and fixed rates · Bitdesal',
			description:
				'Real projects and fixed-price rates: process study, implementation and support bundles. No small print, VAT shown separately.',
		},
		fi: {
			title: 'Referenssit ja hinnat: hankkeet ja kiinteät hinnat · Bitdesal',
			description:
				'Oikeita hankkeita ja kiinteitä hintoja: prosessitutkimus, toteutus ja tukipaketit. Ei pientä pränttiä, ALV eriteltynä.',
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
			description:
				'Casos reales de Bitdesal: la app Android de Kivra en Finlandia y Yössä, el buscador de ocio nocturno. Software en producción con resultados medibles.',
		},
		en: {
			title: 'Projects · Bitdesal',
			description:
				'Real Bitdesal case studies: Kivra’s Android digital mail app in Finland and Yössä, the nightlife finder. Production software with measurable results.',
		},
		fi: {
			title: 'Projektit · Bitdesal',
			description:
				'Bitdesalin oikeat tapaukset: Kivran Android-sovellus Suomessa ja Yössä, yöelämän hakusovellus. Tuotanto-ohjelmistoja mitattavin tuloksin joka päivä.',
		},
	},
	projectKivra: {
		es: {
			title: 'Caso Kivra: app Android de correo digital en Finlandia · Bitdesal',
			description:
				'Cómo lideramos durante 7 años la app Android de Kivra Finlandia: más de 100.000 descargas, 4,3★ y 99,9 % de sesiones sin fallos.',
		},
		en: {
			title: 'Kivra case study: digital mail Android app in Finland · Bitdesal',
			description:
				'How we led Kivra Finland’s Android app for seven years: over 100,000 downloads, 4.3★ on Play Store and 99.9% crash-free sessions.',
		},
		fi: {
			title: 'Kivra-case: digitaalisen postin Android-sovellus Suomessa · Bitdesal',
			description:
				'Miten johdimme seitsemän vuotta Kivra Suomen Android-sovellusta: yli 100 000 latausta, 4,3★ ja 99,9 % istuntoja ilman kaatumisia.',
		},
	},
	projectYossa: {
		es: {
			title: 'Yössä: app Android de ocio nocturno · Bitdesal',
			description:
				'App para salir de noche: bares, conciertos y eventos a tu alrededor, con ofertas de bebidas que se activan cuando estás lo bastante cerca para usarlas.',
		},
		en: {
			title: 'Yössä: nightlife Android app · Bitdesal',
			description:
				'Android nightlife app for bars, concerts and nearby events, with drink deals that unlock when you are close enough to use them.',
		},
		fi: {
			title: 'Yössä: yöelämän Android-sovellus · Bitdesal',
			description:
				'Yöelämän sovellus: baarit, konsertit ja tapahtumat ympärilläsi sekä juomatarjoukset, jotka aktivoituvat kun olet tarpeeksi lähellä käyttääksesi niitä.',
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
				'Cuéntanos qué necesitas. Te respondemos en menos de 24 horas laborables. Elche · principalmente en remoto; planificación en Alicante; desplazamientos puntuales en España o la UE.',
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
	legalNotice: {
		es: {
			title: 'Aviso legal · Bitdesal',
			description:
				'Datos identificativos, condiciones de uso, propiedad intelectual y jurisdicción de bitdesal.com, conforme a la LSSI-CE.',
		},
		en: {
			title: 'Legal notice · Bitdesal',
			description:
				'Identification, terms of use, intellectual property and jurisdiction of bitdesal.com. Translation; the Spanish version prevails.',
		},
		fi: {
			title: 'Oikeudellinen ilmoitus · Bitdesal',
			description:
				'Bitdesal.comin tunnistetiedot, käyttöehdot, immateriaalioikeudet ja tuomioistuin. Käännös; espanjankielinen versio on ensisijainen.',
		},
	},
	privacy: {
		es: {
			title: 'Política de privacidad · Bitdesal',
			description:
				'Cómo tratamos tus datos en el formulario, las citas y como clientes: finalidades, plazos, destinatarios y tus derechos RGPD.',
		},
		en: {
			title: 'Privacy policy · Bitdesal',
			description:
				'How we process your data from the contact form, bookings and as clients: purposes, retention, recipients and your GDPR rights.',
		},
		fi: {
			title: 'Tietosuojakäytäntö · Bitdesal',
			description:
				'Miten käsittelemme tietojasi lomakkeesta, ajanvarauksesta ja asiakkuudesta: tarkoitukset, säilytys, vastaanottajat ja GDPR-oikeutesi.',
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
