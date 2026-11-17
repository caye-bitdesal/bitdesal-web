---
title: 'Unettomuus, tekoälyagentit ja kahdeksan tunnin «yksinkertainen ominaisuus»'
description: 'Tekoälyllä tehty kielivalitsin, jonka piti viedä pari tuntia, päättyi yölliseen maratoniin. Hyväksymiskriteerit, automaattinen katselmus ja kolme oppituntia.'
pubDate: 2026-06-11
audience: technical
author: caye
layout: feature
tags:
  - agentes-ia
  - android
  - desarrollo-asistido
keyword: 'tekoälyagentit kehitys'
heroImage: /images/blog/insomnio-agentes-ia-funcion-sencilla/hero.jpg
ogImage: /images/blog/insomnio-agentes-ia-funcion-sencilla/hero.jpg
subtitle: 'Onko sinulle käynyt, että «viiden minuutin» tehtävä nielee koko päivän? Tämä alkoi sopimattomaan aikaan, unettomana, kielivalitsimella joka «varmasti» valmistuisi nopeasti tekoälyn avulla.'
updatedDate: 2026-11-17
faq:
  - q: 'Miksi otsikossa on 8 tuntia, vaikka maratoni kesti kauemmin?'
    a: 'LinkedIn-tarinassa «kahdeksan tunnin yksinkertainen ominaisuus» on koukku. Käytännössä spesifikaatiosta, iteraatioista ja korjauksista kului noin kaksitoista tuntia, ennen kuin ominaisuus oli vakaa ja koodi esiteltävää.'
  - q: 'Kannattaako antaa agentin ajaa ilman hyväksymiskriteereitä?'
    a: 'Ei. Ilman kirjallisia kriteereitä agentti jatkaa «parantamista» tai keksimistä loputtomasti. Pitää tietää, milloin riittää.'
  - q: 'Korvaako tekoälykatselmus ihmisen katselmuksen?'
    a: 'Se toimii toisena mielipiteenä PR:ssä, ei vetona tai korvikkeena. Kommentit ohjaavat; tiimi päättää mergestä.'
---

Aamuyöllä, valveilla, päätin rakentaa **kielivalitsimen** Weel-sovellukseen, henkilökohtaiseen appiin jonka parissa olen työskennellyt jo pitkään. Käsin se olisi vienyt pari tuntia. Halusin testata, kuinka kauan tekoälyagenttien kanssa menisi.

<blockquote class="bf-pullquote">Iso virhe: ilman hyväksymiskriteereitä tekoäly ei lopeta «korjaamasta» asioita, joita et pyytänyt.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">Suunnitelma</span> <span class="bf-section-accent">ennen koodia</span></span>
</h2>

Ensimmäinen askel ei ollut Android Studion avaaminen: se oli **spesifikaation kirjoittaminen** Cursorissa Composerilla. Kokonainen tunti pelkkään suunnitelmaan. Paikallinen malli Ollamalla olisi ehkä ollut halvempi, mutta olin liian väsynyt strategiseksi.

Neljä kierrosta suunnitelman hiomista virheiden kiinni ottamiseksi ennen toteutusta. Lopulta annoin **Claude Opusin** toteuttaa. (Lepää rauhassa API-krediitit, mutta en ainakaan rynnännyt sokeana.)

<div class="bf-idea">
  <p class="bf-idea-label">Avainajatus</p>
  <p class="bf-idea-text">Koodissa «säästetty» aika meni huonoon spesifikaatioon, korjaussilmukoihin ja laadun läpikäyntiin. Tekoäly nopeuttaa kirjoittamista, ei harkintaa.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Toteutus:</span> <span class="bf-section-accent">«puolivalmis» monella tavalla</span></span>
</h2>

Klassisella tekoälytavalla se **melkein toimi**. Eli se epäonnistui luovilla tavoilla:

- Pudotusvalikko avautui näytön väärälle puolelle.
- Kytkimet eivät oikeasti muuttaneet sitä mitä piti.
- Pysyvyys ja kontekstin injektointi olivat kaaosta.

Jokainen korjaus avasi uuden reiän, koska ei ollut suljettua listaa «valmis kun…».

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Laadunvarmistus</span> <span class="bf-section-accent">automaattisella katselmuksella</span></span>
</h2>

Kun koodi vihdoin istui yhteen, laatu oli yhä heikko. Ajoin diffin GitHub-workflow’n läpi, jonka olimme rakentaneet **tekoälykatselmukselle** (Gemini silloin; tuoreissa kuvakaappauksissa näkyy 2.5 Pro).

Botti löysi oikeita ongelmia, esimerkiksi epäturvallisen `AppLanguage.valueOf`-kutsun DataStoresta lukevana, ja myös kohinaa. Sinä päivänä se painoi enemmän kuin helpotti, mutta malli toimii yhä tiimeillä, joilla on vähän katselmuksen kaistaa.

<figure class="bf-figure">
  <img src="/images/blog/insomnio-agentes-ia-funcion-sencilla/ai-code-review.png" alt="Tekoälyn katselmuskommentti Android-pull requestissä: yhteenveto, havainnot ja ehdotettu Kotlin-koodi" width="1200" height="800" loading="lazy" />
  <figcaption>Automaattinen katselmus PR:ssä: hyödyllinen toisena mielipiteenä, ei korvike ihmisen merge-päätökselle.</figcaption>
</figure>

<p>Jos haluat nähdä, miten tämä sopii kokonaiseen putkeen, katso <a href="/fi/blog/guia-cicd-android-github-actions/">CI/CD-opas tekoälykatselmuksella</a> bitdesal.comissa.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Kahdentoista tunnin jälkeen</span> <span class="bf-section-accent">kolme oppituntia</span></span>
</h2>

Noin **kahdentoista tunnin** ja monen väärän polun jälkeen ominaisuus oli tuotannossa ja koodi esiteltävää. Mukaan otin tämän:

<ol class="bf-steps">
  <li><strong>Kirjalliset hyväksymiskriteerit.</strong> Jos et määrittele «valmis», agentti jatkaa iteraatiota tai keksii parannuksia ikuisesti.</li>
  <li><strong>Luota, mutta tarkista.</strong> Tekoäly voi olla väärässä hyvin varmasti. Sokea seuraaminen maksaa enemmän kuin käsin korjaaminen.</li>
  <li><strong>Kysy itseltäsi.</strong> Joskus vika on promptissa tai kehysajattelussa, ei mallissa. Siinä opit eniten.</li>
</ol>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Johtopäätös</p>
      <h2 class="bf-conclusion-heading">Yksinkertainen ominaisuus ei ollut</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Tekoälyagentit auttavat etenemään nopeasti, kun tiedät jo mitä haluat ja miten sen tarkistat. Ilman sitä uneton yö muuttuu maratoniksi.</p>
      <p>Tarinasta on myös <a href="https://www.linkedin.com/pulse/insomnia-ai-agents-8-hour-simple-feature-bitdesal-ytkke/">alkuperäinen artikkeli LinkedInissä</a>. Jos haluat Android-kehitystä laadulla etkä ikuisesti agentin varassa, katso <a href="/fi/consultoria-android/">Android-sovelluskehitys</a> tai <a href="/agentes-ia-empresas/">tekoälyagentit yrityksille</a>.</p>
    </div>
  </div>
</section>