# Business Systems Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
>
> **Note on this plan's shape:** this is a copy/positioning rewrite on an existing Next.js marketing site, not a library with a test suite. There is no test runner in this repo. "Verification" per task means: `npm run build` succeeds, a targeted `grep` confirms no em dashes were introduced in the touched file, and the rendered copy is checked against the spec by re-reading the file. Each task is still an independently committable, independently reviewable unit.

**Goal:** Reposition struct-solutions from "AI automation consultancy" to "business systems company" across every page's copy and IA, while making zero changes to the logo, color tokens, fonts, or component architecture.

**Architecture:** Pure content/copy edits to existing `.tsx` page files and two components (`ContactForm.tsx`, `Footer.tsx`/`Nav.tsx` labels). No new components, no new dependencies, no changes to `globals.css` color/font tokens, no changes to `Lattice`, `HeroBackground`, `GlowBloom`, `SectionSpine`, `SectionDivider`, `Reveal`, `ServiceIcon`, `WorkflowDiagram` internals (icon *shapes* passed into `ServiceIcon` may change, the component itself does not).

**Tech Stack:** Next.js (App Router), Tailwind v4 (`@theme inline` tokens in `globals.css`), TypeScript, EmailJS for the contact form.

## Global Constraints

- Do not touch `--bg`, `--bg-2`, `--bg-3`, `--border`, `--green`, `--green-light`, `--green-glow`, `--text-*` tokens in `src/app/globals.css`.
- Do not change the logo (`/imgs/structlogo1w.png`), its alt text, or its dimensions in `Nav.tsx` / `Footer.tsx`.
- Do not change the fonts (`Syne` display / `DM Sans` body) in `layout.tsx` or `globals.css`.
- Keep the hero tagline **exactly** as it currently reads: `More business,` / `less boring.` (the two-line `<h1>` in `src/app/page.tsx`). Do not reword, do not remove the `<em>` styling on "less boring."
- Zero em dash characters (`—`) anywhere in `src/**` after this plan is done. Use commas, full stops, colons, or normal hyphens (`-`) instead.
- Do not introduce Bronze/Silver/Gold-style package tiers, and do not present per-automation prices (e.g. "£200-280 per workflow") anywhere. Digital Foundations utility pricing (hosting/email, which is commodity monthly pricing, not project-scoping) may keep concrete `£/month` figures since that was already public and isn't the "automation price list" the spec is telling us to remove.
- Primary CTA copy across the site becomes problem-led ("Talk about a problem" / "Tell us what's not working"), replacing "Book a free call" as the button label. The underlying link target (`/contact`) and the fact that a free 20-minute call happens does not change.
- No new npm dependencies.
- Preserve existing component/page file structure; do not split or merge files.

---

## File Map

| File | Change type |
|---|---|
| `src/app/layout.tsx` | Metadata rewrite (title/description), no em dash |
| `src/components/Nav.tsx` | CTA button label only |
| `src/components/Footer.tsx` | Descriptor line only |
| `src/app/page.tsx` | Hero, ticker, service pillars, 6-step methodology, who-it's-for, new problem-led examples section, pricing section, final CTA, JSON-LD schema |
| `src/app/services/page.tsx` | Full restructure into 3 pillars, remove per-automation price tiers, new FAQ copy |
| `src/app/about/page.tsx` | Full rewrite of narrative + metadata |
| `src/app/contact/page.tsx` | Hero copy + next-steps copy tweaks |
| `src/components/ContactForm.tsx` | New field set, new EmailJS payload, remove em dash |
| `src/app/work/page.tsx` | Light copy touch (CTA + framing line), no structural change |
| `src/app/projects/page.tsx` | Light copy touch (CTA + intro line), no structural change |
| `src/app/calculator/page.tsx` | Light copy touch only |

No files are created or deleted.

---

### Task 1: Global metadata and JSON-LD

**Files:**
- Modify: `src/app/layout.tsx:19-44`
- Modify: `src/app/page.tsx:87-103` (SCHEMA object)

**Interfaces:** none (metadata objects consumed by Next's App Router head rendering; no other task depends on exact strings here).

- [ ] **Step 1: Rewrite `metadata` in `layout.tsx`**

```tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.struct.solutions"),
  title: {
    default: "Struct Solutions - Business Systems & Digital Infrastructure",
    template: "%s - Struct Solutions",
  },
  description:
    "Struct Solutions finds the problems in how a business operates and builds the systems to fix them: digital foundations, business systems and intelligent systems, scoped around the problem, not the technology.",
  icons: {
    icon: [
      { url: "/imgs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/imgs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/imgs/apple-touch-icon.png",
  },
  manifest: "/imgs/site.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "Struct Solutions",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

- [ ] **Step 2: Rewrite `SCHEMA` in `page.tsx`**

```tsx
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Struct Solutions",
  url: "https://www.struct.solutions/",
  email: "hello@struct.solutions",
  description:
    "Struct Solutions designs and builds the systems behind better businesses: websites, professional email, CRM, business process and workflow systems, and AI where it genuinely helps.",
  areaServed: "GB",
  serviceType: [
    "Business Systems Design",
    "Digital Infrastructure",
    "Business Process Improvement",
    "Workflow Automation",
    "Website & Email Hosting",
  ],
};
```

- [ ] **Step 3: Verify**

Run: `grep -n "—" src/app/layout.tsx src/app/page.tsx` → expect no output (until later tasks touch page.tsx further; re-check at Task 6).
Run: `npm run build` → expect success.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "Reposition site metadata around business systems, not AI automation"
```

---

### Task 2: Nav and Footer copy

**Files:**
- Modify: `src/components/Nav.tsx:72-78` and `:118-124`
- Modify: `src/components/Footer.tsx:16-18`

**Interfaces:** none.

- [ ] **Step 1: Change both "Book a free call" CTA labels in `Nav.tsx` to "Talk about a problem"**

Desktop CTA (line ~77):
```tsx
          <Link
            href="/contact"
            prefetch={false}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
          >
            Talk about a problem
          </Link>
```

Mobile menu CTA (line ~123):
```tsx
          <Link
            href="/contact"
            prefetch={false}
            className="mx-6 my-4 flex justify-center rounded-full bg-green px-5 py-3 font-medium text-white"
          >
            Talk about a problem
          </Link>
```

- [ ] **Step 2: Update the footer descriptor line**

```tsx
          <p className="text-sm text-text-secondary">
            Business systems and digital infrastructure.
          </p>
```

- [ ] **Step 3: Verify**

Run: `grep -n "Book a free call" src/components/Nav.tsx` → expect no output.
Run: `npm run build` → expect success.

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.tsx src/components/Footer.tsx
git commit -m "Swap nav/footer copy to problem-led CTA and systems descriptor"
```

---

### Task 3: Homepage hero and ticker

**Files:**
- Modify: `src/app/page.tsx:10-21` (`TICKER_ITEMS`)
- Modify: `src/app/page.tsx:112-146` (hero section JSX)

**Interfaces:** `TICKER_ITEMS: string[]` stays a flat string array, consumed unchanged by the ticker JSX below it (no signature change).

- [ ] **Step 1: Replace `TICKER_ITEMS`**

```tsx
const TICKER_ITEMS = [
  "Business Systems",
  "Digital Foundations",
  "UK-Based",
  "No Long Contracts",
  "Fast Setup",
  "EU Hosting",
  "Fixed-Scope Pricing",
  "Built to Run",
  "Real Support",
  "Manchester-Based",
];
```

- [ ] **Step 2: Rewrite the hero JSX**

Replace the eyebrow, `<h1>`, and supporting paragraph (keep the tagline `<h1>` text and `<em>` wrapper byte-for-byte):

```tsx
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="eyebrow justify-center">Business Systems Company</div>
          <h1 className="mt-5 text-[2.75rem] sm:text-[3.5rem]">
            More business,
            <br />
            <em className="text-green-light not-italic">less boring.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-text-secondary">
            We find problems in how businesses operate and build practical systems to
            fix them: websites, professional email, CRM, workflow and reporting,
            automation, and AI where it genuinely helps.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem
            </Link>
            <Link
              href="/services"
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium text-text-primary transition-colors hover:border-green"
            >
              See what we build →
            </Link>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Free 20-minute call · No pitch · UK-based
          </p>
        </div>
```

- [ ] **Step 3: Verify**

Run: `grep -n "AI Automation Consultancy\|AI-powered automations" src/app/page.tsx` → expect no output.
Run: `npm run build` → expect success.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Rewrite homepage hero and ticker around business systems positioning"
```

---

### Task 4: Homepage service pillars (Digital Foundations / Business Systems / Intelligent Systems)

**Files:**
- Modify: `src/app/page.tsx:23-58` (`SERVICE_CARDS`)
- Modify: `src/app/page.tsx:162-196` ("What we do" section heading)

**Interfaces:**
- Produces: `SERVICE_CARDS: { tag: string; title: string; desc: string; icon: IconShape }[]` with exactly 3 entries, same shape consumed unchanged by the existing `.map()` render below it and by `ServiceIcon`.

- [ ] **Step 1: Replace `SERVICE_CARDS`**

```tsx
const SERVICE_CARDS: { tag: string; title: string; desc: string; icon: IconShape }[] = [
  {
    tag: "Foundations",
    title: "Digital Foundations",
    desc: "The website, domain, email, forms and customer data a business needs to operate properly online, set up right and connected to everything else.",
    icon: {
      rects: [
        { x: 3, y: 4, width: 18, height: 7, rx: 1.5 },
        { x: 3, y: 13, width: 18, height: 7, rx: 1.5 },
      ],
      circles: [
        { cx: 7, cy: 7.5, r: 0.75 },
        { cx: 7, cy: 16.5, r: 0.75 },
      ],
    },
  },
  {
    tag: "Systems",
    title: "Business Systems",
    desc: "The processes, workflows, integrations and tools that run day to day. We connect the moving parts and remove the friction between them.",
    icon: {
      path: "M12 7v6M12 13 6.3 17.3M12 13l5.7 4.3",
      circles: [
        { cx: 12, cy: 5, r: 2 },
        { cx: 5, cy: 19, r: 2 },
        { cx: 19, cy: 19, r: 2 },
      ],
    },
  },
  {
    tag: "Intelligent",
    title: "Intelligent Systems",
    desc: "AI applied where it genuinely helps: handling enquiries, processing documents, flagging what needs attention. A capability inside the system, not the point of it.",
    icon: {
      circles: [
        { cx: 8, cy: 9, r: 2 },
        { cx: 16, cy: 9, r: 2 },
        { cx: 12, cy: 17, r: 2 },
      ],
      path: "M8 9 12 17M16 9 12 17M8 9 16 9",
    },
  },
];
```

- [ ] **Step 2: Update the section heading above the cards**

```tsx
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">What we build</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Three ways we make a business work better.
            </h2>
          </Reveal>
```

- [ ] **Step 3: Verify**

Run: `npm run build` → expect success (confirms `IconShape` usage is still valid TS).
Read `src/app/page.tsx` lines 160-200 to confirm the three cards render with the new copy.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Restructure homepage services into Digital Foundations, Business Systems, Intelligent Systems"
```

---

### Task 5: Homepage six-step methodology

**Files:**
- Modify: `src/app/page.tsx:60-76` (`STEPS`)
- Modify: `src/app/page.tsx:200-222` ("How it works" section, including the grid column classes)

**Interfaces:**
- Produces: `STEPS: { n: string; title: string; desc: string }[]` with exactly 6 entries (was 3). The render grid changes from `sm:grid-cols-3` (single row of 3) to `sm:grid-cols-3` two rows of 3 — same class works unchanged since it's just more items wrapping; no interface change needed downstream.

- [ ] **Step 1: Replace `STEPS` with the six-step methodology**

```tsx
const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "We look at how the business actually operates: the process, the tools, the people involved, before assuming anything.",
  },
  {
    n: "02",
    title: "Diagnose",
    desc: "We find the real problem, what's causing it, and what it's costing you in time, money or missed opportunity.",
  },
  {
    n: "03",
    title: "Design",
    desc: "We design a better process and the system to support it, before deciding on any particular technology.",
  },
  {
    n: "04",
    title: "Build",
    desc: "We build and connect what's needed. That could mean a website, a database, an integration, automation, or AI.",
  },
  {
    n: "05",
    title: "Implement",
    desc: "We test it, deploy it, document it, and make sure your team can actually use it day to day.",
  },
  {
    n: "06",
    title: "Improve",
    desc: "We monitor how the system performs and adjust it as the business changes.",
  },
];
```

- [ ] **Step 2: Update the section heading and confirm the grid still reads well with 6 cards**

```tsx
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">How we work</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Discover, diagnose, design, build, implement, improve.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-light/40 font-display text-sm text-green-light">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </Reveal>
```

(Grid changed from `sm:grid-cols-3` to `sm:grid-cols-2 lg:grid-cols-3` so 6 cards read as 3x2 on tablet and 3x2 / 2x3 gracefully rather than an awkward single row of 6 on `sm`.)

- [ ] **Step 3: Verify**

Run: `npm run build` → expect success.
Read the rendered section to confirm 6 numbered steps 01-06 appear in order.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Replace homepage 3-step pitch with the six-step Discover-Improve methodology"
```

---

### Task 6: Homepage "who it's for" + new problem-led examples section

**Files:**
- Modify: `src/app/page.tsx:78-85` (`BUSINESS_TYPES`, keep as-is, only the surrounding copy changes)
- Modify: `src/app/page.tsx:226-252` ("Who it's for" section copy)
- Add new array + new section directly after it (before the ROI calculator teaser `SectionDivider`)

**Interfaces:**
- Produces: new `PROBLEM_EXAMPLES: { problem: string; answer: string }[]` array, consumed by a new section only (nothing else depends on it).

- [ ] **Step 1: Update the "Who it's for" heading/body copy** (`BUSINESS_TYPES` array itself is unchanged)

```tsx
          <Reveal>
            <div className="eyebrow">Who it&apos;s for</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Built for businesses that are busy, not broken.
            </h2>
            <p className="mt-5 max-w-xl text-text-secondary">
              You don&apos;t need a big team or a big budget to benefit from a better
              system. If your business runs on inefficient, disconnected or manual ways
              of working, or your digital setup is held together with different tools,
              that&apos;s exactly what we sort out.
            </p>
          </Reveal>
```

- [ ] **Step 2: Add `PROBLEM_EXAMPLES` array** directly below `BUSINESS_TYPES` (around line 85, before `const SCHEMA`)

```tsx
const PROBLEM_EXAMPLES = [
  {
    problem: "We're losing enquiries.",
    answer:
      "We design an enquiry-to-client system that captures every enquiry, organises it, follows up automatically where it should, alerts your team when it matters, and tracks what happened to it.",
  },
  {
    problem: "Our team spends hours doing admin.",
    answer:
      "We redesign the process and connect the systems behind it, so the manual work that shouldn't exist stops existing.",
  },
  {
    problem: "Our digital setup is held together with different tools.",
    answer:
      "We build a coherent digital foundation, website, email, forms and data, and connect it properly to the rest of the business.",
  },
  {
    problem: "We don't know what's happening.",
    answer:
      "We centralise the information that's scattered across spreadsheets and inboxes and build reporting that actually tells you something.",
  },
  {
    problem: "We're doing the same thing over and over.",
    answer:
      "We work out which parts of that should be redesigned, automated or removed entirely.",
  },
];
```

- [ ] **Step 3: Insert a new section immediately after the "Who it's for" `</section>` and its `<SectionDivider />`** (i.e. right before the `<SectionDivider />` that currently precedes the ROI calculator section - insert the new section + its own `SectionDivider` between "who it's for" and the calculator teaser)

```tsx
      <SectionDivider />

      <section className="relative py-28">
        <SectionSpine side="left" branch="in" />
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">Recognise this?</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Problems we hear a lot.
            </h2>
          </Reveal>
          <Reveal className="flex flex-col gap-4">
            {PROBLEM_EXAMPLES.map((p) => (
              <div
                key={p.problem}
                className="card-hover rounded-2xl border border-border bg-bg-2 p-6"
              >
                <h3 className="text-base text-green-light">&quot;{p.problem}&quot;</h3>
                <p className="mt-2 text-sm text-text-secondary">{p.answer}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
```

Place this new `<section>` block between the existing "who it's for" `</section>` and the `<SectionDivider />` that currently sits right before the ROI calculator `<section>`. Concretely: after the who-it's-for section's closing `</section>`, keep exactly one `<SectionDivider />`, then the new section above, then continue into the existing `<SectionDivider />` + ROI calculator section unchanged.

- [ ] **Step 4: Verify**

Run: `npm run build` → expect success.
Read `src/app/page.tsx` end-to-end once to confirm section order: Hero → ticker → service pillars → divider → how-we-work (6 steps) → divider → who-it's-for → divider → problem examples → divider → ROI calculator teaser → divider → pricing → final CTA.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "Add problem-led examples section and reframe who-it's-for copy"
```

---

### Task 7: Homepage pricing section and final CTA

**Files:**
- Modify: `src/app/page.tsx:282-300` (pricing section)
- Modify: `src/app/page.tsx:302-325` (final CTA section)

**Interfaces:** none.

- [ ] **Step 1: Rewrite the pricing section**

```tsx
      <section className="relative py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <div className="eyebrow justify-center">Pricing</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Priced around the problem.</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Every business is different, so we don&apos;t sell off-the-shelf packages.
              We understand the problem, design the right system, and quote the work
              before we build it.
            </p>
            <Link
              href="/services"
              prefetch={false}
              className="mt-6 inline-block text-sm font-medium text-green-light hover:text-green"
            >
              See how we work →
            </Link>
          </Reveal>
        </div>
      </section>
```

- [ ] **Step 2: Rewrite the final CTA section**

```tsx
      <section className="relative overflow-hidden border-t border-border py-28">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={560} />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <div className="eyebrow justify-center">Let&apos;s talk</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Something not working
              <br />
              <em className="text-green-light not-italic">the way it should?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-text-secondary">
              Tell us what&apos;s slowing you down. Free 20-minute call, no pitch, just a
              conversation about the problem.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem
            </Link>
          </Reveal>
        </div>
      </section>
```

- [ ] **Step 3: Verify**

Run: `grep -n "£8,000\|£200 - priced below" src/app/page.tsx` → the £8,000 stat line (ROI teaser section, untouched by this task) is fine to keep since it's a general cost-of-manual-work stat, not an automation price tag; confirm the old "Automation starts from £200" line is gone.
Run: `npm run build` → expect success.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Rewrite homepage pricing framing and final CTA around problem-led positioning"
```

---

### Task 8: Services page full restructure

**Files:**
- Modify: `src/app/services/page.tsx` (whole file: metadata, icon constants, `AUTOMATION_TIERS` removal, `FAQS`, all section JSX)

**Interfaces:**
- Removes: `AUTOMATION_TIERS` array and its rendering grid entirely.
- Produces: three pillar sections (Digital Foundations, Business Systems, Intelligent Systems) each following the existing "feature block" JSX pattern already used for Care Plan / Hosting / Email / Bundle (icon + eyebrow + h2 + prose + bullet list + optional price footer), so no new visual pattern is introduced.
- Keeps: Hosting/Email/Bundle blocks and their existing public `£/month` pricing (Digital Foundations pillar), Care Plan block (reframed, no promised number), FAQ block pattern (`FAQS: {q,string;a:string}[]`), final CTA block.

- [ ] **Step 1: Update `metadata`**

```tsx
export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital foundations, business systems and intelligent systems: what Struct Solutions builds to fix the problems slowing a business down.",
  alternates: { canonical: "/services" },
};
```

- [ ] **Step 2: Replace the icon constants block** (keep `AUTOMATION_ICON`, `HOSTING_ICON`, `EMAIL_ICON`, `CARE_ICON`, `BUNDLE_ICON` as-is since they're reused; add one new icon for Intelligent Systems matching Task 4's homepage icon)

Add after `CARE_ICON`:

```tsx
const INTELLIGENT_ICON: IconShape = {
  circles: [
    { cx: 8, cy: 9, r: 2 },
    { cx: 16, cy: 9, r: 2 },
    { cx: 12, cy: 17, r: 2 },
  ],
  path: "M8 9 12 17M16 9 12 17M8 9 16 9",
};
```

- [ ] **Step 3: Delete `AUTOMATION_TIERS`** (lines 51-97 in the original file) entirely.

- [ ] **Step 4: Replace `FAQS`**

```tsx
const FAQS = [
  {
    q: "Do I need technical knowledge to work with you?",
    a: "None at all. We handle the technical side completely. You describe the problem in plain language, we design the system and explain what we've built.",
  },
  {
    q: "Do you just build websites?",
    a: "No. A website might be part of the system we build, but the goal is always the underlying problem: a website on its own rarely fixes lost enquiries or scattered customer data. We look at the whole picture.",
  },
  {
    q: "How quickly can you get something live?",
    a: "Most business systems are live within 1-3 weeks of the initial call, depending on scope. Hosting and email setup is usually same-day or next-day.",
  },
  {
    q: "What tools do you connect to?",
    a: "Whatever you're already using: Gmail, Outlook, Google Sheets, Notion, Xero, QuickBooks, Stripe, Calendly, Typeform and hundreds more. If it has an API or a webhook, we can connect to it.",
  },
  {
    q: "Where's my data hosted, and who can see it?",
    a: "Everything runs on EU-based infrastructure. Only the person building and maintaining your system has access to it, it's never shared beyond that. If you offboard, we hand over or delete your systems and credentials at your instruction.",
  },
];
```

- [ ] **Step 5: Replace the hero section**

```tsx
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Services</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">What we build.</h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            We find the problem first. What we build to fix it usually falls into one
            of three areas.
          </p>
        </div>
      </section>
```

- [ ] **Step 6: Replace the first section (previously the automation tiers block) with a Digital Foundations pillar intro block**, following the existing feature-block pattern used later in the file for Hosting:

```tsx
      <section className="relative py-16">
        <SectionSpine side="left" branch="out" />
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-border bg-bg-2 p-8 sm:p-10">
            <span className="absolute top-8 right-8 rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light">
              01
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={HOSTING_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Digital Foundations
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              The digital infrastructure a business needs to operate properly online
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                Website, domain, professional email, forms, customer intake, booking,
                basic CRM and analytics. Not a website for its own sake, the
                infrastructure that supports how the business actually operates and
                competes.
              </p>
              <p>
                We design the right foundation for what you need, then connect it to
                the rest of the business rather than leaving it as an island.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
```

- [ ] **Step 7: Immediately after that block (before the existing Care Plan section), insert a Business Systems pillar block and an Intelligent Systems pillar block**, same visual pattern:

```tsx
      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-border bg-bg-2 p-8 sm:p-10">
            <span className="absolute top-8 right-8 rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light">
              02
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={AUTOMATION_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Business Systems
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              The systems behind day-to-day operations
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                Process design, workflow systems, integrations, databases, CRM,
                automation, internal tools and reporting. We connect the moving parts
                of the business and remove the friction between them.
              </p>
              <p>
                We use n8n as our core automation tool where automation is the right
                answer, connected to whatever software you're already using: Gmail,
                Outlook, Google Sheets, Notion, Xero, and hundreds more.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-border bg-bg-2 p-8 sm:p-10">
            <span className="absolute top-8 right-8 rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light">
              03
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={INTELLIGENT_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Intelligent Systems
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              AI, used where it genuinely earns its place
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                AI-assisted workflows, document processing, classification, intelligent
                enquiry handling, decision support and advanced reporting. AI is a
                capability we bring into a system when it improves the outcome, not a
                default we reach for.
              </p>
              <p>
                Anything using OpenAI or Anthropic's models carries ongoing API usage
                costs on top of the build, scaled to how much it's actually used. In
                most cases you'll hold your own API key, so usage is billed to you at
                cost with full visibility. We'll always tell you the expected running
                cost before you commit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
```

- [ ] **Step 8: Reframe the Care Plan block's price footer** (keep the rest of that block as-is: icon, heading, included list). Replace only the closing price paragraph:

```tsx
            <div className="mt-7 border-t border-border pt-5 text-sm text-text-secondary">
              <span className="text-text-primary">From £100/month.</span> Scoped to how
              many systems you have and how much monitoring you want.
            </div>
```

Also update the Care Plan `<h2>` copy slightly so it isn't automation-specific:

```tsx
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              If you&apos;d rather we kept an eye on it
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                Not required, your system keeps working without it, and this
                doesn&apos;t change our no-long-contracts promise. No forced ongoing
                payment, cancel any time.
              </p>
            </div>
```

- [ ] **Step 9: Leave the Hosting, Email, and Bundle blocks (with their existing £20/£18/£34 per-month pricing) structurally unchanged**, they already describe Digital Foundations pricing correctly. Only reword any sentence that says "automation" where it should say "systems", e.g. in the Email block's closing paragraph:

```tsx
              <p>
                Want automation on top? We can build that in. Your enquiry form
                auto-responds. Your invoices chase themselves.
              </p>
```

(This is the one line to touch in that block; everything else stays as written.)

- [ ] **Step 10: Remove the "Two rounds of revisions..." note's dependency on the deleted tiers grid** by moving it to sit under the Business Systems pillar block instead (Step 7), as its own paragraph directly after that block's closing `</Reveal>`:

```tsx
          <p className="mt-4 text-xs text-text-muted">
            Two rounds of revisions are included in every fixed-price system, further
            changes are quoted separately.
          </p>
```

- [ ] **Step 11: Update the closing "Not sure where to start?" CTA button label**

```tsx
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem
            </Link>
```

- [ ] **Step 12: Verify**

Run: `grep -n "AUTOMATION_TIERS\|£200–280\|£400–550\|From £900" src/app/services/page.tsx` → expect no output (confirms the old tier pricing is fully gone).
Run: `grep -n "—" src/app/services/page.tsx` → expect no output.
Run: `npm run build` → expect success.
Read the full file once top to bottom to confirm section order: hero → Digital Foundations → Business Systems → Intelligent Systems → Care Plan → Hosting → Email → Bundle → divider → FAQ → final CTA.

- [ ] **Step 13: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "Restructure services page into three pillars, remove per-automation pricing tiers"
```

---

### Task 9: About page rewrite

**Files:**
- Modify: `src/app/about/page.tsx` (whole file: metadata, `VALUES`, hero, narrative paragraphs)

**Interfaces:**
- Keeps: `VALUES: { title: string; desc: string }[]` shape unchanged, only string content updated.

- [ ] **Step 1: Update `metadata`**

```tsx
export const metadata: Metadata = {
  title: "About",
  description:
    "Struct Solutions is a lean business systems company for UK small businesses: we find the problems in how a business operates and build the systems to fix them.",
  alternates: { canonical: "/about" },
};
```

- [ ] **Step 2: Update `VALUES`** (keep the three-principle structure, tighten wording so it reads systems-first rather than automation-first)

```tsx
const VALUES = [
  {
    title: "We say what we'll do and do what we say",
    desc: "No vague timelines. We scope projects properly, quote before we start, and deliver what we agreed.",
  },
  {
    title: "We explain what we've built",
    desc: "You'll always know what your system does, how it works, and what to tell us if something changes.",
  },
  {
    title: "We price on value, not hours",
    desc: "Fixed quotes, no day rates. The price reflects what the system is worth to you, not how long it took us.",
  },
];
```

- [ ] **Step 3: Rewrite the hero section**

```tsx
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Who we are</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Built to help businesses
            <br />
            <em className="text-green-light not-italic">work smarter.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            No fluff. No layers. Just someone who understands how a business runs and
            builds the systems to fix what isn&apos;t working.
          </p>
        </div>
      </section>
```

- [ ] **Step 4: Rewrite the narrative paragraphs**

```tsx
      <section className="relative py-16">
        <SectionSpine side="left" branch="out" />
        <div className="mx-auto max-w-[760px] px-6">
          <Reveal className="flex flex-col gap-5 text-text-secondary">
            <p>
              Struct Solutions exists to help businesses solve problems created by
              inefficient processes, disconnected systems, repetitive manual work, poor
              digital foundations and information that&apos;s scattered across
              spreadsheets, inboxes and someone&apos;s memory.
            </p>
            <p>
              We look at how a business actually works, find where time, money,
              opportunities or accuracy are being lost, and design a practical system
              to fix it. The system could be a website, a CRM, an integration, a piece
              of automation, an internal tool, or AI, whichever combination actually
              solves the problem. The technology isn&apos;t the product. The solved
              problem is.
            </p>
            <p>
              We&apos;re a lean, specialist company, which means no account managers,
              no handoffs, and no one translating what you want into something a
              developer will actually build. You work directly with the person doing
              the work. Most clients see their first piece of the system running within
              a week or two of the initial call.
            </p>
          </Reveal>
        </div>
      </section>
```

- [ ] **Step 5: Update "How we work" section heading only (VALUES cards render unchanged structurally)**

```tsx
          <Reveal className="mb-14 text-center">
            <div className="eyebrow justify-center">How we work</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Three principles.</h2>
          </Reveal>
```

(unchanged from original, confirming no edit needed here beyond what Step 2 already changed in the data.)

- [ ] **Step 6: Update the closing CTA button label**

```tsx
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem
            </Link>
```

- [ ] **Step 7: Verify**

Run: `grep -n "AI automation\|AI Automation\|—" src/app/about/page.tsx` → expect no output.
Run: `npm run build` → expect success.

- [ ] **Step 8: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "Rewrite About page around business systems philosophy"
```

---

### Task 10: Contact page copy + ContactForm field restructure

**Files:**
- Modify: `src/app/contact/page.tsx:16-32` (`NEXT_STEPS`) and hero copy
- Modify: `src/components/ContactForm.tsx` (whole file)

**Interfaces:**
- Produces (ContactForm): the form still calls `emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY })` with the same `SERVICE_ID`/`TEMPLATE_ID`/`PUBLIC_KEY` constants (unchanged, since we don't have access to modify the remote EmailJS template in this task). `payload` gains new keys but keeps the existing `from_name`, `from_email`, `business_name`, `subject`, `message` keys so the current EmailJS template (which only renders a subset of these) keeps working unchanged.

- [ ] **Step 1: Update contact hero copy**

```tsx
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Contact</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">Let&apos;s talk.</h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            Tell us what&apos;s not working. Book a free 20-minute call or send a
            message, we&apos;ll get back to you as soon as possible.
          </p>
        </div>
```

- [ ] **Step 2: Update `NEXT_STEPS`**

```tsx
const NEXT_STEPS = [
  {
    n: "01",
    title: "You hear back as soon as possible",
    desc: "We'll reply with a few questions or a link to book a call, whichever makes more sense for what you've told us.",
  },
  {
    n: "02",
    title: "Free 20-minute call",
    desc: "No pitch. We ask about your business, where the time and money are going, and whether a system would actually help. Honest conversation.",
  },
  {
    n: "03",
    title: "We quote before we start",
    desc: "If there's a fit, we send a fixed-price quote. No day rates, no vague estimates. You approve before anything gets built.",
  },
];
```

- [ ] **Step 3: Rewrite `ContactForm.tsx` in full**

```tsx
"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

const SERVICE_ID = "service_8wjxfiw";
const TEMPLATE_ID = "template_5dbqcal";
const PUBLIC_KEY = "547Y5-X7Qy3MgqjUh";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const business = formData.get("business");
    const website = formData.get("website");
    const improve = formData.get("improve");
    const friction = formData.get("friction");
    const context = formData.get("context");
    setStatus("sending");

    const message = [
      `What they're trying to improve: ${improve}`,
      `What's taking too much time or causing problems: ${friction}`,
      `Additional context: ${context || "None provided"}`,
    ].join("\n\n");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: formData.get("email"),
          business_name: business || "Not provided",
          website: website || "Not provided",
          subject: `Website enquiry from ${name}${business ? ` (${business})` : ""}`,
          message,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-lg text-text-primary">Send a message</h3>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm text-text-secondary">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Jane Smith"
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm text-text-secondary">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@business.co.uk"
          className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-business" className="text-sm text-text-secondary">
            Business name (optional)
          </label>
          <input
            id="contact-business"
            name="business"
            type="text"
            placeholder="Your business"
            className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-website" className="text-sm text-text-secondary">
            Website (optional)
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            placeholder="yourbusiness.co.uk"
            className="rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-improve" className="text-sm text-text-secondary">
          What are you trying to improve?
        </label>
        <textarea
          id="contact-improve"
          name="improve"
          rows={2}
          required
          placeholder="e.g. How we handle new enquiries"
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-friction" className="text-sm text-text-secondary">
          What currently takes too much time or causes problems?
        </label>
        <textarea
          id="contact-friction"
          name="friction"
          rows={4}
          required
          placeholder="e.g. We get a lot of enquiries and reply to them manually. It takes hours every week."
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-context" className="text-sm text-text-secondary">
          Anything else we should know? (optional)
        </label>
        <textarea
          id="contact-context"
          name="context"
          rows={3}
          placeholder="Any extra context that would help"
          className="resize-y rounded-lg border border-border bg-bg-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-green"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-light">
          ✓ Message received. We&apos;ll be back to you as soon as possible.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please email us directly at hello@struct.solutions
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 4: Verify**

Run: `grep -n "—" src/components/ContactForm.tsx src/app/contact/page.tsx` → expect no output.
Run: `npm run build` → expect success.
Manually test in dev server (see Task 12) that submitting the form still fires the existing EmailJS success/error states (do not need a real send, just confirm no runtime error on submit given valid EmailJS creds are unchanged).

- [ ] **Step 5: Commit**

```bash
git add src/app/contact/page.tsx src/components/ContactForm.tsx
git commit -m "Rebuild contact form around problem-led fields, drop technical questions"
```

---

### Task 11: Work, Projects, and Calculator pages — light copy touch

**Files:**
- Modify: `src/app/work/page.tsx` (hero paragraph + closing CTA button only)
- Modify: `src/app/projects/page.tsx` (hero paragraph + closing CTA button only)
- Modify: `src/app/calculator/page.tsx` (hero paragraph only)

**Interfaces:** none, purely string edits, no structural change to any of the three files.

- [ ] **Step 1: `work/page.tsx`** — update the hero supporting paragraph and the final CTA button label only

```tsx
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            Here&apos;s exactly how one of our systems works, start to finish, the
            same kind of build we do for the businesses we work with.
          </p>
```

```tsx
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem →
            </Link>
```

- [ ] **Step 2: `projects/page.tsx`** — update the hero supporting paragraph and the final CTA button label only

```tsx
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            A few of the systems behind our own builds, real templates, not
            slideware, published on GitHub for anyone to inspect or adapt.
          </p>
```

```tsx
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Talk about a problem →
            </Link>
```

- [ ] **Step 3: `calculator/page.tsx`** — update the hero heading/paragraph only, keep the iframe and everything else untouched

```tsx
        <div className="eyebrow justify-center">ROI Calculator</div>
        <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
          What&apos;s the manual way actually costing you?
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-text-secondary">
          Plug in a task you do by hand, see the annual cost, and how quickly the
          right system pays for itself.
        </p>
```

- [ ] **Step 4: Verify**

Run: `grep -n "—" src/app/work/page.tsx src/app/projects/page.tsx src/app/calculator/page.tsx` → expect no output.
Run: `npm run build` → expect success.

- [ ] **Step 5: Commit**

```bash
git add src/app/work/page.tsx src/app/projects/page.tsx src/app/calculator/page.tsx
git commit -m "Light copy touch on work, projects, and calculator pages for consistency"
```

---

### Task 12: Full-repo verification against the spec

**Files:** none modified; this is a verification-only task.

- [ ] **Step 1: Em dash sweep across the whole `src/` tree**

Run: `grep -rn "—" src/`
Expected: no output. If anything is found, fix it in place (commas/colons/hyphens) and re-run until clean.

- [ ] **Step 2: Production build**

Run: `npm run build`
Expected: build succeeds with no type errors, all routes (`/`, `/about`, `/calculator`, `/contact`, `/projects`, `/services`, `/work`) statically generated.

- [ ] **Step 3: Brand-preservation spot check**

Run: `grep -n "green\|bg-2\|font-syne\|font-dm-sans" src/app/globals.css`
Expected: identical to the values captured before this plan started (no diff against `git diff src/app/globals.css`, which should be empty).
Run: `git diff --stat src/components/Nav.tsx src/components/Footer.tsx` and confirm the logo `<Image>` blocks are untouched (only text content changed).

- [ ] **Step 4: Manual read-through against the spec's final positioning test**

Start the dev server and click through all seven routes:

Run: `npm run dev` (background), then visit `http://localhost:3000/`, `/services`, `/about`, `/work`, `/projects`, `/contact`, `/calculator`.

For each page, confirm:
- Logo, colors, fonts look unchanged from before this plan.
- The hero tagline "More business, less boring." still appears exactly, unchanged, on the homepage.
- No page leads with "AI" or "automation" as the identity, every page leads with problems/systems.
- Every primary CTA button reads "Talk about a problem" (not "Book a free call").
- No em dashes anywhere in visible copy.
- The contact form shows the new 7-field layout (name, email, business, website, what to improve, what's taking too much time, optional context).

- [ ] **Step 5: Commit** (only if Step 1 required fixes; otherwise this task produces no diff and needs no commit)

```bash
git add -A
git commit -m "Fix stray em dashes found in full-repo sweep"
```
