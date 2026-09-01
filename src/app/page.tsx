import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";
import HeroBackground from "@/components/HeroBackground";
import ServiceIcon, { type IconShape } from "@/components/ServiceIcon";

const TICKER_ITEMS = [
  "AI-Powered",
  "Workflow Automation",
  "UK-Based",
  "No Long Contracts",
  "Fast Setup",
  "EU Hosting",
  "Reliable Systems",
  "Fixed Pricing",
  "Built to Run",
  "Real Support",
];

const SERVICE_CARDS: { tag: string; title: string; desc: string; icon: IconShape }[] = [
  {
    tag: "Automation",
    title: "AI Automation",
    desc: "Stop doing the same task twice. We build workflows that handle your enquiries, follow-ups, CRM updates, and admin - automatically.",
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
    tag: "Hosting",
    title: "Website Hosting",
    desc: "Fast, secure hosting on EU infrastructure with Cloudflare on every domain. You've got enough to worry about.",
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
    tag: "Email",
    title: "Email Hosting",
    desc: "Professional email addresses that actually land in inboxes. Set up right, with the records that matter.",
    icon: { rect: true, path: "m3 7 9 6 9-6" },
  },
];

const STEPS = [
  {
    n: "01",
    title: "Tell us what's taking up your time",
    desc: "We have a free 20-minute call. You describe what's slowing you down - we listen, ask questions, and work out where automation would make the biggest difference.",
  },
  {
    n: "02",
    title: "We build it",
    desc: "We design and build your automation using n8n and AI tools, connected to whatever software you already use. Most setups are live within a week.",
  },
  {
    n: "03",
    title: "It runs while you focus elsewhere",
    desc: "Your automation works in the background - 24 hours a day, without errors, without chasing. You get the output, not the effort.",
  },
];

const BUSINESS_TYPES = [
  "Trades and contractors",
  "Professional services (solicitors, accountants, consultants)",
  "Health and wellness practitioners",
  "Estate agents and letting agencies",
  "E-commerce and product businesses",
  "Any small business taking enquiries online",
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Struct Solutions",
  url: "https://www.struct.solutions/",
  email: "hello@struct.solutions",
  description:
    "Struct Solutions builds AI-powered workflow automations for UK small businesses, with website hosting, email hosting, and ongoing support.",
  areaServed: "GB",
  serviceType: [
    "AI Automation",
    "Workflow Automation",
    "Website Hosting",
    "Email Hosting",
    "IT Support",
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
          <div className="eyebrow justify-center">AI Automation Consultancy</div>
          <h1 className="mt-5 text-[2.75rem] sm:text-[3.5rem]">
            More business,
            <br />
            <em className="text-green-light not-italic">less boring.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-text-secondary">
            Struct Solutions creates AI-powered automations that handle your follow-ups,
            enquiries, and admin - so you can focus on the work that actually grows your
            business.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Book a free call
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
            <div className="eyebrow">What we do</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Automation built around your business.
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
            <div className="eyebrow">How it works</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              From problem to running in days.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-3">
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
              You don&apos;t need a big team or a big budget to benefit from automation. If
              you&apos;re running a business where the same tasks keep coming back - chasing
              payments, following up leads, confirming bookings - we can sort that.
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
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <div className="eyebrow justify-center">Pricing</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Straightforward pricing.</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Most automation setups start from £250 per workflow. Website hosting from
              £20/month. We quote per project and keep it simple.
            </p>
            <Link
              href="/services"
              prefetch={false}
              className="mt-6 inline-block text-sm font-medium text-green-light hover:text-green"
            >
              See full pricing →
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
              Ready to stop doing it
              <br />
              <em className="text-green-light not-italic">manually?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-text-secondary">
              Book a free 20-minute call. No pitch - just a conversation about where
              automation could help.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Book a free call
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
