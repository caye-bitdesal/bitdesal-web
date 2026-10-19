import type { Language } from '../i18n/translations';
import {
	CONTACT_EMAIL,
	LEGAL_ADDRESS,
	LEGAL_HOLDER_NAME,
	LEGAL_REGISTRY_ES,
	LEGAL_TAX_ID,
	SITE_ORIGIN,
} from './siteConstants';

export type LegalBlock =
	| { type: 'p'; html: string }
	| { type: 'ul'; items: string[] }
	| { type: 'table'; headers: string[]; rows: string[][] }
	| { type: 'comment'; text: string };

export type LegalSection = {
	heading: string;
	blocks: LegalBlock[];
};

export type LegalDoc = {
	title: string;
	updatedLabel: string;
	updated: string;
	disclaimer?: string;
	intro?: string;
	sections: LegalSection[];
};

const EMAIL = CONTACT_EMAIL;
const SITE = SITE_ORIGIN;
const HOLDER = LEGAL_HOLDER_NAME;
const NIF = LEGAL_TAX_ID;
const ADDRESS = LEGAL_ADDRESS;

const REGISTRY: Record<Language, string> = {
	es: LEGAL_REGISTRY_ES,
	en: 'Registered with the Commercial Registry of Alicante',
	fi: 'Merkitty Alicanten kaupparekisteriin',
};

const updated: Record<Language, string> = {
	es: '19 de octubre de 2026',
	en: '19 October 2026',
	fi: '19. lokakuuta 2026',
};

function dpaTodo(): LegalBlock {
	return {
		type: 'comment',
		text: 'TODO(caye): verificar la garantía concreta de Formspree y Cal.com en sus acuerdos de tratamiento de datos (DPA)',
	};
}

export function getLegalNotice(lang: Language, privacyHref: string): LegalDoc {
	if (lang === 'en') {
		return {
			title: 'Legal notice',
			updatedLabel: 'Last updated',
			updated: updated.en,
			disclaimer: 'This is a translation. In case of discrepancy, the Spanish version prevails.',
			sections: [
				{
					heading: '1. Identification',
					blocks: [
						{
							type: 'p',
							html: 'In accordance with Article 10 of Act 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE), we inform you that this website is owned by:',
						},
						{
							type: 'ul',
							items: [
								`Owner: ${HOLDER}`,
								'Trading name: Bitdesal',
								`Tax ID (NIF): ${NIF}`,
								`Address: ${ADDRESS}`,
								`Email: ${EMAIL}`,
								`Website: ${SITE}`,
								REGISTRY.en,
							],
						},
					],
				},
				{
					heading: '2. Purpose',
					blocks: [
						{
							type: 'p',
							html: 'This website provides information about Bitdesal’s services: artificial intelligence consulting and process automation for businesses, and software development and consulting. Access to and use of the site confer the status of user and imply acceptance of this legal notice.',
						},
					],
				},
				{
					heading: '3. Terms of use',
					blocks: [
						{
							type: 'p',
							html: 'The user undertakes to make proper use of the website and its contents, in accordance with the law, good faith and public order, and not to use them for unlawful activities or activities that may harm the rights of Bitdesal or third parties, nor to introduce viruses or any other system that may cause damage.',
						},
						{
							type: 'p',
							html: 'The information published (including prices) is indicative and does not constitute a binding offer. The terms of each service are agreed in writing with each client before work begins.',
						},
					],
				},
				{
					heading: '4. Intellectual and industrial property',
					blocks: [
						{
							type: 'p',
							html: 'The contents of this site (texts, design, logos, images, code and other elements) are owned by Bitdesal or are used with the authorisation of their owners. Reproduction, distribution, public communication or transformation without express authorisation is prohibited, except for personal and private use.',
						},
						{
							type: 'p',
							html: 'Third-party trade marks, trade names and logos that appear on the site (for example, in project descriptions) belong to their respective owners and are cited solely for descriptive purposes.',
						},
					],
				},
				{
					heading: '5. Liability',
					blocks: [
						{
							type: 'p',
							html: 'Bitdesal works to keep the information on the site accurate and up to date, but does not guarantee the absence of errors or the continuous availability of the site. Bitdesal is not liable for damage that may arise from the use of the information on the site or from service interruptions beyond its control.',
						},
					],
				},
				{
					heading: '6. External links',
					blocks: [
						{
							type: 'p',
							html: 'This site may include links to third-party sites (for example, LinkedIn, Medium, Google Play or the appointment-booking tool). Bitdesal does not control those sites and is not responsible for their content or their privacy policies.',
						},
					],
				},
				{
					heading: '7. Data protection',
					blocks: [
						{
							type: 'p',
							html: `The processing of the personal data you provide is explained in our <a href="${privacyHref}">Privacy policy</a>.`,
						},
					],
				},
				{
					heading: '8. Applicable law and jurisdiction',
					blocks: [
						{
							type: 'p',
							html: 'This legal notice is governed by Spanish law. For the resolution of any dispute, the parties submit to the courts that have jurisdiction under the applicable rules; where the user is a consumer, the courts of their place of residence shall have jurisdiction.',
						},
					],
				},
			],
		};
	}

	if (lang === 'fi') {
		return {
			title: 'Oikeudellinen ilmoitus',
			updatedLabel: 'Päivitetty viimeksi',
			updated: updated.fi,
			disclaimer: 'Tämä on käännös. Ristiriitatilanteessa espanjankielinen versio on ensisijainen.',
			sections: [
				{
					heading: '1. Tunnistetiedot',
					blocks: [
						{
							type: 'p',
							html: 'Tietoyhteiskunnan palveluista ja sähköisestä kaupankäynnistä annetun lain 34/2002 (LSSI-CE) 10 artiklan mukaisesti ilmoitamme, että tämän verkkosivuston omistaa:',
						},
						{
							type: 'ul',
							items: [
								`Haltija: ${HOLDER}`,
								'Toiminimi: Bitdesal',
								`NIF: ${NIF}`,
								`Osoite: ${ADDRESS}`,
								`Sähköposti: ${EMAIL}`,
								`Verkkosivusto: ${SITE}`,
								REGISTRY.fi,
							],
						},
					],
				},
				{
					heading: '2. Tarkoitus',
					blocks: [
						{
							type: 'p',
							html: 'Tämä verkkosivusto kertoo Bitdesalin palveluista: tekoälykonsultointi ja prosessien automatisointi yrityksille sekä ohjelmistokehitys ja -konsultointi. Sivuston käyttö merkitsee käyttäjäasemaa ja tämän oikeudellisen ilmoituksen hyväksymistä.',
						},
					],
				},
				{
					heading: '3. Käyttöehdot',
					blocks: [
						{
							type: 'p',
							html: 'Käyttäjä sitoutuu käyttämään sivustoa ja sen sisältöä lain, hyvän tavan ja yleisen järjestyksen mukaisesti eikä käyttämään niitä lainvastaisiin toimiin tai toimiin, jotka voivat vahingoittaa Bitdesalin tai kolmansien oikeuksia, eikä tuomaan sivustolle viruksia tai muuta vahinkoa aiheuttavaa järjestelmää.',
						},
						{
							type: 'p',
							html: 'Julkaistut tiedot (hinnat mukaan lukien) ovat suuntaa antavia eivätkä muodosta sitovaa tarjousta. Kunkin palvelun ehdoista sovitaan kirjallisesti asiakkaan kanssa ennen työn aloittamista.',
						},
					],
				},
				{
					heading: '4. Immateriaalioikeudet',
					blocks: [
						{
							type: 'p',
							html: 'Sivuston sisältö (tekstit, ulkoasu, logot, kuvat, koodi ja muut osat) on Bitdesalin omaisuutta tai sitä käytetään haltijoiden luvalla. Jäljennys, levitys, julkinen esittäminen tai muuntaminen ilman nimenomaista lupaa on kielletty, lukuun ottamatta henkilökohtaista ja yksityistä käyttöä.',
						},
						{
							type: 'p',
							html: 'Sivustolla esiintyvät kolmansien tavaramerkit, toiminimet ja logot (esimerkiksi hankekuvauksissa) kuuluvat haltijoilleen, ja niihin viitataan vain kuvailevassa tarkoituksessa.',
						},
					],
				},
				{
					heading: '5. Vastuu',
					blocks: [
						{
							type: 'p',
							html: 'Bitdesal pyrkii pitämään sivuston tiedot oikeina ja ajan tasalla, mutta ei takaa virheettömyyttä eikä sivuston keskeytyksetöntä saatavuutta. Bitdesal ei vastaa vahingoista, jotka voivat aiheutua sivuston tietojen käytöstä tai sen hallinnan ulkopuolisista palvelukatkoista.',
						},
					],
				},
				{
					heading: '6. Ulkoiset linkit',
					blocks: [
						{
							type: 'p',
							html: 'Sivusto voi sisältää linkkejä kolmansien sivustoihin (esimerkiksi LinkedIn, Medium, Google Play tai ajanvarausväline). Bitdesal ei hallitse näitä sivustoja eikä vastaa niiden sisällöstä tai tietosuojakäytännöistä.',
						},
					],
				},
				{
					heading: '7. Tietosuoja',
					blocks: [
						{
							type: 'p',
							html: `Antamiesi henkilötietojen käsittely selitetään <a href="${privacyHref}">tietosuojakäytännössämme</a>.`,
						},
					],
				},
				{
					heading: '8. Sovellettava laki ja tuomioistuin',
					blocks: [
						{
							type: 'p',
							html: 'Tähän oikeudelliseen ilmoitukseen sovelletaan Espanjan lainsäädäntöä. Mahdolliset riidat ratkaistaan toimivaltaisissa tuomioistuimissa voimassa olevan sääntelyn mukaisesti; jos käyttäjä on kuluttaja, toimivaltaisia ovat hänen asuinpaikkansa tuomioistuimet.',
						},
					],
				},
			],
		};
	}

	return {
		title: 'Aviso legal',
		updatedLabel: 'Última actualización',
		updated: updated.es,
		sections: [
			{
				heading: '1. Datos identificativos',
				blocks: [
					{
						type: 'p',
						html: 'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), te informamos de que este sitio web es titularidad de:',
					},
					{
						type: 'ul',
						items: [
							`Titular: ${HOLDER}`,
							'Nombre comercial: Bitdesal',
							`NIF: ${NIF}`,
							`Domicilio: ${ADDRESS}`,
							`Correo electrónico: ${EMAIL}`,
							`Sitio web: ${SITE}`,
							REGISTRY.es,
						],
					},
				],
			},
			{
				heading: '2. Objeto',
				blocks: [
					{
						type: 'p',
						html: 'Este sitio web informa sobre los servicios de Bitdesal: consultoría de inteligencia artificial y automatización de procesos para empresas, y desarrollo y consultoría de software. El acceso y uso del sitio atribuyen la condición de usuario e implican la aceptación de este aviso legal.',
					},
				],
			},
			{
				heading: '3. Condiciones de uso',
				blocks: [
					{
						type: 'p',
						html: 'El usuario se compromete a hacer un uso adecuado del sitio web y de sus contenidos, conforme a la ley, la buena fe y el orden público, y a no emplearlos para actividades ilícitas o que puedan dañar los derechos de Bitdesal o de terceros, ni para introducir virus o cualquier otro sistema que pueda causar daños.',
					},
					{
						type: 'p',
						html: 'La información publicada (incluidos los precios) es orientativa y no constituye una oferta vinculante. Las condiciones de cada servicio se acuerdan por escrito con cada cliente antes de empezar.',
					},
				],
			},
			{
				heading: '4. Propiedad intelectual e industrial',
				blocks: [
					{
						type: 'p',
						html: 'Los contenidos de este sitio (textos, diseño, logotipos, imágenes, código y demás elementos) son propiedad de Bitdesal o se utilizan con autorización de sus titulares. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa, salvo para uso personal y privado.',
					},
					{
						type: 'p',
						html: 'Las marcas, nombres comerciales y logotipos de terceros que aparecen en el sitio (por ejemplo, en la descripción de proyectos) pertenecen a sus respectivos titulares y se citan únicamente con fines descriptivos.',
					},
				],
			},
			{
				heading: '5. Responsabilidad',
				blocks: [
					{
						type: 'p',
						html: 'Bitdesal trabaja para que la información del sitio sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad continua del sitio. Bitdesal no se responsabiliza de los daños que pudieran derivarse del uso de la información del sitio ni de interrupciones del servicio ajenas a su control.',
					},
				],
			},
			{
				heading: '6. Enlaces externos',
				blocks: [
					{
						type: 'p',
						html: 'Este sitio puede incluir enlaces a sitios de terceros (por ejemplo, LinkedIn, Medium, Google Play o la herramienta de reserva de citas). Bitdesal no controla esos sitios y no se hace responsable de sus contenidos ni de sus políticas de privacidad.',
					},
				],
			},
			{
				heading: '7. Protección de datos',
				blocks: [
					{
						type: 'p',
						html: `El tratamiento de los datos personales que nos facilites se explica en nuestra <a href="${privacyHref}">Política de privacidad</a>.`,
					},
				],
			},
			{
				heading: '8. Legislación aplicable y jurisdicción',
				blocks: [
					{
						type: 'p',
						html: 'Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la normativa vigente; cuando el usuario sea consumidor, serán competentes los de su domicilio.',
					},
				],
			},
		],
	};
}

export function getPrivacyPolicy(lang: Language): LegalDoc {
	if (lang === 'en') {
		return {
			title: 'Privacy policy',
			updatedLabel: 'Last updated',
			updated: updated.en,
			disclaimer: 'This is a translation. In case of discrepancy, the Spanish version prevails.',
			intro: 'At Bitdesal we take your data seriously. This policy explains what data we process, for what purposes and what your rights are, in accordance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD).',
			sections: [
				{
					heading: '1. Data controller',
					blocks: [
						{
							type: 'ul',
							items: [
								`Controller: ${HOLDER} (Bitdesal)`,
								`Tax ID (NIF): ${NIF}`,
								`Address: ${ADDRESS}`,
								`Email: ${EMAIL}`,
							],
						},
					],
				},
				{
					heading: '2. What data we process and where they come from',
					blocks: [
						{
							type: 'p',
							html: 'We only process the data you provide to us:',
						},
						{
							type: 'ul',
							items: [
								'<strong>Contact form:</strong> name, company (optional), the service you are interested in, your message and your email or telephone number.',
								'<strong>Appointment booking:</strong> the data you enter in the booking tool (name, email and any information you choose to add).',
								'<strong>Email or telephone:</strong> the data you include when you write to us or call us.',
								'<strong>Clients:</strong> the data needed to provide the service and to invoice (contact and tax details).',
							],
						},
						{
							type: 'p',
							html: 'Please do not send us specially sensitive data (health, ideology, etc.) through these channels.',
						},
					],
				},
				{
					heading: '3. Why we use them and on what legal basis',
					blocks: [
						{
							type: 'table',
							headers: ['Purpose', 'Legal basis'],
							rows: [
								[
									'Responding to your enquiry or quote request',
									'Your consent and the taking of pre-contractual steps at your request (Art. 6(1)(a) and 6(1)(b) GDPR)',
								],
								['Managing the appointment you book', 'Taking of pre-contractual steps (Art. 6(1)(b) GDPR)'],
								[
									'Providing the contracted service and managing the client relationship',
									'Performance of a contract (Art. 6(1)(b) GDPR)',
								],
								[
									'Invoicing and accounting and tax obligations',
									'Compliance with legal obligations (Art. 6(1)(c) GDPR)',
								],
							],
						},
						{
							type: 'p',
							html: 'We do not use your data to send you advertising unless you give us separate, express consent. We do not take automated decisions or create profiles with your data.',
						},
					],
				},
				{
					heading: '4. How long we keep them',
					blocks: [
						{
							type: 'ul',
							items: [
								'Enquiries that do not lead to an engagement: for as long as needed to handle them and for a maximum of 12 months.',
								'Clients: for the duration of the relationship and thereafter for the statutory retention periods (for example, 6 years for accounting and commercial records and 4 years for tax purposes).',
							],
						},
						{
							type: 'p',
							html: 'Afterwards, the data are blocked or securely deleted.',
						},
					],
				},
				{
					heading: '5. Who they are disclosed to',
					blocks: [
						{
							type: 'p',
							html: 'We do not sell or transfer your data to third parties, except where required by law. To operate, we use providers that process data on our behalf (processors), with whom we have the contractual safeguards required by the GDPR:',
						},
						{
							type: 'ul',
							items: [
								'<strong>Formspree, Inc.</strong> (United States): receipt of contact-form messages.',
								'<strong>Cal.com, Inc.</strong> (United States): appointment booking.',
							],
						},
					],
				},
				{
					heading: '6. International transfers',
					blocks: [
						dpaTodo(),
						{
							type: 'p',
							html: 'Some providers are in the United States. These transfers are based on the EU–US Data Privacy Framework where the provider is certified, or on the standard contractual clauses approved by the European Commission.',
						},
					],
				},
				{
					heading: '7. Your rights',
					blocks: [
						{
							type: 'p',
							html: `You may at any time exercise your rights of access, rectification, erasure, objection, restriction of processing and portability, and withdraw any consent you have given us, by writing to ${EMAIL}. State which right you wish to exercise; if we have reasonable doubts about your identity, we may ask you to prove it.`,
						},
						{
							type: 'p',
							html: 'If you consider that we have not processed your data correctly, you may lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
						},
					],
				},
				{
					heading: '8. Security',
					blocks: [
						{
							type: 'p',
							html: 'We apply appropriate technical and organisational measures to protect your data against loss, unauthorised access or alteration.',
						},
					],
				},
				{
					heading: '9. Cookies',
					blocks: [
						{
							type: 'p',
							html: 'This website does not use first-party or third-party cookies. It only stores in your browser (local storage) your light or dark theme preference, so that it can be remembered on later visits; that information does not leave your device and is not used to identify you.',
						},
						{
							type: 'p',
							html: 'When you click links to external sites (for example, LinkedIn or the appointment-booking tool), those sites may use their own cookies, according to their policies.',
						},
					],
				},
				{
					heading: '10. Minors',
					blocks: [
						{
							type: 'p',
							html: 'Our services are aimed at businesses and professionals. We do not knowingly collect data from children under 14.',
						},
					],
				},
				{
					heading: '11. Changes to this policy',
					blocks: [
						{
							type: 'p',
							html: 'We may update this policy to reflect legal changes or changes to our services. We will always publish the current version on this page, with its update date.',
						},
					],
				},
			],
		};
	}

	if (lang === 'fi') {
		return {
			title: 'Tietosuojakäytäntö',
			updatedLabel: 'Päivitetty viimeksi',
			updated: updated.fi,
			disclaimer: 'Tämä on käännös. Ristiriitatilanteessa espanjankielinen versio on ensisijainen.',
			intro: 'Bitdesalissa otamme tietosi vakavasti. Tämä käytäntö kertoo, mitä tietoja käsittelemme, mihin tarkoitukseen ja mitkä ovat oikeutesi, EU:n asetuksen 2016/679 (GDPR) ja orgaanisen lain 3/2018 (LOPDGDD) mukaisesti.',
			sections: [
				{
					heading: '1. Rekisterinpitäjä',
					blocks: [
						{
							type: 'ul',
							items: [
								`Rekisterinpitäjä: ${HOLDER} (Bitdesal)`,
								`NIF: ${NIF}`,
								`Osoite: ${ADDRESS}`,
								`Sähköposti: ${EMAIL}`,
							],
						},
					],
				},
				{
					heading: '2. Mitä tietoja käsittelemme ja mistä ne tulevat',
					blocks: [
						{
							type: 'p',
							html: 'Käsittelemme vain tietoja, jotka itse annat meille:',
						},
						{
							type: 'ul',
							items: [
								'<strong>Yhteydenottolomake:</strong> nimi, yritys (valinnainen), palvelu josta olet kiinnostunut, viestisi sekä sähköpostiosoitteesi tai puhelinnumerosi.',
								'<strong>Ajanvaraus:</strong> tiedot, jotka syötät varausvälineeseen (nimi, sähköposti ja haluamasi lisätiedot).',
								'<strong>Sähköposti tai puhelin:</strong> tiedot, jotka sisällytät kirjoittaessasi tai soittaessasi.',
								'<strong>Asiakkaat:</strong> palvelun tuottamiseen ja laskutukseen tarvittavat tiedot (yhteys- ja verotiedot).',
							],
						},
						{
							type: 'p',
							html: 'Älä lähetä meille erityisen arkaluonteisia tietoja (terveys, vakaumus jne.) näiden kanavien kautta.',
						},
					],
				},
				{
					heading: '3. Mihin käytämme niitä ja millä oikeusperusteella',
					blocks: [
						{
							type: 'table',
							headers: ['Tarkoitus', 'Oikeusperuste'],
							rows: [
								[
									'Vastaminen kyselyysi tai tarjouspyyntöösi',
									'Suostumuksesi ja esisopimuksellisten toimenpiteiden toteuttaminen pyynnöstäsi (GDPR 6 art. 1 kohta a ja b)',
								],
								['Varaamasi ajan hallinta', 'Esisopimuksellisten toimenpiteiden toteuttaminen (GDPR 6 art. 1 kohta b)'],
								[
									'Sovitun palvelun tuottaminen ja asiakassuhteen hoitaminen',
									'Sopimuksen täyttäminen (GDPR 6 art. 1 kohta b)',
								],
								[
									'Laskutus sekä kirjanpito- ja verovelvoitteet',
									'Lakisääteisten velvoitteiden noudattaminen (GDPR 6 art. 1 kohta c)',
								],
							],
						},
						{
							type: 'p',
							html: 'Emme käytä tietojasi mainontaan, ellet anna siihen erillistä nimenomaista suostumusta. Emme tee automaattisia päätöksiä emmekä profiloi tietojasi.',
						},
					],
				},
				{
					heading: '4. Kuinka kauan säilytämme niitä',
					blocks: [
						{
							type: 'ul',
							items: [
								'Kyselyt, jotka eivät johda toimeksiantoon: niin kauan kuin niiden käsittely vaatii, enintään 12 kuukautta.',
								'Asiakkaat: suhteen keston ajan ja sen jälkeen lakisääteisten säilytysaikojen ajan (esimerkiksi 6 vuotta kirjanpito- ja kaupallisille asiakirjoille ja 4 vuotta verotusta varten).',
							],
						},
						{
							type: 'p',
							html: 'Sen jälkeen tiedot lukitaan tai poistetaan turvallisesti.',
						},
					],
				},
				{
					heading: '5. Kenelle niitä luovutetaan',
					blocks: [
						{
							type: 'p',
							html: 'Emme myy emmekä luovuta tietojasi kolmansille, paitsi lain velvoittaessa. Toimintaamme varten käytämme palveluntarjoajia, jotka käsittelevät tietoja puolestamme (käsittelijät) ja joiden kanssa meillä on GDPR:n edellyttämät sopimusturvat:',
						},
						{
							type: 'ul',
							items: [
								'<strong>Formspree, Inc.</strong> (Yhdysvallat): yhteydenottolomakkeen viestien vastaanotto.',
								'<strong>Cal.com, Inc.</strong> (Yhdysvallat): ajanvaraus.',
							],
						},
					],
				},
				{
					heading: '6. Kansainväliset siirrot',
					blocks: [
						dpaTodo(),
						{
							type: 'p',
							html: 'Osa palveluntarjoajista sijaitsee Yhdysvalloissa. Nämä siirrot perustuvat EU–Yhdysvallat-tietosuojakehykseen, jos palveluntarjoaja on siihen liittynyt, tai Euroopan komission hyväksymiin vakiosopimuslausekkeisiin.',
						},
					],
				},
				{
					heading: '7. Oikeutesi',
					blocks: [
						{
							type: 'p',
							html: `Voit milloin tahansa käyttää oikeuttasi saada pääsy tietoihin, oikaista, poistaa, vastustaa, rajoittaa käsittelyä ja siirtää tietoja sekä peruuttaa antamasi suostumuksen kirjoittamalla osoitteeseen ${EMAIL}. Ilmoita, mitä oikeutta haluat käyttää; jos meillä on perusteltua epäilystä henkilöllisyydestäsi, voimme pyytää sen todentamista.`,
						},
						{
							type: 'p',
							html: 'Jos katsot, ettemme ole käsitelleet tietojasi asianmukaisesti, voit tehdä valituksen Espanjan tietosuojavirastolle (www.aepd.es).',
						},
					],
				},
				{
					heading: '8. Tietoturva',
					blocks: [
						{
							type: 'p',
							html: 'Sovellamme asianmukaisia teknisiä ja organisatorisia toimenpiteitä suojataksemme tietosi katoamiselta, luvattomalta käytöltä tai muuttamiselta.',
						},
					],
				},
				{
					heading: '9. Evästeet',
					blocks: [
						{
							type: 'p',
							html: 'Tämä verkkosivusto ei käytä omia eikä kolmansien evästeitä. Se tallentaa selaimeesi (paikalliseen tallennustilaan) vain vaalean tai tumman teeman valintasi, jotta se muistetaan seuraavilla käynneillä; tämä tieto ei poistu laitteeltasi eikä sitä käytetä tunnistamiseen.',
						},
						{
							type: 'p',
							html: 'Kun klikkaat linkkejä ulkoisille sivustoille (esimerkiksi LinkedIn tai ajanvarausväline), nämä sivustot voivat käyttää omia evästeitään omien käytäntöjensä mukaan.',
						},
					],
				},
				{
					heading: '10. Alaikäiset',
					blocks: [
						{
							type: 'p',
							html: 'Palvelumme on suunnattu yrityksille ja ammattilaisille. Emme tietoisesti kerää alle 14-vuotiaiden tietoja.',
						},
					],
				},
				{
					heading: '11. Muutokset tähän käytäntöön',
					blocks: [
						{
							type: 'p',
							html: 'Voimme päivittää tätä käytäntöä lakimuutosten tai palveluidemme muutosten mukaan. Julkaisemme aina voimassa olevan version tällä sivulla päivityspäivämäärineen.',
						},
					],
				},
			],
		};
	}

	return {
		title: 'Política de privacidad',
		updatedLabel: 'Última actualización',
		updated: updated.es,
		intro: 'En Bitdesal nos tomamos en serio tus datos. Esta política explica qué datos tratamos, para qué y cuáles son tus derechos, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).',
		sections: [
			{
				heading: '1. Responsable del tratamiento',
				blocks: [
					{
						type: 'ul',
						items: [
							`Responsable: ${HOLDER} (Bitdesal)`,
							`NIF: ${NIF}`,
							`Domicilio: ${ADDRESS}`,
							`Correo electrónico: ${EMAIL}`,
						],
					},
				],
			},
			{
				heading: '2. Qué datos tratamos y de dónde vienen',
				blocks: [
					{
						type: 'p',
						html: 'Solo tratamos los datos que tú nos facilites:',
					},
					{
						type: 'ul',
						items: [
							'<strong>Formulario de contacto:</strong> nombre, empresa (opcional), el servicio que te interesa, tu mensaje y tu correo electrónico o teléfono.',
							'<strong>Reserva de una cita:</strong> los datos que introduces en la herramienta de reservas (nombre, correo electrónico y la información que quieras añadir).',
							'<strong>Correo electrónico o teléfono:</strong> los datos que incluyas cuando nos escribes o llamas.',
							'<strong>Clientes:</strong> los datos necesarios para prestar el servicio y facturar (datos de contacto y fiscales).',
						],
					},
					{
						type: 'p',
						html: 'No pidas ni nos envíes datos especialmente sensibles (salud, ideología, etc.) a través de estos canales.',
					},
				],
			},
			{
				heading: '3. Para qué los usamos y con qué base legal',
				blocks: [
					{
						type: 'table',
						headers: ['Finalidad', 'Base legal'],
						rows: [
							[
								'Responder a tu consulta o solicitud de presupuesto',
								'Tu consentimiento y la aplicación, a petición tuya, de medidas precontractuales (art. 6.1.a y 6.1.b RGPD)',
							],
							['Gestionar la cita que reserves', 'Aplicación de medidas precontractuales (art. 6.1.b RGPD)'],
							[
								'Prestar el servicio contratado y gestionar la relación con clientes',
								'Ejecución de un contrato (art. 6.1.b RGPD)',
							],
							[
								'Facturación y obligaciones contables y fiscales',
								'Cumplimiento de obligaciones legales (art. 6.1.c RGPD)',
							],
						],
					},
					{
						type: 'p',
						html: 'No usamos tus datos para enviarte publicidad salvo que nos des tu consentimiento expreso y por separado. No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.',
					},
				],
			},
			{
				heading: '4. Cuánto tiempo los conservamos',
				blocks: [
					{
						type: 'ul',
						items: [
							'Consultas que no terminan en un encargo: el tiempo necesario para atenderlas y, como máximo, 12 meses.',
							'Clientes: mientras dure la relación y, después, durante los plazos legales de conservación (por ejemplo, 6 años para la documentación contable y mercantil y 4 años a efectos tributarios).',
						],
					},
					{
						type: 'p',
						html: 'Después, los datos se bloquean o se eliminan de forma segura.',
					},
				],
			},
			{
				heading: '5. A quién se comunican',
				blocks: [
					{
						type: 'p',
						html: 'No vendemos ni cedemos tus datos a terceros, salvo obligación legal. Para funcionar, usamos proveedores que tratan datos por cuenta nuestra (encargados del tratamiento), con los que tenemos las garantías contractuales exigidas por el RGPD:',
					},
					{
						type: 'ul',
						items: [
							'<strong>Formspree, Inc.</strong> (Estados Unidos): recepción de los mensajes del formulario de contacto.',
							'<strong>Cal.com, Inc.</strong> (Estados Unidos): reserva de citas.',
						],
					},
				],
			},
			{
				heading: '6. Transferencias internacionales',
				blocks: [
					dpaTodo(),
					{
						type: 'p',
						html: 'Algunos proveedores están en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. cuando el proveedor está adherido, o en las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
					},
				],
			},
			{
				heading: '7. Tus derechos',
				blocks: [
					{
						type: 'p',
						html: `Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento que nos hayas dado, escribiendo a ${EMAIL}. Indica qué derecho quieres ejercer; si tenemos dudas razonables sobre tu identidad, podremos pedirte que la acredites.`,
					},
					{
						type: 'p',
						html: 'Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
					},
				],
			},
			{
				heading: '8. Seguridad',
				blocks: [
					{
						type: 'p',
						html: 'Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a pérdidas, accesos no autorizados o alteraciones.',
					},
				],
			},
			{
				heading: '9. Cookies',
				blocks: [
					{
						type: 'p',
						html: 'Este sitio web no utiliza cookies propias ni de terceros. Solo guarda en tu navegador (almacenamiento local) tu preferencia de tema claro u oscuro, para recordarla en próximas visitas; esa información no sale de tu dispositivo ni sirve para identificarte.',
					},
					{
						type: 'p',
						html: 'Al pulsar en enlaces a sitios externos (por ejemplo, LinkedIn o la herramienta de reserva de citas), esos sitios pueden usar sus propias cookies, según sus políticas.',
					},
				],
			},
			{
				heading: '10. Menores',
				blocks: [
					{
						type: 'p',
						html: 'Nuestros servicios se dirigen a empresas y profesionales. No recogemos conscientemente datos de menores de 14 años.',
					},
				],
			},
			{
				heading: '11. Cambios en esta política',
				blocks: [
					{
						type: 'p',
						html: 'Podemos actualizar esta política para adaptarla a cambios legales o de nuestros servicios. Publicaremos siempre la versión vigente en esta página, con su fecha de actualización.',
					},
				],
			},
		],
	};
}
