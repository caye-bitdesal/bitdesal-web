---
title: "Guia de CI/CD per a Android amb GitHub Actions: un pipeline raonable"
description: "Tres workflows en GitHub Actions per a Android: CI ràpid en el PR, revisió amb IA i release signat a Play. Patrons reals, sense dependre d'una app concreta."
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

Aquesta guia repassa una configuració real amb GitHub Actions en una app Android: *tres workflows** que treballen junts, comprovacions ràpides en pull request, revisió de codi assistida per IA i automatització de release més lenta (tests visuals, emulador, signatura, pujada a Google Play i avís a l'equip).

No necessites conéixer l'app ni els seus detalls interns. Els patrons apliquen a la majoria de projectes Android basats en Gradle.

<p class="text-sm text-muted-foreground">Lectura: uns 15–20 minutos.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">El mapa mental:</span> <span class="bf-section-accent">dues portes</span></span>
</h2>

Pensa en *dues portes**, amb un revisor extra en la primera:

1. *Porta de qualitat**, Podem fer merge? (build, tests, estil, lint, revisió amb IA, revisió humana)
2. *Moll d'enviament**, Poden els testers instal·lar-ho? (tests més profunds, bundle signat, pista interna de Play)

| | CI (`main.yml`) | Revisión IA (`ai-code-review.yml`) | Release (`release.yml`) |
| --- | --- | --- | --- |
| **Cuándo corre** | Cada PR + cada push a `main` | Cada PR (abrir / actualizar / reabrir) | Cada push a `main` |
| **Duración típica** | Pocos minutos | ~1–2 minutos | ~30 minutos |
| **¿Bloquea el merge?** | Sí (checks obligatorios) | No (comentario orientativo) | N/A (post-merge) |
| **¿Emulador?** | No | No | Sí |
| **¿Publica en Play?** | No | No | Sí (pista interna) |

Separar els checks mecànics del release manté els PR àgils. La revisió amb IA corre *en paral·lel** amb el CI: ningú espera a l'emulador perquè va corregir un typo, i l'autor rep una segona opinió del diff mentre Gradle compila.

<blockquote class="bf-pullquote">El merge ha de ser ràpid i mecànic. La release ha de ser lenta, signada i repetible.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Abans del CI:</span> <span class="bf-section-accent">com entra el treball</span></span>
</h2>

L'automatització no comença en el «push». Comença abans, en com l'equip *organitza el treball**.

<h3 class="text-xl font-medium mt-8 mb-4">Branques i flux de merge</h3>

Quan agafem un issue, ramifiquem des de `main`. Si el issue és gran, ho partim en **sub-issues**: cada sub-issue té la seua branca, però nascuda de la branca pare de la feature, no de `main` directament. Els PR de sub-issue tornen a la branca pare en completar. Només quan totes les sub-issues estan integrades i la feature està llista mergeamos la branca pare en `main`, i *aqueix** merge dispara un nou release candidate.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/git-branches.webp" alt="Diagrama de ramas: main, rama padre de feature y ramas de sub-issues con pull requests entre ellas" width="1200" height="675" loading="lazy" />
  <figcaption>Com ramifiquem segons el issue en el qual treballem.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/branching-subissues.webp" alt="Flujo de trabajo con issues, ramas padre y sub-issues hasta merge a main" width="1200" height="675" loading="lazy" />
  <figcaption>Relació entre issues, branques i el pipeline de release.</figcaption>
</figure>

*Per què aquesta forma:**

- Les sub-issues queden aïllades. Cada PR xicotet passa CI i revisió amb IA sense tocar `main` fins que el seu tros està fet.
- La branca pare integra a poc a poc. Muntes la feature sencera en la branca pare abans d'exposar-la al pipeline de release.
- *Un release per feature que aterra.** Mergear en `main` és l'única porta que dispara screenshot tests, emulador, signatura i pujada a Play.

Les features grans se segueixen com sub-issues per a veure l'avanç en trossos revisables:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/sub-issues.webp" alt="Issue padre con ocho sub-issues completadas, cada una con su pull request" width="1200" height="675" loading="lazy" />
  <figcaption>Un pare dividit en sub-issues tancades, cadascuna amb el seu PR.</figcaption>
</figure>

Els propis PR porten context: objectius, no-objectius i una **checklist de proves** que l'autor farcida abans de demanar revisió:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/issue-spec.webp" alt="Descripción de pull request con objetivos, no-objetivos y checklist de pruebas completada" width="1200" height="675" loading="lazy" />
  <figcaption>Objectius, abast i proves abans de demanar revisió humana.</figcaption>
</figure>

*Per què importa per al CI:** un abast clar redueix fallades sorpresa. Si falla lint o un test, saps quin tros de la feature es va trencar, no un epic de diverses setmanes sencer.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Revisió amb IA</span> <span class="bf-section-accent">en els pull requests</span></span>
</h2>

Quan un PR s'obri o rep commits nous, `ai-code-review.yml` corre *en paral·lel** amb el CI, no dins d'ell. Els dos workflows comparteixen el mateix disparador; cap espera a l'altre.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-sequence.webp" alt="Secuencia: push al PR, jobs de CI en Gradle y revisión con IA que comenta en el pull request" width="1200" height="675" loading="lazy" />
  <figcaption>Checks mecànics i revisió amb IA alhora; la persona continua decidint el merge.</figcaption>
</figure>

*Com funciona el workflow d'IA:**

1. GitHub Actions fa checkout del diff del PR (commit base enfront de head).
2. Un script en Python (`ai_review.py`) envia el diff i el títol del PR a un LLM via la API de Gemini.
3. El workflow publica la resposta del model com a *comentari en el PR**: problemes detectats, coses ben fetes i si es va atendre feedback anterior.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-comment.webp" alt="Comentario de revisión con IA en un pull request: bug en deserialización de enum y buen uso de APIs de locale" width="1200" height="675" loading="lazy" />
  <figcaption>Exemple real: la IA marca un `valueOf` insegur en DataStore i recorda que l'aprovació humana continua sent obligatòria.</figcaption>
</figure>

El workflow ignora PRs de bots (Dependabot, Renovate) i cancel·la revisions en curs quan arriben commits nous, perquè el comentari reflectisca sempre l'últim diff.

*Què necessites configurar:** un secret de repositori `GEMINI_API_KEY` i permís `pull-requests: write` perquè el bot comente. El `GITHUB_TOKEN` integrat basta per a accedir al repo.

*Per a què serveix bé:** enxampar bugs lògics, errors típics de Android i problemes de llegibilitat abans que un humà òbriga l'arxiu, sobretot en equips xicotets amb poc ample de revisió.

*Per a què no serveix:** no substitueix la revisió humana ni és un check obligatori. El CI pot estar verd mentre la IA assenyala un bug real en un comentari; així està pensat.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Pipeline 1:</span> <span class="bf-section-accent">CI, la porta de qualitat</span></span>
</h2>

*Arxiu:** `main.yml`  
**Disparadores:** pull requests a `main`, pushes a `main`, execució manual

En obrir un PR, GitHub Actions llança *cinc jobs de CI en paral·lel** (amb una cadena de dependències al final). Alhora, el workflow de revisió amb IA deixa un comentari en el PR.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-checks.webp" alt="Resumen de cinco jobs en verde: build, unit tests, ktlint, Android lint y comprobación de build release" width="1200" height="675" loading="lazy" />
  <figcaption>Cinc checks amb noms clars en la vista del PR.</figcaption>
</figure>

Els *PR en esborrany** ometen els jobs més pesats, unit tests, Android Lint i la comprovació de build release, perquè el treball en curs no creme minuts de CI.

<h3 class="text-xl font-medium mt-8 mb-4">Què fa cada job (i per què)</h3>

- **Build app**, compila un APK debug i ho puja com a artefacte.
- **Unit tests**, tests en JVM i tests de UI Compose amb Robolectric.
- **Kt lint check**, regles d'estil Kotlin.
- *Android lint check**, analitzador estàtic de Android sobre la variant debug.
- **Make sure release build work**, decodifica la keystore des de secrets xifrats i compila un **release bundle** sense publicar res.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-ci-sequence.webp" alt="Diagrama de secuencia del CI en pull request con Gradle y revisión con IA" width="1200" height="675" loading="lazy" />
  <figcaption>El CI contesta «trenca una cosa òbvia?»; la IA afig context en paral·lel.</figcaption>
</figure>

<h3 class="text-xl font-medium mt-8 mb-4">Què deixem fora del CI a propòsit</h3>

- Tests en emulador / instrumentats
- Regressió visual per screenshot
- Pujades a Google Play
- Etiquetatge de versió

Això viu en el pipeline de **release**. Traure-ho de cada PR és una decisió, no un buit.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Pipeline 2:</span> <span class="bf-section-accent">release, el moll d'enviament</span></span>
</h2>

*Arxiu:** `release.yml`  
**Disparadores:** pushes a `main`, execució manual

El dia del merge comença la validació profunda. El workflow de release té *tres jobs d'alt nivell**:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ci-jobs-summary.webp" alt="Tres jobs de release en verde: screenshot tests, integration tests y build release AAB" width="1200" height="675" loading="lazy" />
  <figcaption>Els dos primers en paral·lel; el build release espera al fet que tots dos passen.</figcaption>
</figure>

### Job A: Screenshot tests

Els previews de Compose es renderitzen i es comparen píxel a píxel amb imatges de referència en el repo.

Si encara no hi ha referències, el pipeline les genera, les commitea i *salta** la validació aqueixa vegada, arrencada única.

En execucions normals, qualsevol canvi visual trenca el build i puja un informe de diff descargable en la pestanya d'artefactes de Actions.

*Benefici:** detecta regressions del tipus «canviem un color i no ens vam adonar». Tipografia, espaiat i layout es mantenen honestos sense sessions manuals en cada canvi.

*Per què només ací?** La infraestructura de screenshots pes més que els unit tests. La usem quan preparem una cosa instal·lable, no en cada tecla.

### Job B: Integration tests

Ací arranquem un *emulador Android real** en el runner (API 30, imatge de test optimitzada) i correm tests instrumentats de punta a punta.

*Benefici:** exercita el framework de debò, cicle de vida, SQLite, permisos, navegació, de formes que la JVM no replica del tot.

Els informes es pugen sempre, passen o fallen, per a depurar sense reproduir l'emulador en local.

### Job C: Build release AAB, el evento principal

Quan passen els tests visuals i d'integració, el job **Build release AAB** presa el control. En una execució recent va tardar uns *sis minuts i mig** de punta a punta:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-job-log.webp" alt="Pasos del job de release: versión, firma, build, artefacto, tag y notificación Discord" width="1200" height="675" loading="lazy" />
  <figcaption>Cada pas visible en el log: versió, signatura, publicació, artefacte, tag i avís.</figcaption>
</figure>

*Per dins, en ordre:**

**1. Calcular versió**, no editem a mà el fitxer de build el dia del release. El pipeline llig tags `rc-*` en git i incrementa només:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/version-tags.webp" alt="Flujo de decisión para versionName y versionCode a partir de tags rc en main" width="1200" height="675" loading="lazy" />
  <figcaption>Si HEAD ja té tag rc-*, es reutilitza; si no, s'incrementa el patch o es parteix d'1.0.1.</figcaption>
</figure>

- Tag: `rc-1.0.1`
- Version name: `1.0.1`
- Version code: `10005` (fórmula: major×10000 + minor×100 + patch)

**2. Preparar i verificar signatura**, la keystore de pujada *mai** està en git. Viu com secret xifrat, es decodifica en el runner i es verifica amb eines estàndard de Java abans de Gradle.

**3. Build i publicació, una sola invocació Gradle**

Un sol comando construeix el Android App Bundle signat i el puja a Play:

`bundleRelease` + `publishReleaseBundle`

La publicació usa el plugin Gradle Play Publisher (Triple-T), apuntant a la *pista interna**. Res de «descarregar AAB, obrir Play Console, prémer pujar». Repetible, registrat i avorrit, el millor tipus de release.

**4. Resum del job, artefacte i tag git**

El workflow escriu una taula llegible en el resum de Actions, puja el `.aab` com a artefacte i espenta un tag `rc-*` (llevat que el commit ja estiguera etiquetatge, segur davant re-execucions).

**5. Avís a l'equip**

En aquest exemple usem Discord; encaixa igual amb Slack, correu o un altre canal. Èxit o fallada publica un embed amb versió, tag i enllaços al run de CI i a releases en Play Console (com a variable del workflow, no en el repo).

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">Com encaixa</span> <span class="bf-section-accent">tot junt</span></span>
</h2>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/developer-workflow.webp" alt="Flujo del desarrollador desde planificación hasta release y promoción manual a producción" width="1200" height="675" loading="lazy" />
  <figcaption>Porta de qualitat en el PR; moll d'enviament després del merge.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/workflow-overview.webp" alt="Flujo desde GitHub issue hasta promoción manual en producción" width="1200" height="675" loading="lazy" />
  <figcaption>Issues, sub-issues, CI, IA i release en una sola vista.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-sequence.webp" alt="Secuencia del pipeline de release: tests, firma, Gradle, Google Play y notificación" width="1200" height="675" loading="lazy" />
  <figcaption>Després del merge, el temps d'espera no bloqueja el dia a dia de l'equip.</figcaption>
</figure>

<ol class="bf-steps">
  <li><strong>Planificar</strong>, partir features en sub-issues; documentar objectius i pla de proves en el PR.</li>
  <li><strong>Obrir PR</strong>, CI (obligatori) i revisió amb IA (orientativa) en paral·lel; tots dos alimenten la revisió humana.</li>
  <li><strong>Merge</strong>, el CI torna a córrer en `main` i arranca el pipeline de release.</li>
  <li><strong>Release OK</strong>, build signada en la pista interna; l'equip avisat per Discord (o un altre canal).</li>
  <li><strong>Promoure quan toc</strong>, producció continua sent una decisió humana deliberada.</li>
</ol>

Aqueix últim pas és intencionat. L'automatització quitació repetició; tu continues controlant què reben els usuaris reals.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">07</span>
  <span class="bf-section-title"><span class="bf-section-lead">Què va en secrets</span> <span class="bf-section-accent">(i què no)</span></span>
</h2>

Mai publiques keystores, JSON de compte de servei, URLs de webhooks, contrasenyes ni credencials en un article o en el repositori.

En el repo només guardem *categories** de secrets en GitHub Actions:

| Categoría | Para qué |
| --- | --- |
| API key del LLM | Alimentar el workflow de revisión con IA |
| Keystore de firma (Base64) | Reconstruir la clave de subida en el runner |
| Contraseñas y alias de keystore | Firmar binarios de release |
| Credenciales de Play Publisher | Autenticar el plugin Gradle Play Publisher |
| Webhook de notificaciones | Publicar embeds en Discord (u otro canal) |

Si alguna cosa es filtra, **rótalo immediatament**. Els secrets han de continuar sent secrets: cap log hauria d'imprimir-los.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">08</span>
  <span class="bf-section-title"><span class="bf-section-lead">El que vaig aprendre</span> <span class="bf-section-accent">muntant això</span></span>
</h2>

<div class="bf-triptych">
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">01</span>
    <h3>IA sota el criteri humà</h3>
    <p>El model pilla coses que el lint no veu; les persones decideixen producte i arquitectura. En paral·lel, sense bloquejar.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">02</span>
    <h3>Ràpid vs lent</h3>
    <p>En el PR, minuts. La confiança en release puja igual perquè el pesat corre després del merge.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">03</span>
    <h3>Release en el PR</h3>
    <p>Compilar release en el PR costa poc i evita sorpreses: l'app no sols compila en debug.</p>
  </div>
</div>

<ul class="list-disc pl-6 my-6 space-y-2 text-foreground/85">
  <li><strong>Versionat per tags</strong>, menys discussions el dilluns al matí; l'historial queda en git.</li>
  <li><strong>Bundle + publish en un sol pas Gradle</strong>, menys invocacions, menys sorpreses de signatura.</li>
  <li><strong>Avisar en el canal que es llig</strong>, un check verd en Actions ajuda; l'equip necessita saber quina versió hi ha en la pista interna.</li>
  <li><strong>Promoció a producció manual</strong>, controles què arriba a usuaris reals.</li>
</ul>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusió</p>
      <h2 class="bf-conclusion-heading">Capes de confiança, no un workflow gegant</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Un bon CI/CD no és un únic YAML que ho fa tot. És una seqüència: issues ordenats, PRs documentats, estil i tests automàtics, revisió assistida per IA, aprovació humana, validació en emulador i visual, artefactes signats i un avís a l'equip quan alguna cosa ix a la pista interna.</p>
      <p>Tres arxius de workflow. Zero pujades manuals. Cada PR rep checks mecànics i una primera passada d'IA; cada merge porta una build signada a la pista interna, i l'equip sempre sap quina versió és.</p>
      <p>Les captures procedeixen d'una configuració real en GitHub Actions. Si vols que revisem o muntem el teu pipeline, mira <a href="/consultoria-android/">desenvolupe d'apps Android</a> o <a href="https://cal.com/bitdesal/30min">reserva 30 minuts</a>. També està l'article <a href="https://medium.com/@caye.suomi/a-guide-on-how-to-implement-ci-cd-for-android-using-github-actions-839256696fdd"> original en Medium</a>.</p>
    </div>
  </div>
</section>