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
		cta: {
			title: 'Trabajemos juntos',
			subtitle:
				'Si buscas experiencia internacional, calidad técnica y resultados medibles, hablemos de tu proyecto',
			button: 'Reserva una consulta gratuita',
		},
		about: {
			...makeTranslations.es.about,
			bio: {
				name: 'Cayetano Ruiz Corraliza',
				title: 'Fundador',
				p1: 'Soy un ingeniero de software con más de 20 años de experiencia. Nacido en el sur de España, mi trayectoria me ha llevado a través de diferentes países y culturas, una experiencia que ha moldeado mi capacidad de adaptación y me ha hecho una persona muy abierta a diferentes entornos de trabajo.',
				p2: 'Desde que me gradué como Ingeniero Superior en Informática en Madrid en 2005, he explorado casi todos los ámbitos del desarrollo de software. Desde la creación de aplicaciones web robustas con Java, JavaScript y PHP hasta el diseño de sistemas backend donde la seguridad y la alta disponibilidad era crítica y he mentorizado a desarrolladores para que alcancen su máximo potencial. Pero si ha habido una constante durante mi carrera, ha sido el desarrollo con Android desde sus inicios, empezando desde la versión 2.1 hasta las actuales.',
				p3: 'Mi filosofía siempre ha sido la misma: me apasiona entender cómo funcionan los sistemas. Encuentro una gran satisfacción en conectar las piezas del puzzle, asegurándome de que, desde el momento en que un usuario realiza una acción, todas las capas internas se comuniquen a la perfección para ofrecer una experiencia fluida, fiable y de calidad.',
				p4: 'Hoy vivimos una nueva revolución. En la era de la ingeniería asistida por IA, tener unos cimientos arquitectónicos sólidos es más relevante que nunca. En Bitdesal, creemos que entender el sistema es la clave para dominar el Desarrollo Basado en Especificaciones (SDD). Mi objetivo es aportar este conocimiento para ayudar a nuestros clientes a crear soluciones preparadas para el futuro que sean, a la vez, de alta calidad y eficientes en tiempo.',
				p5: 'Si tienes curiosidad por saber cómo trabajamos en Bitdesal, no dudes en contactar con nosotros. Una charla no cuesta nada y podría ser el comienzo de algo excelente.',
				psPrefix:
					'PD: Si quieres saber cómo abordamos la programación basada en agentes, te invito a leer nuestro manifiesto: ',
				psLink: 'Más allá del "Vibe Coding"',
			},
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
		cta: {
			title: "Let's work together",
			subtitle:
				"If you're looking for international experience, technical quality and measurable results, let's talk about your project",
			button: 'Book a free consultation',
		},
		about: {
			...makeTranslations.en.about,
			bio: {
				name: 'Cayetano Ruiz Corraliza',
				title: 'Founder',
				p1: 'I am a software engineer with over 20 years of experience. Born in southern Spain, my journey has taken me across different countries and cultures—an experience that has shaped my adaptability and made me exceptionally open to diverse working environments.',
				p2: 'Since graduating with an M.S. in Computer Science in Madrid in 2005, I have explored nearly every corner of the software landscape. My path has led me from building robust web applications using Java and JavaScript to architecting backend systems where security was mission-critical. For the past decade, I have focused deeply on the Android ecosystem—evolving from version 2.1 to the latest releases—while mentoring developers to reach their full potential.',
				p3: 'My philosophy has remained constant: I love understanding how systems work. I find deep satisfaction in connecting the pieces of the puzzle—ensuring that from the moment a user performs an action, every underlying layer communicates seamlessly to deliver a smooth, reliable, and premium experience.',
				p4: 'Today, we are witnessing a new revolution. In the era of AI-augmented engineering, solid architectural foundations are more relevant than ever. At Bitdesal, we believe that understanding the system is the key to mastering Spec-Driven Development (SDD). My goal is to leverage this technical intuition to help our customers build future-proof solutions that are both high-quality and time-efficient.',
				p5: "If you are curious about how we work at Bitdesal, please don't hesitate to reach out. A conversation costs nothing, and it might just be the start of something great.",
				psPrefix:
					'PS: To learn more about our approach to agentic programming, I invite you to read our manifesto: ',
				psLink: 'Beyond "Vibe Coding"',
			},
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
				agentsTitle: 'Agentit ja automaatio kehityksen tukena',
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
			methodology: 'Työtapa',
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
			methodology: 'Työtapa',
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
		cta: {
			title: 'Tehdään yhteistyötä',
			subtitle:
				'Jos etsit kansainvälistä kokemusta, teknistä laatua ja mitattavia tuloksia, keskustellaan projektistasi',
			button: 'Varaa maksuton konsultaatio',
		},
		about: {
			...makeTranslations.fi.about,
			bio: {
				name: 'Cayetano Ruiz Corraliza',
				title: 'Perustaja',
				p1: 'Olen ohjelmistoinsinööri, jolla on yli 20 vuoden kokemus alalta. Synnyin Etelä-Espanjassa, mutta matkani on vienyt minut eri maihin ja kulttuureihin – kokemus, joka on kehittänyt sopeutumiskykyäni ja tehnyt minusta erittäin avoimen erilaisille työympäristöille.',
				p2: 'Valmistuttuani tietotekniikan maisteriksi Madridissa vuonna 2005, olen tutkinut lähes ohjelmistokehityksen jokaista kolkkaa. Polkuni on vienyt minut vahvojen Java- ja JavaScript-pohjaisten verkkosovellusten rakentamisesta aina taustajärjestelmien arkkitehtuuriin, joissa tietoturva on ollut kriittisessä roolissa. Viimeisen vuosikymmenen ajan olen keskittynyt syvällisesti Android-ekosysteemiin – kehittyen versiosta 2.1 aina uusimpiin julkaisuihin asti – samalla mentoroiden muita kehittäjiä heidän urallaan.',
				p3: 'Filosofiani on pysynyt samana: rakastan ymmärtää, miten järjestelmät toimivat. Nautin palapelin palasten yhdistämisestä – sen varmistamisesta, että käyttäjän tehdessä valinnan, jokainen taustalla oleva kerros kommunikoi saumattomasti tarjotakseen sujuvan, luotettavan ja korkealaatuisen käyttökokemuksen.',
				p4: 'Tällä hetkellä elämme uutta vallankumousta. Tekoälyavusteisen suunnittelun aikakaudella vankka arkkitehtuurinen osaaminen on tärkeämpää kuin koskaan. Me Bitdesalilla uskomme, että järjestelmän ymmärtäminen on avain määrittelyohjatun kehityksen (Spec-Driven Development) hallintaan. Tavoitteeni on hyödyntää tätä teknistä intuitiota auttaakseni asiakkaitamme rakentamaan kestäviä ratkaisuja, jotka ovat sekä korkealaatuisia että aikatehokkaita.',
				p5: 'Jos haluat tietää lisää Bitdesalin toimintatavoista, ota rohkeasti yhteyttä. Keskustelu ei maksa mitään, ja se voi olla alku jollekin suurelle.',
				psPrefix:
					'PS: Jos haluat tietää lisää lähestymistavastamme agenttiohjelmointiin, lue manifestimme: ',
				psLink: 'Beyond "Vibe Coding"',
			},
		},
	},
};

