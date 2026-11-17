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
	/** Override hours label (e.g. ≈10 h). */
	hoursLabel?: string;
	/** Override amount instead of hours × rate (closed-price phases). */
	amountEur?: number;
	/** Phase number shown in the table (e.g. "1–2", "3"). */
	indexLabel: string;
	closedPrice?: boolean;
};

/**
 * Indicative phase hours at {@link HOURLY_RATE_EUR}/h (+ IVA).
 * TODO(caye): confirmar estas horas e importes antes de publicar.
 */
export const phaseEstimatesRaw: PhaseEstimateRaw[] = [
	{ id: 'processStudy', hoursApprox: 10, hoursLabel: '≈10 h', amountEur: 450, indexLabel: '1–2', closedPrice: true },
	{ id: 'redesign', hoursApprox: 10, indexLabel: '3' },
	{ id: 'technology', hoursApprox: 9, indexLabel: '4' },
	{ id: 'plan', hoursApprox: 6, indexLabel: '5' },
	{ id: 'delivery', hoursApprox: 24, indexLabel: '6' },
];

export function getProjectTotalHoursApprox(): number {
	return phaseEstimatesRaw.reduce((sum, phase) => sum + phase.hoursApprox, 0);
}

export function getProjectTotalAmountEur(): number {
	return phaseEstimatesRaw.reduce(
		(sum, phase) => sum + (phase.amountEur ?? phase.hoursApprox * HOURLY_RATE_EUR),
		0,
	);
}

export const supportBundles = [
	{ id: 'h5', hours: 5, amountEur: 225 },
	{ id: 'h10', hours: 10, amountEur: 450 },
	{ id: 'h20', hours: 20, amountEur: 900 },
] as const;

export const PROCESS_STUDY_EUR = 450;
export const PROCESS_STUDY_EXTENDED_EUR = 675;
