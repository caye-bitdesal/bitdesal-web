---
title: 'Technical interviews in the AI era: perhaps we assess the wrong things'
description: 'Technical interviews still measure what AI already does. What companies should evaluate when hiring developers, and what a useful process looks like today.'
pubDate: 2026-11-17
audience: technical
layout: feature
heroImage: /images/blog/entrevistas-tecnicas-ia/hero.jpg
ogImage: /images/blog/entrevistas-tecnicas-ia/hero.jpg
titleHighlight: 'perhaps we assess the wrong things'
subtitle: 'We have spent years measuring how much code someone can write under pressure. AI has changed the rules: judgment matters more than memory now.'
---

A while back I was interviewed for a senior Android role at a company migrating its app from XML to Jetpack Compose. They had already hired one of the top experts to lead the migration; part of my job would be making sure migrations were done properly.

The technical test: build a screen in XML, with no internet to refresh syntax I had not touched in three years, and of course no AI. They assessed me with the technology their own company was leaving behind.

<blockquote class="bf-pullquote">Technical interviews still measure how fast you can write code from memory, and AI does that today.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">From degrees to</span> <span class="bf-section-accent">live coding</span></span>
</h2>

I have been building software for 20 years. In the 2000s you needed specific degrees; in the 2010s demand exploded and companies stopped requiring diplomas. That opened the door for many self-taught developers, but companies still needed a filter and found it in live coding, take-home exercises, and whiteboards.

The technical test replaced the degree as a way to «verify» knowledge. What it really verified was different: whether someone could, in an hour and under pressure, write something that seems to work.

<div class="bf-bento">
  <div class="bf-bento-card bf-bento-card--cream">
    <h3>The 2000s</h3>
    <ul>
      <li>The degree certified your training.</li>
      <li>The market was smaller and more closed.</li>
    </ul>
  </div>
  <div class="bf-bento-card bf-bento-card--dark">
    <h3>The 2010s</h3>
    <ul>
      <li>Demand exploded and talent was scarce.</li>
      <li>Live coding, whiteboards and take-homes became the new filter.</li>
    </ul>
  </div>
</div>

<figure class="bf-figure">
  <img src="/images/blog/entrevistas-tecnicas-ia/live-coding.jpg" alt="Person coding on a laptop during a technical interview" width="1200" height="675" loading="lazy" />
  <figcaption>One hour under pressure says little about how you work day to day.</figcaption>
</figure>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Great in tests,</span> <span class="bf-section-accent">average day to day</span></span>
</h2>

I have mentored more than 30 developers and often seen the same mismatch: people who shone in tests but were not efficient in real work. They kept up with technologies, but struggled to follow through, understand the problem, or deliver.

<div class="bf-bento">
  <div class="bf-bento-card bf-bento-card--cream">
    <p class="bf-bento-label">The classic interview</p>
    <h3>Do you remember the syntax?</h3>
    <ul class="bf-bento-list">
      <li>Algorithms from memory</li>
      <li>Speed under pressure</li>
      <li>One correct answer</li>
    </ul>
  </div>
  <div class="bf-bento-card bf-bento-card--dark">
    <p class="bf-bento-label">Real work</p>
    <h3>Do you make good decisions?</h3>
    <ul class="bf-bento-list">
      <li>Understand before you build</li>
      <li>Compare options and communicate</li>
      <li>Choose among trade-offs</li>
    </ul>
  </div>
</div>

That is why I stopped doing live coding when I run interviews myself. A good conversation shows whether someone is strong, and so far the people I have hired that way have worked out well.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">Why computer science</span> <span class="bf-section-accent">matters again</span></span>
</h2>

For a decade it was implied that a degree added nothing you could not get from a bootcamp. But in computer science you do not only learn to program: you study software engineering, data structures, operating systems, processors, and computer architecture.

<div class="bf-idea">
  <p class="bf-idea-label">The key idea</p>
  <p class="bf-idea-text">With AI writing code, being fast is no longer an advantage. The advantage is knowing what to ask for, spotting when it is wrong, and designing a system that can be maintained.</p>
</div>

That perspective is what separates people who understand what AI produces from those who simply accept it. This is not about using degrees as a filter again, but about valuing that foundation instead of typing speed. It is the same foundation we rely on in [software consulting](/en/consultoria-software/) when we design processes that hold up in production.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">AI has turned live coding into a</span> <span class="bf-section-accent">typing test</span></span>
</h2>

Today AI writes most of the code, and it behaves exactly like that profile: it knows every technology, produces something that works in seconds, and lacks the judgement to structure a problem in depth.

<div class="bf-split">
  <div class="bf-split-media">
    <img src="/images/blog/entrevistas-tecnicas-ia/ia-humano-tecnologia.webp" alt="Person in a robotic suit: technology amplifies, but the one who decides is still human" width="800" height="600" loading="lazy" />
  </div>
  <div class="bf-callout">
    <h3>An unforgettable precedent</h3>
    <p class="bf-callout-lead">The future was already here. More or less.</p>
    <p>In 2018, the supposed robot Boris was unveiled at a Russian tech forum as a showcase of advanced robotics. It was actually a man inside a suit.</p>
  </div>
</div>

Live coding measures precisely what AI already does and fails to assess what AI cannot do. Asking for a master-detail screen in an hour with no help is like judging an architect by how fast they sketch freehand. What still depends on the person is understanding what to build, breaking it down well, explaining it to AI, and reviewing its output critically.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">When the problem is not</span> <span class="bf-section-accent">the candidates</span></span>
</h2>

In another interview I was allowed to use AI. I finished the test, checked that it worked, and explained that for something that small I would not write tests. The interviewer agreed. Later they complained that many candidates submitted good take-home work but could not defend it live. I said nothing, but thought: if your process does not find the right people, maybe the problem is not the candidates but your process.

<div class="bf-highlight">
  If you allow AI but evaluate as if it did not exist, you reward people who generate code without understanding it. If you ban it, you assess work almost nobody does that way anymore.
</div>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">How I</span> <span class="bf-section-accent">interview</span></span>
</h2>

<div class="bf-triptych">
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">01</span>
    <h3>Relax</h3>
    <p>Nobody shows how they think when they are nervous.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">02</span>
    <h3>Technology and architecture</h3>
    <p>Strong engineers know their domain and everything their domain touches. We want to go deep into how far that understanding goes.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">03</span>
    <h3>The conversation</h3>
    <p>Attitude and fit with the team. The «flow» the conversation conveys.</p>
  </div>
</div>

The third weighs the most, because skills can be learned but attitudes come with you.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">07</span>
  <span class="bf-section-title"><span class="bf-section-lead">What a technical interview should look like</span> <span class="bf-section-accent">in the AI era</span></span>
</h2>

If I designed a hiring process today, it would have five blocks, and none would require writing code from memory:

<ol class="bf-steps">
  <li><strong>Requirements:</strong> how you gather them, what you ask when something is ambiguous, and how you specify them for AI.</li>
  <li><strong>Architecture:</strong> how you would design this API and how you would split this feature.</li>
  <li><strong>Verification:</strong> how you know something works (unit, integration, performance tests, as appropriate).</li>
  <li><strong>Workflow and deployment:</strong> how you work with AI and how a change reaches production.</li>
  <li><strong>Code reading:</strong> explain what suboptimal code does and how you would improve it. That is what a good developer does every day now.</li>
</ol>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusion</p>
      <h2 class="bf-conclusion-heading">What really matters</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>What I want is for what reaches production to be well built, whether a person or AI wrote it. That should be the question in any hiring process. If your company still hires with tests designed for 2015, it may be worth revisiting them before blaming candidates.</p>
      <p>At Bitdesal we work this way every day: we help teams integrate AI-assisted development without sacrificing quality.</p>
    </div>
  </div>
</section>