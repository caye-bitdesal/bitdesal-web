/** Hourly rate (EUR, VAT excluded). Update amounts here only. */
export const HOURLY_RATE_EUR = 45;

export type PhaseEstimate = {
	id: string;
	hours: string;
	amount: string;
};

/** Indicative phase hours and amounts at {@link HOURLY_RATE_EUR}/h. */
export const phaseEstimates: PhaseEstimate[] = [
	{ id: 'assessment', hours: '6–10 h', amount: '€270–450' },
	{ id: 'study', hours: '10–20 h', amount: '€450–900' },
	{ id: 'redesign', hours: '8–15 h', amount: '€360–675' },
	{ id: 'technology', hours: '6–12 h', amount: '€270–540' },
	{ id: 'plan', hours: '5–8 h', amount: '€225–360' },
	{ id: 'delivery', hours: '15–30 h', amount: '€675–1,350' },
];

export const projectTotal = {
	hours: '50–95 h',
	amount: '€2,250–4,275',
};

export const supportBundles = [
	{ id: 'h5', hours: 5, amount: '€225' },
	{ id: 'h10', hours: 10, amount: '€450' },
	{ id: 'h20', hours: 20, amount: '€900' },
] as const;
