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
		nav: {
			home: 'Inicio',
			about: 'Nosotros',
			blog: 'Blog',
			projects: 'Proyectos',
			contact: 'Contacto',
			language: 'Idioma',
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
			blog: 'Blog',
			projects: 'Proyectos',
			contactTitle: 'Contacto',
			contact: 'Contactar',
			linkedin: 'LinkedIn',
			rights: 'Todos los derechos reservados.',
		},
		blog: {
			...makeTranslations.es.blog,
			hero: {
				title: 'Blog',
				subtitle: 'Artículos de Bitdesal en LinkedIn y Medium sobre Android, IA e ingeniería',
			},
		},
		home: {
			...makeTranslations.es.home,
			hero: {
				title: 'Software que funciona. Luego crece.',
				subtitle:
					'Consultoría en Android, web y APIs. Cuidamos que haga lo que se diseñó para hacer, y que el producto pueda ir más allá.',
				viewProjects: 'Ver proyectos',
				contact: 'Contactar',
			},
			whyBitdesal: {
				title: '¿Por qué Bitdesal?',
				subtitle: 'Especificaciones claras, Android de producción y un handoff que tu equipo puede continuar.',
				modernStack: {
					title: 'Stack moderno',
					description: 'Kotlin, Jetpack Compose y arquitectura modular que tu equipo puede asumir tras la entrega.',
				},
				practicalAI: {
					title: 'IA práctica',
					description: 'Agentes para review, scaffolding y docs: más rápido, sin perder calidad.',
				},
				mentorship: {
					title: 'Mentoría',
					description: 'Coaching que deja al equipo más fuerte, no dependiente de un único consultor.',
				},
				experience: {
					title: '20 años',
					description: 'Apps, SDKs y equipos entregados en España, Suiza y Finlandia.',
				},
			},
			android: {
				title: 'Android que puedes publicar cada mes',
				description:
					'De la arquitectura al ritmo de Play Store: Kotlin, Compose, tests y CI que mantienen alto el crash-free rate.',
				item1: 'Arquitectura MVVM/MVI con Clean Architecture',
				item2: 'Testing exhaustivo con JUnit, Espresso y Compose Testing',
				item3: 'CI/CD automático con GitHub Actions',
			},
			ai: {
				title: 'IA que acorta el camino hasta la spec',
				description:
					'Agentes de review, scaffolding y documentación dentro de un flujo spec-driven — no vibe coding.',
				item1: 'Agentes con Claude y Gemini',
				item2: 'Diseño asistido por IA',
				item3: 'Automatización de procesos con IA',
			},
			howIWork: {
				title: 'Cómo trabajo',
				subtitle: 'Primero la spec, calidad de serie, 100 % remoto.',
			},
			projects: {
				title: 'Proyectos',
				subtitle: 'Destacados de nuestro trabajo con clientes y productos',
				viewAll: 'Ver todos los proyectos',
			},
			blog: {
				title: 'Blog',
				subtitle: 'Últimos artículos de Bitdesal en LinkedIn',
				viewAll: 'Ver todos los artículos',
				readOnLinkedIn: 'Leer en LinkedIn',
				readOnMedium: 'Leer el artículo completo en Medium',
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
			bio: {
				name: 'Cayetano Ruiz Corraliza',
				title: 'Fundador',
				p1: 'Ingeniero Android senior y lead, con casi 20 años construyendo apps de producción, SDKs y frameworks, y mentorizando y escalando equipos de más de 30 desarrolladores.',
				p2: 'Experto en Kotlin, Java, Jetpack Compose y Clean Architecture. Tras 13 años en Finlandia, volví a España para dirigir Bitdesal: arquitectura, calidad de código y entrega asistida por IA para clientes como Kivra.',
				p3: 'Si quieres hablar de un proyecto, escríbeme a caye@bitdesal.com.',
			},
			profiles: {
				linkedin: 'LinkedIn',
				github: 'GitHub',
				shakers: 'Shakers',
			},
			journey: {
				title: 'Experiencia profesional',
				bitdesal: {
					role: 'Consultor Android independiente',
					company: 'Bitdesal',
					location: 'Elche, España',
					dates: 'oct 2025 – actualidad',
					item1: 'Consultoría senior de arquitectura Android y calidad de código; continuidad del producto Kivra Finlandia en su fase de crecimiento.',
					item2: 'Flujos de trabajo con IA (code review, scaffolding y documentación) para acelerar la entrega y el onboarding.',
				},
				kivra: {
					role: 'Lead Android Developer',
					company: 'Kivra Oy',
					location: 'Espoo, Finlandia',
					dates: 'may 2019 – sep 2025',
					item1: 'Construí la app Android finlandesa de extremo a extremo (Pagos, Login, Documentos offline, Buzones compartidos).',
					item2: 'Más del 99,9 % sin crashes, releases mensuales durante 7 años; más de 100K descargas y 4,3★.',
					item3: 'Features y code reviews para Kivra Suecia (más de 1M de descargas); mentoricé a un junior hasta senior.',
				},
				optiscan: {
					role: 'Senior Software Developer',
					company: 'Optiscan Group',
					location: 'Helsinki, Finlandia',
					dates: 'may 2017 – may 2019',
					item1: 'Mantuve soluciones Java críticas para clientes de logística industrial.',
					item2: 'PoC de escaneo de paquetes con IA (OCR y visión por computador) para una nueva línea de producto.',
				},
				frosmo: {
					role: 'Senior Web Developer y Competence Coach',
					company: 'Frosmo Oy',
					location: 'Helsinki, Finlandia',
					dates: 'ene 2015 – may 2017',
					item1: 'Creé el equipo de Competence Coach; lideré a 4 coaches que apoyaban a más de 30 desarrolladores.',
					item2: 'Onboarding técnico de 15–20 clientes grandes al año.',
				},
				sankarimedia: {
					role: 'Lead Android Developer',
					company: 'Sankarimedia Oy',
					location: 'Helsinki, Finlandia',
					dates: 'jul 2013 – dic 2014',
					item1: 'Hoja de ruta técnica de la plataforma de ocio nocturno (Finlandia y España; 4★).',
					item2: 'CI/CD y tests automatizados desde cero; contribución a Node.js y Angular.',
				},
				awimbawe: {
					role: 'Fundador y CTO',
					company: 'Awimbawe',
					location: 'Madrid, España',
					dates: 'nov 2011 – jun 2013',
					item1: 'Startup mobile-first; asumí la entrega web y móvil.',
					item2: 'Producto de ocio nocturno que abrió el mercado finlandés — continuado en Sankarimedia.',
				},
				sicpa: {
					role: 'Software Engineer (Lead)',
					company: 'Sicpa Security Solutions',
					location: 'Madrid / Lausana',
					dates: 'jul 2009 – jun 2013',
					item1: 'Uno de los 5 ingenieros fundadores del hub español (de 5 a más de 100 personas).',
					item2: 'Framework web estandarizado para la división de sector privado.',
					item3: 'Track & Trace de alta velocidad para clientes grandes (antifraude a escala nacional e internacional).',
				},
				entropia: {
					role: 'Solution Architect',
					company: 'Entropia Oy',
					location: 'Helsinki, Finlandia',
					dates: 'dic 2006 – jun 2009',
					item1: 'Red de información propia para 3 aerolíneas privadas y una empresa de seguridad.',
				},
				comeks: {
					role: 'Web Developer',
					company: 'Comeks Oy',
					location: 'Helsinki, Finlandia',
					dates: 'may 2007 – may 2008',
					item1: 'Funcionalidades de la app web insignia de visualización de SMS enriquecidos.',
				},
			},
			education: {
				title: 'Formación',
				degree: 'Ingeniería Informática (Ingeniería del Software)',
				institution: 'Universidad Alfonso X el Sabio — Villanueva de la Cañada, España',
				dates: '2000 – 2006',
			},
			skills: {
				title: 'Competencias',
				kotlin: {
					title: 'Kotlin y Android',
					description: 'Kotlin experto, Java y desarrollo Android de producción.',
				},
				compose: {
					title: 'Jetpack Compose',
					description: 'Interfaces modernas con Compose, Coroutines y Flow.',
				},
				architecture: {
					title: 'Arquitectura',
					description: 'Clean Architecture, MVVM y diseño de SDKs y APIs.',
				},
				testing: {
					title: 'Testing y entrega',
					description: 'Tests automatizados, BDD y CI/CD (GitHub Actions, Jenkins).',
				},
				ai: {
					title: 'Ingeniería asistida por IA',
					description: 'Flujos de prototipado, specs, scaffolding, review y documentación.',
				},
				mentoring: {
					title: 'Mentoría y liderazgo',
					description: 'Escalado de equipos y coaching de más de 30 desarrolladores.',
				},
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
		nav: {
			home: 'Home',
			about: 'About',
			blog: 'Blog',
			projects: 'Projects',
			contact: 'Contact',
			language: 'Language',
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
			blog: 'Blog',
			projects: 'Projects',
			contactTitle: 'Contact',
			contact: 'Contact',
			linkedin: 'LinkedIn',
			rights: 'All rights reserved.',
		},
		blog: {
			...makeTranslations.en.blog,
			hero: {
				title: 'Blog',
				subtitle: 'Articles from Bitdesal on LinkedIn and Medium about Android, AI and engineering',
			},
		},
		home: {
			...makeTranslations.en.home,
			hero: {
				title: 'Software that works. Then it grows.',
				subtitle:
					'Consulting for Android, web and APIs. We take care that it does what it was designed to do — and that the product can go further.',
				viewProjects: 'View projects',
				contact: 'Contact',
			},
			whyBitdesal: {
				title: 'Why Bitdesal?',
				subtitle: 'Clear specs, production-quality Android, and a handover your team can keep.',
				modernStack: {
					title: 'Modern stack',
					description: 'Kotlin, Jetpack Compose and modular architecture that your team can own after handoff.',
				},
				practicalAI: {
					title: 'Practical AI',
					description: 'Agents for review, scaffolding and docs — faster delivery without sacrificing quality.',
				},
				mentorship: {
					title: 'Mentorship',
					description: 'Coaching that leaves the team stronger, not dependent on a single consultant.',
				},
				experience: {
					title: '20 years',
					description: 'Apps, SDKs and teams shipped in Spain, Switzerland and Finland.',
				},
			},
			android: {
				title: 'Android you can release every month',
				description:
					'From architecture to Play Store cadence: Kotlin, Compose, tests and CI that keep crash-free rates high.',
				item1: 'MVVM/MVI architecture with Clean Architecture',
				item2: 'Comprehensive testing with JUnit, Espresso and Compose Testing',
				item3: 'Automated CI/CD with GitHub Actions',
			},
			ai: {
				title: 'AI that shortens the path to a spec',
				description:
					'Review, scaffolding and documentation agents wired into a spec-driven workflow — not vibe coding.',
				item1: 'Agents with Claude and Gemini',
				item2: 'AI-assisted design',
				item3: 'Process automation with AI',
			},
			howIWork: {
				title: 'How I work',
				subtitle: 'Specs first, quality built in, fully remote.',
			},
			projects: {
				title: 'Projects',
				subtitle: 'Highlights from our client and product work',
				viewAll: 'View all projects',
			},
			blog: {
				title: 'Blog',
				subtitle: 'Latest articles from Bitdesal on LinkedIn',
				viewAll: 'View all articles',
				readOnLinkedIn: 'Read on LinkedIn',
				readOnMedium: 'Read the full article on Medium',
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
			bio: {
				name: 'Cayetano Ruiz Corraliza',
				title: 'Founder',
				p1: 'Senior and lead Android engineer with nearly 20 years building production apps, SDKs and frameworks, and a track record of mentoring and scaling teams of 30+ developers.',
				p2: 'Deep Kotlin and Java expertise with Jetpack Compose and Clean Architecture. After 13 years in Finland, I am back in Spain running Bitdesal — architecture, code quality and AI-integrated delivery for clients such as Kivra.',
				p3: 'If you want to talk about a project, write to caye@bitdesal.com.',
			},
			profiles: {
				linkedin: 'LinkedIn',
				github: 'GitHub',
				shakers: 'Shakers',
			},
			journey: {
				title: 'Work experience',
				bitdesal: {
					role: 'Independent Android Consultant',
					company: 'Bitdesal',
					location: 'Elche, Spain',
					dates: 'Oct 2025 – Present',
					item1: 'Senior Android architecture and code-quality consulting; product continuity for Kivra Finland through their growth phase.',
					item2: 'AI-integrated workflows (code review, scaffolding, documentation) to speed delivery and onboarding.',
				},
				kivra: {
					role: 'Lead Android Developer',
					company: 'Kivra Oy',
					location: 'Espoo, Finland',
					dates: 'May 2019 – Sep 2025',
					item1: 'Built the Finnish Android app end-to-end (Payments, Login, Offline Documents, Shared Inboxes).',
					item2: '99.9%+ crash-free, monthly releases over 7 years; 100K+ downloads, 4.3★.',
					item3: 'Features and reviews for Kivra Sweden (1M+ downloads); mentored a junior to senior.',
				},
				optiscan: {
					role: 'Senior Software Developer',
					company: 'Optiscan Group',
					location: 'Helsinki, Finland',
					dates: 'May 2017 – May 2019',
					item1: 'Maintained critical Java solutions for industrial-logistics clients.',
					item2: 'PoC AI package-scanning (OCR + computer vision) for a new product line.',
				},
				frosmo: {
					role: 'Senior Web Developer & Competence Coach',
					company: 'Frosmo Oy',
					location: 'Helsinki, Finland',
					dates: 'Jan 2015 – May 2017',
					item1: 'Created the Competence Coach team; led 4 coaches supporting 30+ developers.',
					item2: 'Technical onboarding for 15–20 major new clients per year.',
				},
				sankarimedia: {
					role: 'Lead Android Developer',
					company: 'Sankarimedia Oy',
					location: 'Helsinki, Finland',
					dates: 'Jul 2013 – Dec 2014',
					item1: 'Technical roadmap for the nightlife and events platform (Finland and Spain; 4★).',
					item2: 'CI/CD and automated testing from scratch; Node.js and Angular contribution.',
				},
				awimbawe: {
					role: 'Founder & CTO',
					company: 'Awimbawe',
					location: 'Madrid, Spain',
					dates: 'Nov 2011 – Jun 2013',
					item1: 'Mobile-first startup; owned web and mobile delivery.',
					item2: 'Nightlife product that opened the Finnish market — continued at Sankarimedia.',
				},
				sicpa: {
					role: 'Software Engineer (Lead)',
					company: 'Sicpa Security Solutions',
					location: 'Madrid / Lausanne',
					dates: 'Jul 2009 – Jun 2013',
					item1: 'One of 5 founding engineers of the Spanish hub (grew 5 → 100+).',
					item2: 'Standardized web-app framework for the private-sector division.',
					item3: 'High-speed Track & Trace for major clients (anti-fraud, national and international scale).',
				},
				entropia: {
					role: 'Solution Architect',
					company: 'Entropia Oy',
					location: 'Helsinki, Finland',
					dates: 'Dec 2006 – Jun 2009',
					item1: 'Proprietary Info Network for 3 private airlines and a security firm.',
				},
				comeks: {
					role: 'Web Developer',
					company: 'Comeks Oy',
					location: 'Helsinki, Finland',
					dates: 'May 2007 – May 2008',
					item1: 'Features for the flagship SMS-visualization web app.',
				},
			},
			education: {
				title: 'Education',
				degree: 'M.S. in Computer Science (Software Engineering)',
				institution: 'Universidad Alfonso X el Sabio — Villanueva de la Cañada, Spain',
				dates: '2000 – 2006',
			},
			skills: {
				title: 'Skills',
				kotlin: {
					title: 'Kotlin & Android',
					description: 'Expert Kotlin, Java and production Android development.',
				},
				compose: {
					title: 'Jetpack Compose',
					description: 'Modern UI with Compose, Coroutines and Flow.',
				},
				architecture: {
					title: 'Architecture',
					description: 'Clean Architecture, MVVM, and SDK and API design.',
				},
				testing: {
					title: 'Testing & delivery',
					description: 'Automated testing, BDD and CI/CD (GitHub Actions, Jenkins).',
				},
				ai: {
					title: 'AI-assisted engineering',
					description: 'Workflows from prototyping and specs to scaffolding, review and docs.',
				},
				mentoring: {
					title: 'Mentoring & leadership',
					description: 'Team scaling and coaching of 30+ developers.',
				},
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
		nav: {
			home: 'Etusivu',
			about: 'Tietoa',
			blog: 'Blogi',
			projects: 'Projektit',
			contact: 'Ota yhteyttä',
			language: 'Kieli',
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
			blog: 'Blogi',
			projects: 'Projektit',
			contactTitle: 'Yhteystiedot',
			contact: 'Ota yhteyttä',
			linkedin: 'LinkedIn',
			rights: 'Kaikki oikeudet pidätetään.',
		},
		blog: {
			...makeTranslations.fi.blog,
			hero: {
				title: 'Blogi',
				subtitle: 'Bitdesalin artikkelit LinkedInissä ja Mediumissa Androidista, tekoälystä ja insinöörityöstä',
			},
		},
		home: {
			...makeTranslations.fi.home,
			hero: {
				title: 'Ohjelmisto, joka toimii. Sitten se kasvaa.',
				subtitle:
					'Konsultointia Androidiin, webiin ja API-rajapintoihin. Pidämme huolen, että se tekee sen mihin se on suunniteltu — ja että tuote voi mennä pidemmälle.',
				viewProjects: 'Katso projektit',
				contact: 'Ota yhteyttä',
			},
			whyBitdesal: {
				title: 'Miksi Bitdesal?',
				subtitle: 'Selkeät speksit, tuotantolaatuinen Android ja luovutus, jonka tiimisi voi jatkaa.',
				modernStack: {
					title: 'Moderni stack',
					description: 'Kotlin, Jetpack Compose ja modulaarinen arkkitehtuuri, jonka tiimisi omistaa luovutuksen jälkeen.',
				},
				practicalAI: {
					title: 'Käytännön tekoäly',
					description: 'Agentit katselmukseen, scaffoldingiin ja dokumentaatioon — nopeammin ilman laatutappiota.',
				},
				mentorship: {
					title: 'Mentorointi',
					description: 'Valmennus, joka jättää tiimin vahvemmaksi, ei riippuvaiseksi yhdestä konsultista.',
				},
				experience: {
					title: '20 vuotta',
					description: 'Sovelluksia, SDK:ita ja tiimejä Espanjassa, Sveitsissä ja Suomessa.',
				},
			},
			android: {
				title: 'Android, jonka voit julkaista joka kuukausi',
				description:
					'Arkkitehtuurista Play Store -rytmiin: Kotlin, Compose, testit ja CI, jotka pitävät crash-free-luvun korkealla.',
				item1: 'MVVM/MVI ja Clean Architecture',
				item2: 'Kattava testaus: JUnit, Espresso ja Compose Testing',
				item3: 'Automaattinen CI/CD GitHub Actionsilla',
			},
			ai: {
				title: 'Tekoäly, joka lyhentää matkaa speksiin',
				description:
					'Katselmus-, scaffolding- ja dokumentaatioagentit spec-driven-työnkulussa — ei vibe codingia.',
				item1: 'Agentit Claudella ja Geminillä',
				item2: 'Tekoälyavusteinen suunnittelu',
				item3: 'Prosessien automatisointi tekoälyllä',
			},
			howIWork: {
				title: 'Miten työskentelen',
				subtitle: 'Speksi ensin, laatu sisäänrakennettuna, täysin etänä.',
			},
			projects: {
				title: 'Projektit',
				subtitle: 'Valikoima asiakas- ja tuotetyöstämme',
				viewAll: 'Näytä kaikki projektit',
			},
			blog: {
				title: 'Blogi',
				subtitle: 'Uusimmat artikkelit Bitdesalilta LinkedInissä',
				viewAll: 'Näytä kaikki artikkelit',
				readOnLinkedIn: 'Lue LinkedInissä',
				readOnMedium: 'Lue koko artikkeli Mediumissa',
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
			bio: {
				name: 'Cayetano Ruiz Corraliza',
				title: 'Perustaja',
				p1: 'Senior- ja lead-tason Android-insinööri, jolla on lähes 20 vuoden kokemus tuotantosovelluksista, SDK:ista ja kehyksistä sekä yli 30 kehittäjän tiimien mentoroinnista ja skaalaamisesta.',
				p2: 'Vahva Kotlin- ja Java-osaaminen, Jetpack Compose ja Clean Architecture. 13 vuoden jälkeen Suomessa palasin Espanjaan johtamaan Bitdesalia: arkkitehtuuria, koodin laatua ja tekoälyavusteista toimitusta asiakkaille kuten Kivralle.',
				p3: 'Jos haluat keskustella projektista, kirjoita osoitteeseen caye@bitdesal.com.',
			},
			profiles: {
				linkedin: 'LinkedIn',
				github: 'GitHub',
				shakers: 'Shakers',
			},
			journey: {
				title: 'Työkokemus',
				bitdesal: {
					role: 'Riippumaton Android-konsultti',
					company: 'Bitdesal',
					location: 'Elche, Espanja',
					dates: 'loka 2025 – nykyinen',
					item1: 'Senior-tason Android-arkkitehtuuri- ja laatukonsultointi; Kivra Suomen tuotteen jatkuvuus kasvuvaiheessa.',
					item2: 'Tekoälyyn integroidut työnkulut (koodikatselmus, scaffolding, dokumentaatio) toimituksen ja onboardingin nopeuttamiseksi.',
				},
				kivra: {
					role: 'Lead Android Developer',
					company: 'Kivra Oy',
					location: 'Espoo, Suomi',
					dates: 'touko 2019 – syys 2025',
					item1: 'Rakensin Suomen Android-sovelluksen alusta loppuun (maksut, kirjautuminen, offline-dokumentit, jaetut postilaatikot).',
					item2: 'Yli 99,9 % crash-free, kuukausittaiset julkaisut 7 vuoden ajan; yli 100 000 latausta, 4,3★.',
					item3: 'Ominaisuuksia ja katselmuksia Kivra Ruotsille (yli 1M latausta); mentoroin juniorin senioriksi.',
				},
				optiscan: {
					role: 'Senior Software Developer',
					company: 'Optiscan Group',
					location: 'Helsinki, Suomi',
					dates: 'touko 2017 – touko 2019',
					item1: 'Ylläpidin kriittisiä Java-ratkaisuja teollisuuslogistiikan asiakkaille.',
					item2: 'Tekoälypohjainen paketinskannauksen PoC (OCR ja konenäkö) uutta tuotelinjaa varten.',
				},
				frosmo: {
					role: 'Senior Web Developer & Competence Coach',
					company: 'Frosmo Oy',
					location: 'Helsinki, Suomi',
					dates: 'tammi 2015 – touko 2017',
					item1: 'Perustin Competence Coach -tiimin; johdin 4 valmentajaa, jotka tukivat yli 30 kehittäjää.',
					item2: 'Tekninen onboarding 15–20 isolle uudelle asiakkaalle vuodessa.',
				},
				sankarimedia: {
					role: 'Lead Android Developer',
					company: 'Sankarimedia Oy',
					location: 'Helsinki, Suomi',
					dates: 'heinä 2013 – joulu 2014',
					item1: 'Yöelämä- ja tapahtuma-alustan tekninen roadmap (Suomi ja Espanja; 4★).',
					item2: 'CI/CD ja automaattiset testit tyhjästä; Node.js- ja Angular-kontribuutio.',
				},
				awimbawe: {
					role: 'Perustaja ja CTO',
					company: 'Awimbawe',
					location: 'Madrid, Espanja',
					dates: 'marras 2011 – kesä 2013',
					item1: 'Mobile-first-startup; vastasin web- ja mobiilitoimituksesta.',
					item2: 'Yöelämätuote, joka avasi Suomen markkinan — työ jatkui Sankarimediassa.',
				},
				sicpa: {
					role: 'Software Engineer (Lead)',
					company: 'Sicpa Security Solutions',
					location: 'Madrid / Lausanne',
					dates: 'heinä 2009 – kesä 2013',
					item1: 'Yksi Espanjan hubin 5 perustajainsinööristä (5 → yli 100).',
					item2: 'Yhtenäinen web-sovelluskehys yksityisen sektorin divisioonalle.',
					item3: 'Nopea Track & Trace isoille asiakkaille (petostentorjunta kansallisessa ja kansainvälisessä mittakaavassa).',
				},
				entropia: {
					role: 'Solution Architect',
					company: 'Entropia Oy',
					location: 'Helsinki, Suomi',
					dates: 'joulu 2006 – kesä 2009',
					item1: 'Oma Info Network kolmelle yksityiselle lentoyhtiölle ja yhdelle turvallisuusyritykselle.',
				},
				comeks: {
					role: 'Web Developer',
					company: 'Comeks Oy',
					location: 'Helsinki, Suomi',
					dates: 'touko 2007 – touko 2008',
					item1: 'Ominaisuuksia yhtiön SMS-visualisointisovellukseen.',
				},
			},
			education: {
				title: 'Koulutus',
				degree: 'Tietojenkäsittelytieteen maisteri (ohjelmistotuotanto)',
				institution: 'Universidad Alfonso X el Sabio — Villanueva de la Cañada, Espanja',
				dates: '2000 – 2006',
			},
			skills: {
				title: 'Osaaminen',
				kotlin: {
					title: 'Kotlin ja Android',
					description: 'Expert-tason Kotlin, Java ja tuotanto-Android.',
				},
				compose: {
					title: 'Jetpack Compose',
					description: 'Moderni UI Composella, Coroutinesilla ja Flow’lla.',
				},
				architecture: {
					title: 'Arkkitehtuuri',
					description: 'Clean Architecture, MVVM sekä SDK- ja API-suunnittelu.',
				},
				testing: {
					title: 'Testaus ja toimitus',
					description: 'Automaattiset testit, BDD ja CI/CD (GitHub Actions, Jenkins).',
				},
				ai: {
					title: 'Tekoälyavusteinen insinöörityö',
					description: 'Työnkulut prototyypistä spekseihin, scaffoldingiin, katselmukseen ja dokumentaatioon.',
				},
				mentoring: {
					title: 'Mentorointi ja johtaminen',
					description: 'Tiimien skaalaus ja yli 30 kehittäjän valmennus.',
				},
			},
		},
	},
};

