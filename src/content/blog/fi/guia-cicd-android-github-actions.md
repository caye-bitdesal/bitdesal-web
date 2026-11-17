---
title: 'Android CI/CD -opas GitHub Actionsin avulla: järkevä putki'
description: 'Kolme GitHub Actions -workflowta Androidille: nopea PR-CI, rinnakkainen tekoälykatselmus ja allekirjoitettu julkaisu Playn sisäiselle kanavalle. Käytännön kuvioita.'
pubDate: 2026-07-10
audience: technical
author: caye
layout: feature
tags:
  - android
  - cicd
  - github-actions
keyword: 'CI/CD Android GitHub Actions'
heroImage: /images/blog/guia-cicd-android-github-actions/hero.webp
ogImage: /images/blog/guia-cicd-android-github-actions/hero.webp
titleHighlight: 'järkevä putki'
subtitle: 'Useimmat Android-tiimit tietävät, että julkaisut pitäisi automatisoida. Väli jää usein vetämättä kysymyksiin «onko koodi kunnossa?» ja «voivatko testaajat asentaa sen?».'
updatedDate: 2026-11-17
faq:
  - q: 'Estääkö tekoälykatselmus mergen?'
    a: 'Ei. Se käynnistyy rinnakkain CI:n kanssa ja jättää kommentin PR:ään. Pakolliset checkit ovat main.yml:n mekaanisia taskeja; ihmisestä tulee lopullinen hyväksyntä.'
  - q: 'Miksi emulaattoria ei ajeta jokaisessa PR:ssä?'
    a: 'Emulaattori- ja kuvakaappaustestit ovat hitaita. Ne varaamme release-putkelle, kun koodi on jo käynyt läpi ihmiskatselmuksen mainissa.'
  - q: 'Montako workflow-tiedostoa tarvitaan?'
    a: 'Kolme: main.yml (laatu PR:ssä ja pushissa mainiin), ai-code-review.yml (automaattinen toinen mielipide) ja release.yml (syvä validointi, allekirjoitus, Playn sisäinen kanava).'
---

Tässä oppaassa käydään läpi oikea GitHub Actions -asetelma Android-sovelluksessa: **kolme workflowta**, jotka täydentävät toisiaan — nopeat tarkistukset pull requestissa, tekoälyavusteinen koodikatselmus ja hitaampi julkaisuautomaatio (visuaaliset testit, emulaattori, allekirjoitus, Google Play -lataus ja tiimille ilmoitus).

Sinun ei tarvitse tuntea sovellusta tai sen sisäisiä yksityiskohtia. Kuviot sopivat useimpiin Gradle-pohjaisiin Android-projekteihin.

<p class="text-sm text-muted-foreground">Lukuaika: noin 15–20 minuuttia.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">Mielikuva:</span> <span class="bf-section-accent">kaksi ovea</span></span>
</h2>

Ajattele **kahta ovea** ja ylimääräistä katselmoijaa ensimmäisellä:

1. **Laatuportti** — voidaanko mergata? (build, testit, tyyli, lint, tekoälykatselmus, ihmiskatselmus)
2. **Lähtölaituri** — voivatko testaajat asentaa sen? (syvemmät testit, allekirjoitettu bundle, Playn sisäinen kanava)

| | CI (`main.yml`) | Tekoälykatselmus (`ai-code-review.yml`) | Release (`release.yml`) |
| --- | --- | --- | --- |
| **Milloin** | Jokainen PR + jokainen push `main`iin | Jokainen PR (avaus / päivitys / uudelleenavaus) | Jokainen push `main`iin |
| **Tyypillinen kesto** | Muutama minuutti | ~1–2 minuuttia | ~30 minuuttia |
| **Estääkö mergen?** | Kyllä (pakolliset checkit) | Ei (ohjeellinen kommentti) | Ei sovellu (mergen jälkeen) |
| **Emulaattori?** | Ei | Ei | Kyllä |
| **Julkaisee Playhin?** | Ei | Ei | Kyllä (sisäinen kanava) |

Mekaaniikkatarkistusten erottaminen releasesta pitää PR:t kevyinä. Tekoälykatselmus kulkee **rinnakkain** CI:n kanssa — kukaan ei odota emulaattoria typon korjaamisen takia, ja tekijä saa toisen mielipiteen diffistä samalla kun Gradle kääntää.

<blockquote class="bf-pullquote">Mergen pitää olla nopea ja mekaaninen. Releasen pitää olla hidas, allekirjoitettu ja toistettava.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Ennen CI:tä:</span> <span class="bf-section-accent">miten työ tulee putkeen</span></span>
</h2>

Automaatio ei ala «pushista». Se alkaa aiemmin — siitä, miten tiimi **järjestää työn**.

<h3 class="text-xl font-medium mt-8 mb-4">Haarautuminen ja merge-virta</h3>

Kun otamme issue:n työn alle, haarautumme `main`ista. Jos issue on suuri, pilkomme sen **alikysymyksiin (sub-issue)** — jokaisella on oma haaransa, mutta se haarautuu feature-haaran vanhemmasta haarasta, ei suoraan `main`ista. Alikysymysten PR:t mergataan takaisin vanhempaan haaraukseen valmistuessaan. Vasta kun kaikki alikysymykset on integroitu ja feature on valmis, mergaamme vanhemman haaran `main`iin — ja **se** merge laukaisee uuden release candidate -version.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/git-branches.webp" alt="Haaradiagrammi: main, feature-haaran vanhempi haara ja sub-issue -haarat pull requesteineen" width="1200" height="675" loading="lazy" />
  <figcaption>Näin haarautumme työstämämme issuen mukaan.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/branching-subissues.webp" alt="Työkulku issueiden, vanhempien haarojen ja sub-issueiden kautta mergeen mainiin" width="1200" height="675" loading="lazy" />
  <figcaption>Suhde issueihin, haaroihin ja release-putkeen.</figcaption>
</figure>

**Miksi tämä malli:**

- Sub-issuet pysyvät erillään. Jokainen pieni PR ajaa CI:n ja tekoälykatselmuksen koskematta `main`iin ennen kuin oma siivunsa on valmis.
- Vanhempi haara integroi vähitellen. Koko feature kasataan vanhemmalla haaralla ennen kuin se altistuu release-putkelle.
- **Yksi release per feature, joka laskeutuu mainiin.** Merge `main`iin on ainoa portti, joka käynnistää kuvakaappaustestit, emulaattorin, allekirjoituksen ja Play-latauksen.

Isot featuret seurataan sub-issueina, jotta edistyminen näkyy paloina, joita voi katselmoida:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/sub-issues.webp" alt="Vanhempi issue kahdeksalla valmiilla sub-issueella, jokaisella oma pull request" width="1200" height="675" loading="lazy" />
  <figcaption>Vanhempi jaetuksi suljetuiksi sub-issueiksi, jokaisella oma PR.</figcaption>
</figure>

Itse PR:t kantavat kontekstia: tavoitteet, ei-tavoitteet ja **testauschecklist**, jonka tekijä täyttää ennen ihmiskatselmuksen pyyntöä:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/issue-spec.webp" alt="Pull requestin kuvaus tavoitteineen, ei-tavoitteineen ja täytettynä testauschecklistinä" width="1200" height="675" loading="lazy" />
  <figcaption>Tavoitteet, laajuus ja testit ennen ihmiskatselmusta.</figcaption>
</figure>

**Miksi tämä merkitsee CI:lle:** selkeä laajuus vähentää yllätyksiä. Jos lint tai testi kaatuu, tiedät mikä featuren siivu hajosi — et kokonaista monen viikon eeposta.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Tekoälykatselmus</span> <span class="bf-section-accent">pull requesteissa</span></span>
</h2>

Kun PR avataan tai siihen tulee uusia commiteja, `ai-code-review.yml` käynnistyy **rinnakkain** CI:n kanssa — ei sen sisällä. Molemmilla on sama triggeri; kumpikaan ei odota toista.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-sequence.webp" alt="Sekvenssi: push PR:ään, Gradlen CI-työt ja tekoälykatselmus kommentoimassa pull requestiin" width="1200" height="675" loading="lazy" />
  <figcaption>Mekaaniikkatarkistukset ja tekoäly samalla; ihmiset päättävät mergestä.</figcaption>
</figure>

**Miten tekoälyworkflow toimii:**

1. GitHub Actions checkouttaa PR:n diffin (base vs. head).
2. Python-skripti (`ai_review.py`) lähettää diffin ja PR:n otsikon LLM:lle Geminin API:n kautta.
3. Workflow julkaisee mallin vastauksen **kommenttina PR:ään**: löydetyt ongelmat, onnistuneet kohdat ja onko aiempaa palautetta huomioitu.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-comment.webp" alt="Tekoälyn katselmuskommentti pull requestissä: enum-deserialisointivirhe ja hyvä locale-API-käyttö" width="1200" height="675" loading="lazy" />
  <figcaption>Oikea esimerkki: tekoäly merkitsee vaarallisen `valueOf`-kutsun DataStoressa ja muistuttaa, että ihmisen hyväksyntä on edelleen pakollinen.</figcaption>
</figure>

Workflow ohittaa bottien (Dependabot, Renovate) PR:t ja peruu käynnissä olevat katselmuksen uusien committien tullessa, jotta kommentti heijastaa aina viimeisintä diffiä.

**Mitä pitää konfiguroida:** repositorion salaisuus `GEMINI_API_KEY` ja `pull-requests: write` -oikeus, jotta botti voi kommentoida. Sisäänrakennettu `GITHUB_TOKEN` riittää repo-oikeuksiin.

**Mihin se sopii:** logiikkabuugit, tyypilliset Android-virheet ja luettavuusongelmat ennen kuin ihminen avaa tiedoston — etenkin pienillä tiimeillä, joilla on vähän katselmuksen kaistaa.

**Mihin se ei sovellu:** se ei korvaa ihmiskatselmusta eikä ole pakollinen check. CI voi olla vihreä samalla kun tekoäly merkitsee oikean bugin kommenttiin — näin on tarkoitettu.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Putki 1:</span> <span class="bf-section-accent">CI, laatuportti</span></span>
</h2>

**Tiedosto:** `main.yml`  
**Triggerit:** pull requestit `main`iin, pushit `main`iin, manuaalinen ajo

Kun avaat PR:n, GitHub Actions käynnistää **viisi CI-työtä rinnakkain** (lopussa yksi riippuvuusketju). Samaan aikaan tekoälykatselmus jättää kommentin PR:ään.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-checks.webp" alt="Yhteenveto viidestä vihreästä työstä: build, unit-testit, ktlint, Android lint ja release-buildin tarkistus" width="1200" height="675" loading="lazy" />
  <figcaption>Viisi selkeästi nimettyä checkiä PR-näkymässä.</figcaption>
</figure>

**Luonnos-PR:t** ohittavat raskaammat työt — unit-testit, Android Lintin ja release-buildin tarkistuksen — jotta kesken oleva työ ei kuluta CI-minuutteja.

<h3 class="text-xl font-medium mt-8 mb-4">Mitä kukin työ tekee (ja miksi)</h3>

- **Build app** — kääntää debug-APK:n ja lataa sen artefaktina.
- **Unit tests** — JVM-testit ja Robolectric-pohjaiset Compose UI -testit.
- **Kt lint check** — Kotlin-tyylisäännöt.
- **Android lint check** — Androidin staattinen analyysi debug-variantille.
- **Make sure release build work** — purkaa keystoren salatuista secretseistä ja kääntää **release-bundlen** julkaisematta mitään.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-ci-sequence.webp" alt="Pull requestin CI-sekvenssikaavio Gradlen ja tekoälykatselmuksen kanssa" width="1200" height="675" loading="lazy" />
  <figcaption>CI vastaa «rikkoiko tämä jotain ilmiselvää?»; tekoäly tuo kontekstia rinnalla.</figcaption>
</figure>

<h3 class="text-xl font-medium mt-8 mb-4">Mitä CI:stä tarkoituksella jätetään pois</h3>

- Emulaattori- / instrumentoidut testit
- Kuvakaappausten regressiotestit
- Google Play -lataukset
- Version taggaus

Ne kuuluvat **release**-putkeen. Niiden pitäminen poissa jokaisesta PR:stä on valinta, ei aukko.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Putki 2:</span> <span class="bf-section-accent">release, lähtölaituri</span></span>
</h2>

**Tiedosto:** `release.yml`  
**Triggerit:** pushit `main`iin, manuaalinen ajo

Mergen päivänä alkaa syvempi validointi. Release-workflowssa on **kolme ylätason työtä**:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ci-jobs-summary.webp" alt="Kolme vihreää release-työtä: kuvakaappaustestit, integraatiotestit ja build release AAB" width="1200" height="675" loading="lazy" />
  <figcaption>Kaksi ensimmäistä rinnakkain; build release odottaa molempien onnistumista.</figcaption>
</figure>

### Työ A: Kuvakaappaustestit

Compose-esikatselut renderöidään ja verrataan pikseli pikseliltä repoon tallennettuihin referenssikuviin.

Jos referenssejä ei ole vielä, putki generoi ne, commitoi takaisin ja **ohittaa** validoinnin sillä ajolla — kertaluonteinen käynnistys.

Normaalilla ajolla mikä tahansa visuaalinen poikkeama rikkoo buildin ja lataa ladattavan diff-raportin Actions-artifakteihin.

**Hyöty:** ottaa kiinni «vaihdimme värin emmekä huomanneet» -regressiot. Typografia, välit ja layout pysyvät rehellisinä ilman manuaalisia kuvakaappausistuntoja jokaisesta muutoksesta.

**Miksi vain täällä?** Kuvakaappausrakenne on raskaampi kuin unit-testit. Ajamme sitä, kun valmistellaan jotain asennettavaa, emme joka näppäilyllä.

### Työ B: Integraatiotestit

Tässä käynnistämme **oikean Android-emulaattorin** runnerilla (API 30, optimoitu testikuva) ja ajamme instrumentoidut testit päästä päähän.

**Hyöty:** testaa oikeaa kehysympäristöä — elinkaari, SQLite, oikeudet, navigointi — tavoilla, joita JVM ei täysin replikoi.

Raportit ladataan aina, menivät läpi tai eivät, jotta debuggaus ei vaadi emulaattorin toistamista paikallisesti.

### Työ C: Build release AAB — pääesitys

Kun visuaaliset ja integraatiotestit menevät läpi, **Build release AAB** -työ ottaa ohjat. Viimeisellä ajolla se kesti noin **kuusi ja puoli minuuttia** alusta loppuun:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-job-log.webp" alt="Release-työn vaiheet: versio, allekirjoitus, build, artefakti, tagi ja Discord-ilmoitus" width="1200" height="675" loading="lazy" />
  <figcaption>Jokainen vaihe näkyy lokissa: versio, allekirjoitus, julkaisu, artefakti, tagi ja ilmoitus.</figcaption>
</figure>

**Mitä tapahtuu sisällä, järjestyksessä:**

**1. Laske versio** — emme muokkaa build-tiedostoa käsin julkaisupäivänä. Putki lukee git-tagit `rc-*` ja kasvattaa version automaattisesti:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/version-tags.webp" alt="Päätöskaavio versionName- ja versionCode-arvoille rc-tageista mainissa" width="1200" height="675" loading="lazy" />
  <figcaption>Jos HEAD:ssa on jo rc-*-tagi, käytetään sitä; muuten kasvatetaan patchia tai lähdetään 1.0.1:stä.</figcaption>
</figure>

- Tagi: `rc-1.0.1`
- Version nimi: `1.0.1`
- Version koodi: `10005` (kaava: major×10000 + minor×100 + patch)

**2. Valmistele ja varmenna allekirjoitus** — upload-keystore **ei koskaan** ole gitissä. Se on salattu secret, puretaan runnerilla ja varmennetaan tavallisilla Java-työkaluilla ennen Gradlea.

**3. Build ja julkaisu — yksi Gradle-kutsu**

Yksi komento rakentaa allekirjoitetun Android App Bundlen ja lataa sen Playhin:

`bundleRelease` + `publishReleaseBundle`

Julkaisu käyttää Gradle Play Publisher -pluginia (Triple-T) ja kohdistaa **sisäiselle kanavalle**. Ei «lataa AAB, avaa Play Console, klikkaa lataa». Toistettavaa, logitettua ja tylsää — paras release-prosessi.

**4. Työn yhteenveto, artefakti ja git-tagi**

Workflow kirjoittaa luettavan taulukon Actions-yhteenvetoon, lataa `.aab`-tiedoston artefaktina ja pushaa `rc-*`-tagin (ellei committia ole jo tagattu — turvallinen uudelleenajoille).

**5. Ilmoitus tiimille**

Tässä esimerkissä käytämme Discordia; sama malli sopii Slackiin, sähköpostiin tai muuhun kanavaan. Onnistuminen tai epäonnistuminen lähettää embedin version, tagin ja linkeillä CI-ajoon ja Play Console -julkaisuihin (workflow-muuttujana, ei repossa).

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">Miten kaikki</span> <span class="bf-section-accent">nivoutuu yhteen</span></span>
</h2>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/developer-workflow.webp" alt="Kehittäjän työkulku suunnittelusta releasen ja manuaalisen tuotantopromootion kautta" width="1200" height="675" loading="lazy" />
  <figcaption>Laatuportti PR:ssä; lähtölaituri mergen jälkeen.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/workflow-overview.webp" alt="Virrat GitHub-issuesta manuaaliseen tuotantopromootioon" width="1200" height="675" loading="lazy" />
  <figcaption>Issuet, sub-issuet, CI, tekoäly ja release yhdessä näkymässä.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-sequence.webp" alt="Release-putken sekvenssi: testit, allekirjoitus, Gradle, Google Play ja ilmoitus" width="1200" height="675" loading="lazy" />
  <figcaption>Mergen jälkeen odotusaika ei jarruta arkea.</figcaption>
</figure>

<ol class="bf-steps">
  <li><strong>Suunnittele</strong> — jaa featuret sub-issueihin; dokumentoi tavoitteet ja testisuunnitelma PR:ään.</li>
  <li><strong>Avaa PR</strong> — CI (pakollinen) ja tekoälykatselmus (ohjeellinen) rinnakkain; molemmat ruokkivat ihmiskatselmusta.</li>
  <li><strong>Merge</strong> — CI ajaa uudelleen `main`issa ja release-putki käynnistyy.</li>
  <li><strong>Release OK</strong> — allekirjoitettu build sisäiselle kanavalle; tiimi ilmoitettu Discordissa (tai muulla kanavalla).</li>
  <li><strong>Promotoi kun valmista</strong> — tuotanto on edelleen tietoinen ihmispäätös.</li>
</ol>

Viimeinen askel on tarkoituksellinen. Automaatio poistaa toiston; sinä päätät mitä oikeat käyttäjät saavat.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">07</span>
  <span class="bf-section-title"><span class="bf-section-lead">Mitä menee secreteihin</span> <span class="bf-section-accent">(ja mitä ei)</span></span>
</h2>

Älä julkaise keystoreja, service account -JSONia, webhook-URL:eja, salasanoja tai tunnuksia artikkelissa tai repossa.

Repossa säilytämme vain **luokkia** GitHub Actions -secreteistä:

| Luokka | Mihin |
| --- | --- |
| LLM:n API-avain | Tekoälykatselmusworkflow |
| Allekirjoituskeystore (Base64) | Upload-avaimen rekonstruointi runnerilla |
| Keystoren salasanat ja alias | Release-binäärien allekirjoitus |
| Play Publisher -tunnukset | Gradle Play Publisher -pluginin autentikointi |
| Ilmoitus-webhook | Discord-embedit (tai muu kanava) |

Jos jotain vuotaa, **kierrätä heti**. Secretit pysyvät salaisina: mikään loki ei saa tulostaa niitä.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">08</span>
  <span class="bf-section-title"><span class="bf-section-lead">Mitä opin</span> <span class="bf-section-accent">tätä rakentaessa</span></span>
</h2>

<div class="bf-triptych">
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">01</span>
    <h3>Tekoäly ihmisen arvion alla</h3>
    <p>Malli näkee mitä lint ei näe; ihmiset päättävät tuotteesta ja arkkitehtuurista. Rinnakkain, ei tukkona.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">02</span>
    <h3>Nopea vs hidas</h3>
    <p>PR:ssä minuutteja. Luottamus releaseen silti kasvaa, koska raskas työ ajetaan mergen jälkeen.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">03</span>
    <h3>Release jo PR:ssä</h3>
    <p>Releasen kääntäminen PR:ssä maksaa vähän ja välttää yllätykset: sovellus ei käänny vain debugissa.</p>
  </div>
</div>

<ul class="list-disc pl-6 my-6 space-y-2 text-foreground/85">
  <li><strong>Tagipohjainen versionointi</strong> — vähemmän maanantaiaamun väittelyä; historia jää gittiin.</li>
  <li><strong>Bundle + julkaisu yhdessä Gradle-askeleessa</strong> — vähemmän kutsuja, vähemmän allekirjoitusyllätyksiä.</li>
  <li><strong>Ilmoita kanavassa, jota luetaan</strong> — vihreä check Actionsissa auttaa; tiimin pitää tietää mikä versio on sisäisellä kanavalla.</li>
  <li><strong>Manuaalinen tuotantopromootio</strong> — päätät mitä oikeille käyttäjille menee.</li>
</ul>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Yhteenveto</p>
      <h2 class="bf-conclusion-heading">Luottamuskerroksia, ei yhtä jättimäistä workflowta</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Hyvä CI/CD ei ole yksi YAML, joka tekee kaiken. Se on ketju: jäsennellyt issuet, dokumentoidut PR:t, automaattinen tyyli ja testit, tekoälyavusteinen katselmus, ihmisen hyväksyntä, emulaattori- ja visuaalivalidointi, allekirjoitetut artefaktit ja tönäys tiimille, kun build menee sisäiselle kanavalle.</p>
      <p>Kolme workflow-tiedostoa. Nolla manuaalista latausta. Jokainen PR saa mekaaniset checkit ja tekoälyn ensikatselmuksen; jokainen merge tuo allekirjoitetun buildin sisäiselle kanavalle — ja tiimi tietää aina mikä versio on kyseessä.</p>
      <p>Kuvakaappaukset ovat oikeasta GitHub Actions -asetelmasta. Jos haluat apua putken arviointiin tai rakentamiseen, katso <a href="/fi/consultoria-android/">Android-sovelluskehitys</a> tai <a href="https://cal.com/bitdesal/30min">varaa 30 minuuttia</a>. Myös <a href="https://medium.com/@caye.suomi/a-guide-on-how-to-implement-ci-cd-for-android-using-github-actions-839256696fdd">alkuperäinen artikkeli Mediumissa</a>.</p>
    </div>
  </div>
</section>