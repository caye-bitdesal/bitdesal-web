---
title: 'A guide to CI/CD for Android using GitHub Actions: a reasonable pipeline'
description: 'Three GitHub Actions workflows for Android: fast PR CI, parallel AI code review, and signed internal-track releases. Real patterns for Gradle-based apps.'
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
titleHighlight: 'a reasonable pipeline'
subtitle: 'Most Android teams know they should automate releases. What often gets missed is drawing a clear line between “is this code good?” and “can testers install it?”'
updatedDate: 2026-11-17
faq:
  - q: 'Does the AI review block merging?'
    a: 'No. It runs in parallel with CI and posts a comment on the PR. Required checks remain the mechanical jobs in main.yml; a human approves in the end.'
  - q: 'Why not run the emulator on every PR?'
    a: 'Emulators and screenshot tests are slow. We reserve them for the release pipeline, after code has passed human review on main.'
  - q: 'How many workflows do we need?'
    a: 'Three files: main.yml (quality on PR and push to main), ai-code-review.yml (automated second opinion), and release.yml (deep validation, signing, Play internal track).'
---

This guide walks through a real GitHub Actions setup on an Android app: **three workflows** that work together, fast pull-request checks, AI-assisted code review, and slower release automation (visual tests, emulator, signing, Google Play upload, and team notifications).

You do not need to know the app or its internals. The patterns apply to most Gradle-based Android projects.

<p class="text-sm text-muted-foreground">Reading time: about 15–20 minutes.</p>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">01</span>
  <span class="bf-section-title"><span class="bf-section-lead">The mental map:</span> <span class="bf-section-accent">two doors</span></span>
</h2>

Think of **two doors**, with an extra reviewer at the first one:

1. **Quality gate**, Can we merge? (build, tests, style, lint, AI review, human review)
2. **Shipping dock**, Can testers install it? (deeper tests, signed bundle, Play internal track)

| | CI (`main.yml`) | AI review (`ai-code-review.yml`) | Release (`release.yml`) |
| --- | --- | --- | --- |
| **Runs on** | Every PR + every push to `main` | Every PR (open / update / reopen) | Every push to `main` |
| **Typical duration** | A few minutes | ~1–2 minutes | ~30 minutes |
| **Blocks merge?** | Yes (required checks) | No (advisory comment) | N/A (post-merge) |
| **Emulator?** | No | No | Yes |
| **Publishes to Play?** | No | No | Yes (internal track) |

Splitting mechanical checks from release keeps pull requests snappy. The AI review runs **in parallel** with CI, nobody waits for an emulator because they fixed a typo, and authors get a second opinion on the diff while Gradle compiles.

<blockquote class="bf-pullquote">Merging should be fast and mechanical. Release should be slow, signed, and repeatable.</blockquote>

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">02</span>
  <span class="bf-section-title"><span class="bf-section-lead">Before CI:</span> <span class="bf-section-accent">how work enters</span></span>
</h2>

Automation does not start at “push.” It starts earlier, with how the team **structures work**.

<h3 class="text-xl font-medium mt-8 mb-4">Branching and merge flow</h3>

When we pick up an issue, we branch from `main`. If the issue is large, we split it into **sub-issues**, each sub-issue gets its own branch, but branched from the parent feature branch, not from `main` directly. Sub-issue pull requests merge back into the parent branch as they complete. Only when every sub-issue is integrated and the feature is ready do we merge the parent branch into `main`, and **that** merge triggers a new release candidate.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/git-branches.webp" alt="Branch diagram: main, parent feature branch, and sub-issue branches with pull requests between them" width="1200" height="675" loading="lazy" />
  <figcaption>How we branch depending on the issue we are working on.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/branching-subissues.webp" alt="Workflow with issues, parent branches, and sub-issues through merge to main" width="1200" height="675" loading="lazy" />
  <figcaption>How issues, branches, and the release pipeline relate.</figcaption>
</figure>

**Why this shape:**

- Sub-issues stay isolated. Each small PR runs CI and AI review without touching `main` until its slice is done.
- The parent branch integrates incrementally. You assemble the full feature on the parent branch before exposing it to the release pipeline.
- **One release per feature landing.** Merging to `main` is the only gate that kicks off screenshot tests, emulator, signing, and the Play upload.

Large features are tracked as sub-issues so progress stays visible in reviewable chunks:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/sub-issues.webp" alt="Parent issue with eight completed sub-issues, each with its own pull request" width="1200" height="675" loading="lazy" />
  <figcaption>A parent issue split into closed sub-issues, each with its own PR.</figcaption>
</figure>

Pull requests carry context too: goals, non-goals, and a **testing checklist** the author fills in before asking for review:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/issue-spec.webp" alt="Pull request description with goals, non-goals, and a completed testing checklist" width="1200" height="675" loading="lazy" />
  <figcaption>Goals, scope, and tests before human review.</figcaption>
</figure>

**Why this matters for CI:** clear scope reduces surprise failures. When lint or tests fail, you know which slice of the feature broke, not an entire multi-week epic.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">03</span>
  <span class="bf-section-title"><span class="bf-section-lead">AI review</span> <span class="bf-section-accent">on pull requests</span></span>
</h2>

When a PR opens or receives new commits, `ai-code-review.yml` runs **in parallel** with CI, not inside it. Both workflows share the same trigger; neither waits for the other.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-sequence.webp" alt="Sequence: push to PR, Gradle CI jobs and AI review commenting on the pull request" width="1200" height="675" loading="lazy" />
  <figcaption>Mechanical checks and AI review at the same time; humans still decide the merge.</figcaption>
</figure>

**How the AI workflow works:**

1. GitHub Actions checks out the PR diff (base commit vs. head).
2. A Python script (`ai_review.py`) sends the diff and PR title to an LLM via the Gemini API.
3. The workflow posts the model’s response as a **comment on the PR**, issues found, things done well, and whether earlier feedback was addressed.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ai-review-comment.webp" alt="AI review comment on a pull request: enum deserialization bug and good locale API usage" width="1200" height="675" loading="lazy" />
  <figcaption>Real example: the AI flags unsafe `valueOf` in DataStore and reminds you that human approval is still required.</figcaption>
</figure>

The workflow skips bot-authored PRs (Dependabot, Renovate) and cancels in-flight reviews when new commits land, so the comment always reflects the latest diff.

**What you need to set up:** a repository secret `GEMINI_API_KEY` and `pull-requests: write` permission so the bot can comment. The built-in `GITHUB_TOKEN` is enough for repo access.

**What it is good for:** catching logic bugs, Android-specific mistakes, and readability problems before a human opens the file, especially on smaller teams with limited review bandwidth.

**What it is not:** a replacement for human review or a required check. CI can be green while the AI flags a real bug in a comment, that is working as designed.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">04</span>
  <span class="bf-section-title"><span class="bf-section-lead">Pipeline 1:</span> <span class="bf-section-accent">CI, the quality gate</span></span>
</h2>

**File:** `main.yml`  
**Triggers:** pull requests to `main`, pushes to `main`, manual runs

When you open a PR, GitHub Actions starts **five CI jobs in parallel** (with one dependency chain at the end). At the same time, the AI review workflow leaves a comment on the PR.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-checks.webp" alt="Summary of five green jobs: build, unit tests, ktlint, Android lint, and release build check" width="1200" height="675" loading="lazy" />
  <figcaption>Five clearly named checks on the PR view.</figcaption>
</figure>

**Draft PRs** skip the heavier jobs, unit tests, Android Lint, and the release build check, so work in progress does not burn CI minutes.

<h3 class="text-xl font-medium mt-8 mb-4">What each job does (and why)</h3>

- **Build app**, compiles a debug APK and uploads it as an artifact.
- **Unit tests**, JVM tests and Robolectric-based Compose UI tests.
- **Kt lint check**, Kotlin style rules.
- **Android lint check**, Android’s static analyzer on the debug variant.
- **Make sure release build work**, decodes the keystore from encrypted secrets and compiles a **release bundle** without publishing anything.

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/pr-ci-sequence.webp" alt="Pull request CI sequence diagram with Gradle and AI review" width="1200" height="675" loading="lazy" />
  <figcaption>CI answers “does this break something obvious?”; AI adds context in parallel.</figcaption>
</figure>

<h3 class="text-xl font-medium mt-8 mb-4">What we deliberately skip in CI</h3>

- Emulator / instrumented tests
- Screenshot regression tests
- Google Play uploads
- Version tagging

Those live in the **release** pipeline. Keeping them out of every PR is a choice, not a gap.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">05</span>
  <span class="bf-section-title"><span class="bf-section-lead">Pipeline 2:</span> <span class="bf-section-accent">release, the shipping dock</span></span>
</h2>

**File:** `release.yml`  
**Triggers:** pushes to `main`, manual runs

Merge day is when deeper validation starts. The release workflow has **three top-level jobs**:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/ci-jobs-summary.webp" alt="Three green release jobs: screenshot tests, integration tests, and build release AAB" width="1200" height="675" loading="lazy" />
  <figcaption>The first two run in parallel; build release waits for both to pass.</figcaption>
</figure>

### Job A: Screenshot tests

Compose previews are rendered and compared pixel-by-pixel against reference images checked into the repo.

If references do not exist yet, the pipeline generates them, commits them back, and **skips** validation that run, a one-time bootstrap.

On normal runs, any visual drift fails the build and uploads a diff report you can download from the Actions artifacts tab.

**Benefit:** catches “we changed a color and did not notice” regressions. Typography, spacing, and layout stay honest without manual screenshot sessions on every change.

**Why only here?** Screenshot infrastructure is heavier than unit tests. We run it when we are preparing something shippable, not on every keystroke.

### Job B: Integration tests

Here we boot a **real Android emulator** on the runner (API 30, optimized test image) and run instrumented tests end-to-end.

**Benefit:** exercises the real framework, lifecycle, SQLite, permissions, navigation, in ways the JVM cannot fully replicate.

Reports are always uploaded, pass or fail, so debugging does not require reproducing the emulator locally.

### Job C: Build release AAB, the main event

Once visual and integration tests pass, the **Build release AAB** job takes over. In a recent run it took about **six and a half minutes** end to end:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-job-log.webp" alt="Release job steps: version, signing, build, artifact, tag, and Discord notification" width="1200" height="675" loading="lazy" />
  <figcaption>Each step visible in the log: version, signing, publish, artifact, tag, and notification.</figcaption>
</figure>

**What happens inside, in order:**

**1. Compute version**, we do not hand-edit the build file on release day. The pipeline reads `rc-*` git tags and increments automatically:

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/version-tags.webp" alt="Decision flow for versionName and versionCode from rc tags on main" width="1200" height="675" loading="lazy" />
  <figcaption>If HEAD already has an rc-* tag, reuse it; otherwise bump patch or start from 1.0.1.</figcaption>
</figure>

- Tag: `rc-1.0.1`
- Version name: `1.0.1`
- Version code: `10005` (formula: major×10000 + minor×100 + patch)

**2. Prepare and verify signing**, the upload keystore **never** lives in git. It is stored as an encrypted secret, decoded on the runner, and verified with standard Java tooling before Gradle runs.

**3. Build and publish, one Gradle invocation**

A single command builds the signed Android App Bundle and uploads it to Play:

`bundleRelease` + `publishReleaseBundle`

Publishing uses the Gradle Play Publisher plugin (Triple-T), targeting the **internal track**. No “download AAB, open Play Console, click upload.” Repeatable, logged, and boring, the best kind of release.

**4. Job summary, artifact, and git tag**

The workflow writes a readable table to the Actions summary, uploads the `.aab` as an artifact, and pushes an `rc-*` tag (unless the commit was already tagged, safe for re-runs).

**5. Team notification**

In this example we use Discord; the same pattern fits Slack, email, or any channel. Success or failure posts an embed with version, tag, and links to the CI run and Play Console releases (as a workflow variable, not in the repo).

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">06</span>
  <span class="bf-section-title"><span class="bf-section-lead">How it fits</span> <span class="bf-section-accent">together</span></span>
</h2>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/developer-workflow.webp" alt="Developer flow from planning through release to manual production promotion" width="1200" height="675" loading="lazy" />
  <figcaption>Quality gate on the PR; shipping dock after merge.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/workflow-overview.webp" alt="Flow from GitHub issue to manual production promotion" width="1200" height="675" loading="lazy" />
  <figcaption>Issues, sub-issues, CI, AI, and release in one view.</figcaption>
</figure>

<figure class="bf-figure">
  <img src="/images/blog/guia-cicd-android-github-actions/release-sequence.webp" alt="Release pipeline sequence: tests, signing, Gradle, Google Play, and notification" width="1200" height="675" loading="lazy" />
  <figcaption>After merge, the wait time does not block day-to-day work.</figcaption>
</figure>

<ol class="bf-steps">
  <li><strong>Plan</strong>, break features into sub-issues; document goals and test plan in the PR.</li>
  <li><strong>Open PR</strong>, CI (required) and AI review (advisory) in parallel; both feed human review.</li>
  <li><strong>Merge</strong>, CI runs again on `main` and the release pipeline starts.</li>
  <li><strong>Release OK</strong>, signed build on the internal track; team notified via Discord (or another channel).</li>
  <li><strong>Promote when ready</strong>, production remains a deliberate human decision.</li>
</ol>

That last step is intentional. Automation removes repetition; you still control what real users receive.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">07</span>
  <span class="bf-section-title"><span class="bf-section-lead">What goes in secrets</span> <span class="bf-section-accent">(and what does not)</span></span>
</h2>

Never publish keystores, service account JSON, webhook URLs, passwords, or credentials in an article or in the repository.

In the repo we store only **categories** of secrets in GitHub Actions:

| Category | Purpose |
| --- | --- |
| LLM API key | Power the AI code review workflow |
| Signing keystore (Base64) | Reconstruct the upload key on the runner |
| Keystore passwords & alias | Sign release binaries |
| Play Publisher credentials | Authenticate the Gradle Play Publisher plugin |
| Notification webhook | Post Discord embeds (or another channel) |

If anything leaks, **rotate it immediately**. Secrets must stay secret: no log should print them.

<h2 class="bf-section-heading">
  <span class="bf-section-num" aria-hidden="true">08</span>
  <span class="bf-section-title"><span class="bf-section-lead">What I learned</span> <span class="bf-section-accent">building this</span></span>
</h2>

<div class="bf-triptych">
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">01</span>
    <h3>AI under human judgment</h3>
    <p>The model catches what lint misses; people decide product and architecture. In parallel, without blocking.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">02</span>
    <h3>Fast vs slow</h3>
    <p>On the PR, minutes. Release confidence still goes up because the heavy work runs after merge.</p>
  </div>
  <div class="bf-triptych-col">
    <span class="bf-triptych-num">03</span>
    <h3>Release on the PR</h3>
    <p>Compiling release on the PR costs little and avoids surprises: the app does not only compile in debug.</p>
  </div>
</div>

<ul class="list-disc pl-6 my-6 space-y-2 text-foreground/85">
  <li><strong>Tag-driven versioning</strong>, fewer Monday-morning arguments; history lives in git.</li>
  <li><strong>Bundle + publish in one Gradle step</strong>, fewer invocations, fewer signing surprises.</li>
  <li><strong>Notify in the channel people read</strong>, a green check in Actions helps; the team needs to know which version is on the internal track.</li>
  <li><strong>Manual production promotion</strong>, you control what reaches real users.</li>
</ul>

<section class="bf-conclusion">
  <div class="bf-conclusion-grid">
    <div class="bf-conclusion-title">
      <p class="bf-conclusion-label">Conclusion</p>
      <h2 class="bf-conclusion-heading">Layers of trust, not one giant workflow</h2>
    </div>
    <div class="bf-conclusion-body">
      <p>Good CI/CD is not a single YAML that does everything. It is a sequence: structured issues, documented PRs, automated style and tests, AI-assisted review, human approval, emulator and visual validation, signed artifacts, and a nudge to the team when something ships to the internal track.</p>
      <p>Three workflow files. Zero manual uploads. Every PR gets mechanical checks and an AI first pass; every merge delivers a signed build to the internal track, and the team always knows which version it is.</p>
      <p>Screenshots come from a real GitHub Actions setup. If you want help reviewing or building your pipeline, see <a href="/en/consultoria-android/">Android app development</a> or <a href="https://cal.com/bitdesal/30min">book 30 minutes</a>. You can also read the <a href="https://medium.com/@caye.suomi/a-guide-on-how-to-implement-ci-cd-for-android-using-github-actions-839256696fdd">original article on Medium</a>.</p>
    </div>
  </div>
</section>