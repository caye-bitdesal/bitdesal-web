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
				agent3: 'Spec Driven Development desde la planificación hasta el diseño, implementación, testing y release',
				agent4: 'Refactors guiados, documentación y QA asistidos',
			},
			mentorship: {
				...makeTranslations.es.services.mentorship,
				topic5: 'Desarrollo asistido por IA',
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
			methodology: 'Metodología',
			prices: 'Precios',
			about: 'Nosotros',
			blog: 'Blog',
			projects: 'Proyectos',
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
			projects: 'Proyectos',
			contactTitle: 'Contacto',
			contact: 'Contactar',
			linkedin: 'LinkedIn',
			rights: 'Todos los derechos reservados.',
		},
		home: {
			...makeTranslations.es.home,
			projects: {
				title: 'Proyectos',
				subtitle: 'Destacados de nuestro trabajo con clientes y productos',
				viewAll: 'Ver todos los proyectos',
			},
			blog: {
				title: 'Blog',
				subtitle: 'Últimos artículos de Bitdesal en LinkedIn',
				readOnLinkedIn: 'Leer en LinkedIn',
				posts: {
					cicd: {
						title: 'Guía para implementar CI/CD en Android con GitHub Actions',
						imageAlt: 'Infografía de un pipeline CI/CD razonable para Android',
						date: '10 jul 2026',
						excerpt:
							'Separar «¿podemos hacer merge?» de «¿pueden los testers instalarlo?» — tres workflows en GitHub Actions para PRs rápidos y release candidates automáticos.',
					},
					insomnia: {
						title: 'Insomnio, agentes de IA y la función «sencilla» de 8 horas',
						imageAlt: 'Desarrollador dormido sobre el teclado tras una larga sesión de código',
						date: '11 jun 2026',
						excerpt:
							'Un selector de idioma de «dos horas» se convirtió en una maratón de 12 horas con IA. Lecciones sobre criterios de aceptación, confiar pero verificar y cuestionar tus propios prompts.',
					},
					afford: {
						title: '¿Puedes permitirte tu desarrollo asistido por IA?',
						imageAlt: 'Manos abriendo una cartera vacía',
						date: '1 jun 2026',
						excerpt:
							'Menos gente habla con honestidad de lo que cuesta hacer que la IA funcione sin quemar presupuesto ni paciencia. Un repaso práctico del flujo de trabajo en Bitdesal.',
					},
					manifesto: {
						title: 'Más allá del "Vibe Coding": manifiesto para una ingeniería de IA sostenible',
						imageAlt: 'Meme de Darth Vader: «encuentro perturbadora tu falta de fe»',
						date: '21 may 2026',
						excerpt:
							'La IA es una herramienta increíble, pero sin metodología rigurosa lleva al caos. Los cinco principios con los que trabajamos en Bitdesal.',
					},
				},
			},
		},
		projects: {
			hero: {
				title: 'Proyectos',
				subtitle: 'Una selección de trabajo Android y de software realizado por Bitdesal',
			},
			kivra: {
				name: 'Kivra Finland',
				tag: 'Android · Productividad',
				updated: '2026',
				description:
					'App de correo digital usada por cientos de miles de personas en Finlandia para recibir facturas, cartas, entradas y documentos oficiales de forma segura.',
			},
			yossa: {
				name: 'Yössä',
				tag: 'Android · Ocio nocturno',
				updated: '2015',
				description:
					'App para salir de noche: bares, conciertos y eventos a tu alrededor, con ofertas de bebidas que se activan cuando estás lo bastante cerca para usarlas.',
			},
			viewProject: 'Ver proyecto',
			playStore: 'Ver en Google Play',
			kivraDetail: {
				back: 'Volver a proyectos',
				tag: 'APLICACIÓN MÓVIL',
				title: 'Kivra',
				titleAccent: 'Correo digital',
				heroDescription:
					'Kivra es una app móvil gratuita que reúne facturas, cartas y documentos de cientos de empresas y organismos públicos en un solo lugar seguro y cómodo.',
				website: 'Visitar web',
				playStore: 'Ver en Google Play',
				metrics: {
					users: '100K+',
					usersLabel: 'Usuarios activos',
					rating: '4,3★',
					ratingLabel: 'Valoración en Play Store',
					reviews: '5,1K+',
					reviewsLabel: 'Reseñas en Play Store',
					years: '7+',
					yearsLabel: 'Años en producción',
				},
				screensTitle: 'Pantallas de la app',
				screens: {
					login: 'Inicio de sesión',
					home: 'Pantalla principal',
					invoices: 'Facturas',
					documents: 'Mis documentos',
					shared: 'Buzón compartido',
				},
				featuresTitle: 'Qué incluye',
				features: {
					mailbox: {
						title: 'Buzón digital',
						description: 'Recibe cartas, facturas y entradas como correo digital de emisores verificados.',
					},
					invoices: {
						title: 'Facturas y pagos',
						description: 'Consulta y paga facturas con credenciales bancarias, al momento o programadas.',
					},
					documents: {
						title: 'Mis documentos',
						description: 'Sube, organiza y archiva documentos importantes en un solo lugar.',
					},
					categories: {
						title: 'Categorías',
						description: 'Clasifica y encuentra documentos por temas: viajes, conciertos, mudanzas y más.',
					},
					shared: {
						title: 'Uso compartido',
						description: 'Comparte el acceso al buzón con otra persona de confianza.',
					},
					notifications: {
						title: 'Notificaciones',
						description: 'Avisos cuando llega correo nuevo o se acercan fechas de vencimiento.',
					},
				},
				playSection: {
					title: 'Publicada en Google Play Store',
					description:
						'Disponible en Android con identificación fuerte, emisores verificados y enfoque en privacidad: sin spam, solo correo para ti.',
					categoryLabel: 'Categoría',
					category: 'Productividad',
					updatedLabel: 'Actualizada',
					updated: '2026',
					companyLabel: 'Empresa',
					company: 'Kivra Oy',
					countryLabel: 'País',
					country: 'Finlandia / Suecia',
				},
				cta: {
					title: 'Proyecto entregado.',
					titleAccent: 'Listo para producción.',
					subtitle:
						'Bitdesal contribuyó con el desarrollo desde el inicio hasta el mantenimiento durante 7 años en un producto usado por cientos de miles de personas en Finlandia.',
					button: 'Trabaja con nosotros',
				},
				copyright: '© 2026 Bitdesal. Todos los derechos reservados.',
			},
			yossaDetail: {
				back: 'Volver a proyectos',
				tag: 'APLICACIÓN MÓVIL',
				title: 'Yössä',
				titleAccent: 'Tu guía en la noche',
				heroDescription:
					'App de ocio nocturno para descubrir bares, conciertos y eventos especiales a tu alrededor, con ofertas de bebidas que se activan cuando estás lo bastante cerca para canjearlas.',
				discontinued:
					'La app ya no está disponible en Google Play. Esta página conserva el producto como caso de estudio.',
				metrics: {
					rating: '4★',
					ratingLabel: 'Valoración en Play Store',
					city: 'Helsinki',
					cityLabel: 'Mercado de lanzamiento',
					offers: 'GPS',
					offersLabel: 'Ofertas por proximidad',
					platform: 'Android',
					platformLabel: 'Plataforma',
				},
				screensTitle: 'Pantallas de la app',
				screens: {
					onboarding: 'Bienvenida',
					timeline: 'Timeline',
					filters: 'Filtros',
					offer: 'Ofertas',
					map: 'Mapa de locales',
				},
				featuresTitle: 'Qué incluía',
				features: {
					nearby: {
						title: 'Bares y locales cercanos',
						description: 'Lista y mapa de venues a tu alrededor con distancia y estado.',
					},
					events: {
						title: 'Eventos y conciertos',
						description: 'Fiestas, DJ sets y eventos especiales en la timeline.',
					},
					offers: {
						title: 'Ofertas de bebidas',
						description: 'Promociones de bares visibles en el feed de ofertas.',
					},
					proximity: {
						title: 'Activación por proximidad',
						description: 'La oferta se desbloquea al acercarte lo suficiente al local.',
					},
					filters: {
						title: 'Filtros de preferencias',
						description: 'Filtra por género musical y tipo de experiencia.',
					},
					timeline: {
						title: 'Timeline unificada',
						description: 'Ofertas, eventos y novedades en un solo flujo.',
					},
				},
				playSection: {
					title: 'Legado del producto',
					description:
						'Lanzada en Helsinki para conectar la vida nocturna con personas cercanas. Ofertas y eventos en timeline y mapa, con canje ligado a la ubicación.',
					categoryLabel: 'Categoría',
					category: 'Entretenimiento',
					updatedLabel: 'Actualizada',
					updated: '2015',
					companyLabel: 'Empresa',
					company: 'Sankarimedia Oy',
					countryLabel: 'País',
					country: 'Finlandia',
				},
				cta: {
					title: 'Producto de ocio nocturno,',
					titleAccent: 'pensado para el mundo real.',
					subtitle:
						'Bitdesal ayudó a dar forma a la experiencia Android para descubrir locales, eventos y ofertas por ubicación en Helsinki.',
					button: 'Trabaja con nosotros',
				},
				copyright: '© 2026 Bitdesal. Todos los derechos reservados.',
			},
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
				p4: 'Hoy vivimos una nueva revolución. En la era de la ingeniería asistida por IA, tener unos cimientos arquitectónicos sólidos es más relevante que nunca. En Bitdesal, creemos que entender el sistema es la clave para dominar el Desarrollo Basado en Especificaciones (SDD).',
				p5: 'Mi objetivo es aportar este conocimiento para ayudar a nuestros clientes a crear soluciones preparadas para el futuro que sean, a la vez, de alta calidad y eficientes en tiempo.',
				p6: '',
				p7: 'Si tienes curiosidad por saber cómo trabajamos en Bitdesal, no dudes en contactar con nosotros. Una charla no cuesta nada y podría ser el comienzo de algo excelente.',
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
				agent3: 'Spec Driven Development from planning to design, implementation, testing and release',
				agent4: 'Guided refactors, docs and QA assistance',
			},
			mentorship: {
				...makeTranslations.en.services.mentorship,
				topic5: 'AI assisted development',
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
			methodology: 'Methodology',
			prices: 'Pricing',
			about: 'About',
			blog: 'Blog',
			projects: 'Projects',
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
			projects: 'Projects',
			contactTitle: 'Contact',
			contact: 'Contact',
			linkedin: 'LinkedIn',
			rights: 'All rights reserved.',
		},
		home: {
			...makeTranslations.en.home,
			projects: {
				title: 'Projects',
				subtitle: 'Highlights from our client and product work',
				viewAll: 'View all projects',
			},
			blog: {
				title: 'Blog',
				subtitle: 'Latest articles from Bitdesal on LinkedIn',
				readOnLinkedIn: 'Read on LinkedIn',
				posts: {
					cicd: {
						title: 'A guide on how to implement CI/CD for Android using Github Actions',
						imageAlt: 'Infographic of a reasonable CI/CD pipeline for Android',
						date: 'July 10, 2026',
						excerpt:
							'Split "Can we merge this?" from "Can testers install it?" — three GitHub Actions workflows for fast PRs and automated release candidates to Play internal track.',
					},
					insomnia: {
						title: '☕ Insomnia, AI Agents, and the 8-Hour "Simple Feature"',
						imageAlt: 'Developer asleep on keyboard after a long coding session',
						date: 'June 11, 2026',
						excerpt:
							'A "two-hour" language switcher turned into a 12-hour saga with AI. Lessons on acceptance criteria, trust-but-verify, and questioning your own prompts.',
					},
					afford: {
						title: 'Can you afford your AI assisted development?',
						imageAlt: 'Hands opening an empty wallet',
						date: 'June 1, 2026',
						excerpt:
							'Everyone talks about building with AI. Fewer talk honestly about making it work without burning through your budget or patience — and what our workflow looks like in practice.',
					},
					manifesto: {
						title: 'Beyond "Vibe Coding": A Manifesto for Sustainable AI Engineering',
						imageAlt: 'Darth Vader meme: "I find your lack of faith disturbing"',
						date: 'May 21, 2026',
						excerpt:
							'AI is a powerful tool, but without rigorous methodology it leads to chaos. The engineering principles we follow at Bitdesal.',
					},
				},
			},
		},
		projects: {
			hero: {
				title: 'Projects',
				subtitle: 'A selection of Android and software work delivered by Bitdesal',
			},
			kivra: {
				name: 'Kivra Finland',
				tag: 'Android · Productivity',
				updated: '2026',
				description:
					'Digital mail app used by hundreds of thousands of people in Finland to receive invoices, letters, tickets and official documents securely.',
			},
			yossa: {
				name: 'Yössä',
				tag: 'Android · Nightlife',
				updated: '2015',
				description:
					'Nightlife app to find bars, events and drink offers around you — offers unlock when you are close enough to redeem them.',
			},
			viewProject: 'View project',
			playStore: 'View on Google Play',
			kivraDetail: {
				back: 'Back to projects',
				tag: 'MOBILE APPLICATION',
				title: 'Kivra',
				titleAccent: 'Digital Mail',
				heroDescription:
					'Kivra is a free mobile app that collects your invoices and documents from hundreds of companies and public organizations in one safe and easy place.',
				website: 'Visit website',
				playStore: 'View on Google Play',
				metrics: {
					users: '100K+',
					usersLabel: 'Active users',
					rating: '4.3★',
					ratingLabel: 'Play Store rating',
					reviews: '5.1K+',
					reviewsLabel: 'Reviews on Play Store',
					years: '7+',
					yearsLabel: 'Years in production',
				},
				screensTitle: 'Sample screens from the app',
				screens: {
					login: 'Login',
					home: 'Home',
					invoices: 'Invoices',
					documents: 'My documents',
					shared: 'Shared mailbox',
				},
				featuresTitle: "What's included",
				features: {
					mailbox: {
						title: 'Digital mailbox',
						description: 'Receive letters, invoices and tickets as digital mail from verified senders.',
					},
					invoices: {
						title: 'Invoices and payments',
						description: 'View and pay bills with online banking, immediately or scheduled for the due date.',
					},
					documents: {
						title: 'My documents',
						description: 'Upload, organize and archive important documents in one place.',
					},
					categories: {
						title: 'Categories',
						description: 'Sort and find documents by topic: travel, concerts, moving and more.',
					},
					shared: {
						title: 'Shared use',
						description: 'Share mailbox access with another trusted Kivra user.',
					},
					notifications: {
						title: 'Notifications',
						description: 'Alerts when new mail arrives or due dates are approaching.',
					},
				},
				playSection: {
					title: 'Published on Google Play Store',
					description:
						'Available on Android with strong authentication, verified senders and a privacy-first approach — no spam, only mail meant for you.',
					categoryLabel: 'Category',
					category: 'Productivity',
					updatedLabel: 'Updated',
					updated: '2026',
					companyLabel: 'Company',
					company: 'Kivra Oy',
					countryLabel: 'Country',
					country: 'Finland / Sweden',
				},
				cta: {
					title: 'Project delivered.',
					titleAccent: 'Ready for production.',
					subtitle:
						'Bitdesal contributed with development from inception to maintenance for 7 years in a product used by hundreds of thousands in Finland.',
					button: 'Work with us',
				},
				copyright: '© 2026 Bitdesal. All rights reserved.',
			},
			yossaDetail: {
				back: 'Back to projects',
				tag: 'MOBILE APPLICATION',
				title: 'Yössä',
				titleAccent: 'Your guide in the night',
				heroDescription:
					'A nightlife app to discover bars, concerts and special events around you — with drink offers that unlock when you are close enough to use them.',
				discontinued:
					'The app is no longer available on Google Play. This page preserves the product as a case study.',
				metrics: {
					rating: '4★',
					ratingLabel: 'Play Store rating',
					city: 'Helsinki',
					cityLabel: 'Launch market',
					offers: 'GPS',
					offersLabel: 'Proximity offers',
					platform: 'Android',
					platformLabel: 'Platform',
				},
				screensTitle: 'Sample screens from the app',
				screens: {
					onboarding: 'Welcome',
					timeline: 'Timeline',
					filters: 'Filters',
					offer: 'Offers',
					map: 'Venues map',
				},
				featuresTitle: "What's included",
				features: {
					nearby: {
						title: 'Nearby bars and venues',
						description: 'List and map of venues around you with distance and status.',
					},
					events: {
						title: 'Events and concerts',
						description: 'Parties, DJ sets and special events on the timeline.',
					},
					offers: {
						title: 'Drink offers',
						description: 'Bar promotions surfaced in the offers feed.',
					},
					proximity: {
						title: 'Proximity activation',
						description: 'Offers unlock when you are close enough to the venue.',
					},
					filters: {
						title: 'Preference filters',
						description: 'Filter by music genre and the kind of night you want.',
					},
					timeline: {
						title: 'Unified timeline',
						description: 'Offers, events and updates in one scrollable feed.',
					},
				},
				playSection: {
					title: 'Product legacy',
					description:
						'Launched in Helsinki to connect nightlife venues with people nearby. Offers and events on a timeline and map, with redemption tied to your location.',
					categoryLabel: 'Category',
					category: 'Entertainment',
					updatedLabel: 'Updated',
					updated: '2015',
					companyLabel: 'Company',
					company: 'Sankarimedia Oy',
					countryLabel: 'Country',
					country: 'Finland',
				},
				cta: {
					title: 'Nightlife product,',
					titleAccent: 'built for the real world.',
					subtitle:
						'Bitdesal helped shape the Android experience for discovering venues, events and location-based offers in Helsinki.',
					button: 'Work with us',
				},
				copyright: '© 2026 Bitdesal. All rights reserved.',
			},
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
				p4: 'Today, we are witnessing a new revolution. In the era of AI-augmented engineering, solid architectural foundations are more relevant than ever. At Bitdesal, we believe that understanding the system is the key to mastering Spec-Driven Development (SDD).',
				p5: 'My goal is to leverage this technical intuition to help our customers build future-proof solutions that are both high-quality and time-efficient.',
				p6: '',
				p7: "If you are curious about how we work at Bitdesal, please don't hesitate to reach out. A conversation costs nothing, and it might just be the start of something great.",
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
				agent3: 'Spec Driven Development suunnittelusta designiin, toteutukseen, testaukseen ja julkaisuun',
				agent4: 'Ohjatut refaktoroinnit, dokumentaatio ja QA-avustus',
			},
			mentorship: {
				...makeTranslations.fi.services.mentorship,
				topic5: 'Tekoälyavusteinen kehitys',
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
			methodology: 'Työtapa',
			prices: 'Hinnoittelu',
			about: 'Tietoa',
			blog: 'Blogi',
			projects: 'Projektit',
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
			projects: 'Projektit',
			contactTitle: 'Yhteystiedot',
			contact: 'Ota yhteyttä',
			linkedin: 'LinkedIn',
			rights: 'Kaikki oikeudet pidätetään.',
		},
		home: {
			...makeTranslations.fi.home,
			projects: {
				title: 'Projektit',
				subtitle: 'Valikoima asiakas- ja tuotetyöstämme',
				viewAll: 'Näytä kaikki projektit',
			},
			blog: {
				title: 'Blogi',
				subtitle: 'Uusimmat artikkelit Bitdesalilta LinkedInissä',
				readOnLinkedIn: 'Lue LinkedInissä',
				posts: {
					cicd: {
						title: 'Opas CI/CD:n toteuttamiseen Androidissa GitHub Actionsilla',
						imageAlt: 'Infografiikka kohtuullisesta Android CI/CD -putkesta',
						date: '10.7.2026',
						excerpt:
							'Erotetaan «voimmeko mergata?» ja «voivatko testaajat asentaa?» — kolme GitHub Actions -workflowta nopeisiin PR:ään ja automaattisiin release candidate -buildiin.',
					},
					insomnia: {
						title: 'Unettomuus, tekoälyagentit ja 8 tunnin «yksinkertainen» ominaisuus',
						imageAlt: 'Kehittäjä nukkuu näppäimistöllä pitkän koodausmaratonin jälkeen',
						date: '11.6.2026',
						excerpt:
							'«Kahden tunnin» kielivalitsin muuttui 12 tunnin maratoniksi tekoälyn kanssa. Oppia hyväksymiskriteereistä, luota mutta varmista -periaatteesta ja omien promptien kyseenalaistamisesta.',
					},
					afford: {
						title: 'Voitko sallia tekoälyavusteisen kehityksesi?',
						imageAlt: 'Kädet avaavat tyhjää lompakkoa',
						date: '1.6.2026',
						excerpt:
							'Kaikki puhuvat tekoälyllä rakentamisesta. Harvemmat puhuvat rehellisesti siitä, mitä se oikeasti vaatii ilman budjetin tai kärsivällisyyden loppumista — ja miltä työnkulku Bitdesalilla näyttää.',
					},
					manifesto: {
						title: 'Beyond "Vibe Coding": manifesti kestävälle tekoälyinsinöörityölle',
						imageAlt: 'Darth Vader -meemi: «häiritsee minua uskosi puute»',
						date: '21.5.2026',
						excerpt:
							'Tekoäly on mahtava työkalu, mutta ilman kurinalaista menetelmää se johtaa kaaokseen. Viisi periaatetta, joilla työskentelemme Bitdesalilla.',
					},
				},
			},
		},
		projects: {
			hero: {
				title: 'Projektit',
				subtitle: 'Valikoima Bitdesalin Android- ja ohjelmistotyöstä',
			},
			kivra: {
				name: 'Kivra Finland',
				tag: 'Android · Tuottavuus',
				updated: '2026',
				description:
					'Digitaalinen postisovellus, jota satojatuhannet suomalaiset käyttävät laskujen, kirjeiden, lippujen ja virallisten asiakirjojen turvalliseen vastaanottamiseen.',
			},
			yossa: {
				name: 'Yössä',
				tag: 'Android · Yöelämä',
				updated: '2015',
				description:
					'Yöelämäsovellus baarien, tapahtumien ja juomatarjousten löytämiseen lähelläsi — tarjoukset aktivoituvat, kun olet tarpeeksi lähellä lunastaaksesi ne.',
			},
			viewProject: 'Näytä projekti',
			playStore: 'Näytä Google Playssa',
			kivraDetail: {
				back: 'Takaisin projekteihin',
				tag: 'MOBIILISOVELLUS',
				title: 'Kivra',
				titleAccent: 'Digitaalinen posti',
				heroDescription:
					'Kivra on ilmainen mobiilisovellus, joka kokoaa laskut ja asiakirjat satojen yritysten ja viranomaisten lähettämänä yhteen turvalliseen paikkaan.',
				website: 'Vieraile verkkosivulla',
				playStore: 'Näytä Google Playssa',
				metrics: {
					users: '100K+',
					usersLabel: 'Aktiivista käyttäjää',
					rating: '4,3★',
					ratingLabel: 'Play Store -arvio',
					reviews: '5,1K+',
					reviewsLabel: 'Arviota Play Storessa',
					years: '7+',
					yearsLabel: 'Vuotta tuotannossa',
				},
				screensTitle: 'Esimerkkinäyttöjä sovelluksesta',
				screens: {
					login: 'Kirjautuminen',
					home: 'Etusivu',
					invoices: 'Laskut',
					documents: 'Omat asiakirjat',
					shared: 'Jaettu postilaatikko',
				},
				featuresTitle: 'Mitä sovellus sisältää',
				features: {
					mailbox: {
						title: 'Digitaalinen postilaatikko',
						description: 'Vastaanota kirjeitä, laskuja ja lippuja digitaalisena postina varmennetuilta lähettäjiltä.',
					},
					invoices: {
						title: 'Laskut ja maksut',
						description: 'Tarkastele ja maksa laskuja verkkopankkitunnuksilla heti tai eräpäivänä.',
					},
					documents: {
						title: 'Omat asiakirjat',
						description: 'Lataa, järjestä ja arkistoi tärkeitä asiakirjoja yhteen paikkaan.',
					},
					categories: {
						title: 'Kategoriat',
						description: 'Lajittele ja löydä asiakirjat aiheittain: matkat, konsertit, muutot ja muut.',
					},
					shared: {
						title: 'Jaettu käyttö',
						description: 'Jaa postilaatikon käyttöoikeus toiselle luotetulle Kivra-käyttäjälle.',
					},
					notifications: {
						title: 'Ilmoitukset',
						description: 'Hälytykset uudesta postista ja lähestyvistä eräpäivistä.',
					},
				},
				playSection: {
					title: 'Julkaistu Google Play Storessa',
					description:
						'Saatavilla Androidille vahvalla tunnistautumisella, varmennetuilla lähettäjillä ja yksityisyyteen keskittyen — ei roskapostia, vain sinulle tarkoitettu posti.',
					categoryLabel: 'Kategoria',
					category: 'Tuottavuus',
					updatedLabel: 'Päivitetty',
					updated: '2026',
					companyLabel: 'Yritys',
					company: 'Kivra Oy',
					countryLabel: 'Maa',
					country: 'Suomi / Ruotsi',
				},
				cta: {
					title: 'Projekti toimitettu.',
					titleAccent: 'Valmis tuotantoon.',
					subtitle:
						'Bitdesal osallistui kehitykseen alusta ylläpitoon seitsemän vuoden ajan tuotteessa, jota satoja tuhansia suomalaisia käyttää.',
					button: 'Tee yhteistyötä kanssamme',
				},
				copyright: '© 2026 Bitdesal. Kaikki oikeudet pidätetään.',
			},
			yossaDetail: {
				back: 'Takaisin projekteihin',
				tag: 'MOBIILISOVELLUS',
				title: 'Yössä',
				titleAccent: 'Opas yöhön',
				heroDescription:
					'Yöelämäsovellus baarien, konserttien ja erityistapahtumien löytämiseen lähelläsi — juomatarjoukset aktivoituvat, kun olet tarpeeksi lähellä käyttääksesi ne.',
				discontinued:
					'Sovellus ei ole enää saatavilla Google Playssa. Tämä sivu säilyttää tuotteen case studyna.',
				metrics: {
					rating: '4★',
					ratingLabel: 'Play Store -arvio',
					city: 'Helsinki',
					cityLabel: 'Julkaisumarkkina',
					offers: 'GPS',
					offersLabel: 'Läheisyystarjoukset',
					platform: 'Android',
					platformLabel: 'Alusta',
				},
				screensTitle: 'Esimerkkinäyttöjä sovelluksesta',
				screens: {
					onboarding: 'Tervetuloa',
					timeline: 'Timeline',
					filters: 'Suodattimet',
					offer: 'Tarjoukset',
					map: 'Paikkakartta',
				},
				featuresTitle: 'Mitä sovellus sisälsi',
				features: {
					nearby: {
						title: 'Lähellä olevat baarit',
						description: 'Lista ja kartta paikoista ympärilläsi etäisyydellä ja tilalla.',
					},
					events: {
						title: 'Tapahtumat ja konsertit',
						description: 'Bileet, DJ-setit ja erikoistapahtumat timelinessä.',
					},
					offers: {
						title: 'Juomatarjoukset',
						description: 'Baarien kampanjat tarjousfeedissä.',
					},
					proximity: {
						title: 'Läheisyysaktivointi',
						description: 'Tarjous avautuu, kun olet tarpeeksi lähellä paikkaa.',
					},
					filters: {
						title: 'Suodattimet',
						description: 'Suodata musiikkigenren ja illan tyypin mukaan.',
					},
					timeline: {
						title: 'Yhtenäinen timeline',
						description: 'Tarjoukset, tapahtumat ja uutiset yhdessä feedissä.',
					},
				},
				playSection: {
					title: 'Tuotteen perintö',
					description:
						'Julkaistu Helsingissä yhdistämään yöelämä ja lähellä olevat käyttäjät. Tarjoukset ja tapahtumat timelinessä ja kartalla, lunastus sidottu sijaintiin.',
					categoryLabel: 'Kategoria',
					category: 'Viihde',
					updatedLabel: 'Päivitetty',
					updated: '2015',
					companyLabel: 'Yritys',
					company: 'Sankarimedia Oy',
					countryLabel: 'Maa',
					country: 'Suomi',
				},
				cta: {
					title: 'Yöelämätuote,',
					titleAccent: 'rakennettu arkeen.',
					subtitle:
						'Bitdesal auttoi muotoilemaan Android-kokemuksen paikkojen, tapahtumien ja sijaintiperusteisten tarjousten löytämiseen Helsingissä.',
					button: 'Tee yhteistyötä kanssamme',
				},
				copyright: '© 2026 Bitdesal. Kaikki oikeudet pidätetään.',
			},
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
				p1: 'Olen ohjelmistoinsinööri, jolla on yli 20 vuoden kokemus ohjelmistokehityksestä. Olen kotoisin Etelä-Espanjasta, mutta työ on vienyt minut eri maihin, kulttuureihin ja työympäristöihin. Kansainvälinen tausta on opettanut minua sopeutumaan nopeasti, tarkastelemaan asioita eri näkökulmista ja tekemään sujuvasti yhteistyötä erilaisten ihmisten kanssa.',
				p2: 'Urani aikana olen työskennellyt monipuolisesti eri teknologioiden, järjestelmien ja ohjelmistoarkkitehtuurien parissa: verkkosovelluksista vaativiin taustajärjestelmiin, joissa suorituskyky, tietoturva ja toimintavarmuus ovat olleet keskeisessä roolissa.',
				p3: 'Valmistuin tietotekniikan maisteriksi Madridissa vuonna 2005. Sen jälkeen olen rakentanut ratkaisuja Java- ja JavaScript-teknologioilla sekä Android-ekosysteemissä. Viimeisen vuosikymmenen ajan olen keskittynyt erityisesti Android-kehitykseen versiosta 2.1 aina uusimpiin julkaisuihin asti. Olen myös mentoroinut kehittäjiä eri uravaiheissa ja auttanut tiimejä rakentamaan vahvempia teknisiä toimintatapoja. Minulle ohjelmistokehitys on aina ollut myös yhteistyötä, osaamisen jakamista ja jatkuvaa ajatusten vaihtoa.',
				p4: 'Lähestyn ohjelmistokehitystä kokonaisuuksien kautta. Haluan ymmärtää, miten järjestelmät toimivat ja miten eri kerrokset keskustelevat saumattomasti keskenään käyttöliittymästä taustajärjestelmiin asti. Kun tekninen kokonaisuus on rakennettu oikein, lopputulos näkyy käyttäjälle sujuvana, luotettavana ja laadukkaana käyttökokemuksena.',
				p5: 'Tällä hetkellä ohjelmistoala elää suurta muutosta tekoälyn myötä. Vaikka työkalut muuttuvat nopeasti, yksi asia ei muutu: vahva arkkitehtuurinen osaaminen ja järjestelmien syvällinen ymmärtäminen ovat edelleen laadukkaan ohjelmistokehityksen perusta. Bitdesalilla uskomme, että juuri tämä ymmärrys on myös määrittelyohjatun kehityksen eli Spec-Driven Developmentin ydin.',
				p6: 'Tavoitteeni on auttaa asiakkaitamme rakentamaan ratkaisuja, jotka eivät ainoastaan toimi tänään, vaan kestävät aikaa myös tulevaisuudessa. Yhdistämällä teknisen kokemuksen, käytännönläheisen ajattelun ja modernit kehitysmenetelmät pystymme rakentamaan laadukkaita ratkaisuja tehokkaasti ja ilman turhaa monimutkaisuutta.',
				p7: 'Haluatko kuulla lisää Bitdesalin tavasta tehdä töitä ja siitä, miten voisimme auttaa projektissasi? Varaa ilmainen konsultaatio. Hyvä keskustelu voi olla ensimmäinen askel kohti jotain suurempaa.',
				psPrefix:
					'PS: Jos haluat lukea lisää lähestymistavastamme agenttiohjelmointiin, tutustu manifestiimme: ',
				psLink: 'Beyond "Vibe Coding"',
			},
		},
	},
};

