/** Spanish-only copy for /consultoria-android/ and /auditoria-app-android/. */
export const androidConsultingPage = {
	hero: {
		h1: 'Consultoría Android para apps que no pueden fallar',
		lead:
			'Somos consultor Android senior en Kotlin y Jetpack Compose para empresas y equipos de producto en España. Si tu app está en producción, no basta con «ir tirando»: hacemos desarrollo, rescate de código, arquitectura y calidad con el mismo rigor que exige una app con usuarios reales. Caye Ruiz lideró la app Android de Kivra en Finlandia siete años (más de 100.000 descargas y 99,9 % de sesiones sin fallos en producción); ese estándar es el que traemos a cada proyecto.',
		p2: 'Trabajamos como desarrollador Android senior freelance integrado en tu equipo: mismos canales, mismas ceremonias, entregables cada semana. Cubrimos consultoría Android (decisiones de arquitectura, revisión de PRs, definición de pruebas) y desarrollo en manos cuando hace falta ejecutar.',
		p3: 'El foco son productos B2B y B2C con usuarios en España y la UE: fintech, utilities, logística, retail y herramientas internas. Si buscas «consultor Android» o «consultoría Android» con alguien que haya llevado una app nacional en producción, este es nuestro terreno.',
	},
	pain: {
		title: '¿Te suena?',
		items: {
			crashes: {
				title: 'La app se cierra sola',
				body: 'Los usuarios reportan cierres inesperados y Play Console muestra excepciones que nadie tiene tiempo de priorizar. Revisamos trazas, reproducimos el fallo y te proponemos un plan con fixes medibles y pruebas que lo validen.',
			},
			legacy: {
				title: 'El código es Java o XML antiguo y nadie quiere tocarlo',
				body: 'Cada cambio pequeño se convierte en aventura. Migramos por fases a Kotlin, modularizamos y documentamos para que el equipo vuelva a enviar cambios con confianza.',
			},
			releases: {
				title: 'Cada versión da miedo',
				body: 'Sin pruebas automáticas ni CI, publicar es una lotería. Montamos pipelines (GitHub Actions u otros), tests en capas críticas y criterios de salida antes de subir a Play.',
			},
			noSenior: {
				title: 'El equipo no tiene un perfil senior Android',
				body: 'Te reforzamos como consultor Android senior freelance integrado en tu flujo: pair programming, revisiones y entregas semanales sin sustituir a tu equipo, sino elevándolo.',
			},
			apiLevel: {
				title: 'Google Play obliga a actualizar el nivel de API',
				body: 'Analizamos dependencias, compileSdk y breaking changes, planificamos la actualización con ramas cortas y entregas que no paralicen el negocio.',
			},
			slow: {
				title: 'La app va lenta',
				body: 'Perfilamos arranque, memoria y red; priorizamos mejoras con impacto en tiempo de pantalla y fluidez, con métricas antes y después.',
			},
		},
	},
	services: {
		title: 'Qué hacemos',
		kotlin: {
			title: 'Desarrollo Android en Kotlin',
			body: 'Features nuevas, mantenimiento y publicación mensual con MVVM/MVI, modularización y buenas prácticas de Google.',
		},
		staff: {
			title: 'Refuerzo de tu equipo (externalizar Android)',
			body: 'Ingeniería senior a demanda: sprint a sprint, con tu backlog y tus herramientas (Jira, Linear, Slack, lo que ya uséis).',
		},
		audit: {
			title: 'Auditoría de tu app',
			body: 'Informe priorizado de arquitectura, estabilidad, rendimiento y seguridad.',
			linkLabel: 'Auditoría de apps Android',
		},
		compose: {
			title: 'Migración a Jetpack Compose',
			body: 'Plan por pantallas o módulos: convivencia con Views, diseño con Material 3 y tests de UI.',
		},
		kmp: {
			title: 'Kotlin Multiplatform',
			body: 'Cuando comparte lógica entre Android e iOS tiene sentido, definimos el alcance y evitamos sobreingeniería.',
		},
		cicd: {
			title: 'CI/CD y pruebas automáticas',
			body: 'Pipelines que separan «¿mergeamos?» de «¿pueden probar en dispositivo?», con cobertura donde aporta valor.',
		},
		ai: {
			title: 'Desarrollo asistido por IA sin perder calidad',
			body: 'Usamos agentes para scaffolding y revisiones, dentro de un flujo spec-driven; no es vibe coding.',
		},
	},
	kivra: {
		title: 'Caso: la app Android de Kivra',
		body: 'Caye fue Lead Android de Kivra Finlandia de 2019 a 2025: app nacional de buzón digital y pagos con más de 100.000 descargas, valoración 4,3★ y 99,9 % de sesiones sin fallos. Coordinó releases continuos, migración tecnológica y calidad con un equipo distribuido. En Bitdesal aplicamos esa misma disciplina a tu producto.',
		cta: 'Ver el caso completo de Kivra',
	},
	how: {
		title: 'Cómo trabajamos',
	},
	pricing: {
		title: 'Precio',
		p1: 'Tarifa de referencia: 45 €/h + IVA para consultoría y desarrollo Android senior.',
		p2: 'Bolsas mensuales de 225 €, 450 € y 900 € + IVA (5, 10 y 20 h), solo facturamos lo consumido, sin permanencia.',
		p3: 'Proyectos o rescates a precio cerrado después de especificación y plan por fases: sabes el alcance antes de empezar.',
		link: 'Ver tarifas de software y desarrollo Android',
	},
	faq: {
		title: 'Preguntas frecuentes',
		items: {
			cost: {
				q: '¿Cuánto cuesta un consultor Android?',
				a: 'La referencia es 45 €/h + IVA. Una bolsa de 10 h (450 € + IVA) suele bastar para un diagnóstico profundo; proyectos cerrados se cotizan tras especificación.',
			},
			remote: {
				q: '¿Trabajáis en remoto con equipos de fuera de España?',
				a: 'Sí. Principalmente en remoto en España y en la UE; para empresas internacionales aplicamos tarifas de 60 €/h (UE) o 75 €/h (fuera de la UE) según facturación.',
			},
			java: {
				q: '¿Os encargáis de código antiguo en Java?',
				a: 'Sí. Rescatamos apps Java/XML, migramos a Kotlin por módulos y dejamos pruebas y documentación para que vuestro equipo mantenga el ritmo.',
			},
			outsource: {
				q: '¿Compensa externalizar o contratar?',
				a: 'Externalizar Android senior cubre picos y rescates sin proceso de contratación de seis meses; contratar encaja si hay roadmap largo. Te lo decimos en la primera conversación, sin agenda oculta.',
			},
			start: {
				q: '¿Cuánto se tarda en empezar?',
				a: 'Tras la llamada de 30 minutos, si encajamos, solemos arrancar en 1–2 semanas según disponibilidad y accesos.',
			},
			nda: {
				q: '¿Firmáis NDA?',
				a: 'Sí. Trabajamos con acuerdos de confidencialidad habituales; podemos usar el vuestro o proponer uno estándar.',
			},
			english: {
				q: '¿Trabajáis en inglés?',
				a: 'Sí. Documentación, dailies y código en inglés son lo habitual en equipos internacionales; también atendemos en español y finés.',
			},
		},
	},
	closing:
		'Si buscas consultoría Android, un desarrollador Android senior freelance con experiencia en producción o alguien que audite antes de invertir en un rescate, agenda 30 minutos y vemos encaje y siguiente paso.',
	mid: {
		p1: 'Muchas empresas llegan cuando la app lleva años sin un referente senior: el conocimiento vive en una sola persona, el bus factor es alto y cada release es un ritual de nervios. Nuestro trabajo como consultores Android es reducir ese riesgo con procesos que ya usamos en producción, no con slides genéricas.',
		p2: 'No prometemos reescribir la app en un mes. Sí prometemos claridad: qué está roto, qué es deuda tolerable y qué conviene atacar primero para que usuarios y negocio noten la mejora. Cuando el alcance encaja, lo cerramos por escrito antes de codificar.',
	},
};

export const androidAuditPage = {
	hero: {
		h1: 'Auditoría de tu app Android',
		lead:
			'Antes de reescribir la app entera o contratar a medio equipo, conviene saber qué falla de verdad. Hacemos auditoría app Android para empresas y product teams: arquitectura, estabilidad, rendimiento, seguridad y pipeline de entrega. El entregable es un informe priorizado, un plan de mejora y, si encaja, un presupuesto cerrado para ejecutarlo.',
	},
	scope: {
		title: 'Qué revisamos',
		items: {
			architecture: {
				title: 'Arquitectura y modularización',
				body: 'Capas, acoplamientos, deuda técnica y alineación con el tamaño de tu equipo.',
			},
			stability: {
				title: 'Estabilidad y cierres inesperados',
				body: 'Análisis de Play Console, ANRs y rutas críticas; reproducibilidad y severidad.',
			},
			performance: {
				title: 'Rendimiento y arranque',
				body: 'Tiempo hasta pantalla útil, memoria, trabajo en hilo UI y uso de red.',
			},
			security: {
				title: 'Seguridad',
				body: 'Almacenamiento de credenciales, ofuscación, permisos y superficie de exportación de componentes.',
			},
			deps: {
				title: 'Dependencias y nivel de API',
				body: 'Actualizaciones pendientes, SDK mínimo y obligaciones de Play.',
			},
			build: {
				title: 'Build y CI/CD',
				body: 'Gradle, tiempos de build, firmas, tracks de Play y automatización.',
			},
			tests: {
				title: 'Pruebas',
				body: 'Unitarias, instrumentadas y de UI; qué cubren y qué queda a mano.',
			},
			a11y: {
				title: 'Accesibilidad',
				body: 'Contraste, etiquetas, tamaños táctiles y lectores de pantalla en flujos clave.',
			},
		},
	},
	deliverable: {
		title: 'Qué recibes',
		body: 'Informe escrito con hallazgos ordenados por impacto y esfuerzo, reuniones de entrega con tu equipo técnico y, si lo pedís, propuesta de implementación a precio cerrado.',
	},
	pricing: {
		title: 'Plazo y precio',
		// TODO(caye): precio cerrado de la auditoría Android (importe y plazo típico)
		body: 'Plazo orientativo: 1–2 semanas según tamaño de la app y accesos. Precio: pendiente de definir contigo el paquete cerrado de auditoría.',
		note: 'TODO(caye): precio cerrado de la auditoría (sustituir este bloque cuando lo tengáis).',
	},
	context:
		'La auditoría encaja cuando vais a renovar la app, negociar con un proveedor o preparar una ronda de inversión. Si ya sabéis que necesitáis manos en el código, podéis ir directo a nuestra consultoría Android senior.',
	extra: {
		p1: 'No sustituimos a vuestro equipo de producto: trabajamos con el CTO, el lead o la agencia que ya tenéis para que las decisiones se entiendan y se prioricen con datos, no con intuición.',
		p2: 'El informe está pensado para leerlo sin ser experto Android: cada hallazgo explica impacto en usuario, riesgo y esfuerzo estimado, con enlaces a documentación cuando aporta contexto técnico.',
		p3: 'Si detectamos temas fuera de Android (backend, analytics, procesos de release), los marcamos como recomendaciones colaborativas con otros roles, sin inflar el alcance de la auditoría.',
	},
	androidConsultingLink: 'consultoría Android',
	faq: {
		title: 'Preguntas frecuentes',
		items: {
			need: {
				q: '¿Necesitamos daros acceso al repositorio?',
				a: 'Lo ideal es acceso de lectura al repo y a Play Console (o export de métricas). Si no es posible, revisamos builds y código parcial con el alcance acordado.',
			},
			after: {
				q: '¿La auditoría obliga a contratar implementación?',
				a: 'No. Os quedáis el informe; implementar con nosotros, con vuestro equipo o con otro proveedor es vuestra decisión.',
			},
			compose: {
				q: '¿Auditáis apps solo en Compose o también Views?',
				a: 'Ambas. Muchas apps productivas siguen en Views o en migración mixta; el informe tiene en cuenta vuestro roadmap.',
			},
			diff: {
				q: '¿En qué se diferencia de una revisión rápida gratis?',
				a: 'Profundidad: días de análisis, entrevistas con el equipo, informe priorizado y seguimiento de preguntas, no una charla de una hora.',
			},
		},
	},
};

export const consultoriaPageExpanded = {
	hero: {
		title: 'Desarrollo Android y consultoría de software para equipos que no pueden fallar',
	},
	intro: {
		p1: 'En Bitdesal combinamos desarrollo Android en producción y consultoría de software para equipos que necesitan calidad medible, no prototipos bonitos. Trabajamos en Kotlin, Jetpack Compose, arquitectura modular, pruebas automáticas y CI/CD con el mismo estándar que exige una app con cientos de miles de usuarios.',
		p2: 'Caye Ruiz aporta más de 20 años en software y siete años liderando la app Android de Kivra (más de 100.000 descargas, 99,9 % de sesiones sin fallos). Ramiro Santamaría refuerza operaciones, seguridad e integración de agentes de IA donde acorta el ciclo sin sustituir ingeniería.',
	},
	androidPromo: {
		title: 'Consultoría Android senior',
		p1: 'Si tu necesidad es sobre todo móvil —rescate de legado, releases mensuales, falta de senior en el equipo— tenemos una página dedicada de consultoría Android: servicios, caso Kivra, precios y preguntas frecuentes pensadas para CTOs y responsables de producto en España.',
		linkConsulting: 'consultoría Android',
		linkAudit: 'auditoría de apps Android',
		p2: 'Cuando no estáis seguros de por dónde empezar, la auditoría os da un informe priorizado antes de comprometer un proyecto grande.',
	},
	body: {
		p1: 'Además de Android, ayudamos con arquitectura backend ligera, integraciones y flujos spec-driven con IA asistida. La diferencia es que no vendemos horas sin rumbo: empezamos entendiendo el riesgo de negocio (caídas, retrasos, dependencia de una sola persona) y proponemos fases con entregables.',
		p2: 'Podéis contratarnos por horas, bolsa mensual o proyecto cerrado tras especificación. Para empresas fuera de España aplicamos tarifas internacionales transparentes; en la UE, el IVA lo gestiona el cliente cuando corresponde.',
	},
};
