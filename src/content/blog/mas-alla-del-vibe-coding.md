---
title: 'Más allá del "Vibe Coding": manifiesto para una ingeniería de IA sostenible'
description: 'Cinco principios para usar IA en ingeniería sin caos: confianza, especificación, rigor, humano al mando y coste sostenible. Manifiesto en español.'
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

El hype empuja a **generar más código en menos tiempo**. Nosotros trabajamos con una regla distinta: **ingeniería primero**. La IA es herramienta, no sustituto del criterio. Este manifiesto resume cómo la usamos en Bitdesal sin caer en el «vibe coding».

<blockquote class="bf-pullquote">Si no puedes depurar el código cuando producción falla, no deberías haberlo mergeado, aunque lo haya escrito un agente.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">La confianza</span> <span class="bf-section-accent">se gana</span></span>
</h2>

No basta con que «compile y vaya bien en tu máquina». Tienes que **entender** lo que hay en el diff. Trata los agentes como a un desarrollador junior: con respeto, pero revisando cada entrega.

Si producción se cae a las tres de la mañana, el modelo no contestará el teléfono. Tú sí.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">La especificación</span> <span class="bf-section-accent">es el producto</span></span>
</h2>

En la era de la IA, el activo principal no es el último commit: es la **especificación**. El flujo que repetimos:

<ol class="bf-steps">
  <li>Definir y refinar la historia de usuario.</li>
  <li>Planificar arquitectura y límites entre capas.</li>
  <li>Partir en tareas pequeñas con criterios de aceptación.</li>
  <li>Solo entonces: implementar, a mano, con asistente o con agente.</li>
</ol>

Eso es desarrollo guiado por especificación (SDD). Sin spec, el agente improvisa y tú pagas iteraciones. Lo vimos en carne viva en el relato del <a href="/blog/insomnio-agentes-ia-funcion-sencilla/">selector de idioma de «dos horas»</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Rigor de ingeniería</span> <span class="bf-section-accent">frente a pereza con IA</span></span>
</h2>

- No sustituyes una función rota por otro bloque generado: **arreglas la causa raíz**.
- Evita el «reemplaza todo» que duplica lógica y deuda.
- **Nunca** cambies un test para que encaje con una implementación incorrecta. Si falla el test, falla el código.
- Respeta capas: UI, dominio y datos no se mezclan en un solo prompt sin intención explícita.

<figure class="bf-figure bf-figure--natural">
  <img src="/images/blog/mas-alla-del-vibe-coding/jar-jar.jpg" alt="Jar Jar Binks en el desierto de Tatooine, metáfora de una idea que parecía brillante y acabó mal" width="1024" height="797" loading="lazy" />
  <figcaption>En su momento mucha gente pensó que un personaje totalmente generado por ordenador en el cine era buena idea. El vibe coding en producción huele parecido.</figcaption>
</figure>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Tú eres el ingeniero,</span> <span class="bf-section-accent">no la IA</span></span>
</h2>

Los agentes ejecutan. **Tú** defines el modelo mental, los límites y qué entra en cada capa. La IA acelera el teclado; no asume la responsabilidad del diseño ni del despliegue.

<div class="bf-idea">
  <p class="bf-idea-label">La idea clave</p>
  <p class="bf-idea-text">Delegar ejecución no es delegar criterio. El merge sigue siendo una decisión humana.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Economía del token</span> <span class="bf-section-accent">y sostenibilidad</span></span>
</h2>

Hoy muchos costes de API están **subvencionados** o son más bajos que mañana. Las especificaciones vagas provocan alucinaciones e iteraciones fallidas, es decir, tokens tirados. Con SDD construyes una biblioteca de **planos ejecutables** que siguen siendo baratos aunque el precio por token suba.

Si te interesa el lado económico, encaja con <a href="/blog/puedes-permitirte-desarrollo-asistido-ia/">qué cuesta de verdad el desarrollo asistido por IA</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">La métrica que importa</span> <span class="bf-section-accent">no son las líneas</span></span>
</h2>

El indicador no es «cuántas líneas generó la IA», sino el **retorno de la inversión en IA (ROAI)**: ¿este encargo concreto salió más rápido **con calidad revisable** que sin IA?

La IA asiste al desarrollador; no reemplaza al ingeniero.

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusión</p>
      <h2 class="bf-conclusion-heading">Velocidad con método</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Más allá del vibe coding hay ingeniería sostenible: especificar, revisar, medir coste y mantener el criterio humano en el merge. Si quieres ese enfoque en Android o en producto con IA, mira <a href="/consultoria-android/">desarrollo de apps Android</a> o <a href="/consultoria-ia/">consultoría de IA</a>.</p>
      <p>También está el <a href="https://www.linkedin.com/pulse/beyond-vibe-coding-manifesto-sustainable-ai-engineering-bitdesal-x5bxe/">artículo original en LinkedIn</a>.</p>
    </div>
  </div>
</section>