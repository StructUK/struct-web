import Image from "next/image";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import ContactForm from "@/components/ContactForm";

const TICKER_ITEMS = [
  "Fast Growth",
  "Strong Structure",
  "Data-Driven",
  "Reliable Results",
  "Scalable Build",
  "Consistent Ops",
  "Real Metrics",
  "Broad Reach",
  "AI-Powered",
  "Automation Ready",
];

const PILLARS = [
  {
    tag: "Web Dev",
    title: "Web Development",
    desc: "Fast, scalable sites engineered for performance and conversion-focused UX.",
    path: "M9 4 5 12l4 8M15 4l4 8-4 8M13 4l-2 16",
  },
  {
    tag: "SEO",
    title: "SEO Strategy",
    desc: "Organic growth that compounds — keyword research, audits, and link building.",
    path: "M3 18 9 12l4 4 8-9M21 7h-5M21 7v5",
  },
  {
    tag: "GBP",
    title: "Google Business Profile",
    desc: "Dominate local search and appear when customers are actively searching.",
    path: "M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z",
    circle: { cx: 12, cy: 9, r: 2.4 },
  },
  {
    tag: "Automation",
    title: "AI & Automation",
    desc: "Intelligent systems that replace repetitive, time-consuming work.",
    path: "M12 7v6M12 13 6.3 17.3M12 13l5.7 4.3",
    circles: [
      { cx: 12, cy: 5, r: 2 },
      { cx: 5, cy: 19, r: 2 },
      { cx: 19, cy: 19, r: 2 },
    ],
    badge: true,
  },
];

const STATS = [
  { target: 68, suffix: "%", label: "avg. organic traffic increase" },
  { target: 4, suffix: "×", label: "user retention" },
  { target: 48, suffix: "%", label: "more strong leads" },
  { target: 6, suffix: "", label: "month avg. to measurable ROI" },
];

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "Comprehensive audit of your digital presence — performance, keyword gaps, competitor analysis, conversion bottlenecks.",
  },
  {
    n: "02",
    title: "Strategise",
    desc: "Tailored growth roadmap balancing quick wins with long-term structural improvements.",
  },
  {
    n: "03",
    title: "Optimise",
    desc: "We execute — rebuilding the site, deploying SEO, optimising your Google presence, clean analytics.",
  },
  {
    n: "04",
    title: "Grow",
    desc: "Monitor, iterate, and compound your gains with monthly reporting and proactive optimisation.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Struct Solutions",
  url: "https://www.struct.solutions/",
  email: "contact@struct.solutions",
  description:
    "Digital growth agency offering SEO, web development, paid ads, email marketing, and AI automation.",
  areaServed: "GB",
  serviceType: [
    "SEO",
    "Web Development",
    "Google Business Profile",
    "Paid Ads",
    "Email Marketing",
    "AI Automation",
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
        <Lattice variant="hero" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="eyebrow justify-center">Digital Growth Agency</div>
          <h1 className="mt-5 text-[2.75rem] sm:text-[3.5rem]">
            Modern systems,
            <br />
            <em className="text-green-light not-italic">modern results.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-text-secondary">
            High-performance websites, SEO strategies, Google Business optimisation, and
            AI-powered systems — everything a growing business needs to compete and win
            online.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green px-6 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Get a Free Audit →
            </Link>
            <Link
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium text-text-primary transition-colors hover:border-green"
            >
              How it works
            </Link>
          </div>
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

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">What we do</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              The eight pillars of digital growth.
            </h2>
            <p className="mt-4 text-text-secondary">
              Every service we offer is engineered for one outcome — more qualified
              traffic, more leads, more revenue.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="relative rounded-2xl border border-border bg-bg-2 p-7"
              >
                {p.badge && (
                  <span className="absolute top-6 right-6 rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light">
                    New
                  </span>
                )}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-green-glow">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="var(--green-light)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={p.path} />
                    {p.circle && <circle cx={p.circle.cx} cy={p.circle.cy} r={p.circle.r} />}
                    {p.circles?.map((c, i) => (
                      <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
                    ))}
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{p.desc}</p>
              </div>
            ))}
          </Reveal>
          <Link
            href="/services"
            className="mt-10 inline-block text-sm font-medium text-green-light hover:text-green"
          >
            See all services →
          </Link>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">Our Work</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Sites built to perform.</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-2">
              <div className="aspect-[16/10] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dkcfkzzla/image/upload/q_auto/f_auto/v1780899837/image_2026-06-08_072356690_yg07ec.png"
                  alt="Based Media Group"
                  width={800}
                  height={500}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2">
                  {["Featured", "Web Dev", "SEO", "Branding"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg">Based Media Group</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  A bold digital home for a creative solutions powerhouse — sharp, fast,
                  and impossible to ignore.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-2">
              <div className="flex aspect-[16/10] items-center justify-center bg-bg-3 px-6 text-center text-sm text-text-muted">
                TechPod screenshot — asset pending
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-2">
                  {["Web Dev", "SEO", "GBP"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-lg">TechPod</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  A high-converting site for Manchester&apos;s leading tech repair
                  specialists. Rated 4.9/5 by 800+ customers.
                </p>
              </div>
            </div>
          </Reveal>
          <Link
            href="/work"
            className="mt-10 inline-block text-sm font-medium text-green-light hover:text-green"
          >
            See all work →
          </Link>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="eyebrow justify-center">Results that matter</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Structured websites.
              <br />
              Stronger rankings.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Our proven methods unlock higher search rankings, scalable digital
              architecture, and truly measurable growth.
            </p>
          </Reveal>
          <Reveal className="relative mt-16">
            <div className="absolute top-1 left-0 right-0 h-px bg-border" />
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
              {STATS.map((s) => (
                <StatCounter key={s.label} target={s.target} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="process" className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 max-w-xl">
            <div className="eyebrow">How it works</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              From audit to growth in four steps.
            </h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="py-28">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <p className="text-xl text-text-primary sm:text-2xl">
              &ldquo;Struct Solutions boosted our leads by 48% and doubled organic
              traffic in just six months. The most transparent agency we&apos;ve ever
              worked with.&rdquo;
            </p>
            <div className="mt-6 text-sm text-text-secondary">
              <strong className="text-text-primary">Natalie M.</strong> · COO, PaintQuick
              Ltd.
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <div className="eyebrow">Let&apos;s talk</div>
              <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
                Ready for
                <br />
                <em className="text-green-light not-italic">real, natural growth?</em>
              </h2>
              <p className="mt-5 max-w-md text-text-secondary">
                Request your free website audit today and discover exactly where your
                traffic and conversions are being left on the table.
              </p>
              <p className="mt-3 text-sm text-text-muted">
                No commitment. Results within 48 hours.
              </p>
            </div>
            <ContactForm idPrefix="home" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
