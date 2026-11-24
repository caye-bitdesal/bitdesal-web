/** Castilian → valencian toponyms and post-Apertium fixes (shared by generator and polish-va-files). */

const TOPONYM_REPLACEMENTS = [
	['Provincia de Alicante', "Província d'Alacant"],
	['Registro Mercantil de Alicante', "Registre Mercantil d'Alacant"],
	['Registre Mercantil de Alicante', "Registre Mercantil d'Alacant"],
	['Comunidad Valenciana', 'País Valencià'],
	['Comunitat Valenciana', 'País Valencià'],
	['País Valenciano', 'País Valencià'],
	['Estados Unidos', 'Estats Units'],
	['Alicante', 'Alacant'],
	['Elche', 'Elx'],
	['Finlandia', 'Finlàndia'],
	['Suiza', 'Suïssa'],
	['Suecia', 'Suècia'],
	['Australia', 'Austràlia'],
	['España', 'Espanya'],
];

/**
 * Contextual Apertium calques — only full-phrase / scoped patterns (order matters).
 * Applied after toponyms and generic fixes, only on translated Valencian text.
 */
const PHRASE_FIXES = [
	[/Els comunicats de treball/g, 'Els parts de treball'],
	[/els comunicats de treball/g, 'els parts de treball'],
	[/El comunicat de treball/g, 'El part de treball'],
	[/el comunicat de treball/g, 'el part de treball'],
	[/El comunicat s'emplena/g, "El part s'emplena"],
	[/El comunicat en paper/g, 'El part en paper'],
	[/tanca el comunicat en la furgoneta/g, 'tanca el part en la furgoneta'],
	[/\btanca el comunicat\b/g, 'tanca el part'],
	[/les mesures del comunicat/g, 'les mesures del part'],
	[/en el pressupost o en el comunicat/g, 'en el pressupost o en el part'],
	[/en el comunicat, no copiant/g, 'en el part, no copiant'],
	[/\bel comunicat s'emplena\b/g, "el part s'emplena"],
	[/\bels programes que ja ús\b/g, 'els programes que ja use'],
	[/\bl'autor farcida\b/g, "l'autor emplena"],
	[/\bpressuposada\b/gi, 'fa el pressupost'],
	[/\bMane pressupostos\b/g, 'Envie pressupostos'],
	[/\bmane pressupostos\b/g, 'envia pressupostos'],
	[/no retorne anomenades/g, 'no torne les telefonades'],
	[/\bno torna les telefonades\b/g, 'no torne les telefonades'],
	[/\bretorne anomenades\b/g, 'torne les telefonades'],
	[/\bsi flama fora d'hora\b/g, "si telefona fora d'hota"],
	[/\babans de manar-lo\b/g, "abans d'enviar-lo"],
	[/\bManar el pressupost\b/g, 'Enviar el pressupost'],
	[/\bel parisques tu\b/g, "l'atures tu"],
	[/\bel atures tu\b/g, "l'atures tu"],
	[/\bno farcida un informe\b/g, 'no emplena un informe'],
	[/\bfarcida abans de demanar revisió\b/g, 'emplena abans de demanar revisió'],
	[/\bdeixem caminant\b/g, 'deixem funcionant'],
	[/\bdeixem per escrit\b/g, 'pactem per escrit'],
	[/\bho fitem per escrit\b/g, 'ho pactem per escrit'],
	[
		/enganxa el correu o el WhatsApp que ja uses/g,
		'es connecta al correu o al WhatsApp que ja uses',
	],
	[
		/es connecta al correu o al WhatsApp que ja use\b/g,
		'es connecta al correu o al WhatsApp que ja uses',
	],
	[/\benganxa el correu\b/g, 'es connecta al correu'],
	[/\bque ja ús\b/g, 'que ja use'],
	[/\bo la fulla que ja use\b/g, 'o la fulla que ja uses'],
	[/\bnaturopatía\b/g, 'naturopatia'],
	[/\bde IT\b/g, "d'IT"],
	[/Veure preus detalladament/g, 'Veure preus en detall'],
	[
		/Et deixem el codi, la documentació i al teu equip format\./g,
		'Et deixem el codi, la documentació i el teu equip formatat.',
	],
	[/\bFormem al teu equip\b/g, 'Formem el teu equip'],
	[/\bdeixar-te la conversa llista per a pressupostar\b/g, 'deixar-te la conversa a punt per a pressupostar'],
	[/\bconfirma el que sale cap\b/g, 'confirma el que ix cap'],
	[/\bsale cap al client\b/g, 'ix cap al client'],
	[/\btransmetera\b/g, 'transmetria'],
	[/\bun flux que ja dol\b/g, 'un flux que ja fa mal'],

	[/\breforcem a equips\b/g, 'reforcem equips'],
	[/\bsense substituir al teu equip\b/g, 'sense substituir el teu equip'],
	[/\btu el decideixes\b/g, 'tu ho decideixes'],
	[/\bperquè depens de nosaltres\b/g, 'perquè depengues de nosaltres'],
	[/\bla qual cosa ja useu\b/g, 'el que ja useu'],
	[/\bQuan comparteix lògica\b/g, 'Quan compartir lògica'],
	[/\bnivell de API\b/g, "nivell d'API"],
	[/\bslides genèriques\b/g, 'diapositives genèriques'],
	[/\bmodularizamos\b/gi, 'modularitzem'],
	[/\bmodularización\b/gi, 'modularització'],
	[/\bsobreingeniería\b/gi, 'sobreenginyeria'],
	[/\bles eines que ja usa el teu equip\b/g, 'les eines que ja utilitza el teu equip'],
	[/\bl'equip ja usa\b/g, "l'equip ja utilitza"],
	[/\bequip ja usa per a col·laboració\b/g, 'equip ja utilitza per a col·laboració'],
	[/\bMentoría\b/g, 'Mentoria'],
	[/\bNaturopatía\b/g, 'Naturopatia'],
	[/\bdesenvolupe d'apps Android\b/g, "desenvolupament d'apps Android"],
];

/** Common Castilian morphology left by Apertium (apply after phrase fixes). */
const MORPHOLOGY_FIXES = [
	[/ización\b/g, 'ització'],
	[/izaciones\b/g, 'itzacions'],
	[/izamos\b/g, 'itzem'],
	[/izan\b/g, 'itzen'],
	[/ería\b/g, 'eria'],
	[/erías\b/g, 'eries'],
];

export function applyPhraseFixes(text) {
	if (typeof text !== 'string') return text;
	let out = text;
	for (const [re, rep] of PHRASE_FIXES) {
		out = out.replace(re, rep);
	}
	for (const [re, rep] of MORPHOLOGY_FIXES) {
		out = out.replace(re, rep);
	}
	return out;
}

export function polishValencian(text) {
	if (typeof text !== 'string') return text;
	let out = text
		.replace(/Pàgina no oposada/g, 'Pàgina no trobada')
		.replace(/Case Regals/g, 'Cas Regals')
		.replace(/\bde IA\b/g, "d'IA");
	for (const [from, to] of TOPONYM_REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	out = out
		.replace(/\bdes de Elx\b/g, "des d'Elx")
		.replace(/\bdes de Alacant\b/g, "des d'Alacant")
		.replace(/\bde Elx\b/g, "d'Elx")
		.replace(/\bde Alacant\b/g, "d'Alacant")
		.replace(/\bentorn de Alacant\b/g, "entorn d'Alacant");
	return applyPhraseFixes(out);
}

export function polishDeep(value) {
	if (typeof value === 'string') return polishValencian(value);
	if (Array.isArray(value)) return value.map(polishDeep);
	if (value && typeof value === 'object') {
		return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, polishDeep(v)]));
	}
	return value;
}

/** Re-apply polish to every string value in the translation cache after rule updates. */
export function polishTranslationCache(cache) {
	for (const key of Object.keys(cache)) {
		if (typeof cache[key] === 'string') {
			cache[key] = polishValencian(cache[key]);
		}
	}
	return cache;
}