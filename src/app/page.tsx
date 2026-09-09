import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";
import HeroBackground from "@/components/HeroBackground";
import ServiceIcon, { type IconShape } from "@/components/ServiceIcon";

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

const BUSINESS_TYPES = [
  "Trades and contractors",
  "Professional services (solicitors, accountants, consultants)",
  "Health, wellness and fitness businesses",
  "Golf clubs and membership organisations",
  "Estate agents and letting agencies",
  "E-commerce and product businesses",
  "Any small business taking enquiries or bookings online",
];

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <section className="relative overflow-hidden pt-44 pb-32">
        <HeroBackground />
        <Lattice variant="hero" />
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
      </section>

      <div className="overflow-hidden border-y border-border bg-bg-2 py-4">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="mx-5 whitespace-nowrap text-sm text-text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="relative py-28">
        <SectionSpine side="right" branch="out" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">What we build</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Three ways we make a business work better.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {SERVICE_CARDS.map((s) => (
              <div
                key={s.title}
                className="card-hover relative rounded-2xl border border-border bg-bg-2 p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-green-glow">
                  <ServiceIcon shape={s.icon} />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {s.tag}
                </span>
                <h3 className="mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </Reveal>
          <Link
            href="/services"
            prefetch={false}
            className="mt-10 inline-block text-sm font-medium text-green-light hover:text-green"
          >
            View all services →
          </Link>
        </div>
      </section>

      <SectionDivider />

      <section className="relative overflow-hidden py-28">
        <SectionSpine side="left" branch="in" />
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={520} />
        <div className="relative mx-auto max-w-6xl px-6">
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
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-28">
        <SectionSpine side="right" branch="out" />
        <div className="mx-auto max-w-4xl px-6">
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
          <Reveal className="mt-8 flex flex-col gap-3">
            {BUSINESS_TYPES.map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-lg border border-border bg-bg-2 px-4 py-3"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                <span className="text-sm text-text-secondary">{t}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

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

      <SectionDivider />

      <section className="relative overflow-hidden py-28">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={480} />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <div className="eyebrow justify-center">Know your number</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Most SMBs spend <em className="text-green-light not-italic">£8,000+</em> a
              year on tasks a machine could handle.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-text-secondary">
              Plug in one task you do by hand and see what it&apos;s really costing you -
              and how fast automating it pays for itself.
            </p>
            <Link
              href="/calculator"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Calculate yours →
            </Link>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

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
    </>
  );
}
