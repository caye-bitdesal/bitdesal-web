/** Spanish copy for /agentes-ia-empresas/. */
export const agentsPage = {
	hero: {
		h1: 'Agentes de IA para empresas',
		lead: 'Un agente de IA lee un mensaje o un documento, elige el siguiente paso dentro de unas reglas y lo hace: pide un dato, rellena un borrador o avisa a una persona. No es un chatbot: el chatbot conversa y se queda ahí; el agente termina una tarea.',
		p2: 'En Bitdesal los montamos para empresas que viven de presupuestos, citas y partes. La persona sigue confirmando lo que compromete un precio o una fecha. Si un agente no ahorra horas de verdad, no lo proponemos.',
	},
	what: {
		title: 'Qué es un agente de IA',
		p1: 'Un agente de IA es un sistema con un encargo acotado. Recibe una entrada (un WhatsApp, un correo, una nota de voz, un PDF), entiende qué se le pide, consulta lo que le hemos dejado consultar (tus precios, tu agenda, el estado de un presupuesto) y ejecuta una acción. La acción puede ser responder, crear un borrador o escalar a alguien del equipo.',
		p2: 'No es un empleado digital ni una inteligencia general. No «lleva la empresa». Hace un trabajo estrecho, el que hemos escrito, y se detiene cuando la regla dice que pare. Esa parada es parte del diseño, no un fallo.',
		p3: 'Por eso hablamos de agentes de IA para empresas y no de un asistente genérico. El agente conoce tu forma de presupuestar, tus campos obligatorios y a quién tiene que avisar. Lo demás no lo inventa: pregunta o calla.',
	},
	compare: {
		title: 'Agente, chatbot y automatización',
		lead: 'Los tres se mezclan en las conversaciones comerciales. En un encargo no son lo mismo, y elegir mal es pagar de más.',
		headers: { type: 'Qué es', does: 'Qué hace', fits: 'Cuándo encaja' },
		rows: {
			auto: {
				type: 'Automatización',
				does: 'Mueve datos por un camino fijo: de la hoja al pedido, del parte al aviso.',
				fits: 'Cuando el paso es siempre el mismo y el dato ya está estructurado.',
			},
			chat: {
				type: 'Chatbot',
				does: 'Contesta preguntas con un texto. No crea el presupuesto ni pide el pedido.',
				fits: 'Cuando basta con informar: horarios, documentación que hay que enviar, preguntas frecuentes.',
			},
			agent: {
				type: 'Agente de IA',
				does: 'Lee, decide el siguiente paso y actúa, o se detiene y te lo pasa.',
				fits: 'Cuando la entrada es desordenada (una nota, una foto, un audio) y hay que hacer algo con ella.',
			},
		},
		after: 'Muchos encargos usan los tres a la vez: el agente entiende el mensaje, la automatización mueve el dato y, si hace falta, un texto corto responde al cliente. Lo decidimos en el estudio, no en un eslogan.',
	},
	cases: {
		title: 'Casos de uso en empresas de oficios',
		lead: 'No publicamos nombres de clientes. Estos son encargos que sí hacemos, descritos como el trabajo, no como un testimonio. Si el tuyo se parece, el estudio dice si el agente compensa.',
		voice: {
			title: 'Presupuesto desde una nota de voz',
			body: 'Quien ha estado en la obra graba las medidas y lo que ha visto. El agente transcribe, coloca las partidas en tu plantilla y deja el borrador para revisar el precio. No envía el presupuesto al cliente. Lo envías tú cuando el importe es el que quieres.',
		},
		whatsapp: {
			title: 'Responder en WhatsApp y recoger datos',
			body: 'El agente contesta lo repetido y pide lo que falta para poder presupuestar: dirección, fotos, medidas, cuándo se puede ir a verlo. La conversación deja de ser un hilo de veinte mensajes y pasa a ser una ficha. Si la persona pide un descuento o una fecha cerrada, el agente no improvisa: te avisa.',
		},
		delivery: {
			title: 'Leer albaranes',
			body: 'Una foto o un PDF del albarán. El agente saca proveedor, referencias e importes y los compara con el pedido. Lo que cuadra se prepara para pasarlo a tu gestión. Lo que no cuadra se marca para que alguien lo mire, en vez de enterarte a fin de mes.',
		},
		follow: {
			title: 'Seguimiento de presupuestos',
			body: 'El agente sabe qué presupuestos siguen sin respuesta y escribe el recordatorio con tu tono, en el canal que ya usas. Registra la contestación. No insiste al que ha dicho que no. Tú ves la lista de los que siguen abiertos, no cuarenta hilos.',
		},
	},
	limits: {
		title: 'Límites y supervisión humana',
		p1: 'La regla de trabajo es esta: la IA propone y la persona confirma. Un borrador de presupuesto, un pedido o una respuesta que compromete a la empresa no sale sola el primer día, ni el segundo, mientras no hayamos medido que el error es aceptable para ti.',
		p2: 'El agente tiene una lista de paradas: importes por encima de un umbral, quejas, datos que no reconoce, clientes que piden hablar con alguien. En esos casos no contesta «como pueda». Escala. Esa lista se escribe en el estudio, con tus números, no con un umbral genérico.',
		p3: 'Supervisar no es leer todo otra vez como si no hubiera agente. Es mirar lo que el sistema ha marcado y una muestra de lo que ha dejado pasar. Si esa revisión te lleva el mismo tiempo que hacer el trabajo a mano, el agente no está listo y no lo damos por terminado.',
	},
	data: {
		title: 'Datos y RGPD',
		p1: 'Antes de conectar un WhatsApp o una carpeta de facturas te decimos qué datos salen, a qué servicio y con qué contrato. Elegimos herramientas que permiten un tratamiento acorde al RGPD y no usamos los documentos de tus clientes para entrenar un modelo público.',
		p2: 'El Reglamento (UE) 2024/1689, el reglamento europeo de inteligencia artificial, clasifica obligaciones según el uso. No te damos aquí un calendario de aplicación: la fuente para leer el texto es el Diario Oficial, y el encaje concreto lo miramos con el uso que vayas a darle, no con una fecha copiada de un blog.',
		lawLink: 'Texto del Reglamento (UE) 2024/1689 en EUR-Lex',
		lawHref: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32024R1689',
	},
	price: {
		title: 'Cuánto cuesta un agente de IA',
		p1: 'Un agente no tiene un precio distinto «por ser agente». Se presupuesta como el resto de la automatización, porque el coste está en el flujo, las pruebas y la supervisión, no en la palabra.',
		p2: 'Estudio de procesos: 450 € + IVA (100 % descontable si contratas la implementación en 30 días). Un agente acotado, del tipo exprés, suele quedar entre 1.800 y 2.900 € + IVA. Si hay que conectar varios sistemas o cubrir más de un proceso, la herramienta a medida parte de 4.500 € + IVA. El soporte, para ajustes y vigilancia, desde 225 € al mes + IVA, sin permanencia.',
		p3: 'En la reunión de 30 minutos te decimos en qué banda cae tu caso. Si cae fuera porque no compensa, también te lo decimos.',
		link: 'Ver precios de la consultoría de IA',
	},
	related: {
		title: 'Páginas relacionadas',
		ia: 'Consultoría de IA para empresas',
		auto: 'Automatización de procesos con IA',
		local: 'Consultoría de IA en Elche y Alicante',
		costGuide: 'Cuánto cuesta implementar IA en una empresa',
		casesGuide: 'Agentes de IA para empresas: 6 casos en oficios',
		quotesGuide: 'Automatizar presupuestos con IA: voz, PDF y errores',
		contact: 'Agendar 30 minutos',
	},
	faq: {
		title: 'Preguntas frecuentes',
		diff: {
			q: '¿En qué se diferencia un agente de IA de un chatbot?',
			a: 'El chatbot responde con un texto. El agente, además, hace una tarea: rellena un borrador, pide un dato que falta o avisa a una persona. Si no hay una tarea al final, no hace falta un agente.',
		},
		alone: {
			q: '¿El agente contesta solo a los clientes?',
			a: 'Solo en lo que hayamos dejado por escrito y solo mientras no cruce una parada (precio, queja, dato raro). Lo que compromete a la empresa lo confirma una persona. Se puede ampliar más adelante, cuando hayáis visto cómo se comporta.',
		},
		whatsapp: {
			q: '¿Puede trabajar con el WhatsApp que ya tenemos?',
			a: 'Es uno de los canales habituales, junto con el correo. Cómo se conecta depende de la cuenta que uséis. Lo comprobamos en el estudio, antes de cerrar el precio, y no prometemos un canal que no hayamos podido probar.',
		},
		replace: {
			q: '¿Sustituye a alguien del equipo?',
			a: 'Quita horas de copiar, perseguir y rellenar. No sustituye a quien mide, negocia o decide un margen. Si el miedo es ese, lo hablamos en la primera reunión: hay encargos que no tienen sentido y no los cogemos.',
		},
	},
};
