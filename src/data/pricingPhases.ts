import { formatEur } from '../i18n/formatCurrency';
import type { Language } from '../i18n/translations';
import {
	getProjectTotalHoursApprox,
	HOURLY_RATE_EUR,
	phaseEstimatesRaw,
	supportBundles,
} from './pricing';

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

export function getServicePhases(lang: Language) {
	return phaseEstimatesRaw.map((estimate) => ({
		...phaseCopy[estimate.id as keyof typeof phaseCopy],
		hours: `${estimate.hoursApprox} h`,
		amount: formatEur(estimate.hoursApprox * HOURLY_RATE_EUR, lang),
	}));
}

export function getProjectTotal(lang: Language) {
	const totalHours = getProjectTotalHoursApprox();
	return {
		hours: `${totalHours} h`,
		amount: formatEur(totalHours * HOURLY_RATE_EUR, lang),
	};
}

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

export function getSupportBundleRows(lang: Language) {
	return supportBundles.map((bundle) => ({
		labelKey: bundleLabelKeys[bundle.id],
		label: bundleLabels[bundle.id],
		amount: formatEur(bundle.amountEur, lang),
	}));
}

/** @deprecated use getServicePhases */
export const servicePhases = getServicePhases('en');
/** @deprecated use getProjectTotal */
export const projectTotal = getProjectTotal('en');
/** @deprecated use getSupportBundleRows */
export const supportBundleRows = getSupportBundleRows('en');
