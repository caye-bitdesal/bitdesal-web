import { phaseEstimates, projectTotal, supportBundles } from './pricing';

const phaseCopy = {
	assessment: {
		titleKey: 'pricing.phases.items.assessment.title',
		title: 'Assessment and requirements',
		descKey: 'pricing.phases.items.assessment.description',
		description: 'Goals, constraints and the underlying problem we need to solve.',
		shortKey: 'pricing.phases.items.assessment.short',
		short: 'Assessment',
	},
	study: {
		titleKey: 'pricing.phases.items.study.title',
		title: 'Process and systems study',
		descKey: 'pricing.phases.items.study.description',
		description: 'Interviews, real workflows, exceptions and existing integrations.',
		shortKey: 'pricing.phases.items.study.short',
		short: 'Process study',
	},
	redesign: {
		titleKey: 'pricing.phases.items.redesign.title',
		title: 'Solution redesign',
		descKey: 'pricing.phases.items.redesign.description',
		description: 'We define how the process should work before automating it.',
		shortKey: 'pricing.phases.items.redesign.short',
		short: 'Redesign',
	},
	technology: {
		titleKey: 'pricing.phases.items.technology.title',
		title: 'Technology selection',
		descKey: 'pricing.phases.items.technology.description',
		description: 'Architecture, tools, integrations and security criteria.',
		shortKey: 'pricing.phases.items.technology.short',
		short: 'Technology',
	},
	plan: {
		titleKey: 'pricing.phases.items.plan.title',
		title: 'Phased implementation plan',
		descKey: 'pricing.phases.items.plan.description',
		description: 'A prioritized roadmap that starts with the highest-value work.',
		shortKey: 'pricing.phases.items.plan.short',
		short: 'Phased plan',
	},
	delivery: {
		titleKey: 'pricing.phases.items.delivery.title',
		title: 'Implementation, training and delivery',
		descKey: 'pricing.phases.items.delivery.description',
		description: 'Development, testing, launch and hands-on team training.',
		shortKey: 'pricing.phases.items.delivery.short',
		short: 'Implementation',
	},
} as const;

export const servicePhases = phaseEstimates.map((estimate) => ({
	...phaseCopy[estimate.id as keyof typeof phaseCopy],
	hours: estimate.hours,
	amount: estimate.amount,
}));

export { projectTotal, supportBundles };

const bundleLabelKeys = {
	h5: 'pricing.bundles.h5',
	h10: 'pricing.bundles.h10',
	h20: 'pricing.bundles.h20',
} as const;

const bundleLabels = {
	h5: '5 h / month',
	h10: '10 h / month',
	h20: '20 h / month',
} as const;

export const supportBundleRows = supportBundles.map((bundle) => ({
	labelKey: bundleLabelKeys[bundle.id],
	label: bundleLabels[bundle.id],
	amount: bundle.amount,
}));
