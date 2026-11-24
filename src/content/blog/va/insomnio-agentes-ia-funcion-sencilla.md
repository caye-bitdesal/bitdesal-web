---
title: "Insomni, agents de IA i la funció de 8 hores"
description: "Un selector d'idioma amb IA que havia de portar dues hores va acabar en una marató nocturna. Criteris d'acceptació, revisió automàtica i tres lliçons."
pubDate: 2026-06-11
audience: technical
author: caye
layout: feature
tags:
  - agentes-ia
  - android
  - desarrollo-asistido
keyword: 'agentes de IA desarrollo'
heroImage: /images/blog/insomnio-agentes-ia-funcion-sencilla/hero.jpg
ogImage: /images/blog/insomnio-agentes-ia-funcion-sencilla/hero.jpg
subtitle: '¿Te ha pasado que una tarea de «cinco minutos» se convierte en el día entero? Empezó a una hora indecente, sin poder dormir, con un selector de idioma que «seguro» iba rápido con IA.'
updatedDate: 2026-11-17
faq:
  - q: '¿Por qué el título habla de 8 horas si la maratón fueron más?'
    a: 'En LinkedIn el relato juega con la «función de 8 horas» como gancho. En la práctica, entre especificación, iteraciones y correcciones, fueron unas doce horas hasta dejar la feature estable y el código limpio.'
  - q: '¿Conviene dejar que un agente ejecute sin criterios de aceptación?'
    a: 'No. Sin criterios por escrito, el agente sigue «mejorando» o inventando hasta el infinito. Hay que saber cuándo basta.'
  - q: '¿La revisión con IA sustituye a la humana?'
    a: 'Sirve como segunda opinión en el PR, no como veto ni sustituto. Los comentarios orientan; alguien del equipo decide el merge.'
---

A les tantes del matí, sense somni, vaig decidir muntar un *selector d'idioma** en Weel, una app personal en la qual porte temps. A mà m'hauria portat un parell d'hores. Vaig voler provar quant tardava amb agents de IA.

<blockquote class="bf-pullquote">Error gran: sense criteris d'acceptació, la IA no per a de «arreglar» coses que no vas demanar.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">El pla</span> <span class="bf-section-accent">abans del codi</span></span>
</h2>

El primer no va ser tocar Android Studio: va ser *escriure l'especificació** en Cursor amb Composer. Una hora només per al pla. Probablement hauria sigut més barat usar un model local amb Ollama, però estava massa adormit per a ser estratègic.

Quatre voltes refinant el pla per a enxampar errors abans d'executar. Al final vaig deixar que *Claude Opus** implementara. (Rip crèdits de API, però almenys no vaig anar a la babalà.)

<div class="bf-idea">
  <p class="bf-idea-label">La idea clau</p>
  <p class="bf-idea-text">El temps «estalviat» en codi es va anar a especificar malament, corregir en bucle i repassar qualitat. La IA accelera tecleig, no criteri.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">L'execució:</span> <span class="bf-section-accent">«a mig fer» en diverses formes</span></span>
</h2>

A la manera clàssica de la IA, *quasi va funcionar**. És a dir, va fallar de formes creatives:

- El desplegable s'obria cap al costat incorrecte de la pantalla.
- Els interruptors no canviaven de debò el que devien.
- La persistència i la injecció de context eren un caos.

Cada arranjament obria un altre forat perquè no hi havia una llista tancada de «llest quan…».

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Control de qualitat</span> <span class="bf-section-accent">amb revisió automàtica</span></span>
</h2>

Quan el codi per fi va encaixar, la qualitat deixava molt a desitjar. Vaig passar el diff per un workflow en GitHub que muntem per a *revisió amb IA** (Gemini en el model del moment; en captures recents ix 2.5 Pro).

El bot va trobar coses reals, per exemple un `AppLanguage.valueOf` insegur llegint DataStore, i també soroll. Aqueix dia em va pesar més que m'alleujara, però el patró continua valent en equips amb poc ample de revisió.

<figure class="bf-figure">
  <img src="/images/blog/insomnio-agentes-ia-funcion-sencilla/ai-code-review.png" alt="Comentario de revisión con IA en un pull request de Android: resumen, incidencias y código Kotlin sugerido" width="1200" height="800" loading="lazy" />
  <figcaption>Revisió automàtica en el PR: útil com a segona opinió, no com a substitut del merge humà.</figcaption>
</figure>

<p>Si vols veure com encaixa això en un pipeline complet, en bitdesal.com tenim la <a href="/blog/guia-cicd-android-github-actions/">guia de CI/CD amb revisió amb IA</a>.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Dotze hores després</span> <span class="bf-section-accent">tres lliçons</span></span>
</h2>

Al cap d'unes *dotze hores** i molts camins equivocats, la feature estava en producció i el codi presentable. M'emporte això:

<ol class="bf-steps">
  <li><strong>Criteris d'acceptació per escrit.</strong> Si no defineixes «fet», l'agent continua iterant o al·lucinant millores per sempre.</li>
  <li><strong>Confiar, però verificar.</strong> La IA pot estar equivocada amb molta seguretat. Seguir-la a cegues costa més que corregir a mà.</li>
  <li><strong>Qüestionar-te a tu mateix.</strong> A vegades la fallada està en el prompt o en el plantejament, no en el model. Ací és on més aprens.</li>
</ol>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusió</p>
      <h2 class="bf-conclusion-heading">La funció senzilla no ho va ser</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Els agents de IA serveixen per a avançar ràpid quan ja saps què vols i com comprovar-ho. Sense això, una matinada sense dormir es converteix en marató.</p>
      <p>També està l'article <a href="https://www.linkedin.com/pulse/insomnia-ai-agents-8-hour-simple-feature-bitdesal-ytkke/"> original en LinkedIn</a>. Si vols desenvolupament Android amb qualitat i sense dependre de l'agent per sempre, mira <a href="/consultoria-android/">desenvolupe d'apps Android</a> o <a href="/agentes-ia-empresas/">agents de IA per a empreses</a>.</p>
    </div>
  </div>
</section>