---
title: "Pots permetre't el desenvolupament assistit per IA? Sí, si ho fas amb cap"
description: "Subscripcions, tokens i agents: quina costa de debò el desenvolupament assistit per IA i quan compensa. Flux real, sense números inventats del client."
pubDate: 2026-06-01
audience: business
author: caye
layout: feature
tags:
  - ia
  - desarrollo
keyword: 'desarrollo asistido por IA'
heroImage: /images/blog/puedes-permitirte-desarrollo-asistido-ia/hero.jpg
ogImage: /images/blog/puedes-permitirte-desarrollo-asistido-ia/hero.jpg
titleHighlight: 'Sí, si lo haces con cabeza'
subtitle: 'La IA acelera el teclado, pero no elimina la factura. Antes de meterla en todo el equipo, conviene saber qué pagas y qué recuperas.'
updatedDate: 2026-11-17
faq:
  - q: '¿Cuánto cuesta el desarrollo asistido por IA al mes?'
    a: 'No hay una cifra fija: depende del nivel (autocompletado, chat o agentes), del contexto que envías y de cuántas iteraciones haces. Lo honesto es medir tokens y tiempo por encargo, no asumir una licencia plana.'
  - q: '¿Compensa para una empresa que no es de software?'
    a: 'Sí cuando el cuello de botella es especificar, repetir tareas o revisar; no cuando solo necesitas una herramienta que ya existe. Si dudas, un estudio de procesos cerrado aclara si automatizar ahorra horas de verdad.'
  - q: '¿Se puede bajar el coste sin perder calidad?'
    a: 'Sí: modelos locales para tareas rutinarias, modelos caros solo para lo complejo, criterios de aceptación por escrito y revisión automática en CI para no pagar iteraciones infinitas.'
---

Poques converses són tan sinceres com aquesta: *sí, la IA pot escurçar terminis**, però també pot convertir en una despesa variable que ningú va pressupostar. La pregunta no és «funciona?», sinó *si pots permetre't** el flux complet: eines, tokens, revisions i el temps de qui supervisa.

<blockquote class="bf-pullquote">No és una llicència de programari clàssica: com més context manes i més deixes a l'agent, més pagues.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">De paper i IDE</span> <span class="bf-section-accent">a la IA</span></span>
</h2>

Portem dècades canviant d'eina: paper, IDE, plugins, copilots. Cada salt *millora l'output** i afig *dependència i cost**. La IA no és diferent: substitueix part del tecleig, però introdueix un impost nou: el dels tokens i de les subscripcions que escalen amb l'ús.

Si el teu equip ja factura per projecte tancat o per hora, aqueix impost es nota en el marge si no el vigiles.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">El flux</span> <span class="bf-section-accent">i tres nivells d'ajuda</span></span>
</h2>

En Bitdesal encadenem mockup, especificació, implementació i revisió. No és màgia: és una cadena on cada baula pot portar IA o no, segons compense.

<figure class="bf-figure bf-figure--natural">
  <img src="/images/blog/puedes-permitirte-desarrollo-asistido-ia/workflow.png" alt="Diagrama del flujo: maqueta, especificación, implementación y revisión de código con IA; futuro con modelos locales" width="1024" height="848" loading="lazy" />
  <figcaption>Flux actual (núvol) i migració prevista a models locals per a tasques repetitives. En un MVP recent el calendari va passar d'unes dues setmanes a una, amb el mateix equip.</figcaption>
</figure>

Tres nivells que veiem en quasi tots els equips:

<div class="bf-bento">
  <div class="bf-bento-card bf-bento-card--cream">
    <p class="bf-bento-label">Nivell 1</p>
    <h3>Autocompletado</h3>
    <ul class="bf-bento-list">
      <li>Cost baix, poc context.</li>
      <li>Útil per a boilerplate i APIs conegudes.</li>
    </ul>
  </div>
  <div class="bf-bento-card bf-bento-card--dark">
    <p class="bf-bento-label">Nivell 2</p>
    <h3>Xat amb context</h3>
    <ul class="bf-bento-list">
      <li>Cost mitjà: cada pregunta arrossega fitxers.</li>
      <li>Bé per a refactors fitats i explicacions.</li>
    </ul>
  </div>
</div>

<div class="bf-highlight">
  <strong>Nivell 3: agents.</strong> el model planifica, edita diversos arxius i torna a intentar. És on més es dispara la despesa i on més fa falta <a href="/blog/insomnio-agentes-ia-funcion-sencilla/">criteri de «fet»</a> per escrit.
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Exemple pràctic:</span> <span class="bf-section-accent">revisió que també costa</span></span>
</h2>

Generar codi no és l'única despesa. També pagues, en temps o en API, per la *revisió**: un workflow en GitHub Actions que comenta el diff amb un model gran.

<figure class="bf-figure">
  <img src="/images/blog/puedes-permitirte-desarrollo-asistido-ia/ai-code-review.png" alt="Revisión con IA en un pull request: sugerencia de simplificar StateFlow en un ViewModel de Android" width="1200" height="800" loading="lazy" />
  <figcaption>La IA estalvia ulls humans, però cada execució consumeix tokens. Cal decidir què PRs ho mereixen.</figcaption>
</figure>

En la captura, el bot proposa simplificar un `StateFlow` sincrònic. És feedback útil; no substitueix al merge humà. Si ho corres en cada push sense filtrar, la factura puja sense que el roadmap avance més ràpid.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Més context,</span> <span class="bf-section-accent">més car</span></span>
</h2>

Com més lliges del repositori en cada prompt, més tokens manes. «Pega tot el mòdul» és còmode i car. Per això separar especificació escrita, diff xicotet i agent amb abast limitat no és pedanteria: és *control de cost**.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Sense cost fix:</span> <span class="bf-section-accent">l'impost del token</span></span>
</h2>

Un IDE tenia preu mensual predictible. La IA assistida per API és *variable**: un dia tranquil i un altre amb un agent que itera dotze hores. Això no encaixa bé amb un pressupost de programari clàssic si ningú ho mesura.

<figure class="bf-figure">
  <img src="/images/blog/puedes-permitirte-desarrollo-asistido-ia/token-tax.gif" alt="Meme: billetes volando, metáfora del gasto descontrolado en tokens d'IA" width="480" height="270" loading="lazy" />
  <figcaption>Humor a part: sense límits i sense criteris d'acceptació, l'agent pot «fer ploure» tokens.</figcaption>
</figure>

<div class="bf-idea">
  <p class="bf-idea-label">La idea clau</p>
  <p class="bf-idea-text">Tracta els tokens com a hores facturables: registra'ls, posa topall per tasca i tala quan es compleix el criteri d'acceptació.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">Què ve:</span> <span class="bf-section-accent">models locals</span></span>
</h2>

La resposta no és renunciar a la IA, sinó *repensar el mix**: models locals (Ollama i derivats) per a especificació i implementació rutinària; models potents en el núvol només per a tasques complexes o revisió crítica. En el diagrama del flux ja estem migrant en aqueixa direcció.

Això no elimina el cost, maquinari, manteniment, temps de qui el configura, però *sí que ho fa més predictible** que unisca API que factura per milió de tokens.

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusió</p>
      <h2 class="bf-conclusion-heading">Sí, però amb regles</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Pots permetre't el desenvolupament assistit per IA si tries el nivell adequat per tasca, mesures la despesa i no confons velocitat de tecleig amb projecte acabat. Si necessites ajuda per a dissenyar aqueix equilibri en el teu equip, parlem en <a href="/consultoria-ia/">consultoria d'IA</a> o <a href="/casos-y-precios/">casos i preus</a>.</p>
      <p>També està l'article <a href="https://www.linkedin.com/pulse/can-you-afford-your-ai-assisted-development-bitdesal-ubtpe/"> original en LinkedIn</a>.</p>
    </div>
  </div>
</section>