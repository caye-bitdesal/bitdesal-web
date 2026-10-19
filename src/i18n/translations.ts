export type Language = 'en' | 'es' | 'fi';

export const supportedLanguages: readonly Language[] = ['en', 'es', 'fi'] as const;
export const defaultLanguage: Language = 'es';

/** Resolve a dot-separated key in a locale dictionary. */
export function createTranslator(lang: Language) {
	const dict = translations[lang] ?? translations[defaultLanguage];
	return function t(key: string, fallback = ''): string {
		const keys = key.split('.');
		let value: unknown = dict;
		for (const k of keys) {
			if (value && typeof value === 'object' && k in (value as object)) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return fallback || key;
			}
		}
		return typeof value === 'string' ? value : fallback || key;
	};
}

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
			iaService: 'Consultoría de IA',
			softwareService: 'Desarrollo de software',
			about: 'Nosotros',
			pricing: 'Precios',
			blog: 'Blog',
			projects: 'Proyectos',
			contact: 'Contacto',
			language: 'Idioma',
		},
		footer: {
			tagline: 'Desarrollo Android, IA y consultoría de alto nivel',
			servicesTitle: 'Servicios',
			iaService: 'Consultoría de IA para empresas',
			softwareService: 'Desarrollo y consultoría de software',
			androidDev: 'Desarrollo Android',
			ai: 'Inteligencia Artificial',
			mentorship: 'Mentoría',
			consulting: 'Consultoría',
			companyTitle: 'Empresa',
			aboutUs: 'Nosotros',
			pricing: 'Precios',
			blog: 'Blog',
			projects: 'Proyectos',
			contactTitle: 'Contacto',
			location: 'Elche · Comunidad Valenciana',
			linkedin: 'LinkedIn',
			rights: 'Todos los derechos reservados.',
			legalNotice: 'Aviso legal',
			privacy: 'Privacidad',
		},
		contact: {
			title: 'Hablemos de tu proyecto',
			lead: 'Cuéntanos qué necesitas. Te respondemos en menos de 24 horas laborables.',
			name: 'Nombre',
			company: 'Empresa',
			topicLabel: '¿En qué podemos ayudarte?',
			topicIa: 'Consultoría de IA — automatizar procesos',
			topicSoftware: 'Desarrollo o consultoría de software',
			topicOther: 'Otro',
			message: 'Mensaje',
			emailOrPhone: 'Email o teléfono',
			submit: 'Enviar',
			success: 'Mensaje enviado. Te responderemos pronto.',
			error: 'No se pudo enviar. Escríbenos a caye@bitdesal.com.',
			alternatives: 'O si prefieres:',
			book: 'Agenda 30 min gratis',
			location:
				'Elche · Comunidad Valenciana · Trabajamos en remoto con toda España y con clientes internacionales',
			consentBefore: 'He leído la ',
			privacyPolicy: 'política de privacidad',
			consentAfter: ' y acepto que tratéis mis datos para responder a mi solicitud.',
			dataNotice:
				'Responsable: Bitdesal ([NOMBRE DEL TITULAR]). Finalidad: responder a tu solicitud de contacto. Legitimación: tu consentimiento y la aplicación de medidas precontractuales. Destinatarios: Formspree, proveedor del formulario (EE. UU.). Derechos: acceso, rectificación, supresión y otros, como se explica en la política de privacidad.',
		},
		common: {
			bookCta: 'Agenda 30 min gratis',
			seeHowIWork: 'Ver qué hacemos',
			seePrices: 'Ver precios',
			meetUs: 'Conócenos',
			meetMe: 'Conócenos',
		},
		theme: {
			switchToLight: 'Modo claro',
			switchToDark: 'Modo oscuro',
		},
		blog: {
			...makeTranslations.es.blog,
			hero: {
				title: 'Blog',
				subtitle: 'Artículos de Bitdesal en LinkedIn y Medium sobre Android, IA e ingeniería',
			},
			filters: {
				all: 'Todos',
				business: 'Para empresas',
				technical: 'Técnico',
			},
			onSite: 'En bitdesal.com',
			external: 'LinkedIn y Medium',
			back: '← Blog',
		},
		pricing: {
			hero: {
				badge: 'Precio transparente',
				title: 'Sabes lo que vas a pagar antes de empezar',
				lead: 'Consultoría para digitalizar el funcionamiento de la empresa e integrar la IA donde aligera la burocracia.',
				subtitle:
					'Trabajamos por fases para que sepas qué resolvemos, cuánto tarda y qué costará antes de que empiece el desarrollo.',
				cta: 'Agenda 30 min gratis',
				details: 'Ver el enfoque',
			},
			blocks: {
				study: {
					title: 'Estudio de procesos',
					price: '450 € + IVA (precio cerrado)',
					note: '≈10 h; 675 € + IVA si hay varios departamentos o sistemas.',
					description:
						'Incluye evaluación de requisitos y estudio de procesos y sistemas. Entregable: diagnóstico, solución propuesta, plan por fases y presupuesto cerrado.',
					discount: '100 % descontable si contratas la implementación en los 30 días siguientes.',
				},
				implementation: {
					title: 'Implementación',
					price: 'Precio cerrado',
					description:
						'Según el estudio: rediseño, tecnología, plan, desarrollo, pruebas y formación.',
				},
				support: {
					title: 'Soporte',
					price: 'Bolsas mensuales',
					description: '225 € / 450 € / 900 € + IVA (5/10/20 h). Solo se factura lo consumido. Sin permanencia.',
				},
			},
			sections: {
				ia: 'Consultoría de IA para empresas',
				software: 'Desarrollo y consultoría de software',
			},
			softwareBlock: {
				title: 'Desarrollo y consultoría de software',
				hourly: '45 €/h + IVA. Tarifa de referencia para desarrollo, arquitectura y mentoría.',
				bundles: 'Bolsas mensuales: 225 € / 450 € / 900 € + IVA (5/10/20 h), sin permanencia.',
				fixed: 'Proyecto a precio cerrado tras especificación y plan por fases.',
				international:
					'Desarrollo y consultoría de software para empresas internacionales: 60 €/h para empresas de la UE (el IVA lo gestiona el cliente). 75 €/h para empresas fuera de la UE.',
			},
			breakdownToggle: 'Ver el desglose por fases',
			packages: {
				title: 'Paquetes orientativos',
				express: {
					title: 'Automatización exprés',
					price: '1.800–2.900 € + IVA',
					time: '2–3 semanas',
					description:
						'Un proceso concreto: presupuestos, facturas, citas, partes de trabajo o documentos con IA.',
				},
				custom: {
					title: 'Herramienta a medida / app',
					price: 'Desde 4.500 € + IVA',
					description: 'Software adaptado a tu forma de trabajar, con integraciones y formación.',
				},
				maintenance: {
					title: 'Mantenimiento',
					price: 'Desde 225 €/mes + IVA',
					description: 'Bolsas de horas para incidencias, ajustes y mejoras.',
				},
			},
			faq: {
				title: 'Preguntas sobre precios',
				overrun: {
					q: '¿Qué pasa si el proyecto se alarga?',
					a: 'El precio cerrado no cambia salvo que cambiemos el alcance, y eso siempre lo acordamos antes por escrito.',
				},
				payment: {
					q: '¿Cómo se paga?',
					a: 'Por transferencia bancaria, PayPal o Bizum, como te resulte más cómodo. Siempre recibes factura con IVA desglosado.',
				},
				commitment: {
					q: '¿Hay permanencia?',
					a: 'Ninguna. Te quedas con nosotros porque te compensa, no porque te obligue un contrato. Puedes dejar el soporte cuando quieras, sin penalizaciones y sin dar explicaciones.',
				},
			},
			rate: {
				unit: '/hora + IVA',
				note: 'Todos los importes indicados son + IVA.',
			},
			included: {
				estimate: 'Estimación inicial desde el primer día',
				time: 'Solo se factura el tiempo dedicado',
				training: 'Formación en las herramientas implementadas incluida',
				handoff: 'Código y documentación listos para continuar',
				support: 'Soporte tras el lanzamiento con bolsas de horas mensuales',
			},
			approach: {
				eyebrow: 'El enfoque',
				title: 'Tres principios del proceso',
				subtitle:
					'Un método para que la inversión se note en el día a día, no solo en una presentación.',
				strategy:
					'Consultoría para digitalizar el funcionamiento de la empresa e integrar la IA donde aligera la burocracia: aprobaciones, documentos, reporting y el trabajo que todavía se mueve a mano.',
			},
			principles: {
				find: {
					title: 'Encontrar la burocracia',
					description:
						'Revisamos aprobaciones, documentos y traspasos que frenan a la empresa, y estimamos el trabajo antes de empezar a desarrollar.',
				},
				connect: {
					title: 'Digitalizar y conectar la IA',
					description:
						'Convertimos ese proceso en software y colocamos la IA donde quita repetición, dentro de las herramientas que el equipo ya usa.',
				},
				operate: {
					title: 'Dejarlo en el día a día',
					description:
						'La formación, el código y la documentación se quedan en tu equipo. Después del lanzamiento, el soporte sigue con bolsas de horas mensuales.',
				},
			},
			phases: {
				eyebrow: 'El proceso',
				title: 'Fases del servicio',
				subtitle:
					'Las horas son orientativas; el alcance final y el presupuesto cerrado se confirman tras la valoración inicial.',
				coreLabel: 'Idea central:',
				core: 'diagnosticar y rediseñar antes de construir evita que la tecnología solo acelere un proceso ineficiente.',
				items: {
					assessment: {
						title: 'Evaluación y requisitos',
						description: 'Objetivos, restricciones y el problema de fondo que hay que resolver.',
						short: 'Evaluación',
					},
					study: {
						title: 'Estudio de procesos y sistemas',
						description: 'Entrevistas, flujos reales, excepciones e integraciones existentes.',
						short: 'Estudio del proceso',
					},
					redesign: {
						title: 'Rediseño de la solución',
						description: 'Definimos cómo debe funcionar el proceso antes de automatizarlo.',
						short: 'Rediseño',
					},
					technology: {
						title: 'Selección tecnológica',
						description: 'Arquitectura, herramientas, integraciones y criterios de seguridad.',
						short: 'Tecnología',
					},
					plan: {
						title: 'Plan de implementación por fases',
						description: 'Una hoja de ruta priorizada que empieza por el trabajo de más valor.',
						short: 'Plan por fases',
					},
					delivery: {
						title: 'Implementación, formación y entrega',
						description: 'Desarrollo, pruebas, lanzamiento y formación práctica del equipo.',
						short: 'Implementación',
					},
				},
			},
			investment: {
				eyebrow: 'Inversión',
				title: 'Tarifas claras, sin sorpresas',
				subtitle:
					'Todo se calcula a 45 €/hora + IVA. Esta tabla muestra un proyecto orientativo para una empresa pequeña o mediana.',
				phase: 'Fase',
				hours: 'Horas (aproximado)',
				amount: 'Importe',
				total: 'Proyecto completo',
			},
			bundles: {
				title: 'Bolsas de horas de soporte',
				subtitle:
					'Para incidencias, ajustes y mejoras después del lanzamiento. Solo se factura el tiempo consumido.',
				h5: '5 h / mes',
				h10: '10 h / mes',
				h20: '20 h / mes',
				note: 'Sin permanencia. Ajusta la bolsa a lo que realmente necesitas.',
			},
		},
		home: {
			...makeTranslations.es.home,
			hero: {
				title: 'Tú céntrate en tu negocio. La tecnología la ponemos nosotros.',
				subtitle:
					'Consultoría de IA y desarrollo de software. Con precio cerrado y sin sorpresas.',
				imageAlt:
					'Imagen que refleja la serenidad que queremos transmitir en Bitdesal a nuestros clientes',
				viewProjects: 'Ver proyectos',
				contact: 'Agenda 30 min gratis',
			},
			serviceCards: {
				ia: {
					title: 'Consultoría de IA para empresas',
					description:
						'¿Presupuestos a mano, notas en papel o en WhatsApp, citas que se pierden? Estudiamos cómo trabajáis y automatizamos lo que os quita horas.',
					priceHint: 'Desde 1.800 € + IVA',
					cta: 'Ver consultoría de IA',
				},
				software: {
					title: 'Desarrollo y consultoría de software',
					description:
						'Desarrollo Android, arquitectura y calidad para equipos técnicos. Apps en producción con cientos de miles de usuarios.',
					priceHint: '45 €/h + IVA',
					cta: 'Ver desarrollo de software',
				},
			},
			stats: {
				years: { value: '20 años', label: 'de experiencia en software' },
				downloads: { value: '100K+', label: 'descargas en apps que hemos liderado' },
				uptime: { value: '99,9 %', label: 'sesiones sin fallos en producción' },
				countries: { value: '5 países', label: 'España, Suiza, Finlandia, Estados Unidos y Australia' },
			},
			entryOffer: {
				badge: 'Precio cerrado, sin sorpresas',
				text: 'Empezamos con un Estudio de procesos de 450 € + IVA que te descuento íntegramente si hacemos el proyecto juntos. Te llevas un diagnóstico, la solución propuesta y un presupuesto cerrado.',
				line: 'Proyectos desde 1.800 € + IVA · Tarifa de referencia: 45 €/h + IVA',
			},
			whyBitdesal: {
				title: '¿Por qué Bitdesal?',
				subtitle: 'Te hablamos claro y cumplimos lo que acordamos.',
				fixedPrice: {
					title: 'Precio cerrado',
					description: 'Sabes lo que vas a pagar antes de empezar.',
				},
				direct: {
					title: 'Trato directo con quien lo construye',
					description: 'Sin intermediarios ni capas comerciales.',
				},
				independence: {
					title: 'Sin dependencia',
					description: 'Te dejo el código, la documentación y a tu equipo formado.',
				},
				ai: {
					title: 'IA donde ahorra, no donde luce',
					description: 'Solo la uso donde quita trabajo repetitivo.',
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
				title: 'Cómo trabajamos',
				subtitle: 'Primero lo entendemos. Después lo construimos bien.',
				core: 'Diagnosticar antes de construir evita que la tecnología solo acelere un proceso ineficiente.',
				steps: {
					call: {
						title: 'Conversación gratuita',
						description: '30 minutos para entender tu problema y ver si podemos ayudarte.',
					},
					study: {
						title: 'Estudio',
						description:
							'Analizamos cómo trabajáis hoy y te entregamos la solución, el plan y un presupuesto cerrado.',
					},
					build: {
						title: 'Construcción',
						description: 'Desarrollamos por fases con una demo cada semana para que veas el avance.',
					},
					handoff: {
						title: 'Formación y soporte',
						description: 'Formamos a tu equipo y, si quieres, seguimos con bolsas de horas mensuales.',
					},
				},
			},
			behind: {
				title: 'Quién está detrás',
				text: 'Bitdesal nace de 20 años construyendo software en España, Suiza y Finlandia. Su fundador, Caye Ruiz, lideró durante 7 años la app Android de Kivra, usada por cientos de miles de personas. Hoy trabajamos con empresas que quieren tecnología que funcione, sin complicaciones.',
			},
			logos: {
				title: 'Experiencia en empresas como',
			},
			faq: {
				title: 'Preguntas frecuentes',
				items: {
					duration: {
						q: '¿Cuánto tarda un proyecto?',
						a: 'Una automatización concreta, 2–3 semanas. Una herramienta a medida, de 1 a 3 meses.',
					},
					tools: {
						q: '¿Tengo que cambiar los programas que ya uso?',
						a: 'No necesariamente. Siempre que se puede, conecto lo nuevo con lo que ya tienes.',
					},
					worth: {
						q: '¿Y si al final no me compensa?',
						a: 'Te lo decimos en el estudio. Si no tiene sentido invertir, no te lo vamos a vender.',
					},
					after: {
						q: '¿Qué pasa después de la entrega?',
						a: 'Te quedas con el código y la formación. Si necesitas soporte, hay bolsas de horas sin permanencia.',
					},
					remote: {
						q: '¿Trabajáis solo en remoto?',
						a: 'Con toda España en remoto. Si estás cerca de Elche o Valencia, podemos vernos en persona.',
					},
				},
			},
			projects: {
				title: 'Proyectos destacados',
				subtitle: 'Algunos proyectos en los que hemos participado',
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
		iaPage: {
			hero: {
				badge: 'Consultoría de IA para empresas',
				title: 'Deja de perder horas en papeleo',
				subtitle:
					'Automatizamos los procesos de tu empresa con IA: presupuestos, citas, partes de trabajo, pedidos o facturas. Sabrás el precio exacto antes de empezar.',
			},
			painPoints: {
				title: '¿Te suena?',
				closing: 'Si te has reconocido en alguna, tu empresa puede ganar horas cada semana.',
				items: {
					budgets: {
						problem: 'Hago los presupuestos a mano o en Excel, por la noche',
						solution: 'Los generamos en minutos desde el móvil, con tus precios y tu formato.',
					},
					orders: {
						problem: 'Apunto los encargos en una libreta o en WhatsApp',
						solution: 'Todo queda registrado en un solo sitio, y lo encuentras cuando lo necesitas.',
					},
					appointments: {
						problem: 'Se me olvidan citas o no devuelvo llamadas',
						solution: 'Agenda con recordatorios automáticos y aviso de cada llamada perdida.',
					},
					quotes: {
						problem: 'Mando presupuestos y no sé quién ha contestado',
						solution: 'Seguimiento automático: el sistema les recuerda y te avisa.',
					},
					forms: {
						problem: 'Los partes de trabajo llegan en papel, o no llegan',
						solution: 'El parte se rellena en el móvil, con fotos y firma, y llega directo a la oficina.',
					},
					copy: {
						problem: 'Copio los mismos datos de un programa a otro',
						solution: 'Conectamos tus herramientas para que se pasen los datos solas.',
					},
					docs: {
						problem: 'Reviso albaranes, facturas y documentos uno a uno',
						solution: 'La IA los lee, extrae los datos y te avisa de lo importante.',
					},
				},
			},
			pricingSummary: {
				title: 'Precios orientativos',
				study: 'Estudio de procesos — 450 € + IVA (675 € + IVA si hay varios departamentos o sistemas). 100 % descontable si contratas la implementación en los 30 días siguientes.',
				express: 'Automatización exprés — 1.800–2.900 € + IVA · 2–3 semanas.',
				custom: 'Herramienta a medida — desde 4.500 € + IVA.',
				support: 'Soporte — desde 225 €/mes + IVA, sin permanencia.',
				details: 'Ver precios en detalle',
			},
			faq: {
				security: {
					q: '¿Es seguro meter IA con los datos de mi empresa?',
					a: 'Elegimos herramientas que cumplen el RGPD y te explicamos dónde van tus datos antes de empezar.',
				},
				tech: {
					q: '¿Necesito saber de informática?',
					a: 'No hace falta. Nos amoldamos a lo que ya usáis para que el cambio sea lo mínimo posible, y os enseñamos lo nuevo paso a paso.',
				},
			},
		},
		consultoriaPage: {
			hero: {
				title: 'Desarrollo y consultoría de software para equipos que no pueden fallar',
				subtitle:
					'Desarrollo Android, arquitectura y calidad de código. 20 años de experiencia y apps en producción con cientos de miles de usuarios.',
				kivraCase: 'Ver el caso Kivra',
			},
			services: {
				title: 'Servicios',
				android: {
					title: 'Desarrollo Android',
					description:
						'Kotlin, Jetpack Compose, KMP. Apps de producción, de la primera versión al mantenimiento.',
				},
				architecture: {
					title: 'Arquitectura y calidad',
					description: 'Clean Architecture, revisión de código, pruebas automáticas, CI/CD.',
				},
				ai: {
					title: 'Ingeniería asistida por IA',
					description:
						'Flujos de especificación, scaffolding, revisión y documentación con IA, sin perder calidad.',
				},
				mentoring: {
					title: 'Mentoría y equipos',
					description: 'Acompañamiento técnico que deja al equipo más fuerte, no dependiente.',
				},
			},
			kivraHighlight: {
				title: 'Caso Kivra Finlandia',
				text: 'Caye lideró el desarrollo Android de Kivra Finlandia de 2019 a 2025. Hoy Bitdesal da continuidad al producto.',
				stats: '100K+ descargas · 4,3★ · 5,1K reseñas · 7 años en producción · 99,9 % sin fallos',
				cta: 'Ver la ficha del caso',
			},
			pricing: {
				title: 'Modalidades y precio',
				hourly: 'Por horas: 45 €/h + IVA',
				bundles: 'Bolsas mensuales: 225 € / 450 € / 900 € + IVA (5/10/20 h).',
				fixed: 'Proyecto cerrado tras especificación.',
				international:
					'Empresas internacionales: 60 €/h (UE; el IVA lo gestiona el cliente) · 75 €/h (fuera de la UE).',
				details: 'Ver precios',
			},
		},
		methodology: {
			...makeTranslations.es.methodology,
			remoteFirst: {
				...makeTranslations.es.methodology.remoteFirst,
				title: '100 % en remoto',
				description:
					'Trabajamos en remoto con documentación clara, revisiones contigo cada semana y las herramientas que ya usa tu equipo.',
			},
			specDriven: {
				...makeTranslations.es.methodology.specDriven,
				title: 'Primero definimos, después construimos',
				description:
					'Empezamos con especificaciones claras que guían el desarrollo, las pruebas automáticas y la entrega.',
				requirements: {
					title: 'Requisitos claros',
					description: 'Documentamos funcionalidad, casos de uso y criterios de aceptación antes de programar.',
				},
				noSurprises: {
					title: 'Sin sorpresas',
					description: 'Sabes qué recibirás, cuándo y cómo funcionará.',
				},
				testing: {
					title: 'Base para pruebas',
					description: 'La especificación se convierte en pruebas automáticas que validan el comportamiento.',
				},
			},
			quality: {
				...makeTranslations.es.methodology.quality,
				title: 'Calidad técnica',
				description:
					'Primero definimos con especificaciones claras; después construimos con revisiones de código, pruebas automáticas y buenas prácticas en cada entrega.',
				codeReview: {
					title: 'Revisión de código obligatoria',
					description: 'Todo el código pasa por revisión antes de integrarse.',
				},
				comprehensiveTesting: {
					title: 'Pruebas automáticas',
					description: 'Unitarias, de integración y de interfaz con cobertura útil.',
				},
				cicd: {
					title: 'CI/CD automatizado',
					description: 'Pipeline que ejecuta pruebas y análisis en cada cambio.',
				},
				cleanCode: {
					title: 'Código mantenible',
					description: 'Arquitectura clara y convenciones alineadas con el ecosistema Android.',
				},
			},
		},
		projects: {
			hero: {
				title: 'Proyectos',
				subtitle: 'Algunos proyectos en los que hemos participado',
			},
			filter: {
				all: 'Todos',
				automation: 'IA y automatización',
				software: 'Software',
			},
			lineLabel: {
				automation: 'IA y automatización',
				software: 'Software',
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
				case: {
					challenge: 'El reto',
					role: 'El papel de Bitdesal',
					result: 'El resultado',
					testimonial: 'Testimonio',
					challengeText:
						'Digitalizar el correo oficial y las facturas para cientos de miles de personas en Finlandia, con seguridad bancaria y versiones mensuales estables.',
					roleText:
						'Caye lideró el desarrollo Android de Kivra Finlandia durante 7 años, de 2019 a 2025, como Lead Android Developer. Hoy Bitdesal sigue dando continuidad al producto.',
					resultText:
						'Más de 100.000 descargas, 4,3★ en Play Store, más del 99,9 % de sesiones sin fallos y versiones mensuales durante 7 años.',
					nextCase: 'Siguiente caso →',
				},
				metrics: {
					users: '100K+',
					usersLabel: 'Descargas',
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
					title: '¿Hablamos de tu proyecto?',
					subtitle:
						'Si tienes un proceso repetitivo o una idea de producto, cuéntanoslo en 30 minutos y vemos si encaja.',
					button: 'Agenda 30 min gratis',
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
					button: 'Agenda 30 min gratis',
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
			title: '¿Hablamos?',
			subtitle:
				'Cuéntanos qué te quita tiempo o qué quieres construir. En 30 minutos te decimos si podemos ayudarte y cuánto costaría.',
			button: 'Agenda 30 min gratis',
			ia: {
				title: '¿Qué tarea te roba más horas cada semana?',
				subtitle:
					'Cuéntanosla en 30 minutos y te decimos si se puede automatizar y cuánto costaría.',
				button: 'Agenda 30 min gratis',
			},
			software: {
				title: '¿Necesitas reforzar tu equipo o sacar adelante un desarrollo?',
				subtitle: 'Hablemos.',
				button: 'Agenda 30 min gratis',
			},
		},
		about: {
			pageTitle: 'Nosotros',
			company: {
				p1: 'Bitdesal nace de una idea sencilla: la buena ingeniería no debería estar reservada a las grandes empresas.',
				p2: 'Empezamos desarrollando software y formando a equipos de desarrollo. Por el camino vimos algo que se repetía: empresas con un buen oficio y buenos clientes, pero que pierden cada semana horas en presupuestos a mano, papeles que van y vienen y tareas que nadie debería hacer dos veces. No les falta voluntad, les falta alguien que entienda su forma de trabajar y les dé una solución a su medida, a un precio que puedan asumir.',
				p3: 'Para eso existimos: para quitar burocracia y devolver ese tiempo a lo que de verdad hace crecer un negocio.',
				p4: 'Somos ingenieros informáticos superiores, y abordamos cada proyecto como un problema de ingeniería: primero entendemos el proceso, después diseñamos la solución y solo entonces la construimos, con pruebas y con documentación que tu equipo pueda seguir.',
				p5: 'La IA es una de nuestras herramientas, y muy potente, pero no es el fin. El fin es que tu empresa funcione mejor.',
			},
			team: {
				title: 'Equipo',
				cayeBio:
					'Ingeniero de software con 20 años de experiencia. Caye lideró el desarrollo Android de Kivra Finlandia durante 7 años y fundó Bitdesal en 2025.',
				ramiro: {
					name: 'Ramiro Santamaría',
					title: 'Automatización con IA e IT',
					bio: 'Informático con experiencia en desarrollo de apps móviles, web y en operaciones de IT y seguridad de redes. Se ha especializado en la orquestación de agentes de IA.',
				},
			},
			hero: {
				role: 'Caye Ruiz · Fundador de Bitdesal',
			},
			stats: {
				line: '20 años · 99,9 % sin fallos · versiones mensuales durante 7 años · 30+ desarrolladores formados · 5 países',
			},
			bio: {
				name: 'Caye Ruiz',
				title: 'Fundador de Bitdesal',
			},
			profiles: {
				linkedin: 'LinkedIn',
				github: 'GitHub',
				website: 'Web',
				shakers: 'Shakers',
			},
			ramiro: {
				journey: {
					title: 'Trayectoria de Ramiro',
					aiAgents: {
						role: 'Orquestador de agentes de IA',
						company: 'Freelance',
						location: '',
						dates: '2026 – actualidad',
						item1:
							'Diseña sistemas multiagente y flujos de automatización de operaciones IT para clientes.',
					},
					ininin: {
						role: 'Operaciones IT y seguridad',
						company: 'INININ Group',
						location: '',
						dates: '2021 – actualidad',
						item1:
							'Gestiona Microsoft 365, dispositivos, red, soporte de segundo nivel e implantaciones ERP en España, EE. UU., Latinoamérica y Asia.',
						item2: 'Desarrolla extensiones en AL para Microsoft Dynamics 365 Business Central.',
					},
					mobileFreelance: {
						role: 'Desarrollador de apps móviles',
						company: 'Freelance',
						location: '',
						dates: '2018 – actualidad',
						item1: 'Desarrolla apps Android e iOS con React Native y backend Node.js, MongoDB y GraphQL.',
					},
					webFreelance: {
						role: 'Desarrollador de aplicaciones web',
						company: 'Freelance',
						location: '',
						dates: '2017 – actualidad',
						item1:
							'Desarrolla aplicaciones web a medida con React, Firebase y WordPress, incluida una tienda online.',
					},
					alphaBiosciences: {
						role: 'Consultor IT',
						company: 'Alpha Biosciences',
						location: 'EE. UU.',
						dates: '2018 – 2021',
						item1:
							'Administra Windows Server y dominio, red y web corporativa.',
					},
					bilbaoShopping: {
						role: 'Fundador',
						company: 'Bilbao Shopping on Foot',
						location: '',
						dates: '2012 – 2015',
						item1: 'Fundó una startup con app móvil para encontrar comercios locales.',
					},
					awimbaweJava: {
						role: 'Desarrollador Java',
						company: 'Awimbawe LLC',
						location: '',
						dates: '2010',
						item1: 'Desarrolló software Java en producción.',
					},
					citef: {
						role: 'Desarrollador C++',
						company: 'CITEF',
						location: '',
						dates: '2006 – 2008',
						item1:
							'Desarrolló la interfaz de un simulador de tren para formar a conductores del Metro de Madrid.',
					},
					otherExperiences: {
						role: 'Otras experiencias',
						company: '',
						location: '',
						dates: '',
						summary:
							'Técnico de trabajos verticales en Asaken (2014–2016, jefe de equipo), profesor de inglés para empresas (2009–2012) y route setter en gimnasios de escalada en EE. UU. (2018–2021).',
					},
				},
				education: {
					title: 'Formación',
					licenciatura: {
						degree: 'Licenciatura en Informática',
						institution: 'Universidad Alfonso X el Sabio (Madrid)',
						dates: '2000 – 2005',
					},
					windowsServer: {
						degree: 'Administración de Windows Server 2016',
						institution: '',
						dates: '2018',
					},
					irata: {
						degree: 'Certificaciones IRATA nivel 2 y GWO',
						institution: 'Trabajos verticales y aerogeneradores',
						dates: '2014 – 2016',
					},
				},
				skills: {
					title: 'Competencias',
					aiAutomation: {
						title: 'Automatización con IA',
						description:
							'Sistemas multiagente y flujos que automatizan operaciones IT y tareas repetitivas.',
					},
					businessCentral: {
						title: 'Business Central y AL',
						description:
							'Extensiones para Dynamics 365 Business Central: tablas, informes, flujos e integraciones.',
					},
					webDev: {
						title: 'Desarrollo web',
						description: 'Aplicaciones con React, Node.js, GraphQL y WordPress para tiendas online.',
					},
					mobileApps: {
						title: 'Apps móviles',
						description: 'Apps Android e iOS con React Native y Firebase.',
					},
					itOps: {
						title: 'Operaciones IT',
						description: 'Microsoft 365, gestión de dispositivos, parches, DNS y soporte a usuarios.',
					},
					security: {
						title: 'Seguridad',
						description:
							'Firewalls, antivirus, políticas de red y protección del correo (DMARC, DKIM, SPF).',
					},
				},
				languages: {
					title: 'Idiomas',
					spanish: { label: 'Castellano (nativo)' },
					english: { label: 'Inglés (C2)' },
				},
			},
			journey: {
				title: 'Trayectoria de Caye',
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
			languages: {
				title: 'Idiomas',
				spanish: { label: 'Castellano (nativo)' },
				english: { label: 'Inglés (C1)' },
				valencian: { label: 'Valenciano/Catalán (B1)' },
				finnish: { label: 'Finés (B2)' },
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
			iaService: 'AI consulting',
			softwareService: 'Software development',
			about: 'About',
			pricing: 'Pricing',
			blog: 'Blog',
			projects: 'Projects',
			contact: 'Contact',
			language: 'Language',
		},
		footer: {
			tagline: 'Android Development, AI and High-Level Consulting',
			servicesTitle: 'Services',
			iaService: 'AI consulting for business',
			softwareService: 'Software development and consulting',
			androidDev: 'Android Development',
			ai: 'Artificial Intelligence',
			mentorship: 'Mentorship',
			consulting: 'Consulting',
			companyTitle: 'Company',
			aboutUs: 'About us',
			pricing: 'Pricing',
			blog: 'Blog',
			projects: 'Projects',
			contactTitle: 'Contact',
			contact: 'Contact',
			location: 'Elche · Valencian Community',
			linkedin: 'LinkedIn',
			rights: 'All rights reserved.',
			legalNotice: 'Legal notice',
			privacy: 'Privacy',
		},
		blog: {
			...makeTranslations.en.blog,
			hero: {
				title: 'Blog',
				subtitle: 'Articles from Bitdesal on LinkedIn and Medium about Android, AI and engineering',
			},
			filters: {
				all: 'All',
				business: 'For business',
				technical: 'Technical',
			},
			onSite: 'On bitdesal.com',
			external: 'LinkedIn and Medium',
			back: '← Blog',
		},
		pricing: {
			hero: {
				badge: 'Transparent pricing',
				title: 'Know what you will pay before we start',
				lead: 'Consulting to digitize how a company works and integrate AI where it cuts bureaucracy.',
				subtitle:
					'We work in phases so you know what we are solving, how long it takes and what it will cost before development begins.',
				cta: 'Book a free 30-minute call',
				details: 'See the approach',
			},
			blocks: {
				study: {
					title: 'Process study',
					price: 'Fixed price from €450 + VAT',
					note: '≈10 h; €675 + VAT if multiple departments or systems.',
					description: 'Requirements review, process mapping, proposed solution, phased plan and fixed estimate.',
					discount: 'Fully credited if you hire implementation within 30 days.',
				},
				implementation: {
					title: 'Implementation',
					price: 'Fixed price',
					description: 'Based on the study: redesign, technology, build, testing and training.',
				},
				support: {
					title: 'Support',
					price: 'Monthly bundles',
					description: '€225 / €450 / €900 + VAT (5/10/20 h). Billed for time used. No lock-in.',
				},
			},
			sections: {
				ia: 'AI consulting for business',
				software: 'Software development and consulting',
			},
			softwareBlock: {
				title: 'Software development and consulting',
				hourly: '€45/h + VAT. Reference rate for development, architecture and mentoring.',
				bundles: 'Monthly bundles: €225 / €450 / €900 + VAT (5/10/20 h). No lock-in.',
				fixed: 'Fixed-price project after specification and phased plan.',
				international:
					'International clients (software development and consulting): €60/h for EU companies (VAT handled by the client). €75/h for companies outside the EU.',
			},
			breakdownToggle: 'See phase breakdown',
			packages: {
				title: 'Indicative packages',
				express: {
					title: 'Focused automation',
					price: '€1,800–2,900 + VAT',
					time: '2–3 weeks',
					description: 'One concrete workflow: documents, approvals, reporting or similar.',
				},
				custom: {
					title: 'Custom tool / app',
					price: 'From €4,500 + VAT',
					description: 'Software tailored to your workflow with integrations and training.',
				},
				maintenance: {
					title: 'Maintenance',
					price: 'From €225/month + VAT',
					description: 'Support bundles for fixes and improvements.',
				},
			},
			faq: {
				title: 'Pricing FAQ',
				overrun: {
					q: 'What if the project runs long?',
					a: 'Fixed price holds unless we agree a scope change in writing.',
				},
				payment: {
					q: 'How do you invoice?',
					a: 'By bank transfer, PayPal or Bizum — whichever suits you. You always receive an invoice with VAT itemised.',
				},
				commitment: {
					q: 'Any lock-in?',
					a: 'None. You stay with us because it pays off, not because a contract forces you to. You can stop support whenever you want — no penalties and no explanations required.',
				},
			},
			rate: {
				unit: '/hour + VAT',
				note: 'All amounts shown are + VAT.',
			},
			included: {
				estimate: 'Initial estimate from day one',
				time: 'Only dedicated time is billed',
				training: 'Training on implemented tools included',
				handoff: 'Code and documentation ready for continuity',
				support: 'Post-launch support through monthly hour bundles',
			},
			approach: {
				eyebrow: 'The approach',
				title: 'Three principles behind the process',
				subtitle:
					'A method designed to make the investment visible in daily operations, not only in a presentation.',
				strategy:
					'Consulting to digitize how a company works and integrate AI where it cuts bureaucracy: approvals, documents, reporting and the tasks that still move by hand.',
			},
			principles: {
				find: {
					title: 'Find the bureaucracy',
					description:
						'We map the approvals, documents and handoffs that slow the company down, and estimate the work before development starts.',
				},
				connect: {
					title: 'Digitize and connect AI',
					description:
						'We turn that process into software and place AI where it removes repetition, inside the tools the team already uses.',
				},
				operate: {
					title: 'Leave it in daily use',
					description:
						'Training, code and documentation stay with your team. After launch, support continues through monthly hour bundles.',
				},
			},
			phases: {
				eyebrow: 'The process',
				title: 'Service phases',
				subtitle:
					'Hours are indicative; the final scope and fixed estimate are confirmed after the initial assessment.',
				coreLabel: 'Core idea:',
				core: 'diagnosing and redesigning before building prevents technology from merely accelerating an inefficient process.',
				items: {
					assessment: {
						title: 'Assessment and requirements',
						description: 'Goals, constraints and the underlying problem we need to solve.',
						short: 'Assessment',
					},
					study: {
						title: 'Process and systems study',
						description: 'Interviews, real workflows, exceptions and existing integrations.',
						short: 'Process study',
					},
					redesign: {
						title: 'Solution redesign',
						description: 'We define how the process should work before automating it.',
						short: 'Redesign',
					},
					technology: {
						title: 'Technology selection',
						description: 'Architecture, tools, integrations and security criteria.',
						short: 'Technology',
					},
					plan: {
						title: 'Phased implementation plan',
						description: 'A prioritized roadmap that starts with the highest-value work.',
						short: 'Phased plan',
					},
					delivery: {
						title: 'Implementation, training and delivery',
						description: 'Development, testing, launch and hands-on team training.',
						short: 'Implementation',
					},
				},
			},
			investment: {
				eyebrow: 'Investment',
				title: 'Clear rates, no surprises',
				subtitle:
					'Everything is calculated at €45/hour + VAT. This table shows an indicative project for a small or medium-sized company.',
				phase: 'Phase',
				hours: 'Hours (approx.)',
				amount: 'Amount',
				total: 'Complete project',
			},
			bundles: {
				title: 'Support hour bundles',
				subtitle: 'For incidents, adjustments and improvements after launch. Only consumed time is billed.',
				h5: '5 h / month',
				h10: '10 h / month',
				h20: '20 h / month',
				note: 'No long-term commitment. Adjust the bundle to your actual needs.',
			},
		},
		common: {
			bookCta: 'Book a free 30-minute call',
			seeHowIWork: 'See how I work',
			seePrices: 'See pricing',
			meetUs: 'Meet us',
			meetMe: 'About me',
		},
		theme: {
			switchToLight: 'Light mode',
			switchToDark: 'Dark mode',
		},
		contact: {
			title: "Let's talk about your project",
			lead: 'Tell me what task eats most of your week. I reply within one business day.',
			name: 'Name',
			company: 'Company',
			topicLabel: 'How can we help?',
			topicIa: 'AI consulting — automate processes',
			topicSoftware: 'Software development or consulting',
			topicOther: 'Other',
			message: 'What do you want to automate or improve?',
			emailOrPhone: 'Email or phone',
			submit: 'Send',
			success: 'Message sent. I will get back to you soon.',
			error: 'Could not send. Email me at caye@bitdesal.com.',
			alternatives: 'Or:',
			book: 'Book a free 30-minute call',
			location: 'Elche · Valencian Community · Remote across Spain',
			consentBefore: 'I have read the ',
			privacyPolicy: 'privacy policy',
			consentAfter: ' and I agree that you may process my data to respond to my request.',
			dataNotice:
				'Controller: Bitdesal ([NOMBRE DEL TITULAR]). Purpose: to respond to your contact request. Legal basis: your consent and pre-contractual steps. Recipients: Formspree, form provider (United States). Rights: access, rectification, erasure and others, as explained in the privacy policy.',
		},
		home: {
			...makeTranslations.en.home,
			hero: {
				title: 'Software and AI without surprises',
				subtitle:
					'Senior Android and AI consulting: clear specs, production quality, and measurable delivery for international teams.',
				imageAlt:
					'An image that reflects the serenity we want to convey to our clients at Bitdesal',
				viewProjects: 'View projects',
				contact: 'Book a free 30-minute call',
			},
			serviceCards: {
				ia: {
					title: 'AI consulting for business',
					description:
						'Quotes by hand, notes on paper or WhatsApp, appointments that slip? We study how you work and automate what eats your hours.',
					priceHint: 'From €1,800 + VAT',
					cta: 'See AI consulting',
				},
				software: {
					title: 'Software development and consulting',
					description:
						'Android development, architecture and quality for technical teams. Production apps with hundreds of thousands of users.',
					priceHint: '€45/h + VAT',
					cta: 'See software development',
				},
			},
			stats: {
				years: { value: '20 years', label: 'building software' },
				downloads: { value: '100K+', label: 'downloads on apps I led' },
				uptime: { value: '99.9%', label: 'crash-free sessions in production' },
				countries: { value: '5 countries', label: 'Spain, Switzerland, Finland, the United States and Australia' },
			},
			entryOffer: {
				badge: 'Fixed price, no surprises',
				text: 'We start with a €450 + VAT process study, fully credited if we do the project together. You get a diagnosis, the proposed solution and a fixed quote.',
				line: 'Projects from €1,800 + VAT · Reference rate: €45/h + VAT',
			},
			whyBitdesal: {
				title: 'Why Bitdesal?',
				subtitle: 'Clear specs, production-quality Android, and a handover your team can keep.',
				fixedPrice: {
					title: 'Fixed scope options',
					description: 'Phased delivery with estimates confirmed before development starts.',
				},
				direct: {
					title: 'You work with the builder',
					description: 'No account layers — senior engineering end to end.',
				},
				independence: {
					title: 'No lock-in',
					description: 'Code, documentation and team enablement stay with you.',
				},
				ai: {
					title: 'Practical AI',
					description: 'AI where it speeds delivery and quality, not for show.',
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
				core: 'Diagnose and redesign before building so technology does not only speed up a broken process.',
				steps: {
					call: {
						title: 'Free discovery call',
						description: '30 minutes to understand your goals and constraints.',
					},
					study: {
						title: 'Process study',
						description: 'Map the workflow and agree scope, plan and estimate.',
					},
					build: {
						title: 'Build',
						description: 'Iterative delivery with regular demos.',
					},
					handoff: {
						title: 'Handover and support',
						description: 'Documentation, training and optional support bundles.',
					},
				},
			},
			behind: {
				title: 'Who is behind Bitdesal',
				text: 'Bitdesal comes from 20 years of building software in Spain, Switzerland and Finland. Its founder, Caye Ruiz, led Kivra’s Android app for seven years, used by hundreds of thousands of people. Today we work with businesses that want technology that works, without unnecessary complexity.',
			},
			logos: {
				title: 'Experience at companies such as',
			},
			faq: {
				title: 'FAQ',
				items: {
					duration: {
						q: 'How long does a project take?',
						a: 'Depends on scope — from a few weeks for a focused improvement to months for a full product.',
					},
					tools: {
						q: 'Do we have to replace our stack?',
						a: 'Not necessarily. Integrations with existing tools are preferred when they fit.',
					},
					worth: {
						q: 'What if it is not worth it?',
						a: 'I will say so early — I only take work that makes technical and business sense.',
					},
					after: {
						q: 'What happens after delivery?',
						a: 'You keep the code and docs. Optional monthly support bundles are available.',
					},
					remote: {
						q: 'Remote only?',
						a: 'Yes, remote-first across Europe.',
					},
				},
			},
			projects: {
				title: 'Projects',
				subtitle: 'Selected client and product work',
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
			filter: {
				all: 'All',
				automation: 'AI and automation',
				software: 'Software',
			},
			lineLabel: {
				automation: 'AI and automation',
				software: 'Software',
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
				case: {
					challenge: 'The challenge',
					role: 'Bitdesal’s role',
					result: 'The result',
					testimonial: 'Testimonial',
					challengeText:
						'Digitise official mail and invoices for hundreds of thousands of people in Finland, with bank-grade security and stable monthly releases.',
					roleText:
						'Caye led Android development for Kivra Finland for seven years, from 2019 to 2025, as Lead Android Developer. Bitdesal continues the product today.',
					resultText:
						'More than 100,000 downloads, 4.3★ on the Play Store, over 99.9% crash-free sessions and monthly releases for seven years.',
					nextCase: 'Next case →',
				},
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
			ia: {
				title: 'Which task steals the most hours every week?',
				subtitle: 'Tell us in 30 minutes and we will say whether it can be automated and what it would cost.',
				button: 'Book a free 30-minute call',
			},
			software: {
				title: 'Need to strengthen your team or ship a build?',
				subtitle: "Let's talk.",
				button: 'Book a free 30-minute call',
			},
		},
		iaPage: {
			hero: {
				badge: 'AI consulting for business',
				title: 'Stop losing hours to paperwork',
				subtitle:
					'We automate your company’s processes with AI: quotes, appointments, job sheets, orders or invoices. You know the exact price before we start.',
			},
			painPoints: {
				title: 'Sound familiar?',
				closing: 'If you recognised yourself in any of these, your company can win back hours every week.',
				items: {
					budgets: {
						problem: 'I do quotes by hand or in Excel, at night',
						solution: 'We generate them in minutes from your phone, with your prices and your format.',
					},
					orders: {
						problem: 'I jot orders in a notebook or on WhatsApp',
						solution: 'Everything is recorded in one place, and you can find it when you need it.',
					},
					appointments: {
						problem: 'I forget appointments or don’t return calls',
						solution: 'A calendar with automatic reminders and an alert for every missed call.',
					},
					quotes: {
						problem: 'I send quotes and don’t know who replied',
						solution: 'Automatic follow-up: the system reminds them and lets you know.',
					},
					forms: {
						problem: 'Job sheets arrive on paper, or they don’t arrive',
						solution: 'The sheet is filled in on the phone, with photos and a signature, and goes straight to the office.',
					},
					copy: {
						problem: 'I copy the same data from one program to another',
						solution: 'We connect your tools so the data moves on its own.',
					},
					docs: {
						problem: 'I review delivery notes, invoices and documents one by one',
						solution: 'AI reads them, extracts the data and flags what matters.',
					},
				},
			},
			pricingSummary: {
				title: 'Indicative prices',
				study: 'Process study — €450 + VAT (€675 + VAT if several departments or systems are involved). 100% credited if you hire the implementation within the next 30 days.',
				express: 'Express automation — €1,800–2,900 + VAT · 2–3 weeks.',
				custom: 'Custom tool — from €4,500 + VAT.',
				support: 'Support — from €225/month + VAT, no lock-in.',
				details: 'See pricing in detail',
			},
			faq: {
				security: {
					q: 'Is it safe to use AI with my company’s data?',
					a: 'We choose tools that comply with the GDPR and explain where your data goes before we start.',
				},
				tech: {
					q: 'Do I need to know about computers?',
					a: 'No. We fit what you already use so the change stays small, and we teach you the new parts step by step.',
				},
			},
		},
		consultoriaPage: {
			hero: {
				title: 'Software development and consulting for teams that cannot afford to fail',
				subtitle:
					'Android development, architecture and code quality. 20 years of experience and production apps with hundreds of thousands of users.',
				kivraCase: 'See the Kivra case',
			},
			services: {
				title: 'Services',
				android: {
					title: 'Android development',
					description: 'Kotlin, Jetpack Compose, KMP. Production apps, from the first release to maintenance.',
				},
				architecture: {
					title: 'Architecture and quality',
					description: 'Clean Architecture, code review, automated tests, CI/CD.',
				},
				ai: {
					title: 'AI-assisted engineering',
					description: 'Specification, scaffolding, review and documentation workflows with AI, without losing quality.',
				},
				mentoring: {
					title: 'Mentoring and teams',
					description: 'Technical coaching that leaves the team stronger, not dependent.',
				},
			},
			kivraHighlight: {
				title: 'Kivra Finland case',
				text: 'Caye led Android development for Kivra Finland from 2019 to 2025. Bitdesal continues the product today.',
				stats: '100K+ downloads · 4.3★ · 5.1K reviews · 7 years in production · 99.9% crash-free',
				cta: 'See the case study',
			},
			pricing: {
				title: 'Ways of working and price',
				hourly: 'Hourly: €45/h + VAT',
				bundles: 'Monthly bundles: €225 / €450 / €900 + VAT (5/10/20 h).',
				fixed: 'Fixed-price project after specification.',
				international:
					'International companies: €60/h (EU; the client handles VAT) · €75/h (outside the EU).',
				details: 'See pricing',
			},
		},
		about: {
			pageTitle: 'About us',
			hero: {
				role: 'Caye Ruiz · Founder of Bitdesal',
			},
			stats: {
				line: '20 years · 99.9% crash-free · monthly releases for 7 years · 30+ developers trained · 5 countries',
			},
			company: {
				p1: 'Bitdesal was born from a simple idea: good engineering shouldn’t be reserved for big companies.',
				p2: 'We started out building software and training development teams. Along the way, we kept seeing the same thing: businesses that are great at what they do and have good clients, yet lose hours every week to hand-made quotes, paperwork going back and forth, and tasks nobody should have to do twice. They don’t lack the will. What they lack is someone who understands how they work and gives them a tailored solution, at a price they can afford.',
				p3: 'That’s why we exist: to cut the red tape and give that time back to what really makes a business grow.',
				p4: 'We are qualified computer engineers, and we approach every project as an engineering problem: first we understand the process, then we design the solution, and only then do we build it, with tests and with documentation your team can follow.',
				p5: 'AI is one of our tools, and a very powerful one, but it isn’t the goal. The goal is for your business to work better.',
			},
			bio: {
				name: 'Caye Ruiz',
				title: 'Founder',
			},
			profiles: {
				linkedin: 'LinkedIn',
				github: 'GitHub',
				website: 'Website',
				shakers: 'Shakers',
			},
			team: {
				title: 'Team',
				cayeBio:
					'Software engineer with 20 years of experience. Caye led Android development for Kivra Finland for seven years and founded Bitdesal in 2025.',
				ramiro: {
					name: 'Ramiro Santamaría',
					title: 'AI automation and IT',
					bio: 'IT professional with experience in mobile and web app development and in IT and network security operations. He specializes in AI agent orchestration.',
				},
			},
			ramiro: {
				journey: {
					title: "Ramiro's work experience",
					aiAgents: {
						role: 'AI agent orchestrator',
						company: 'Freelance',
						location: '',
						dates: '2026 – Present',
						item1: 'Designs multi-agent systems and IT operations automation flows for clients.',
					},
					ininin: {
						role: 'IT operations and security',
						company: 'INININ Group',
						location: '',
						dates: '2021 – Present',
						item1:
							'Manages Microsoft 365, devices, networking, second-line support and ERP rollouts across Spain, the US, Latin America and Asia.',
						item2: 'Builds AL extensions for Microsoft Dynamics 365 Business Central.',
					},
					mobileFreelance: {
						role: 'Mobile app developer',
						company: 'Freelance',
						location: '',
						dates: '2018 – Present',
						item1: 'Builds Android and iOS apps with React Native and Node.js, MongoDB and GraphQL backends.',
					},
					webFreelance: {
						role: 'Web application developer',
						company: 'Freelance',
						location: '',
						dates: '2017 – Present',
						item1: 'Delivers custom web apps with React, Firebase and WordPress, including an online store.',
					},
					alphaBiosciences: {
						role: 'IT consultant',
						company: 'Alpha Biosciences',
						location: 'United States',
						dates: '2018 – 2021',
						item1: 'Administered Windows Server and domain, network and corporate web.',
					},
					bilbaoShopping: {
						role: 'Founder',
						company: 'Bilbao Shopping on Foot',
						location: '',
						dates: '2012 – 2015',
						item1: 'Founded a startup with a mobile app to find local shops.',
					},
					awimbaweJava: {
						role: 'Java developer',
						company: 'Awimbawe LLC',
						location: '',
						dates: '2010',
						item1: 'Delivered production Java software.',
					},
					citef: {
						role: 'C++ developer',
						company: 'CITEF',
						location: '',
						dates: '2006 – 2008',
						item1:
							'Built the interface for a train simulator used to train Madrid Metro drivers.',
					},
					otherExperiences: {
						role: 'Other experience',
						company: '',
						location: '',
						dates: '',
						summary:
							'Rope-access technician at Asaken (2014–2016, team lead), corporate English teacher (2009–2012) and route setter at climbing gyms in the US (2018–2021).',
					},
				},
				education: {
					title: 'Education',
					licenciatura: {
						degree: 'Bachelor’s degree in Computer Science',
						institution: 'Universidad Alfonso X el Sabio (Madrid)',
						dates: '2000 – 2005',
					},
					windowsServer: {
						degree: 'Windows Server 2016 administration',
						institution: '',
						dates: '2018',
					},
					irata: {
						degree: 'IRATA level 2 and GWO certifications',
						institution: 'Rope access and wind turbines',
						dates: '2014 – 2016',
					},
				},
				skills: {
					title: 'Skills',
					aiAutomation: {
						title: 'AI automation',
						description: 'Multi-agent systems and workflows that automate IT operations and repetitive tasks.',
					},
					businessCentral: {
						title: 'Business Central & AL',
						description:
							'Extensions for Dynamics 365 Business Central: tables, reports, workflows and integrations.',
					},
					webDev: {
						title: 'Web development',
						description: 'Applications with React, Node.js, GraphQL and WordPress for online stores.',
					},
					mobileApps: {
						title: 'Mobile apps',
						description: 'Android and iOS apps with React Native and Firebase.',
					},
					itOps: {
						title: 'IT operations',
						description: 'Microsoft 365, device management, patching, DNS and user support.',
					},
					security: {
						title: 'Security',
						description: 'Firewalls, antivirus, network policies and email protection (DMARC, DKIM, SPF).',
					},
				},
				languages: {
					title: 'Languages',
					spanish: { label: 'Spanish (native)' },
					english: { label: 'English (C2)' },
				},
			},
			journey: {
				title: "Caye's work experience",
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
			languages: {
				title: 'Languages',
				spanish: { label: 'Spanish (native)' },
				english: { label: 'English (C1)' },
				valencian: { label: 'Valencian/Catalan (B1)' },
				finnish: { label: 'Finnish (B2)' },
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
		theme: {
			switchToLight: 'Vaalea tila',
			switchToDark: 'Tumma tila',
		},
		nav: {
			home: 'Etusivu',
			iaService: 'Tekoälykonsultointi',
			softwareService: 'Ohjelmistokehitys',
			about: 'Tietoa',
			pricing: 'Hinnat',
			blog: 'Blogi',
			projects: 'Projektit',
			contact: 'Ota yhteyttä',
			language: 'Kieli',
		},
		footer: {
			tagline: 'Android-kehitys, tekoäly ja korkean tason konsultointi',
			servicesTitle: 'Palvelut',
			iaService: 'Tekoälykonsultointi yrityksille',
			softwareService: 'Ohjelmistokehitys ja konsultointi',
			androidDev: 'Android-kehitys',
			ai: 'Tekoäly',
			mentorship: 'Mentorointi',
			consulting: 'Konsultointi',
			companyTitle: 'Yritys',
			aboutUs: 'Tietoa meistä',
			pricing: 'Hinnat',
			blog: 'Blogi',
			projects: 'Projektit',
			contactTitle: 'Yhteystiedot',
			contact: 'Ota yhteyttä',
			location: 'Elche · Valencia',
			linkedin: 'LinkedIn',
			rights: 'Kaikki oikeudet pidätetään.',
			legalNotice: 'Oikeudellinen ilmoitus',
			privacy: 'Tietosuoja',
		},
		blog: {
			...makeTranslations.fi.blog,
			hero: {
				title: 'Blogi',
				subtitle: 'Bitdesalin artikkelit LinkedInissä ja Mediumissa Androidista, tekoälystä ja insinöörityöstä',
			},
			filters: {
				all: 'Kaikki',
				business: 'Yrityksille',
				technical: 'Tekninen',
			},
			onSite: 'Bitdesal.comissa',
			external: 'LinkedIn ja Medium',
			back: '← Blogi',
		},
		pricing: {
			hero: {
				badge: 'Läpinäkyvä hinnoittelu',
				title: 'Ohjelmisto ja tekoäly ilman yllätyksiä',
				lead: 'Konsultointia, jolla digitalisoidaan yrityksen toiminta ja tuodaan tekoäly sinne, missä se keventää byrokratiaa.',
				subtitle:
					'Työskentelemme vaiheittain, jotta tiedät mitä ratkaisemme, kauanko se kestää ja mitä se maksaa ennen kehityksen alkua.',
				cta: 'Pyydä alustava arvio',
				details: 'Katso lähestymistapa',
			},
			rate: {
				unit: '/tunti',
				note: 'Yksi hinta. ALV ei sisälly.',
			},
			included: {
				estimate: 'Alustava arvio ensimmäisestä päivästä',
				time: 'Laskutamme vain käytetyn ajan',
				training: 'Koulutus käyttöön otetuista työkaluista sisältyy',
				handoff: 'Koodi ja dokumentaatio valmiina jatkamaan',
				support: 'Julkaisun jälkeinen tuki kuukausittaisina tuntipaketteina',
			},
			approach: {
				eyebrow: 'Lähestymistapa',
				title: 'Kolme periaatetta prosessin takana',
				subtitle: 'Menetelmä, jolla investointi näkyy arjen työssä, ei vain esityksessä.',
				strategy:
					'Konsultointia, jolla digitalisoidaan yrityksen toiminta ja tuodaan tekoäly sinne, missä se keventää byrokratiaa: hyväksynnät, asiakirjat, raportointi ja työ, joka liikkuu yhä käsin.',
			},
			principles: {
				find: {
					title: 'Löydä byrokratia',
					description:
						'Käymme läpi hyväksynnät, asiakirjat ja siirrot, jotka hidastavat yritystä, ja arvioimme työn ennen kehityksen alkua.',
				},
				connect: {
					title: 'Digitalisoi ja kytke tekoäly',
					description:
						'Muutamme prosessin ohjelmistoksi ja viemme tekoälyn sinne, missä se poistaa toistoa — työkaluihin, joita tiimi jo käyttää.',
				},
				operate: {
					title: 'Jätä se arkeen',
					description:
						'Koulutus, koodi ja dokumentaatio jäävät tiimillesi. Julkaisun jälkeen tuki jatkuu kuukausittaisina tuntipaketteina.',
				},
			},
			phases: {
				eyebrow: 'Prosessi',
				title: 'Palvelun vaiheet',
				subtitle:
					'Tunnit ovat suuntaa antavia; lopullinen laajuus ja kiinteä arvio vahvistetaan alustavan arvion jälkeen.',
				coreLabel: 'Ydinajatus:',
				core: 'diagnosointi ja uudelleensuunnittelu ennen rakentamista estää teknologiaa vain nopeuttamasta tehotonta prosessia.',
				items: {
					assessment: {
						title: 'Arviointi ja vaatimukset',
						description: 'Tavoitteet, reunaehdot ja varsinainen ongelma, joka pitää ratkaista.',
						short: 'Arviointi',
					},
					study: {
						title: 'Prosessien ja järjestelmien kartoitus',
						description: 'Haastattelut, todelliset työnkulut, poikkeukset ja nykyiset integraatiot.',
						short: 'Prosessikartoitus',
					},
					redesign: {
						title: 'Ratkaisun uudelleensuunnittelu',
						description: 'Määritämme, miten prosessin pitäisi toimia, ennen kuin sitä automatisoidaan.',
						short: 'Uudelleensuunnittelu',
					},
					technology: {
						title: 'Teknologian valinta',
						description: 'Arkkitehtuuri, työkalut, integraatiot ja tietoturvakriteerit.',
						short: 'Teknologia',
					},
					plan: {
						title: 'Vaiheittainen toteutussuunnitelma',
						description: 'Priorisoitu tiekartta, joka alkaa arvokkaimmasta työstä.',
						short: 'Vaiheittainen suunnitelma',
					},
					delivery: {
						title: 'Toteutus, koulutus ja luovutus',
						description: 'Kehitys, testaus, julkaisu ja käytännön koulutus tiimille.',
						short: 'Toteutus',
					},
				},
			},
			investment: {
				eyebrow: 'Investointi',
				title: 'Selkeät hinnat, ei yllätyksiä',
				subtitle:
					'Kaikki lasketaan hintaan 45 €/tunti. Taulukko näyttää suuntaa antavan projektin pienelle tai keskisuurelle yritykselle.',
				phase: 'Vaihe',
				hours: 'Tunnit (noin)',
				amount: 'Summa',
				total: 'Koko projekti',
			},
			bundles: {
				title: 'Tukituntipaketit',
				subtitle: 'Häiriöihin, säätöihin ja parannuksiin julkaisun jälkeen. Laskutamme vain käytetyn ajan.',
				h5: '5 h / kk',
				h10: '10 h / kk',
				h20: '20 h / kk',
				note: 'Ei pitkää sitoumusta. Sovita paketti todelliseen tarpeeseen.',
			},
			blocks: {
				study: {
					title: 'Prosessitutkimus',
					price: '450 € + ALV (kiinteä hinta)',
					note: '≈10 h; 675 € + ALV, jos osastoja tai järjestelmiä on useita.',
					description:
						'Sisältää vaatimusten arvioinnin sekä prosessien ja järjestelmien tutkimuksen. Toimitus: diagnoosi, ehdotettu ratkaisu, vaiheittainen suunnitelma ja kiinteä tarjous.',
					discount: '100 % hyvitetään, jos tilaat toteutuksen seuraavien 30 päivän aikana.',
				},
				implementation: {
					title: 'Toteutus',
					price: 'Kiinteä hinta',
					description: 'Tutkimuksen mukaan: uudelleensuunnittelu, teknologia, suunnitelma, kehitys, testit ja koulutus.',
				},
				support: {
					title: 'Tuki',
					price: 'Kuukausipaketit',
					description: '225 € / 450 € / 900 € + ALV (5/10/20 h). Laskutetaan vain käytetty aika. Ei sitoutumista.',
				},
			},
			sections: {
				ia: 'Tekoälykonsultointi yrityksille',
				software: 'Ohjelmistokehitys ja konsultointi',
			},
			softwareBlock: {
				title: 'Ohjelmistokehitys ja konsultointi',
				hourly: '45 €/h + ALV. Vertailuhinta kehitykselle, arkkitehtuurille ja mentoroinnille.',
				bundles: 'Kuukausipaketit: 225 € / 450 € / 900 € + ALV (5/10/20 h), ilman sitoutumista.',
				fixed: 'Kiinteähintainen projekti spesifikaation ja vaiheittaisen suunnitelman jälkeen.',
				international:
					'Ohjelmistokehitys ja konsultointi kansainvälisille yrityksille: 60 €/h EU-yrityksille (asiakas hoitaa ALV:n). 75 €/h EU:n ulkopuolisille yrityksille.',
			},
			breakdownToggle: 'Näytä vaiheittainen erittely',
			packages: {
				title: 'Suuntaa antavat paketit',
				express: {
					title: 'Pika-automaatio',
					price: '1 800–2 900 € + ALV',
					time: '2–3 viikkoa',
					description: 'Yksi konkreettinen prosessi: tarjoukset, laskut, tapaamiset, työselosteet tai asiakirjat tekoälyllä.',
				},
				custom: {
					title: 'Räätälöity työkalu / sovellus',
					price: 'Alkaen 4 500 € + ALV',
					description: 'Ohjelmisto, joka sopii tapaasi työskennellä, integraatioineen ja koulutuksineen.',
				},
				maintenance: {
					title: 'Ylläpito',
					price: 'Alkaen 225 €/kk + ALV',
					description: 'Tuntipaketteja häiriöihin, säätöihin ja parannuksiin.',
				},
			},
			faq: {
				title: 'Kysymyksiä hinnoista',
				overrun: {
					q: 'Mitä jos projekti venyy?',
					a: 'Kiinteä hinta ei muutu, ellei laajuus muutu, ja siitä sovitaan aina kirjallisesti etukäteen.',
				},
				payment: {
					q: 'Miten maksetaan?',
					a: 'Tilisiirrolla, PayPalilla tai Bizumilla, kumpi sinulle sopii. Saat aina laskun, jossa ALV on eritelty.',
				},
				commitment: {
					q: 'Onko sitoutumisaikaa?',
					a: 'Ei. Jäät asiakkaaksi, koska se kannattaa, ei siksi että sopimus pakottaisi. Voit lopettaa tuen milloin tahansa ilman sanktioita ja ilman selityksiä.',
				},
			},
		},
		common: {
			bookCta: 'Varaa 30 min ilmaiseksi',
			seeHowIWork: 'Katso mitä teemme',
			seePrices: 'Katso hinnat',
			meetUs: 'Tutustu meihin',
			meetMe: 'Tutustu meihin',
		},
		contact: {
			title: 'Puhutaan projektistasi',
			lead: 'Kerro mitä tarvitset. Vastaamme alle 24 työtunnin kuluessa.',
			name: 'Nimi',
			company: 'Yritys',
			topicLabel: 'Miten voimme auttaa?',
			topicIa: 'Tekoälykonsultointi — prosessien automatisointi',
			topicSoftware: 'Ohjelmistokehitys tai konsultointi',
			topicOther: 'Muu',
			message: 'Viesti',
			emailOrPhone: 'Sähköposti tai puhelin',
			submit: 'Lähetä',
			success: 'Viesti lähetetty. Vastaamme pian.',
			error: 'Lähetys epäonnistui. Kirjoita osoitteeseen caye@bitdesal.com.',
			alternatives: 'Tai jos haluat:',
			book: 'Varaa 30 min ilmaiseksi',
			location: 'Elche · Valencia · Etätyö koko Espanjassa ja kansainvälisille asiakkaille',
			consentBefore: 'Olen lukenut ',
			privacyPolicy: 'tietosuojakäytännön',
			consentAfter: ' ja hyväksyn, että käsittelette tietojani vastataksenne pyyntööni.',
			dataNotice:
				'Rekisterinpitäjä: Bitdesal ([NOMBRE DEL TITULAR]). Tarkoitus: vastata yhteydenottopyyntöösi. Oikeusperuste: suostumuksesi ja esisopimukselliset toimenpiteet. Vastaanottajat: Formspree, lomakkeen palveluntarjoaja (Yhdysvallat). Oikeudet: pääsy, oikaisu, poisto ja muut, kuten tietosuojakäytännössä selitetään.',
		},
		home: {
			...makeTranslations.fi.home,
			hero: {
				title: 'Ohjelmisto ja tekoäly ilman yllätyksiä',
				subtitle:
					'Konsultointia Androidiin, webiin ja API-rajapintoihin. Pidämme huolen, että se tekee sen mihin se on suunniteltu — ja että tuote voi mennä pidemmälle.',
				imageAlt:
					'Kuva, joka heijastaa rauhallisuutta, jota haluamme välittää Bitdesalin asiakkaille',
				viewProjects: 'Katso projektit',
				contact: 'Ota yhteyttä',
			},
			serviceCards: {
				ia: {
					title: 'Tekoälykonsultointi yrityksille',
					description:
						'Tarjouksia käsin, muistiinpanoja paperilla tai WhatsAppissa, tapaamisia jotka unohtuvat? Tutkimme miten työskentelette ja automatisoimme sen, mikä vie tunteja.',
					priceHint: 'Alkaen 1 800 € + ALV',
					cta: 'Katso tekoälykonsultointi',
				},
				software: {
					title: 'Ohjelmistokehitys ja konsultointi',
					description:
						'Android-kehitystä, arkkitehtuuria ja laatua teknisille tiimeille. Tuotantosovelluksia sadoilletuhansille käyttäjille.',
					priceHint: '45 €/h + ALV',
					cta: 'Katso ohjelmistokehitys',
				},
			},
			stats: {
				years: { value: '20 vuotta', label: 'kokemusta ohjelmistoista' },
				downloads: { value: '100K+', label: 'latausta sovelluksissa, joita olemme johtaneet' },
				uptime: { value: '99,9 %', label: 'istuntoja ilman kaatumisia tuotannossa' },
				countries: { value: '5 maata', label: 'Espanja, Sveitsi, Suomi, Yhdysvallat ja Australia' },
			},
			entryOffer: {
				badge: 'Kiinteä hinta, ei yllätyksiä',
				text: 'Aloitamme 450 € + ALV prosessitutkimuksella, joka vähennetään kokonaisuudessaan, jos teemme projektin yhdessä. Saat diagnoosin, ehdotetun ratkaisun ja kiinteän tarjouksen.',
				line: 'Projektit alkaen 1 800 € + ALV · Vertailuhinta: 45 €/h + ALV',
			},
			behind: {
				title: 'Kuka on taustalla',
				text: 'Bitdesal syntyy 20 vuodesta ohjelmistojen rakentamista Espanjassa, Sveitsissä ja Suomessa. Perustajamme Caye Ruiz johti seitsemän vuotta Kivran Android-sovellusta, jota käyttivät satojatuhannet ihmiset. Tänään autamme yrityksiä, jotka haluavat teknologian toimivan ilman turhaa monimutkaisuutta.',
			},
			whyBitdesal: {
				title: 'Miksi Bitdesal?',
				subtitle: 'Puhumme selkeästi ja pidämme sen, mistä sovimme.',
				fixedPrice: {
					title: 'Kiinteä hinta',
					description: 'Tiedät mitä maksat ennen kuin aloitamme.',
				},
				direct: {
					title: 'Suora yhteys tekijään',
					description: 'Ei välikäsiä eikä myyntikerroksia.',
				},
				independence: {
					title: 'Ei riippuvuutta',
					description: 'Jätämme koodin, dokumentaation ja koulutetun tiimin.',
				},
				ai: {
					title: 'Tekoälyä siellä missä se säästää, ei siellä missä se näyttää',
					description: 'Käytämme sitä vain, kun se poistaa toistuvaa työtä.',
				},
				modernStack: {
					title: 'Moderni stack',
					description:
						'Kotlin, KMP, Jetpack Compose ja Astro arkkitehtuurissa, jonka tiimisi omistaa luovutuksen jälkeen.',
				},
				practicalAI: {
					title: 'Käytännön tekoäly',
					description:
						'Tekoälyä sinne, missä se keventää yrityksen byrokratiaa, ja kehitykseen ilman laatutappiota.',
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
				title: 'Miten työskentelemme',
				subtitle: 'Ensin ymmärrämme. Sitten rakennamme kunnolla.',
				core: 'Diagnosointi ennen rakentamista estää teknologiaa vain nopeuttamasta tehotonta prosessia.',
				steps: {
					call: {
						title: 'Maksuton keskustelu',
						description: '30 minuuttia, jotta ymmärrämme ongelmasi ja näemme voimmeko auttaa.',
					},
					study: {
						title: 'Tutkimus',
						description: 'Käymme läpi miten työskentelette nyt ja toimitamme ratkaisun, suunnitelman ja kiinteän tarjouksen.',
					},
					build: {
						title: 'Rakentaminen',
						description: 'Kehitämme vaiheittain ja näytämme demon joka viikko, jotta näet etenemisen.',
					},
					handoff: {
						title: 'Koulutus ja tuki',
						description: 'Koulutamme tiimisi ja, jos haluat, jatkamme kuukausittaisilla tuntipaketeilla.',
					},
				},
			},
			logos: {
				title: 'Kokemusta yrityksistä kuten',
			},
			faq: {
				title: 'Usein kysytyt kysymykset',
				items: {
					duration: {
						q: 'Kuinka kauan projekti kestää?',
						a: 'Yksi konkreettinen automaatio, 2–3 viikkoa. Räätälöity työkalu, 1–3 kuukautta.',
					},
					tools: {
						q: 'Pitääkö minun vaihtaa ohjelmat, joita jo käytän?',
						a: 'Ei välttämättä. Aina kun mahdollista, kytkemme uuden siihen mitä sinulla jo on.',
					},
					worth: {
						q: 'Entä jos se ei loppujen lopuksi kannata?',
						a: 'Sanomme sen tutkimuksessa. Jos investointi ei ole järkevä, emme yritä myydä sitä.',
					},
					after: {
						q: 'Mitä tapahtuu luovutuksen jälkeen?',
						a: 'Sinulle jää koodi ja koulutus. Jos tarvitset tukea, on tuntipaketteja ilman sitoutumista.',
					},
					remote: {
						q: 'Työskentelettekö vain etänä?',
						a: 'Koko Espanjassa etänä. Jos olet lähellä Elcheä tai Valenciaa, voimme tavata kasvotusten.',
					},
				},
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
			filter: {
				all: 'Kaikki',
				automation: 'Tekoäly ja automaatio',
				software: 'Ohjelmisto',
			},
			lineLabel: {
				automation: 'Tekoäly ja automaatio',
				software: 'Ohjelmisto',
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
				case: {
					challenge: 'Haaste',
					role: 'Bitdesalin rooli',
					result: 'Tulos',
					testimonial: 'Suositus',
					challengeText:
						'Virallisen postin ja laskujen digitalisointi sadoilletuhansille ihmisille Suomessa, pankkitason turvallisuudella ja vakailla kuukausijulkaisuilla.',
					roleText:
						'Caye johti Kivra Suomen Android-kehitystä seitsemän vuotta, 2019–2025, Lead Android Developerina. Bitdesal jatkaa tuotetta tänään.',
					resultText:
						'Yli 100 000 latausta, 4,3★ Play Storessa, yli 99,9 % istunnoista ilman kaatumisia ja kuukausijulkaisut seitsemän vuoden ajan.',
					nextCase: 'Seuraava tapaus →',
				},
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
			ia: {
				title: 'Mikä tehtävä vie eniten tunteja joka viikko?',
				subtitle: 'Kerro se 30 minuutissa, niin sanomme voidaanko se automatisoida ja mitä se maksaisi.',
				button: 'Varaa 30 min ilmaiseksi',
			},
			software: {
				title: 'Tarvitsetko vahvistusta tiimiin tai kehityksen maaliin?',
				subtitle: 'Puhutaan.',
				button: 'Varaa 30 min ilmaiseksi',
			},
		},
		iaPage: {
			hero: {
				badge: 'Tekoälykonsultointi yrityksille',
				title: 'Lopeta tuntien hukkaaminen paperityöhön',
				subtitle:
					'Automatisoimme yrityksesi prosessit tekoälyllä: tarjoukset, tapaamiset, työselosteet, tilaukset tai laskut. Tiedät tarkan hinnan ennen kuin aloitamme.',
			},
			painPoints: {
				title: 'Kuulostaako tutulta?',
				closing: 'Jos tunnistit itsesi jossakin, yrityksesi voi voittaa tunteja joka viikko.',
				items: {
					budgets: {
						problem: 'Teen tarjoukset käsin tai Excelissä, illalla',
						solution: 'Luomme ne minuuteissa puhelimesta, hinnoillasi ja muodollasi.',
					},
					orders: {
						problem: 'Kirjaan tilaukset vihkoon tai WhatsAppiin',
						solution: 'Kaikki tallentuu yhteen paikkaan, ja löydät sen kun tarvitset.',
					},
					appointments: {
						problem: 'Unohdan tapaamisia enkä soita takaisin',
						solution: 'Kalenteri automaattisilla muistutuksilla ja hälytys jokaisesta vastaamattomasta puhelusta.',
					},
					quotes: {
						problem: 'Lähetän tarjouksia enkä tiedä kuka on vastannut',
						solution: 'Automaattinen seuranta: järjestelmä muistuttaa heitä ja ilmoittaa sinulle.',
					},
					forms: {
						problem: 'Työselosteet tulevat paperilla, tai eivät tule',
						solution: 'Seloste täytetään puhelimessa, kuvineen ja allekirjoituksineen, ja menee suoraan toimistoon.',
					},
					copy: {
						problem: 'Kopioin samat tiedot ohjelmasta toiseen',
						solution: 'Kytkemme työkalusi niin, että tiedot siirtyvät itsestään.',
					},
					docs: {
						problem: 'Tarkistan lähetteet, laskut ja asiakirjat yksi kerrallaan',
						solution: 'Tekoäly lukee ne, poimii tiedot ja kertoo mikä on tärkeää.',
					},
				},
			},
			pricingSummary: {
				title: 'Suuntaa antavat hinnat',
				study: 'Prosessitutkimus — 450 € + ALV (675 € + ALV, jos osastoja tai järjestelmiä on useita). 100 % hyvitetään, jos tilaat toteutuksen seuraavien 30 päivän aikana.',
				express: 'Pika-automaatio — 1 800–2 900 € + ALV · 2–3 viikkoa.',
				custom: 'Räätälöity työkalu — alkaen 4 500 € + ALV.',
				support: 'Tuki — alkaen 225 €/kk + ALV, ilman sitoutumista.',
				details: 'Katso hinnat tarkemmin',
			},
			faq: {
				security: {
					q: 'Onko turvallista käyttää tekoälyä yritykseni tiedoilla?',
					a: 'Valitsemme GDPR:n mukaisia työkaluja ja kerromme minne tietosi menevät ennen kuin aloitamme.',
				},
				tech: {
					q: 'Pitääkö minun osata tietotekniikkaa?',
					a: 'Ei. Sopeudumme siihen mitä jo käytätte, jotta muutos jää pieneksi, ja opetamme uuden askel askeleelta.',
				},
			},
		},
		consultoriaPage: {
			hero: {
				title: 'Ohjelmistokehitys ja konsultointi tiimeille, jotka eivät voi epäonnistua',
				subtitle:
					'Android-kehitystä, arkkitehtuuria ja koodin laatua. 20 vuoden kokemus ja tuotantosovelluksia sadoilletuhansille käyttäjille.',
				kivraCase: 'Katso Kivra-tapaus',
			},
			services: {
				title: 'Palvelut',
				android: {
					title: 'Android-kehitys',
					description: 'Kotlin, Jetpack Compose, KMP. Tuotantosovelluksia ensimmäisestä versiosta ylläpitoon.',
				},
				architecture: {
					title: 'Arkkitehtuuri ja laatu',
					description: 'Clean Architecture, koodikatselmukset, automaattiset testit, CI/CD.',
				},
				ai: {
					title: 'Tekoälyavusteinen insinöörityö',
					description: 'Spesifikaatio-, scaffolding-, katselmus- ja dokumentaatiotyönkulut tekoälyllä, laatua menettämättä.',
				},
				mentoring: {
					title: 'Mentorointi ja tiimit',
					description: 'Teknistä tukea, joka jättää tiimin vahvemmaksi, ei riippuvaiseksi.',
				},
			},
			kivraHighlight: {
				title: 'Kivra Suomi -tapaus',
				text: 'Caye johti Kivra Suomen Android-kehitystä 2019–2025. Bitdesal jatkaa tuotetta tänään.',
				stats: '100K+ latausta · 4,3★ · 5,1K arviota · 7 vuotta tuotannossa · 99,9 % ilman kaatumisia',
				cta: 'Katso tapaus',
			},
			pricing: {
				title: 'Toimintatavat ja hinta',
				hourly: 'Tuntihinta: 45 €/h + ALV',
				bundles: 'Kuukausipaketit: 225 € / 450 € / 900 € + ALV (5/10/20 h).',
				fixed: 'Kiinteähintainen projekti spesifikaation jälkeen.',
				international:
					'Kansainväliset yritykset: 60 €/h (EU; asiakas hoitaa ALV:n) · 75 €/h (EU:n ulkopuolella).',
				details: 'Katso hinnat',
			},
		},
		about: {
			pageTitle: 'Tietoa meistä',
			hero: {
				role: 'Caye Ruiz · Bitdesalin perustaja',
			},
			stats: {
				line: '20 vuotta · 99,9 % ilman kaatumisia · kuukausijulkaisut 7 vuoden ajan · yli 30 koulutettua kehittäjää · 5 maata',
			},
			company: {
				p1: 'Bitdesal syntyi yksinkertaisesta ajatuksesta: hyvä insinöörityö ei saisi olla vain suurten yritysten etuoikeus.',
				p2: 'Aloitimme kehittämällä ohjelmistoja ja kouluttamalla kehitystiimejä. Matkan varrella huomasimme saman asian yhä uudelleen: yrityksiä, jotka osaavat työnsä ja joilla on hyviä asiakkaita, mutta jotka menettävät joka viikko tunteja käsin tehtyihin tarjouksiin, edestakaisin kulkeviin papereihin ja tehtäviin, joita kenenkään ei pitäisi tehdä kahdesti. Tahdosta ei ole puutetta. Puuttuu joku, joka ymmärtää, miten ne toimivat, ja tarjoaa juuri niille sopivan ratkaisun hintaan, joka on niille realistinen.',
				p3: 'Siksi olemme olemassa: karsimme byrokratiaa ja palautamme sen ajan siihen, mikä todella kasvattaa liiketoimintaa.',
				p4: 'Olemme koulutukseltamme tietotekniikan insinöörejä (ylempi korkeakoulututkinto), ja lähestymme jokaista projektia insinööriongelmana: ensin ymmärrämme prosessin, sitten suunnittelemme ratkaisun ja vasta sen jälkeen rakennamme sen, testattuna ja dokumentoituna niin, että tiimisi pystyy jatkamaan siitä.',
				p5: 'Tekoäly on yksi työkaluistamme, ja erittäin tehokas sellainen, mutta se ei ole itsetarkoitus. Tarkoitus on, että yrityksesi toimii paremmin.',
			},
			bio: {
				name: 'Caye Ruiz',
				title: 'Perustaja',
			},
			profiles: {
				linkedin: 'LinkedIn',
				github: 'GitHub',
				website: 'Verkkosivu',
				shakers: 'Shakers',
			},
			team: {
				title: 'Tiimi',
				cayeBio:
					'Ohjelmistoinsinööri, 20 vuoden kokemus. Caye johti Kivra Suomen Android-kehitystä seitsemän vuotta ja perusti Bitdesalin vuonna 2025.',
				ramiro: {
					name: 'Ramiro Santamaría',
					title: 'Tekoälyautomaatio ja IT',
					bio: 'Tietotekniikan ammattilainen, jolla on kokemusta mobiili- ja web-sovelluskehityksestä sekä IT- ja verkkoturvallisuusoperaatioista. Hän on erikoistunut tekoälyagenttien orkestraatioon.',
				},
			},
			ramiro: {
				journey: {
					title: 'Ramiron työkokemus',
					aiAgents: {
						role: 'Tekoälyagenttien orkestraattori',
						company: 'Freelance',
						location: '',
						dates: '2026 – nykyinen',
						item1:
							'Suunnittelee moniagenttijärjestelmiä ja IT-toimintojen automatisointityönkulkuja asiakkaille.',
					},
					ininin: {
						role: 'IT-operaatiot ja tietoturva',
						company: 'INININ Group',
						location: '',
						dates: '2021 – nykyinen',
						item1:
							'Hallinnoi Microsoft 365 -ympäristöä, laitteita, verkkoa, toisen tason tukea ja ERP-käyttöönottoja Espanjassa, Yhdysvalloissa, Latinalaisessa Amerikassa ja Aasiassa.',
						item2: 'Kehittää AL-laajennuksia Microsoft Dynamics 365 Business Centraliin.',
					},
					mobileFreelance: {
						role: 'Mobiilisovelluskehittäjä',
						company: 'Freelance',
						location: '',
						dates: '2018 – nykyinen',
						item1:
							'Rakentaa Android- ja iOS-sovelluksia React Nativella sekä Node.js-, MongoDB- ja GraphQL-taustoilla.',
					},
					webFreelance: {
						role: 'Web-sovelluskehittäjä',
						company: 'Freelance',
						location: '',
						dates: '2017 – nykyinen',
						item1:
							'Toimittaa räätälöityjä web-sovelluksia Reactilla, Firebasella ja WordPressillä, mukaan lukien verkkokauppa.',
					},
					alphaBiosciences: {
						role: 'IT-konsultti',
						company: 'Alpha Biosciences',
						location: 'Yhdysvallat',
						dates: '2018 – 2021',
						item1: 'Hallinnoi Windows Server -ympäristöä ja toimialuetta, verkkoa ja yrityksen verkkosivustoa.',
					},
					bilbaoShopping: {
						role: 'Perustaja',
						company: 'Bilbao Shopping on Foot',
						location: '',
						dates: '2012 – 2015',
						item1: 'Perusti startupin mobiilisovelluksella paikallisten kauppojen löytämiseen.',
					},
					awimbaweJava: {
						role: 'Java-kehittäjä',
						company: 'Awimbawe LLC',
						location: '',
						dates: '2010',
						item1: 'Toimitti tuotantovalmista Java-ohjelmistoa.',
					},
					citef: {
						role: 'C++-kehittäjä',
						company: 'CITEF',
						location: '',
						dates: '2006 – 2008',
						item1:
							'Rakensi käyttöliittymän junasimulaattoriin Madridin metron kuljettajien koulutukseen.',
					},
					otherExperiences: {
						role: 'Muu kokemus',
						company: '',
						location: '',
						dates: '',
						summary:
							'Köysipääsyteknikko Asakenilla (2014–2016, tiiminvetäjä), yritysenglannin opettaja (2009–2012) ja reittien rakentaja kiipeilyhalleissa Yhdysvalloissa (2018–2021).',
					},
				},
				education: {
					title: 'Koulutus',
					licenciatura: {
						degree: 'Tietojenkäsittelytieteen kandidaatin tutkinto',
						institution: 'Universidad Alfonso X el Sabio (Madrid)',
						dates: '2000 – 2005',
					},
					windowsServer: {
						degree: 'Windows Server 2016 -hallinta',
						institution: '',
						dates: '2018',
					},
					irata: {
						degree: 'IRATA tason 2 ja GWO -sertifioinnit',
						institution: 'Köysipääsy ja tuulivoimalat',
						dates: '2014 – 2016',
					},
				},
				skills: {
					title: 'Osaaminen',
					aiAutomation: {
						title: 'Tekoälyautomaatio',
						description:
							'Moniagenttijärjestelmät ja työnkulut, jotka automatisoivat IT-toimintoja ja toistuvia tehtäviä.',
					},
					businessCentral: {
						title: 'Business Central ja AL',
						description:
							'Laajennukset Dynamics 365 Business Centraliin: taulut, raportit, työnkulut ja integraatiot.',
					},
					webDev: {
						title: 'Web-kehitys',
						description: 'Sovelluksia Reactilla, Node.js:llä, GraphQL:llä ja WordPressillä verkkokaupoille.',
					},
					mobileApps: {
						title: 'Mobiilisovellukset',
						description: 'Android- ja iOS-sovelluksia React Nativella ja Firebasella.',
					},
					itOps: {
						title: 'IT-operaatiot',
						description: 'Microsoft 365, laitehallinta, päivitykset, DNS ja käyttäjätuki.',
					},
					security: {
						title: 'Tietoturva',
						description: 'Palomuurit, virustorjunta, verkkokäytännöt ja sähköpostisuojaus (DMARC, DKIM, SPF).',
					},
				},
				languages: {
					title: 'Kielet',
					spanish: { label: 'Espanja (äidinkieli)' },
					english: { label: 'Englanti (C2)' },
				},
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
			languages: {
				title: 'Kielet',
				spanish: { label: 'Espanja (äidinkieli)' },
				english: { label: 'Englanti (C1)' },
				valencian: { label: 'Valencia/Katalaani (B1)' },
				finnish: { label: 'Suomi (B2)' },
			},
		},
	},
};

