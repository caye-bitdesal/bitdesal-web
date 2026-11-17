---
title: 'Insomnio, agentes de IA y la función de 8 horas'
description: 'Un selector de idioma con IA que debía llevar dos horas acabó en una maratón nocturna. Criterios de aceptación, revisión automática y tres lecciones.'
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

A las tantas de la mañana, sin sueño, decidí montar un **selector de idioma** en Weel, una app personal en la que llevo tiempo. A mano me habría llevado un par de horas. Quise probar cuánto tardaba con agentes de IA.

<blockquote class="bf-pullquote">Error grande: sin criterios de aceptación, la IA no para de «arreglar» cosas que no pediste.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">El plan</span> <span class="bf-section-accent">antes del código</span></span>
</h2>

Lo primero no fue tocar Android Studio: fue **escribir la especificación** en Cursor con Composer. Una hora solo para el plan. Probablemente hubiera sido más barato usar un modelo local con Ollama, pero estaba demasiado dormido para ser estratégico.

Cuatro vueltas refinando el plan para pillar errores antes de ejecutar. Al final dejé que **Claude Opus** implementara. (Rip créditos de API, pero al menos no fui a lo loco.)

<div class="bf-idea">
  <p class="bf-idea-label">La idea clave</p>
  <p class="bf-idea-text">El tiempo «ahorrado» en código se fue en especificar mal, corregir en bucle y repasar calidad. La IA acelera tecleo, no criterio.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">La ejecución:</span> <span class="bf-section-accent">«a medias» en varias formas</span></span>
</h2>

A la manera clásica de la IA, **casi funcionó**. Es decir, falló de formas creativas:

- El desplegable se abría hacia el lado incorrecto de la pantalla.
- Los interruptores no cambiaban de verdad lo que debían.
- La persistencia y la inyección de contexto eran un caos.

Cada arreglo abría otro agujero porque no había una lista cerrada de «listo cuando…».

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Control de calidad</span> <span class="bf-section-accent">con revisión automática</span></span>
</h2>

Cuando el código por fin encajó, la calidad dejaba mucho que desear. Pasé el diff por un workflow en GitHub que montamos para **revisión con IA** (Gemini en el modelo del momento; en capturas recientes sale 2.5 Pro).

El bot encontró cosas reales, por ejemplo un `AppLanguage.valueOf` inseguro leyendo DataStore, y también ruido. Ese día me pesó más que me aliviara, pero el patrón sigue valiendo en equipos con poco ancho de revisión.

<figure class="bf-figure">
  <img src="/images/blog/insomnio-agentes-ia-funcion-sencilla/ai-code-review.png" alt="Comentario de revisión con IA en un pull request de Android: resumen, incidencias y código Kotlin sugerido" width="1200" height="800" loading="lazy" />
  <figcaption>Revisión automática en el PR: útil como segunda opinión, no como sustituto del merge humano.</figcaption>
</figure>

<p>Si quieres ver cómo encaja eso en un pipeline completo, en bitdesal.com tenemos la <a href="/blog/guia-cicd-android-github-actions/">guía de CI/CD con revisión con IA</a>.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Doce horas después</span> <span class="bf-section-accent">tres lecciones</span></span>
</h2>

Al cabo de unas **doce horas** y muchos caminos equivocados, la feature estaba en producción y el código presentable. Me llevo esto:

<ol class="bf-steps">
  <li><strong>Criterios de aceptación por escrito.</strong> Si no defines «hecho», el agente sigue iterando o alucinando mejoras para siempre.</li>
  <li><strong>Confiar, pero verificar.</strong> La IA puede estar equivocada con mucha seguridad. Seguirla a ciegas cuesta más que corregir a mano.</li>
  <li><strong>Cuestionarte a ti mismo.</strong> A veces el fallo está en el prompt o en el planteamiento, no en el modelo. Ahí es donde más aprendes.</li>
</ol>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusión</p>
      <h2 class="bf-conclusion-heading">La función sencilla no lo fue</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Los agentes de IA sirven para avanzar rápido cuando ya sabes qué quieres y cómo comprobarlo. Sin eso, una madrugada sin dormir se convierte en maratón.</p>
      <p>También está el <a href="https://www.linkedin.com/pulse/insomnia-ai-agents-8-hour-simple-feature-bitdesal-ytkke/">artículo original en LinkedIn</a>. Si quieres desarrollo Android con calidad y sin depender del agente para siempre, mira <a href="/consultoria-android/">desarrollo de apps Android</a> o <a href="/agentes-ia-empresas/">agentes de IA para empresas</a>.</p>
    </div>
  </div>
</section>