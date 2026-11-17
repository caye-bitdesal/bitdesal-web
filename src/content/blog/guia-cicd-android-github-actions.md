---
title: 'Guía de CI/CD para Android con GitHub Actions: un pipeline razonable'
description: 'Tres workflows en GitHub Actions para Android: CI rápido en el PR, revisión con IA y release firmado a Play. Patrones reales, sin depender de una app concreta.'
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
titleHighlight: 'un pipeline razonable'
subtitle: 'La mayoría de equipos Android sabe que deberían automatizar releases. Lo que a menudo falta es trazar la línea entre «¿este código es bueno?» y «que los testers lo puedan instalar».'
updatedDate: 2026-11-17
faq:
  - q: '¿La revisión con IA bloquea el merge?'
    a: 'No. Corre en paralelo con el CI y publica un comentario en el PR. Los checks obligatorios siguen siendo los jobs mecánicos de main.yml; un humano aprueba al final.'
  - q: '¿Por qué no meter el emulador en cada PR?'
    a: 'El emulador y los screenshot tests son lentos. Los reservamos para el pipeline de release, cuando el código ya ha pasado revisión humana en main.'
  - q: '¿Cuántos workflows necesitamos?'
    a: 'Tres archivos: main.yml (calidad en PR y push a main), ai-code-review.yml (opinión automática) y release.yml (validación profunda, firma y pista interna de Play).'
---

Esta guía repasa una configuración real con GitHub Actions en una app Android: **tres workflows** que trabajan juntos, comprobaciones rápidas en pull request, revisión de código asistida por IA y automatización de release más lenta (tests visuales, emulador, firma, subida a Google Play y aviso al equipo).

No necesitas conocer la app ni sus detalles internos. Los patrones aplican a la mayoría de proyectos Android basados en Gradle.

<p class="text-sm text-muted-foreground">Lectura: unos 15–20 minutos.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">El mapa mental:</span> <span class="bf-section-accent">dos puertas</span></span>
</h2>

Piensa en **dos puertas**, con un revisor extra en la primera:

1. **Puerta de calidad**, ¿Podemos hacer merge? (build, tests, estilo, lint, revisión con IA, revisión humana)
2. **Muelle de envío**, ¿Pueden los testers instalarlo? (tests más profundos, bundle firmado, pista interna de Play)

| | CI (`main.yml`) | Revisión IA (`ai-code-review.yml`) | Release (`release.yml`) |
| --- | --- | --- | --- |
| **Cuándo corre** | Cada PR + cada push a `main` | Cada PR (abrir / actualizar / reabrir) | Cada push a `main` |
| **Duración típica** | Pocos minutos | ~1–2 minutos | ~30 minutos |
| **¿Bloquea el merge?** | Sí (checks obligatorios) | No (comentario orientativo) | N/A (post-merge) |
| **¿Emulador?** | No | No | Sí |
| **¿Publica en Play?** | No | No | Sí (pista interna) |

Separar los checks mecánicos del release mantiene los PR ágiles. La revisión con IA corre **en paralelo** con el CI: nadie espera al emulador porque corrigió un typo, y el autor recibe una segunda opinión del diff mientras Gradle compila.

<blockquote class="bf-pullquote">El merge debe ser rápido y mecánico. La release debe ser lenta, firmada y repetible.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Antes del CI:</span> <span class="bf-section-accent">cómo entra el trabajo</span></span>
</h2>

La automatización no empieza en el «push». Empieza antes, en cómo el equipo **organiza el trabajo**.

<h3 class="text-xl font-medium mt-8 mb-4">Ramas y flujo de merge</h3>

Cuando cogemos un issue, ramificamos desde `main`. Si el issue es grande, lo partimos en **sub-issues**: cada sub-issue tiene su rama, pero nacida de la rama padre de la feature, no de `main` directamente. Los PR de sub-issue vuelven a la rama padre al completarse. Solo cuando todas las sub-issues están integradas y la feature está lista mergeamos la rama padre en `main`, y **ese** merge dispara un nuevo release candidate.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/git-branches.webp" alt="Diagrama de ramas: main, rama padre de feature y ramas de sub-issues con pull requests entre ellas" width="1200" height="675" loading="lazy" />
  <figcaption>Cómo ramificamos según el issue en el que trabajamos.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/branching-subissues.webp" alt="Flujo de trabajo con issues, ramas padre y sub-issues hasta merge a main" width="1200" height="675" loading="lazy" />
  <figcaption>Relación entre issues, ramas y el pipeline de release.</figcaption>
</figure>

**Por qué esta forma:**

- Las sub-issues quedan aisladas. Cada PR pequeño pasa CI y revisión con IA sin tocar `main` hasta que su trozo está hecho.
- La rama padre integra poco a poco. Montas la feature entera en la rama padre antes de exponerla al pipeline de release.
- **Un release por feature que aterriza.** Mergear en `main` es la única puerta que dispara screenshot tests, emulador, firma y subida a Play.

Las features grandes se siguen como sub-issues para ver el avance en trozos revisables:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/sub-issues.webp" alt="Issue padre con ocho sub-issues completadas, cada una con su pull request" width="1200" height="675" loading="lazy" />
  <figcaption>Un padre dividido en sub-issues cerradas, cada una con su PR.</figcaption>
</figure>

Los propios PR llevan contexto: objetivos, no-objetivos y una **checklist de pruebas** que el autor rellena antes de pedir revisión:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/issue-spec.webp" alt="Descripción de pull request con objetivos, no-objetivos y checklist de pruebas completada" width="1200" height="675" loading="lazy" />
  <figcaption>Objetivos, alcance y pruebas antes de pedir revisión humana.</figcaption>
</figure>

**Por qué importa para el CI:** un alcance claro reduce fallos sorpresa. Si falla lint o un test, sabes qué trozo de la feature se rompió, no un epic de varias semanas entero.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Revisión con IA</span> <span class="bf-section-accent">en los pull requests</span></span>
</h2>

Cuando un PR se abre o recibe commits nuevos, `ai-code-review.yml` corre **en paralelo** con el CI, no dentro de él. Los dos workflows comparten el mismo disparador; ninguno espera al otro.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-sequence.webp" alt="Secuencia: push al PR, jobs de CI en Gradle y revisión con IA que comenta en el pull request" width="1200" height="675" loading="lazy" />
  <figcaption>Checks mecánicos y revisión con IA a la vez; la persona sigue decidiendo el merge.</figcaption>
</figure>

**Cómo funciona el workflow de IA:**

1. GitHub Actions hace checkout del diff del PR (commit base frente a head).
2. Un script en Python (`ai_review.py`) envía el diff y el título del PR a un LLM vía la API de Gemini.
3. El workflow publica la respuesta del modelo como **comentario en el PR**: problemas detectados, cosas bien hechas y si se atendió feedback anterior.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-comment.webp" alt="Comentario de revisión con IA en un pull request: bug en deserialización de enum y buen uso de APIs de locale" width="1200" height="675" loading="lazy" />
  <figcaption>Ejemplo real: la IA marca un `valueOf` inseguro en DataStore y recuerda que la aprobación humana sigue siendo obligatoria.</figcaption>
</figure>

El workflow ignora PRs de bots (Dependabot, Renovate) y cancela revisiones en curso cuando llegan commits nuevos, para que el comentario refleje siempre el último diff.

**Qué necesitas configurar:** un secret de repositorio `GEMINI_API_KEY` y permiso `pull-requests: write` para que el bot comente. El `GITHUB_TOKEN` integrado basta para acceder al repo.

**Para qué sirve bien:** pillar bugs lógicos, errores típicos de Android y problemas de legibilidad antes de que un humano abra el archivo, sobre todo en equipos pequeños con poco ancho de revisión.

**Para qué no sirve:** no sustituye la revisión humana ni es un check obligatorio. El CI puede estar verde mientras la IA señala un bug real en un comentario; así está pensado.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Pipeline 1:</span> <span class="bf-section-accent">CI, la puerta de calidad</span></span>
</h2>

**Archivo:** `main.yml`  
**Disparadores:** pull requests a `main`, pushes a `main`, ejecución manual

Al abrir un PR, GitHub Actions lanza **cinco jobs de CI en paralelo** (con una cadena de dependencias al final). A la vez, el workflow de revisión con IA deja un comentario en el PR.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-checks.webp" alt="Resumen de cinco jobs en verde: build, unit tests, ktlint, Android lint y comprobación de build release" width="1200" height="675" loading="lazy" />
  <figcaption>Cinco checks con nombres claros en la vista del PR.</figcaption>
</figure>

Los **PR en borrador** omiten los jobs más pesados, unit tests, Android Lint y la comprobación de build release, para que el trabajo en curso no queme minutos de CI.

<h3 class="text-xl font-medium mt-8 mb-4">Qué hace cada job (y por qué)</h3>

- **Build app**, compila un APK debug y lo sube como artefacto.
- **Unit tests**, tests en JVM y tests de UI Compose con Robolectric.
- **Kt lint check**, reglas de estilo Kotlin.
- **Android lint check**, analizador estático de Android sobre la variante debug.
- **Make sure release build work**, decodifica la keystore desde secrets cifrados y compila un **release bundle** sin publicar nada.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-ci-sequence.webp" alt="Diagrama de secuencia del CI en pull request con Gradle y revisión con IA" width="1200" height="675" loading="lazy" />
  <figcaption>El CI contesta «¿rompe algo obvio?»; la IA añade contexto en paralelo.</figcaption>
</figure>

<h3 class="text-xl font-medium mt-8 mb-4">Qué dejamos fuera del CI a propósito</h3>

- Tests en emulador / instrumentados
- Regresión visual por screenshot
- Subidas a Google Play
- Etiquetado de versión

Eso vive en el pipeline de **release**. Sacarlo de cada PR es una decisión, no un hueco.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Pipeline 2:</span> <span class="bf-section-accent">release, el muelle de envío</span></span>
</h2>

**Archivo:** `release.yml`  
**Disparadores:** pushes a `main`, ejecución manual

El día del merge empieza la validación profunda. El workflow de release tiene **tres jobs de alto nivel**:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ci-jobs-summary.webp" alt="Tres jobs de release en verde: screenshot tests, integration tests y build release AAB" width="1200" height="675" loading="lazy" />
  <figcaption>Los dos primeros en paralelo; el build release espera a que ambos pasen.</figcaption>
</figure>

### Job A: Screenshot tests

Los previews de Compose se renderizan y se comparan píxel a píxel con imágenes de referencia en el repo.

Si aún no hay referencias, el pipeline las genera, las commitea y **salta** la validación esa vez, arranque único.

En ejecuciones normales, cualquier cambio visual rompe el build y sube un informe de diff descargable en la pestaña de artefactos de Actions.

**Beneficio:** detecta regresiones del tipo «cambiamos un color y no nos dimos cuenta». Tipografía, espaciado y layout se mantienen honestos sin sesiones manuales en cada cambio.

**¿Por qué solo aquí?** La infraestructura de screenshots pesa más que los unit tests. La usamos cuando preparamos algo instalable, no en cada tecla.

### Job B: Integration tests

Aquí arrancamos un **emulador Android real** en el runner (API 30, imagen de test optimizada) y corremos tests instrumentados de punta a punta.

**Beneficio:** ejercita el framework de verdad, ciclo de vida, SQLite, permisos, navegación, de formas que la JVM no replica del todo.

Los informes se suben siempre, pasen o fallen, para depurar sin reproducir el emulador en local.

### Job C: Build release AAB, el evento principal

Cuando pasan los tests visuales y de integración, el job **Build release AAB** toma el control. En una ejecución reciente tardó unos **seis minutos y medio** de punta a punta:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-job-log.webp" alt="Pasos del job de release: versión, firma, build, artefacto, tag y notificación Discord" width="1200" height="675" loading="lazy" />
  <figcaption>Cada paso visible en el log: versión, firma, publicación, artefacto, tag y aviso.</figcaption>
</figure>

**Por dentro, en orden:**

**1. Calcular versión**, no editamos a mano el fichero de build el día del release. El pipeline lee tags `rc-*` en git e incrementa solo:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/version-tags.webp" alt="Flujo de decisión para versionName y versionCode a partir de tags rc en main" width="1200" height="675" loading="lazy" />
  <figcaption>Si HEAD ya tiene tag rc-*, se reutiliza; si no, se incrementa el patch o se parte de 1.0.1.</figcaption>
</figure>

- Tag: `rc-1.0.1`
- Version name: `1.0.1`
- Version code: `10005` (fórmula: major×10000 + minor×100 + patch)

**2. Preparar y verificar firma**, la keystore de subida **nunca** está en git. Vive como secret cifrado, se decodifica en el runner y se verifica con herramientas estándar de Java antes de Gradle.

**3. Build y publicación, una sola invocación Gradle**

Un solo comando construye el Android App Bundle firmado y lo sube a Play:

`bundleRelease` + `publishReleaseBundle`

La publicación usa el plugin Gradle Play Publisher (Triple-T), apuntando a la **pista interna**. Nada de «descargar AAB, abrir Play Console, pulsar subir». Repetible, registrado y aburrido, el mejor tipo de release.

**4. Resumen del job, artefacto y tag git**

El workflow escribe una tabla legible en el resumen de Actions, sube el `.aab` como artefacto y empuja un tag `rc-*` (salvo que el commit ya estuviera etiquetado, seguro ante re-ejecuciones).

**5. Aviso al equipo**

En este ejemplo usamos Discord; encaja igual con Slack, correo u otro canal. Éxito o fallo publica un embed con versión, tag y enlaces al run de CI y a releases en Play Console (como variable del workflow, no en el repo).

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">Cómo encaja</span> <span class="bf-section-accent">todo junto</span></span>
</h2>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/developer-workflow.webp" alt="Flujo del desarrollador desde planificación hasta release y promoción manual a producción" width="1200" height="675" loading="lazy" />
  <figcaption>Puerta de calidad en el PR; muelle de envío tras el merge.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/workflow-overview.webp" alt="Flujo desde GitHub issue hasta promoción manual en producción" width="1200" height="675" loading="lazy" />
  <figcaption>Issues, sub-issues, CI, IA y release en una sola vista.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-sequence.webp" alt="Secuencia del pipeline de release: tests, firma, Gradle, Google Play y notificación" width="1200" height="675" loading="lazy" />
  <figcaption>Tras el merge, el tiempo de espera no bloquea el día a día del equipo.</figcaption>
</figure>

<ol class="bf-steps">
  <li><strong>Planificar</strong>, partir features en sub-issues; documentar objetivos y plan de pruebas en el PR.</li>
  <li><strong>Abrir PR</strong>, CI (obligatorio) y revisión con IA (orientativa) en paralelo; ambos alimentan la revisión humana.</li>
  <li><strong>Merge</strong>, el CI vuelve a correr en `main` y arranca el pipeline de release.</li>
  <li><strong>Release OK</strong>, build firmada en la pista interna; el equipo avisado por Discord (u otro canal).</li>
  <li><strong>Promover cuando toque</strong>, producción sigue siendo una decisión humana deliberada.</li>
</ol>

Ese último paso es intencionado. La automatización quita repetición; tú sigues controlando qué reciben los usuarios reales.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">07</span>
  <span class="bf-section-title"><span class="bf-section-lead">Qué va en secrets</span> <span class="bf-section-accent">(y qué no)</span></span>
</h2>

Nunca publiques keystores, JSON de cuenta de servicio, URLs de webhooks, contraseñas ni credenciales en un artículo o en el repositorio.

En el repo solo guardamos **categorías** de secrets en GitHub Actions:

| Categoría | Para qué |
| --- | --- |
| API key del LLM | Alimentar el workflow de revisión con IA |
| Keystore de firma (Base64) | Reconstruir la clave de subida en el runner |
| Contraseñas y alias de keystore | Firmar binarios de release |
| Credenciales de Play Publisher | Autenticar el plugin Gradle Play Publisher |
| Webhook de notificaciones | Publicar embeds en Discord (u otro canal) |

Si algo se filtra, **rótalo de inmediato**. Los secrets deben seguir siendo secretos: ningún log debería imprimirlos.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">08</span>
  <span class="bf-section-title"><span class="bf-section-lead">Lo que aprendí</span> <span class="bf-section-accent">montando esto</span></span>
</h2>

<div class="bf-triptych">
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">01</span>
    <h3>IA bajo el criterio humano</h3>
    <p>El modelo pilla cosas que el lint no ve; las personas deciden producto y arquitectura. En paralelo, sin bloquearse.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">02</span>
    <h3>Rápido vs lento</h3>
    <p>En el PR, minutos. La confianza en release sube igual porque lo pesado corre después del merge.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">03</span>
    <h3>Release en el PR</h3>
    <p>Compilar release en el PR cuesta poco y evita sorpresas: la app no solo compila en debug.</p>
  </div>
</div>

<ul class="list-disc pl-6 my-6 space-y-2 text-foreground/85">
  <li><strong>Versionado por tags</strong>, menos discusiones el lunes por la mañana; el historial queda en git.</li>
  <li><strong>Bundle + publish en un solo paso Gradle</strong>, menos invocaciones, menos sorpresas de firma.</li>
  <li><strong>Avisar en el canal que se lee</strong>, un check verde en Actions ayuda; el equipo necesita saber qué versión hay en la pista interna.</li>
  <li><strong>Promoción a producción manual</strong>, controlas qué llega a usuarios reales.</li>
</ul>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusión</p>
      <h2 class="bf-conclusion-heading">Capas de confianza, no un workflow gigante</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Un buen CI/CD no es un único YAML que lo hace todo. Es una secuencia: issues ordenados, PRs documentados, estilo y tests automáticos, revisión asistida por IA, aprobación humana, validación en emulador y visual, artefactos firmados y un aviso al equipo cuando algo sale a la pista interna.</p>
      <p>Tres archivos de workflow. Cero subidas manuales. Cada PR recibe checks mecánicos y un primer pase de IA; cada merge lleva una build firmada a la pista interna, y el equipo siempre sabe qué versión es.</p>
      <p>Las capturas proceden de una configuración real en GitHub Actions. Si quieres que revisemos o montemos tu pipeline, mira <a href="/consultoria-android/">desarrollo de apps Android</a> o <a href="https://cal.com/bitdesal/30min">reserva 30 minutos</a>. También está el <a href="https://medium.com/@caye.suomi/a-guide-on-how-to-implement-ci-cd-for-android-using-github-actions-839256696fdd">artículo original en Medium</a>.</p>
    </div>
  </div>
</section>