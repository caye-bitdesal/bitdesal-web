import type { Language } from './translations';

export type PageSeoId =
	| 'home'
	| 'iaConsulting'
	| 'consultoria'
	| 'androidConsulting'
	| 'androidAudit'
	| 'processAutomation'
	| 'aiAgents'
	| 'localElche'
	| 'pricing'
	| 'workAndPricing'
	| 'about'
	| 'projects'
	| 'projectKivra'
	| 'projectMuixeranga'
	| 'projectRegalosKawaii'
	| 'projectYossa'
	| 'blog'
	| 'contact'
	| 'legalNotice'
	| 'privacy'
	| 'notFound'
	| 'cayeProfile'
	| 'ramiroProfile';

type SeoEntry = { title: string; description: string };

const seoByPage: Record<PageSeoId, Record<Language, SeoEntry>> = {
	home: {
		es: {
			title: 'Consultoría de IA y software en Elche y Alicante · Bitdesal',
			description:
				'Consultores de IA en Elche (Alicante): automatizamos presupuestos, citas y papeleo, y desarrollamos software con precio cerrado. Agenda 30 minutos gratis.',
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
			title: 'Consultoría de IA para empresas: automatiza el papeleo · Bitdesal',
			description:
				'Automatizamos presupuestos, citas, partes y papeleo con consultoría de IA. Precio cerrado desde el estudio de 450 €. Agenda 30 minutos gratis.',
		},
		en: {
			title: 'AI consulting for business: automate paperwork · Bitdesal',
			description:
				'Automate quotes, appointments and paperwork with AI. Fixed pricing from a process study.',
		},
		fi: {
			title: 'Tekoälykonsultointi: automatisoi paperityöt · Bitdesal',
			description: 'Prosessien automatisointi tekoälyllä. Kiinteä hinta prosessitutkimuksesta.',
		},
	},
	androidConsulting: {
		es: {
			title: 'Desarrollo de apps Android con Kotlin para empresas · Bitdesal',
			description:
				'Desarrolladores de aplicaciones Android senior: apps en Kotlin y Jetpack Compose con calidad SOLID, entregas semanales y sin dependencia. Agenda 30 min gratis.',
		},
		en: {
			title: 'Senior Android consultant: Kotlin and Jetpack Compose · Bitdesal',
			description:
				'Senior Android consulting for product teams: Kotlin, architecture, legacy rescue and quality. Production-grade delivery. Book a free 30-minute call.',
		},
		fi: {
			title: 'Senior Android -konsultti: Kotlin ja Jetpack Compose · Bitdesal',
			description:
				'Senior Android -konsultointia tuotetiimeille: Kotlin, arkkitehtuuri, legacy ja laatu. Varaa ilmainen 30 minuutin puhelu.',
		},
	},
	androidAudit: {
		es: {
			title: 'Auditoría de apps Android: estabilidad, rendimiento y código · Bitdesal',
			description:
				'Auditoría app Android: arquitectura, crashes, rendimiento, seguridad y CI/CD. Informe priorizado y plan de mejora. Agenda 30 min.',
		},
		en: {
			title: 'Auditoría de apps Android: estabilidad, rendimiento y código · Bitdesal',
			description:
				'Auditoría app Android: arquitectura, crashes, rendimiento, seguridad y CI/CD. Informe priorizado y plan de mejora. Agenda 30 min.',
		},
		fi: {
			title: 'Auditoría de apps Android: estabilidad, rendimiento y código · Bitdesal',
			description:
				'Auditoría app Android: arquitectura, crashes, rendimiento, seguridad y CI/CD. Informe priorizado y plan de mejora. Agenda 30 min.',
		},
	},
	processAutomation: {
		es: {
			title: 'Automatización de procesos con IA para empresas · Bitdesal',
			description:
				'Automatiza presupuestos, citas, partes y pedidos con IA sin cambiar de programa. Precio cerrado desde el estudio de 450 €. Agenda 30 minutos gratis.',
		},
		en: {
			title: 'Automatización de procesos con IA para empresas · Bitdesal',
			description:
				'Automatiza presupuestos, citas, partes y pedidos con IA sin cambiar de programa. Precio cerrado desde el estudio de 450 €. Agenda 30 minutos gratis.',
		},
		fi: {
			title: 'Automatización de procesos con IA para empresas · Bitdesal',
			description:
				'Automatiza presupuestos, citas, partes y pedidos con IA sin cambiar de programa. Precio cerrado desde el estudio de 450 €. Agenda 30 minutos gratis.',
		},
	},
	aiAgents: {
		es: {
			title: 'Agentes de IA para empresas: qué son y casos reales · Bitdesal',
			description:
				'Un agente de IA lee, decide y actúa en WhatsApp, documentos y presupuestos. Una persona confirma lo que compromete. Agenda 30 minutos gratis.',
		},
		en: {
			title: 'Agentes de IA para empresas: qué son y casos reales · Bitdesal',
			description:
				'Un agente de IA lee, decide y actúa en WhatsApp, documentos y presupuestos. Una persona confirma lo que compromete. Agenda 30 minutos gratis.',
		},
		fi: {
			title: 'Agentes de IA para empresas: qué son y casos reales · Bitdesal',
			description:
				'Un agente de IA lee, decide y actúa en WhatsApp, documentos y presupuestos. Una persona confirma lo que compromete. Agenda 30 minutos gratis.',
		},
	},
	localElche: {
		es: {
			title: 'Consultor de IA en Alicante y Elche para empresas · Bitdesal',
			description:
				'Consultores de IA en Alicante y Elche: automatizamos presupuestos, citas y partes con precio cerrado. Primera reunión de 30 min gratis, presencial u online.',
		},
		en: {
			title: 'Consultoría de IA en Elche y Alicante, España · Bitdesal',
			description:
				'Consultoría de IA y software en Elche y Alicante. Reunión de 30 minutos, presencial u online, para ver si automatizar te ahorra horas. Agenda la tuya.',
		},
		fi: {
			title: 'Consultoría de IA en Elche y Alicante, España · Bitdesal',
			description:
				'Consultoría de IA y software en Elche y Alicante. Reunión de 30 minutos, presencial u online, para ver si automatizar te ahorra horas. Agenda la tuya.',
		},
	},
	consultoria: {
		es: {
			title: 'Consultoría de software y desarrollo Android · Bitdesal',
			description:
				'Desarrollo Android, arquitectura y calidad para equipos técnicos. Apps en producción con cientos de miles de usuarios.',
		},
		en: {
			title: 'Android development and software consulting · Bitdesal',
			description: 'Senior Android development, architecture and quality for product teams.',
		},
		fi: {
			title: 'Android-kehitys ja ohjelmistokonsultointi · Bitdesal',
			description: 'Senior Android -kehitys ja arkkitehtuuri tuotetiimeille.',
		},
	},
	workAndPricing: {
		es: {
			title: 'Casos y precios: proyectos y tarifas a precio cerrado · Bitdesal',
			description:
				'Casos como Kivra, Regalos Kawaii o Yössä, más tarifas a precio cerrado: estudio, implementación y soporte. IVA desglosado.',
		},
		en: {
			title: 'Work & pricing: case studies and fixed rates · Bitdesal',
			description:
				'Case studies such as Kivra, Regalos Kawaii or Yössä, plus fixed rates for process study, implementation and support. VAT shown separately.',
		},
		fi: {
			title: 'Referenssit ja hinnat: hankkeet ja kiinteät hinnat · Bitdesal',
			description:
				'Referenssejä kuten Kivra, Regalos Kawaii ja Yössä sekä kiinteitä hintoja toteutukselle ja tuelle. ALV eriteltynä.',
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
			title: 'Nosotros: consultoría de IA y software en Elche · Bitdesal',
			description:
				'Bitdesal ayuda a empresas con automatización, software a medida y consultoría Android. Conoce al equipo y nuestra forma de trabajar.',
		},
		en: {
			title: 'About us: AI and software consulting from Spain · Bitdesal',
			description: 'Senior Android engineer and Bitdesal founder with 20 years of international experience.',
		},
		fi: {
			title: 'Meistä: tekoäly- ja ohjelmistokonsultointia · Bitdesal',
			description: 'Senior Android -insinööri ja Bitdesalin perustaja.',
		},
	},
	projects: {
		es: {
			title: 'Proyectos y casos · Bitdesal',
			description:
				'Casos reales de Bitdesal: Kivra (correo digital en Finlandia), Regalos Kawaii (catálogo web con afiliados y EmDash) e Yössä (ocio nocturno). Software en producción.',
		},
		en: {
			title: 'Projects · Bitdesal',
			description:
				'Real Bitdesal case studies: Kivra digital mail in Finland, Regalos Kawaii (affiliate gift catalog with EmDash) and Yössä nightlife app. Production software.',
		},
		fi: {
			title: 'Projektit · Bitdesal',
			description:
				'Bitdesalin referenssit: Kivra Suomessa, Regalos Kawaii (affiliate-lahjakatalogi ja EmDash) ja Yössä-yöelämäsovellus. Tuotanto-ohjelmistoja.',
		},
	},
	projectMuixeranga: {
		es: {
			title: "Caso Muixeranga d'Elx: web cultural · Bitdesal",
			description:
				'Web trilingüe con Astro y Firebase: la colla más meridional del País Valencià, auditoría de 32 mejoras y evolución hacia Tabala.',
		},
		en: {
			title: "Muixeranga d'Elx case study: cultural association site · Bitdesal",
			description:
				'Trilingual Astro site with Firebase agenda for Elche’s southernmost colla — top-tier among muixeranga sites, 32-point audit, Tabala roadmap.',
		},
		fi: {
			title: "Muixeranga d'Elx -tapaustutkimus: kulttuurisivusto · Bitdesal",
			description:
				'Kolmikielinen Astro-sivusto ja Firebase-agenda eteläisimmälle ryhmälle — auditointi, 32 parannusta ja Tabala-tiekartta.',
		},
	},
	projectRegalosKawaii: {
		es: {
			title: 'Caso Regalos Kawaii: catálogo web con EmDash · Bitdesal',
			description:
				'Sitio editorial regaloskawaii.es: más de 200 productos kawaii, taxonomías y panel EmDash. Astro estático y despliegue en Cloudflare Pages.',
		},
		en: {
			title: 'Regalos Kawaii case study: curated gift catalog · Bitdesal',
			description:
				'Editorial site regaloskawaii.es with 200+ kawaii products, rich taxonomies and EmDash CMS. Static Astro build on Cloudflare Pages.',
		},
		fi: {
			title: 'Regalos Kawaii -tapaustutkimus: lahjakatalogi · Bitdesal',
			description:
				'Toimituksellinen sivusto regaloskawaii.es: yli 200 kawaii-tuotetta, taksonomiat ja EmDash-CMS. Staattinen Astro-julkaisu Cloudflare Pagesissa.',
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
			title: 'Yössä case: nightlife Android app for venues · Bitdesal',
			description:
				'Android nightlife app for bars, concerts and nearby events, with drink deals that unlock when you are close enough to use them.',
		},
		fi: {
			title: 'Yössä-case: yöelämän Android-sovellus Suomessa · Bitdesal',
			description:
				'Yöelämän sovellus: baarit, konsertit ja tapahtumat ympärilläsi sekä juomatarjoukset, jotka aktivoituvat kun olet tarpeeksi lähellä käyttääksesi niitä.',
		},
	},
	blog: {
		es: {
			title: 'Blog sobre IA, Android y automatización · Bitdesal',
			description: 'Artículos sobre Android, IA e ingeniería de software para equipos y empresas.',
		},
		en: {
			title: 'Blog on AI, Android and software engineering · Bitdesal',
			description: 'Articles on Android, AI and engineering from Bitdesal.',
		},
		fi: {
			title: 'Blogi: tekoäly, Android ja ohjelmistokehitys · Bitdesal',
			description: 'Artikkeleita Androidista, tekoälystä ja insinöörityöstä.',
		},
	},
	contact: {
		es: {
			title: 'Contacto: agenda 30 minutos gratis con nosotros · Bitdesal',
			description:
				'Cuéntanos qué necesitas. Te respondemos en menos de 24 horas laborables. Elche · principalmente en remoto; planificación en Alicante; desplazamientos puntuales en España o la UE.',
		},
		en: {
			title: 'Contact us: book a free 30-minute call · Bitdesal',
			description: 'Get in touch about your project. Remote across Europe.',
		},
		fi: {
			title: 'Ota yhteyttä: varaa ilmainen 30 minuutin puhelu · Bitdesal',
			description: 'Ota yhteyttä projektistasi.',
		},
	},
	legalNotice: {
		es: {
			title: 'Aviso legal y condiciones de uso de bitdesal.com · Bitdesal',
			description:
				'Datos identificativos, condiciones de uso, propiedad intelectual y jurisdicción de bitdesal.com, conforme a la LSSI-CE.',
		},
		en: {
			title: 'Legal notice and terms of use of bitdesal.com · Bitdesal',
			description:
				'Identification, terms of use, intellectual property and jurisdiction of bitdesal.com. Translation; the Spanish version prevails.',
		},
		fi: {
			title: 'Oikeudellinen ilmoitus ja käyttöehdot · Bitdesal',
			description:
				'Bitdesal.comin tunnistetiedot, käyttöehdot, immateriaalioikeudet ja tuomioistuin. Käännös; espanjankielinen versio on ensisijainen.',
		},
	},
	privacy: {
		es: {
			title: 'Política de privacidad y protección de datos · Bitdesal',
			description:
				'Cómo tratamos tus datos en el formulario, las citas y como clientes: finalidades, plazos, destinatarios y tus derechos RGPD.',
		},
		en: {
			title: 'Privacy policy and data protection (GDPR) · Bitdesal',
			description:
				'How we process your data from the contact form, bookings and as clients: purposes, retention, recipients and your GDPR rights.',
		},
		fi: {
			title: 'Tietosuojakäytäntö ja henkilötietojen käsittely · Bitdesal',
			description:
				'Miten käsittelemme tietojasi lomakkeesta, ajanvarauksesta ja asiakkuudesta: tarkoitukset, säilytys, vastaanottajat ja GDPR-oikeutesi.',
		},
	},
	cayeProfile: {
		es: {
			title: 'Caye Ruiz, fundador y consultor Android e IA · Bitdesal',
			description:
				'Perfil de Caye Ruiz: fundador de Bitdesal, consultor Android senior y consultoría de IA. Más de 20 años en software.',
		},
		en: {
			title: 'Caye Ruiz, founder and Android & AI consultant · Bitdesal',
			description:
				'Caye Ruiz — Bitdesal founder, senior Android consultant and AI consulting. 20+ years in software.',
		},
		fi: {
			title: 'Caye Ruiz, perustaja ja Android-konsultti · Bitdesal',
			description: 'Caye Ruiz — Bitdesalin perustaja, senior Android -konsultti ja tekoälykonsultointi.',
		},
	},
	ramiroProfile: {
		es: {
			title: 'Ramiro Santamaría: apps y agentes de IA · Bitdesal',
			description: 'Perfil de Ramiro Santamaría: desarrollo de apps y agentes de IA en Bitdesal.',
		},
		en: {
			title: 'Ramiro Santamaría, app development and AI agents · Bitdesal',
			description: 'Ramiro Santamaría — app development and AI agents at Bitdesal.',
		},
		fi: {
			title: 'Ramiro Santamaría: sovellukset ja tekoälyagentit · Bitdesal',
			description: 'Ramiro Santamaría — sovelluskehitys ja tekoälyagentit Bitdesalilla.',
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
