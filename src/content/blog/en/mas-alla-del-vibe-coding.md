---
title: 'Beyond "Vibe Coding": A Manifesto for Sustainable AI Engineering'
description: 'Five principles for using AI in engineering without chaos: trust, specification, rigor, humans in charge, and sustainable cost. A manifesto in English.'
pubDate: 2026-05-21
audience: technical
author: caye
layout: feature
tags:
  - ia
  - ingenieria
keyword: 'vibe coding AI engineering'
heroImage: /images/blog/mas-alla-del-vibe-coding/hero.jpg
ogImage: /images/blog/mas-alla-del-vibe-coding/hero.jpg
titleHighlight: 'A Manifesto for Sustainable AI Engineering'
subtitle: 'The industry chases AI speed. Without method, that speed only amplifies the chaos in the codebase.'
updatedDate: 2026-11-17
faq:
  - q: 'What is vibe coding?'
    a: 'Using AI blindly: vague prompts, merges without understanding the diff, and refactors that duplicate code because "something compiles." It works for a demo; not for a system you maintain for years.'
  - q: 'What is specification-driven development (SDD)?'
    a: 'Treating the written specification as the main product: user story, acceptance criteria, and plan before the agent touches the repository.'
  - q: 'How do you measure ROI from AI?'
    a: 'Not by lines generated, but by whether you save reviewable time on a specific engagement — ROAI: return on AI investment — with token limits and the same quality bar as without AI.'
---

The hype pushes you to **generate more code in less time**. We work by a different rule: **engineering first**. AI is a tool, not a substitute for judgment. This manifesto sums up how we use it at Bitdesal without falling into "vibe coding."

<blockquote class="bf-pullquote">If you cannot debug the code when production fails, you should not have merged it — even if an agent wrote it.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">Trust</span> <span class="bf-section-accent">is earned</span></span>
</h2>

"It's fine on my machine" is not enough. You have to **understand** what is in the diff. Treat agents like a junior developer: with respect, but reviewing every delivery.

If production goes down at three in the morning, the model will not answer the phone. You will.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">The specification</span> <span class="bf-section-accent">is the product</span></span>
</h2>

In the AI era, the main asset is not the latest commit: it is the **specification**. The flow we repeat:

<ol class="bf-steps">
  <li>Define and refine the user story.</li>
  <li>Plan architecture and boundaries between layers.</li>
  <li>Break into small tasks with acceptance criteria.</li>
  <li>Only then: implement — by hand, with an assistant, or with an agent.</li>
</ol>

That is specification-driven development (SDD). Without a spec, the agent improvises and you pay in iterations. We saw it firsthand in the story of the <a href="/en/blog/insomnio-agentes-ia-funcion-sencilla/">"two-hour" language switcher</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Engineering rigor</span> <span class="bf-section-accent">vs. AI laziness</span></span>
</h2>

- Do not replace a broken function with another generated block: **fix the root cause**.
- Avoid "replace everything" refactors that duplicate logic and debt.
- **Never** change a test to fit a wrong implementation. If the test fails, the code fails.
- Respect layers: UI, domain, and data do not get mixed in one prompt without explicit intent.

<figure class="bf-figure bf-figure--natural">
  <img src="/images/blog/mas-alla-del-vibe-coding/jar-jar.jpg" alt="Jar Jar Binks on the Tatooine desert, a metaphor for an idea that seemed brilliant and ended badly" width="1024" height="797" loading="lazy" />
  <figcaption>At the time, many people thought a fully computer-generated character in cinema was a good idea. Vibe coding in production smells similar.</figcaption>
</figure>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">You are the engineer,</span> <span class="bf-section-accent">not the AI</span></span>
</h2>

Agents execute. **You** define the mental model, boundaries, and what belongs in each layer. AI speeds up the keyboard; it does not take responsibility for design or deployment.

<div class="bf-idea">
  <p class="bf-idea-label">The key idea</p>
  <p class="bf-idea-text">Delegating execution is not delegating judgment. The merge is still a human decision.</p>
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Token economics</span> <span class="bf-section-accent">and sustainability</span></span>
</h2>

Today many API costs are **subsidised** or lower than they will be tomorrow. Vague specifications trigger hallucinations and failed iterations — that is, wasted tokens. With SDD you build a library of **executable blueprints** that stay cheap even when the price per token rises.

If the economic side interests you, it ties in with <a href="/en/blog/puedes-permitirte-desarrollo-asistido-ia/">what AI-assisted development really costs</a>.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">The metric that matters</span> <span class="bf-section-accent">is not lines of code</span></span>
</h2>

The indicator is not "how many lines the AI generated," but **return on AI investment (ROAI)**: did this specific engagement ship faster **with reviewable quality** than without AI?

AI assists the developer; it does not replace the engineer.

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusion</p>
      <h2 class="bf-conclusion-heading">Speed with method</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Beyond vibe coding lies sustainable engineering: specify, review, measure cost, and keep human judgment on the merge. If you want that approach for Android or AI-powered products, see <a href="/en/consultoria-android/">Android app development</a> or <a href="/en/consultoria-ia/">AI consulting</a>.</p>
      <p>There is also the <a href="https://www.linkedin.com/pulse/beyond-vibe-coding-manifesto-sustainable-ai-engineering-bitdesal-x5bxe/">original article on LinkedIn</a>.</p>
    </div>
  </div>
</section>