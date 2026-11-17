---
title: "Insomnia, AI agents, and the 8-hour 'simple feature'"
description: 'A language switcher with AI that was supposed to take two hours turned into an all-nighter. Acceptance criteria, automated review, and three lessons.'
pubDate: 2026-06-11
audience: technical
author: caye
layout: feature
tags:
  - agentes-ia
  - android
  - desarrollo-asistido
keyword: 'AI agents development'
heroImage: /images/blog/insomnio-agentes-ia-funcion-sencilla/hero.jpg
ogImage: /images/blog/insomnio-agentes-ia-funcion-sencilla/hero.jpg
titleHighlight: 'the 8-hour simple feature'
subtitle: 'Ever had a “five-minute” task eat your whole day? This one started at an indecent hour, sleepless, with a language switcher that was “sure” to go fast with AI.'
updatedDate: 2026-11-17
faq:
  - q: 'Why does the title say 8 hours if the marathon was longer?'
    a: 'On LinkedIn the story plays on the “8-hour simple feature” hook. In practice, between spec work, iterations, and fixes, it was about twelve hours before the feature was stable and the code presentable.'
  - q: 'Should you let an agent run without acceptance criteria?'
    a: 'No. Without written criteria, the agent keeps “improving” or inventing forever. You have to know when enough is enough.'
  - q: 'Does AI review replace human review?'
    a: 'It works as a second opinion on the PR, not as a veto or substitute. Comments guide; someone on the team decides the merge.'
---

In the small hours, wide awake, I decided to add a **language switcher** to Weel, a personal app I have been working on for a while. By hand it would have taken a couple of hours. I wanted to see how long it would take with AI agents.

<blockquote class="bf-pullquote">Big mistake: without acceptance criteria, the AI never stops “fixing” things you did not ask for.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">The plan</span> <span class="bf-section-accent">before code</span></span>
</h2>

The first step was not opening Android Studio: it was **writing the spec** in Cursor with Composer. A full hour on the plan alone. A local model with Ollama might have been cheaper, but I was too tired to be strategic.

Four rounds refining the plan to catch errors before execution. In the end I let **Claude Opus** implement. (RIP API credits, but at least I did not go in blind.)

<div class="bf-idea">
  <p class="bf-idea-label">The key idea</p>
  <p class="bf-idea-text">The time “saved” on code went into bad specs, fix loops, and quality passes. AI speeds up typing, not judgment.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Execution:</span> <span class="bf-section-accent">“half done” in several ways</span></span>
</h2>

In the classic AI fashion, it **almost worked**. That is, it failed in creative ways:

- The dropdown opened toward the wrong side of the screen.
- The toggles did not actually change what they should.
- Persistence and context injection were a mess.

Every fix opened another hole because there was no closed list of “done when…”.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Quality control</span> <span class="bf-section-accent">with automated review</span></span>
</h2>

When the code finally fit together, quality was still poor. I ran the diff through a GitHub workflow we set up for **AI review** (Gemini at the time; recent screenshots show 2.5 Pro).

The bot found real issues — for example an unsafe `AppLanguage.valueOf` reading DataStore — and noise too. That day it weighed on me more than it helped, but the pattern still pays off on teams with little review bandwidth.

<figure class="bf-figure">
  <img src="/images/blog/insomnio-agentes-ia-funcion-sencilla/ai-code-review.png" alt="AI review comment on an Android pull request: summary, issues, and suggested Kotlin code" width="1200" height="800" loading="lazy" />
  <figcaption>Automated review on the PR: useful as a second opinion, not a replacement for a human merge decision.</figcaption>
</figure>

<p>If you want to see how that fits into a full pipeline, see our <a href="/en/blog/guia-cicd-android-github-actions/">CI/CD guide with AI review</a> on bitdesal.com.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Twelve hours later</span> <span class="bf-section-accent">three lessons</span></span>
</h2>

After about **twelve hours** and many wrong turns, the feature was in production and the code presentable. I took away this:

<ol class="bf-steps">
  <li><strong>Written acceptance criteria.</strong> If you do not define “done”, the agent keeps iterating or hallucinating improvements forever.</li>
  <li><strong>Trust, but verify.</strong> The AI can be confidently wrong. Following it blindly costs more than fixing by hand.</li>
  <li><strong>Question yourself.</strong> Sometimes the bug is in the prompt or the framing, not the model. That is where you learn the most.</li>
</ol>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusion</p>
      <h2 class="bf-conclusion-heading">The simple feature was not</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>AI agents help you move fast when you already know what you want and how to check it. Without that, a sleepless night turns into a marathon.</p>
      <p>There is also the <a href="https://www.linkedin.com/pulse/insomnia-ai-agents-8-hour-simple-feature-bitdesal-ytkke/">original article on LinkedIn</a>. If you want Android development with quality and without relying on the agent forever, see <a href="/en/consultoria-android/">Android app development</a> or <a href="/agentes-ia-empresas/">AI agents for business</a>.</p>
    </div>
  </div>
</section>