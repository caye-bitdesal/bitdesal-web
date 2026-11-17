---
title: 'Yli "vibe codingin": manifesti kestävälle tekoälyinsinöörityölle'
description: 'Viisi periaatetta tekoälyn käyttöön insinöörityössä ilman kaaosta: luottamus, spesifikaatio, kurinalaisuus, ihminen ohjaksissa ja kestävä kustannus. Manifesti suomeksi.'
pubDate: 2026-05-21
audience: technical
author: caye
layout: feature
tags:
  - ia
  - ingenieria
keyword: 'vibe coding tekoälyinsinöörityö'
heroImage: /images/blog/mas-alla-del-vibe-coding/hero.jpg
ogImage: /images/blog/mas-alla-del-vibe-coding/hero.jpg
titleHighlight: 'manifesti kestävälle tekoälyinsinöörityölle'
subtitle: 'Toimiala jahtaa tekoälyn nopeutta. Ilman menetelmää se vain vahvistaa koodikannan kaaosta.'
updatedDate: 2026-11-17
faq:
  - q: 'Mitä vibe coding on?'
    a: 'Tekoälyn sokea käyttö: epämääräiset promptit, mergaukset ilman diffin ymmärtämistä ja refaktoroinnit, jotka duplikoivat logiikkaa koska «jokin kääntyy». Toimii demossa; ei järjestelmässä, jota ylläpidät vuosia.'
  - q: 'Mitä spesifikaatiovetoinen kehitys (SDD) on?'
    a: 'Kirjallinen spesifikaatio on päätuote: käyttäjätarina, hyväksymiskriteerit ja suunnitelma ennen kuin agentti koskee repositorioon.'
  - q: 'Miten mittaatte tekoälyn tuoton?'
    a: 'Ei generoitujen rivien määrällä, vaan säästättekö tarkistettavaa aikaa tietyssä toimeksiannossa, ROAI: return on AI investment, token-rajojen ja saman laatutason kanssa kuin ilman tekoälyä.'
---

Hype työntää **tuottamaan enemmän koodia vähemmässä ajassa**. Me noudatamme toista sääntöä: **insinöörityö ensin**. Tekoäly on työkalu, ei arvostelukyvyn korvike. Tämä manifesti kiteyttää, miten käytämme sitä Bitdesalilla ilman «vibe codingia».

<blockquote class="bf-pullquote">Jos et voi debugata koodia, kun tuotanto kaatuu, sinun ei pitäisi olla mergannut sitä, vaikka agentti olisi kirjoittanut sen.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">Luottamus</span> <span class="bf-section-accent">ansaitaan</span></span>
</h2>

«Kääntyy ja toimii koneellani» ei riitä. Sinun täytyy **ymmärtää** diffissä oleva. Kohtele agentteja kuin junior-kehittäjää: kunnioituksella, mutta tarkista jokainen toimitus.

Jos tuotanto kaatuu kello kolmena yöllä, malli ei vastaa puhelimeen. Sinä vastaat.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Spesifikaatio</span> <span class="bf-section-accent">on tuote</span></span>
</h2>

Tekoälyaikakaudella pääomaa ei ole viimeisin commit: se on **spesifikaatio**. Toisto, jonka käymme läpi:

<ol class="bf-steps">
  <li>Määritä ja tarkenna käyttäjätarina.</li>
  <li>Suunnittele arkkitehtuuri ja kerrosten rajat.</li>
  <li>Pilko pieniin tehtäviin hyväksymiskriteereineen.</li>
  <li>Vasta sitten: toteutus, käsin, avustajalla tai agentilla.</li>
</ol>

Tätä kutsutaan spesifikaatiovetoiseksi kehitykseksi (SDD). Ilman speksiä agentti improvisoi ja maksat iteraatioista. Näimme sen käytännössä tarinassa <a href="/fi/blog/insomnio-agentes-ia-funcion-sencilla/">«kahden tunnin» kielivalitsimesta</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Insinöörityön kurinalaisuus</span> <span class="bf-section-accent">vs. laiskuus tekoälyn kanssa</span></span>
</h2>

- Älä korvaa rikkinäistä funktiota toisella generoidulla blokilla: **korjaa juurisyy**.
- Vältä «korvaa kaikki» -refaktorointia, joka duplikoi logiikkaa ja velkaa.
- **Älä koskaan** muuta testiä sopimaan väärään toteutukseen. Jos testi epäonnistuu, koodi epäonnistuu.
- Kunnioita kerroksia: UI, domain ja data eivät sekoitu yhteen promptiin ilman selkeää tarkoitusta.

<figure class="bf-figure bf-figure--natural">
  <img src="/images/blog/mas-alla-del-vibe-coding/jar-jar.jpg" alt="Jar Jar Binks Tatooinen autiomaassa, metafora ideasta, joka näytti loistavalta ja päättyi huonosti" width="1024" height="797" loading="lazy" />
  <figcaption>Monet pitivät tuolloin täysin tietokoneella generoitua hahmoa elokuvassa hyvänä ideana. Vibe coding tuotannossa haisee samalta.</figcaption>
</figure>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Sinä olet insinööri,</span> <span class="bf-section-accent">ei tekoäly</span></span>
</h2>

Agentit toteuttavat. **Sinä** määrittelet mentaalimallin, rajat ja mitä kuuluu mihin kerrokseen. Tekoäly nopeuttaa näppäilyä; se ei ota vastuuta suunnittelusta tai käyttöönotosta.

<div class="bf-idea">
  <p class="bf-idea-label">Avainajatus</p>
  <p class="bf-idea-text">Toteutuksen delegointi ei ole arvostelun delegointia. Merge on edelleen ihmisen päätös.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Token-talous</span> <span class="bf-section-accent">ja kestävyys</span></span>
</h2>

Tänään monia API-kustannuksia **subventionoidaan** tai ne ovat huomista edullisempia. Epämääräiset spesifikaatiot aiheuttavat hallusinaatioita ja epäonnistuneita iteraatioita, eli hukattuja tokeneita. SDD:llä rakennat kirjaston **suoritettavia piirustuksia**, jotka pysyvät edullisina vaikka hinta per token nousee.

Jos talouspuoli kiinnostaa, se liittyy <a href="/fi/blog/puedes-permitirte-desarrollo-asistido-ia/">siihen, mitä tekoälyavusteinen kehitys oikeasti maksaa</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">Oikea mittari</span> <span class="bf-section-accent">ei ole rivit</span></span>
</h2>

Indikaattori ei ole «kuinka monta riviä tekoäly generoi», vaan **tuotto tekoälysijoitukselle (ROAI)**: tuliko tästä tietyssä toimeksiannossa nopeammin **tarkistettavalla laadulla** kuin ilman tekoälyä?

Tekoäly avustaa kehittäjää; se ei korvaa insinööriä.

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Yhteenveto</p>
      <h2 class="bf-conclusion-heading">Nopeus menetelmällä</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Vibe codingin tuolla puolen on kestävää insinöörityötä: spesifioida, tarkistaa, mitata kustannus ja pitää ihmisen harkinta mergessä. Jos haluat saman lähestymistavan Androidiin tai tekoälytuotteisiin, katso <a href="/fi/consultoria-android/">Android-sovelluskehitys</a> tai <a href="/fi/consultoria-ia/">tekoälykonsultointi</a>.</p>
      <p>Tästä on myös <a href="https://www.linkedin.com/pulse/beyond-vibe-coding-manifesto-sustainable-ai-engineering-bitdesal-x5bxe/">alkuperäinen artikkeli LinkedInissä</a>.</p>
    </div>
  </div>
</section>