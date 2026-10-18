/** Hourly rate for Spain / domestic (EUR, + IVA). */
export const HOURLY_RATE_EUR = 45;

/** Software consulting — international EU clients (VAT reverse charge / client-side). */
export const HOURLY_RATE_INTERNATIONAL_EU_EUR = 60;

/** Software consulting — clients outside the EU. */
export const HOURLY_RATE_INTERNATIONAL_NON_EU_EUR = 75;

export type PhaseEstimateRaw = {
	id: string;
	/** Indicative hours (single midpoint) for tables and totals. */
	hoursApprox: number;
};

/** Indicative phase hours at {@link HOURLY_RATE_EUR}/h (+ IVA). */
export const phaseEstimatesRaw: PhaseEstimateRaw[] = [
	{ id: 'assessment', hoursApprox: 8 },
	{ id: 'study', hoursApprox: 16 },
	{ id: 'redesign', hoursApprox: 10 },
	{ id: 'technology', hoursApprox: 9 },
	{ id: 'plan', hoursApprox: 6 },
	{ id: 'delivery', hoursApprox: 24 },
];

export function getProjectTotalHoursApprox(): number {
	return phaseEstimatesRaw.reduce((sum, phase) => sum + phase.hoursApprox, 0);
}

export const supportBundles = [
	{ id: 'h5', hours: 5, amountEur: 225 },
	{ id: 'h10', hours: 10, amountEur: 450 },
	{ id: 'h20', hours: 20, amountEur: 900 },
] as const;

export const PROCESS_STUDY_EUR = 450;
export const PROCESS_STUDY_EXTENDED_EUR = 675;
