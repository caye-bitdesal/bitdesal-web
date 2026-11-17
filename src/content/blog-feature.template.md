---
# Plantilla: copia este archivo a src/content/blog/{slug}.md (y en/en/, fi/).
# NO publicar este archivo en blog/ — vive en src/content/ a propósito.

title: 'Título completo: parte base quizás parte en acento'
description: 'Resumen para SEO, tarjetas y meta (1–2 frases).'
pubDate: 2026-01-01
audience: technical
layout: feature
heroImage: /images/blog/{slug}/hero.jpg
ogImage: /images/blog/{slug}/hero.jpg
titleHighlight: 'quizás parte en acento'
subtitle: 'Entradilla bajo el título del artículo (opcional pero recomendado).'
---

Primer párrafo del cuerpo. El capitular verde se aplica solo al primer párrafo.

Segundo párrafo si hace falta.

<blockquote class="bf-pullquote">Cita destacada con borde izquierdo.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">Parte del título en negro</span> <span class="bf-section-accent">parte en verde</span></span>
</h2>

Párrafos de la sección.

<div class="bf-bento">
  <div class="bf-bento-card bf-bento-card--cream">
    <p class="bf-bento-label">Etiqueta en mayúsculas</p>
    <h3>Subtítulo</h3>
    <ul class="bf-bento-list">
      <li>Ítem con rayita</li>
    </ul>
  </div>
  <div class="bf-bento-card bf-bento-card--dark">
    <p class="bf-bento-label">Columna oscura</p>
    <h3>Subtítulo</h3>
    <ul class="bf-bento-list">
      <li>Otro ítem</li>
    </ul>
  </div>
</div>

<figure class="bf-figure">
  <img src="/images/blog/{slug}/foto.jpg" alt="Descripción" width="1200" height="675" loading="lazy" />
  <figcaption>Leyenda opcional.</figcaption>
</figure>

<div class="bf-idea">
  <p class="bf-idea-label">La idea clave</p>
  <p class="bf-idea-text">Texto destacado de la idea.</p>
</div>

<div class="bf-highlight">
  Párrafo resaltado con fondo menta.
</div>

<div class="bf-split">
  <div class="bf-split-media">
    <img src="/images/blog/{slug}/imagen.jpg" alt="" width="800" height="600" loading="lazy" />
  </div>
  <div class="bf-callout">
    <h3>Título del callout</h3>
    <p class="bf-callout-lead">Opcional: línea destacada.</p>
    <p>Texto del callout junto a la imagen.</p>
  </div>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Otra sección</span> <span class="bf-section-accent">con acento</span></span>
</h2>

<div class="bf-triptych">
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">01</span>
    <h3>Columna 1</h3>
    <p>Texto.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">02</span>
    <h3>Columna 2</h3>
    <p>Texto.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">03</span>
    <h3>Columna 3</h3>
    <p>Texto.</p>
  </div>
</div>

Texto entre bloques si hace falta.

<ol class="bf-steps">
  <li><strong>Bloque 1:</strong> descripción.</li>
  <li><strong>Bloque 2:</strong> descripción.</li>
</ol>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusión</p>
      <h2 class="bf-conclusion-heading">Título del cierre</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Primer párrafo de cierre.</p>
      <p>Segundo párrafo (Bitdesal, CTA suave, etc.). Enlaces con rutas localizadas: [texto](/consultoria-software/), [inglés](/en/consultoria-software/), [finés](/fi/consultoria-software/).</p>
    </div>
  </div>
</section>