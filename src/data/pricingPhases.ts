import { formatEur } from '../i18n/formatCurrency';
import type { Language } from '../i18n/translations';
import {
	getProjectTotalAmountEur,
	getProjectTotalHoursApprox,
	HOURLY_RATE_EUR,
	phaseEstimatesRaw,
	supportBundles,
} from './pricing';

const closedSuffix: Record<Language, string> = {
	es: ' (precio cerrado)',
	en: ' (fixed price)',
	fi: ' (kiinteä hinta)',
};

const phaseCopy = {
	processStudy: {
		titleKey: 'pricing.phases.items.processStudy.title',
		title: 'Process study (assessment + study)',
		descKey: 'pricing.phases.items.processStudy.description',
		description: 'Requirements review plus process and systems study. Closed-price deliverable.',
		shortKey: 'pricing.phases.items.processStudy.short',
		short: 'Process study (assessment + study)',
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
	return phaseEstimatesRaw.map((estimate) => {
		const amountEur = estimate.amountEur ?? estimate.hoursApprox * HOURLY_RATE_EUR;
		const amount = `${formatEur(amountEur, lang)}${estimate.closedPrice ? closedSuffix[lang] : ''}`;
		return {
			...phaseCopy[estimate.id as keyof typeof phaseCopy],
			indexLabel: estimate.indexLabel,
			hours: estimate.hoursLabel ?? `${estimate.hoursApprox} h`,
			amount,
		};
	});
}

export function getProjectTotal(lang: Language) {
	const totalHours = getProjectTotalHoursApprox();
	return {
		hours: `≈${totalHours} h`,
		amount: formatEur(getProjectTotalAmountEur(), lang),
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
