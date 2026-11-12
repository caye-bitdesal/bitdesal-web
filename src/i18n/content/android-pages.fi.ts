export const androidConsultingPage = {
	hero: {
		h1: 'Android-konsultointia sovelluksille, jotka eivät saa kaatua',
		lead:
			'Olemme Kotlin- ja Jetpack Compose -asiantuntijoita. Rakennamme uusia sovelluksia, parannamme tuotannossa olevia ja vahvistamme tiimejä, joilta puuttuu senior-taso. Mitä ikinä teemmekin, teemme sen korkeimmalla laadulla.',
		p2: 'Sovelletaan SOLID-periaatteita ja puhdasta arkkitehtuuria, automaattisia testejä ja kaiken koodin katselmointia. Tulos on helposti ymmärrettävää, ylläpidettävää ja laajennettavaa ohjelmistoa. Varmistamme alusta lähtien, että toimitamme sen mitä pyysit: ennen koodausta kirjaamme mitä rakennamme ja miten varmistamme toimivuuden. Sen jälkeen näytämme edistymisen viikoittain, jotta lopussa ei ole yllätyksiä.',
		p3: 'Työmme on valmis, kun ette enää tarvitse meitä. Jäätte siistiksi koodilla, selkeällä dokumentaatiolla ja tiimillä, joka ymmärtää mitä on rakennettu ja jatkaa ilman meitä. Jos haluatte meidät rinnalle myöhemmin, se on teidän valintanne ettekä riippuvuus meihin.',
		navSoftware: 'Ohjelmistokonsultointi',
		navContact: 'Yhteystiedot',
		navIa: 'Tekoälykonsultointi',
	},
	pain: {
		title: 'Kuulostaako tutulta?',
		items: {
			crashes: {
				title: 'Sovellus sulkeutuu itsekseen',
				body: 'Käyttäjät raportoivat kaatumisia ja Play Consolessa on poikkeuksia, joille kukaan ei ehdi antaa prioriteettia. Käymme läpi jäljet, toistamme vian ja ehdotamme mitattavia korjauksia ja testejä.',
			},
			legacy: {
				title: 'Koodi on vanhaa Javaa tai XML:ää eikä kukaan halua koskea',
				body: 'Pienikin muutos on seikkailu. Siirramme Kotliniin vaiheittain, modulaarisuuden ja dokumentaation kanssa, jotta tiimi voi taas julkaista luottavaisesti.',
			},
			releases: {
				title: 'Jokainen julkaisu pelottaa',
				body: 'Ilman automaattisia testejä tai CI:tä julkaisu on arvontaa. Rakennamme putket (GitHub Actions tai muu), testit kriittisiin kerroksiin ja kriteerit ennen Play-latausta.',
			},
			noSenior: {
				title: 'Tiimiltä puuttuu senior Android -profiili',
				body: 'Vahvistamme tiimiänne upotettuna senior-konsulttina: pariohjelmointia, katselmointia ja viikoittaisia toimituksia korvaamatta tiimiänne vaan nostaen sen tasoa.',
			},
			apiLevel: {
				title: 'Google Play pakottaa nostamaan API-tasoa',
				body: 'Analysoimme riippuvuudet, compileSdk:n ja breaking change -t kohdat ja suunnittelemme päivityksen lyhyillä haaroilla ilman liiketoiminnan pysäytystä.',
			},
			slow: {
				title: 'Sovellus on hidas',
				body: 'Profilointia käynnistykseen, muistiin ja verkkoon; priorisoimme parannukset, jotka näkyvät käyttäjälle, ennen ja jälkeen -mittarein.',
			},
		},
	},
	services: {
		title: 'Mitä teemme',
		kotlin: {
			title: 'Android-kehitys Kotlinilla',
			body: 'Uusia ominaisuuksia, ylläpitoa ja kuukausijulkaisuja MVVM/MVI:llä, modulaarisuudella ja Googlen suosituksilla.',
		},
		staff: {
			title: 'Tiimin vahvistus (Android-resursointi)',
			body: 'Senior-osaamista tarpeen mukaan sprinteittäin, teidän backlogilla ja työkaluilla (Jira, Linear, Slack — mitä jo käytätte).',
		},
		audit: {
			title: 'Sovelluksen auditointi',
			body: 'Priorisoitu raportti arkkitehtuurista, vakaudesta, suorituskyvystä ja tietoturvasta.',
			linkLabel: 'Android-sovelluksen auditointi',
		},
		compose: {
			title: 'Siirtyminen Jetpack Composeen',
			body: 'Näkymä- tai modulitasoinen suunnitelma: rinnakkaisuus Viewsien kanssa, Material 3 ja UI-testit.',
		},
		kmp: {
			title: 'Kotlin Multiplatform',
			body: 'Kun jaettu logiikka Androidin ja iOS:n välillä kannattaa, rajaaamme laajuuden ja vältämme ylisuunnittelua.',
		},
		cicd: {
			title: 'CI/CD ja automaattiset testit',
			body: 'Putket erottavat «voimmeko mergata?» ja «voivatko testerit asentaa?»; kattavuutta vain siellä missä se auttaa.',
		},
		ai: {
			title: 'Tekoälyavusteinen kehitys ilman laadun menetystä',
			body: 'Agentteja scaffoldingiin ja katselmointiin spec-driven-työnkulussa — ei vibe codingia.',
		},
	},
	kivra: {
		title: 'Tapaus: Kivran Android-sovellus',
		body: 'Caye oli Kivra Suomen Lead Android 2019–2025: kansallinen digitaalinen posti- ja maksusovellus, yli 100 000 latausta, 4,3★ ja 99,9 % istuntoja ilman kaatumisia. Hän koordinoi jatkuvia julkaisuja, teknologiasiirtymiä ja laatua hajautetun tiimin kanssa. Bitdesalilla sovellamme samaa kurinalaisuutta tuotteeseenne.',
		cta: 'Lue Kivra-tapaus kokonaisuudessaan',
	},
	how: {
		title: 'Miten työskentelemme',
	},
	pricing: {
		title: 'Hinnoittelu',
		p1: 'Viitehinta: 45 €/h + ALV senior Android -konsultoinnille ja -kehitykselle.',
		p2: 'Kuukausipaketit 225 €, 450 € ja 900 € + ALV (5, 10 ja 20 h); laskutamme vain käytetyn ajan, ei sitoutumista.',
		p3: 'Projektit tai pelastukset kiinteään hintaan määrittelyn ja vaiheittaisen suunnitelman jälkeen — laajuus selvä ennen aloitusta.',
		link: 'Katso ohjelmisto- ja Android-hinnat',
	},
	faq: {
		title: 'Usein kysyttyä',
		items: {
			cost: {
				q: 'Mitä Android-konsultti maksaa?',
				a: 'Viite on 45 €/h + ALV. 10 h paketti (450 € + ALV) riittää usein syvään diagnoosiin; kiinteähintaiset projektit tarjotaan määrittelyn jälkeen.',
			},
			remote: {
				q: 'Työskentelettekö etänä Espanjan ulkopuolisille tiimeille?',
				a: 'Kyllä. Pääasiassa etänä Espanjassa ja EU:ssa; kansainvälisille yrityksille 60 €/h (EU) tai 75 €/h (EU:n ulkopuolella) laskutustavan mukaan.',
			},
			java: {
				q: 'Otatteko vastuun vanhasta Java-koodista?',
				a: 'Kyllä. Pelastamme Java/XML-sovelluksia, siirramme Kotliniin moduuleittain ja jätämme testit ja dokumentaation tiimin jatkuvuutta varten.',
			},
			outsource: {
				q: 'Kannattaako ulkoistaa vai palkata?',
				a: 'Senior-Androidin ulkoistus kattaa piikit ja pelastukset ilman kuukausien rekrytointia; palkkaus sopii pitkään roadmapiin. Kerromme rehellisesti ensimmäisellä puhelulla.',
			},
			start: {
				q: 'Kuinka pian pääsette alkuun?',
				a: '30 minuutin puhelun jälkeen, jos yhteistyö sopii, aloitamme yleensä 1–2 viikossa saatavuuden ja pääsyjen mukaan.',
			},
			nda: {
				q: 'Allekirjoitatteko NDA:n?',
				a: 'Kyllä. Käytämme tavanomaisia salassapitosopimuksia; voimme käyttää teidän mallianne tai tarjota standardin.',
			},
			english: {
				q: 'Työskentelettekö englanniksi?',
				a: 'Kyllä. Dokumentaatio, päivittäiset ja koodi englanniksi on tavanomaista kansainvälisille tiimeille; palvelemme myös espanjaksi ja suomeksi.',
			},
		},
	},
	closing:
		'Jos tarvitsette Android-konsultointia, senior-freelance-kehittäjää tuotantokokemuksella tai auditoinnin ennen pelastusprojektia, varatkaa 30 minuuttia — katsomme sopivuuden ja seuraavan askeleen.',
	mid: {
		p1: 'Monet yritykset tulevat luoksemme, kun sovelluksella ei ole vuosiin ollut senior-vetäjää: tieto on yhdellä ihmisellä, bus factor korkea ja jokainen julkaisu jännittää. Tehtävämme on pienentää riskiä tuotannossa käytetyillä prosesseilla, ei yleisillä dioilla.',
		p2: 'Emme lupaa uudelleenkirjoitusta kuukaudessa. Lupaamme selkeyden: mikä on rikki, mikä velka on siedettävää ja mitä kannattaa tehdä ensin. Kun laajuus sopii, lukitsemme sen kirjallisesti ennen koodausta.',
	},
};

export const consultoriaPageExpanded = {
	hero: {
		title: 'Android-kehitystä ja ohjelmistokonsultointia tiimeille, jotka eivät voi epäonnistua',
	},
	intro: {
		p1: 'Bitdesalilla yhdistämme tuotanto-Androidin ja ohjelmistokonsultoinnin tiimeille, jotka tarvitsevat mitattavaa laatua, eivät kauniita prototyyppejä. Työskentelemme Kotlinilla, Jetpack Composella, modulaarisella arkkitehtuurilla, automaattisilla testeillä ja CI/CD:llä tuotantosovellusten vaatimalla tasolla.',
		p2: 'Olemme pieni tiimi, jolla on yhteensä yli 20 vuotta ohjelmistokokemusta. Ramiro Santamaría vahvistaa operointia, tietoturvaa ja tekoälyagentteja siellä missä se lyhentää syklää korvaamatta insinööriä.',
	},
	androidPromo: {
		title: 'Senior Android -konsultointi',
		p1: 'Jos tarpeenne on pääasiassa mobiili — legacy, kuukausijulkaisut, seniorin puute tiimissä — meillä on oma Android-konsultoinnin sivu: palvelut, hinnat ja UKK CTO:ille ja tuotevastaaville.',
		linkConsulting: 'Android-konsultointi',
		linkAudit: 'Android-sovelluksen auditointi',
		and: 'ja',
		p2: 'Kun ette ole varmoja mistä aloittaa, auditointi antaa priorisoidun raportin ennen isoa projektia.',
	},
	body: {
		p1: 'Androidin lisäksi autamme kevyessä backend-arkkitehtuurissa, integraatioissa ja spec-driven-työnkulussa tekoälyavusteisesti. Emme myy tuntia ilman suuntaa: lähdemme liiketoimintariskistä (kaatumiset, viiveet, yhden henkilön riippuvuus) ja ehdotamme vaiheita toimituksineen.',
		p2: 'Voitte palkata meidät tunneittain, kuukausipaketilla tai kiinteään hintaan määrittelyn jälkeen. Espanjan ulkopuolisille yrityksille läpinäkyvät kansainväliset hinnat; EU:ssa ALV asiakkaan hoidettavana tarvittaessa.',
	},
};
