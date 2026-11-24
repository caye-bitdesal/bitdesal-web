---
title: "Més enllà del \"Vibe Coding\": manifest per a una enginyeria de IA sostenible"
description: "Cinc principis per a usar IA en enginyeria sense caos: confiança, especificació, rigor, humà al comandament i cost sostenible. Manifest en espanyol."
pubDate: 2026-05-21
audience: technical
author: caye
layout: feature
tags:
  - ia
  - ingenieria
keyword: 'vibe coding ingeniería con IA'
heroImage: /images/blog/mas-alla-del-vibe-coding/hero.jpg
ogImage: /images/blog/mas-alla-del-vibe-coding/hero.jpg
titleHighlight: 'manifiesto para una ingeniería de IA sostenible'
subtitle: 'La industria corre detrás de la velocidad de la IA. Sin método, esa velocidad solo amplifica el caos del código.'
updatedDate: 2026-11-17
faq:
  - q: '¿Qué es el vibe coding?'
    a: 'Es usar IA a ciegas: prompts vagos, merges sin entender el diff y refactors que duplican código porque «algo compila». Funciona en un demo; no en un sistema que mantienes años.'
  - q: '¿Qué es el desarrollo guiado por especificación (SDD)?'
    a: 'Tratar la especificación escrita como el producto principal: historia de usuario, criterios de aceptación y plan antes de que el agente toque el repositorio.'
  - q: '¿Cómo medís el retorno de la IA?'
    a: 'No por líneas generadas, sino por si ahorráis tiempo revisable en un encargo concreto, ROAI: return on AI investment, con límites de tokens y calidad igual que sin IA.'
---

El hype espenta a *generar més codi en menys temps**. Nosaltres treballem amb una regla diferent: *enginyeria primer**. La IA és eina, no substitut del criteri. Aquest manifest resumeix com la usem en Bitdesal sense caure en el «vibe coding».

<blockquote class="bf-pullquote">Si no pots depurar el codi quan producció falla, no hauries d'haver-lo mergeado, encara que l'haja escrit un agent.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">La confiança</span> <span class="bf-section-accent">es guanya</span></span>
</h2>

No n'hi ha prou que «compile i vaja bé en la teua màquina». Has de *entendre** el que hi ha en el diff. Tracta els agents com a un desenvolupador júnior: amb respecte, però revisant cada lliurament.

Si producció cau a les tres del matí, el model no contestarà el telèfon. Tu sí.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">L'especificació</span> <span class="bf-section-accent">és el producte</span></span>
</h2>

En l'era de la IA, l'actiu principal no és l'últim commit: és la *especificació**. El flux que repetim:

<ol class="bf-steps">
  <li>Definir i refinar la història d'usuari.</li>
  <li>Planificar arquitectura i límits entre capes.</li>
  <li>Partir en tasques xicotetes amb criteris d'acceptació.</li>
  <li>Només llavors: implementar, a mà, amb assistent o amb agent.</li>
</ol>

Això és desenvolupament guiat per especificació (SDD). Sense spec, l'agent improvisa i tu pagues iteracions. Ho vam veure en carn viva en el relat del selector <a href="/blog/insomnio-agentes-ia-funcion-sencilla/"> d'idioma de «dues hores»</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Rigor d'enginyeria</span> <span class="bf-section-accent">enfront de peresa amb IA</span></span>
</h2>

- No substitueixes una funció trencada per un altre bloc generat: *arregles la causa arrel**.
- Evita el «reemplaça tot» que duplica lògica i deute.
- *Mai** canvies un test perquè encaixe amb una implementació incorrecta. Si falla el test, falla el codi.
- Respecta capes: UI, domini i dades no es mesclen en un sol prompt sense intenció explícita.

<figure class="bf-figure bf-figure--natural">
  <img src="/images/blog/mas-alla-del-vibe-coding/jar-jar.jpg" alt="Jar Jar Binks en el desierto de Tatooine, metáfora de una idea que parecía brillante y acabó mal" width="1024" height="797" loading="lazy" />
  <figcaption>En el seu moment molta gent va pensar que un personatge totalment generat per ordinador al cinema era bona idea. El vibe coding en producció fa olor semblança.</figcaption>
</figure>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Tu eres l'enginyer,</span> <span class="bf-section-accent">no la IA</span></span>
</h2>

Els agents executen. *Tu** defineixes el model mental, els límits i què entra en cada capa. La IA accelera el teclat; no assumeix la responsabilitat del disseny ni del desplegament.

<div class="bf-idea">
  <p class="bf-idea-label">La idea clau</p>
  <p class="bf-idea-text">Delegar execució no és delegar criteri. El merge continua sent una decisió humana.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Economia del token</span> <span class="bf-section-accent">i sostenibilitat</span></span>
</h2>

Hui molts costos de API estan *subvencionats** o són més baixos que demà. Les especificacions vagues provoquen al·lucinacions i iteracions fallides, és a dir, tokens tirats. Amb SDD construeixes una biblioteca de *plans executables** que continuen sent barats encara que el preu per token puge.

Si t'interessa el costat econòmic, encaixa amb <a href="/blog/puedes-permitirte-desarrollo-asistido-ia/">quina costa de debò el desenvolupament assistit per IA</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">La mètrica que importa</span> <span class="bf-section-accent">no són les línies</span></span>
</h2>

L'indicador no és «quantes línies va generar la IA», sinó el *retorn de la inversió en IA (ROAI)**: aquest encàrrec concret va eixir més ràpid *amb qualitat revisable** que sense IA?

La IA assisteix al desenvolupador; no reemplaça a l'enginyer.

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusió</p>
      <h2 class="bf-conclusion-heading">Velocitat amb mètode</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Més enllà del vibe coding hi ha enginyeria sostenible: especificar, revisar, mesurar cost i mantindre el criteri humà en el merge. Si vols aqueix enfocament en Android o en producte amb IA, mira <a href="/consultoria-android/">desenvolupe d'apps Android</a> o <a href="/consultoria-ia/">consultoria de IA</a>.</p>
      <p>També està l'article <a href="https://www.linkedin.com/pulse/beyond-vibe-coding-manifesto-sustainable-ai-engineering-bitdesal-x5bxe/"> original en LinkedIn</a>.</p>
    </div>
  </div>
</section>