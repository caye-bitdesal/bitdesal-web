export const androidConsultingPage = {
	hero: {
		h1: 'Android consulting for apps that cannot fail',
		lead:
			'We are senior Android consultants specialising in Kotlin and Jetpack Compose. We build new apps, improve apps already in production and reinforce teams that need a senior profile. Whatever we do, we do it to the highest standard.',
		p2: 'We apply SOLID principles and clean architecture, with automated tests and review of all code. The result is software that is easy to understand, maintain and extend. We make sure we deliver what you asked for from day one: before writing code we put in writing what we will build and how we will verify it works. Then we show you progress every week so there are no surprises at the end.',
		p3: 'Our work is done when you no longer need us. You keep clean code, clear documentation and a team that understands what was built and can continue without us. If you want us to stay alongside you later, it will be because you choose it, not because you depend on us.',
		navSoftware: 'Software consulting',
		navContact: 'Contact',
		navIa: 'AI consulting',
	},
	pain: {
		title: 'Sound familiar?',
		items: {
			crashes: {
				title: 'The app keeps closing on its own',
				body: 'Users report unexpected crashes and Play Console shows exceptions nobody has time to prioritise. We review traces, reproduce the issue and propose a plan with measurable fixes and tests to validate them.',
			},
			legacy: {
				title: 'The codebase is old Java or XML and nobody wants to touch it',
				body: 'Every small change becomes an adventure. We migrate to Kotlin in phases, modularise and document so the team can ship again with confidence.',
			},
			releases: {
				title: 'Every release is scary',
				body: 'Without automated tests or CI, publishing is a lottery. We set up pipelines (GitHub Actions or other), tests on critical layers and release criteria before upload to Play.',
			},
			noSenior: {
				title: 'The team has no senior Android profile',
				body: 'We reinforce you as embedded senior Android consultants: pair programming, reviews and weekly delivery without replacing your team — we level it up.',
			},
			apiLevel: {
				title: 'Google Play forces you to raise the API level',
				body: 'We analyse dependencies, compileSdk and breaking changes, and plan the upgrade with short branches and deliveries that do not stall the business.',
			},
			slow: {
				title: 'The app feels slow',
				body: 'We profile startup, memory and network; prioritise improvements that affect time-to-screen and smoothness, with before-and-after metrics.',
			},
		},
	},
	services: {
		title: 'What we do',
		kotlin: {
			title: 'Android development in Kotlin',
			body: 'New features, maintenance and monthly releases with MVVM/MVI, modularisation and Google’s recommended practices.',
		},
		staff: {
			title: 'Team reinforcement (Android staff augmentation)',
			body: 'Senior engineering on demand, sprint by sprint, with your backlog and your tools (Jira, Linear, Slack — whatever you already use).',
		},
		audit: {
			title: 'App audit',
			body: 'Prioritised report on architecture, stability, performance and security.',
			linkLabel: 'Android app audit',
		},
		compose: {
			title: 'Migration to Jetpack Compose',
			body: 'Screen-by-screen or module plan: coexistence with Views, Material 3 and UI tests.',
		},
		kmp: {
			title: 'Kotlin Multiplatform',
			body: 'When sharing logic between Android and iOS makes sense, we define scope and avoid over-engineering.',
		},
		cicd: {
			title: 'CI/CD and automated tests',
			body: 'Pipelines that separate “can we merge?” from “can testers install it?”, with coverage where it adds value.',
		},
		ai: {
			title: 'AI-assisted development without losing quality',
			body: 'We use agents for scaffolding and review inside a spec-driven workflow — not vibe coding.',
		},
	},
	kivra: {
		title: 'Case study: the Kivra Android app',
		body: 'Caye was Lead Android for Kivra Finland from 2019 to 2025: a national digital mailbox and payments app with 100,000+ downloads, 4.3★ rating and 99.9% crash-free sessions. He coordinated continuous releases, technology migration and quality with a distributed team. At Bitdesal we apply that same discipline to your product.',
		cta: 'See the full Kivra case study',
	},
	how: {
		title: 'How we work',
	},
	pricing: {
		title: 'Pricing',
		p1: 'Reference rate: €45/h + VAT for senior Android consulting and development.',
		p2: 'Monthly bundles at €225, €450 and €900 + VAT (5, 10 and 20 h); we only bill time used, no lock-in.',
		p3: 'Projects or rescues at fixed price after specification and a phased plan — you know the scope before we start.',
		link: 'See software and Android development rates',
	},
	faq: {
		title: 'Frequently asked questions',
		items: {
			cost: {
				q: 'How much does an Android consultant cost?',
				a: 'The reference is €45/h + VAT. A 10 h bundle (€450 + VAT) is usually enough for a deep diagnosis; fixed-price projects are quoted after specification.',
			},
			remote: {
				q: 'Do you work remotely with teams outside Spain?',
				a: 'Yes. Mostly remote across Spain and the EU; for international companies we use €60/h (EU) or €75/h (outside the EU) depending on billing.',
			},
			java: {
				q: 'Can you handle legacy Java code?',
				a: 'Yes. We rescue Java/XML apps, migrate to Kotlin by module and leave tests and documentation so your team can keep pace.',
			},
			outsource: {
				q: 'Is it better to outsource or hire?',
				a: 'Senior Android outsourcing covers peaks and rescues without a six-month hiring process; hiring fits a long roadmap. We tell you honestly on the first call.',
			},
			start: {
				q: 'How long until you can start?',
				a: 'After the 30-minute call, if we are a fit, we usually start within 1–2 weeks depending on availability and access.',
			},
			nda: {
				q: 'Do you sign NDAs?',
				a: 'Yes. We work with standard confidentiality agreements; we can use yours or propose a standard one.',
			},
			english: {
				q: 'Do you work in English?',
				a: 'Yes. Documentation, dailies and code in English are standard for international teams; we also work in Spanish and Finnish.',
			},
		},
	},
	closing:
		'If you need Android consulting, a senior freelance Android developer with production experience, or an audit before a rescue project, book 30 minutes and we will see if we are a fit and what the next step is.',
	mid: {
		p1: 'Many companies come to us when the app has gone years without a senior owner: knowledge sits with one person, bus factor is high and every release is nerve-wracking. Our job as Android consultants is to reduce that risk with processes we use in production, not generic slides.',
		p2: 'We do not promise a full rewrite in a month. We do promise clarity: what is broken, what debt is tolerable and what to tackle first so users and the business notice improvement. When scope fits, we fix it in writing before coding.',
	},
};

export const consultoriaPageExpanded = {
	hero: {
		title: 'Android development and software consulting for teams that cannot afford to fail',
	},
	intro: {
		p1: 'At Bitdesal we combine production Android development and software consulting for teams that need measurable quality, not pretty prototypes. We work in Kotlin, Jetpack Compose, modular architecture, automated tests and CI/CD to the standard production apps cannot compromise on.',
		p2: 'We are a small team with over 20 years in software across founders and collaborators. Ramiro Santamaría strengthens operations, security and AI agent integration where it shortens the cycle without replacing engineering.',
	},
	androidPromo: {
		title: 'Senior Android consulting',
		p1: 'If your need is mainly mobile — legacy rescue, monthly releases, missing senior in the team — we have a dedicated Android consulting page: services, pricing and FAQ aimed at CTOs and product leads.',
		linkConsulting: 'Android consulting',
		linkAudit: 'Android app audit',
		and: 'and',
		p2: 'When you are not sure where to start, an audit gives you a prioritised report before committing to a large project.',
	},
	body: {
		p1: 'Beyond Android, we help with lightweight backend architecture, integrations and spec-driven workflows with assisted AI. We do not sell open-ended hours: we start from business risk (crashes, delays, single-person dependency) and propose phases with deliverables.',
		p2: 'You can hire us hourly, on a monthly bundle or on a fixed-price project after specification. For companies outside Spain we apply transparent international rates; in the EU the client handles VAT when applicable.',
	},
};
