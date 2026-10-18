/** Hourly rate (EUR, VAT excluded). Update amounts here only. */
export const HOURLY_RATE_EUR = 45;

export type PhaseEstimateRaw = {
	id: string;
	hours: string;
	minEur: number;
	maxEur: number;
};

/** Indicative phase hours and amounts at {@link HOURLY_RATE_EUR}/h. */
export const phaseEstimatesRaw: PhaseEstimateRaw[] = [
	{ id: 'assessment', hours: '6–10 h', minEur: 270, maxEur: 450 },
	{ id: 'study', hours: '10–20 h', minEur: 450, maxEur: 900 },
	{ id: 'redesign', hours: '8–15 h', minEur: 360, maxEur: 675 },
	{ id: 'technology', hours: '6–12 h', minEur: 270, maxEur: 540 },
	{ id: 'plan', hours: '5–8 h', minEur: 225, maxEur: 360 },
	{ id: 'delivery', hours: '15–30 h', minEur: 675, maxEur: 1350 },
];

export const projectTotalRaw = {
	hours: '50–95 h',
	minEur: 2250,
	maxEur: 4275,
};

export const supportBundles = [
	{ id: 'h5', hours: 5, amountEur: 225 },
	{ id: 'h10', hours: 10, amountEur: 450 },
	{ id: 'h20', hours: 20, amountEur: 900 },
] as const;

export const PROCESS_STUDY_EUR = 450;
export const PROCESS_STUDY_EXTENDED_EUR = 675;
