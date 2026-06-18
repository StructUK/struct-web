import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, SEO, paid ads, email marketing, AI automation and more. Everything a growing business needs online.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    tag: "Web Dev",
    title: "Web Development",
    desc: "Fast, scalable sites engineered for performance. Clean architecture, lightning load times, and conversion-focused UX that turns visitors into leads. Every site we build is built to rank and built to last.",
    path: "M9 4 5 12l4 8M15 4l4 8-4 8M13 4l-2 16",
  },
  {
    tag: "SEO",
    title: "SEO Strategy",
    desc: "Organic growth that compounds. Keyword research, technical audits, content strategy, and link building — all measured by traffic and revenue, not vanity metrics. We build search presence that doesn't disappear when you pause a budget.",
    path: "M3 18 9 12l4 4 8-9M21 7h-5M21 7v5",
  },
  {
    tag: "GBP",
    title: "Google Business Profile",
    desc: "Dominate local search results. We optimise and manage your Google Business Profile and wider digital presence so you appear when customers are actively searching for your services — not your competitors.",
    path: "M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z",
    circle: { cx: 12, cy: 9, r: 2.4 },
  },
  {
    tag: "Growth",
    title: "Growth Support & Reporting",
    desc: "Continuous optimisation and transparent reporting. Monthly insights, clear metrics, and proactive recommendations — so your growth never plateaus. We track organic traffic, keyword rankings, conversions, and ROI in real time.",
    path: "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
  },
  {
    tag: "Paid Ads",
    title: "Paid Ads (Google & Meta)",
    desc: "Targeted paid campaigns that turn budget into pipeline. We manage Google Ads and Meta Ads end-to-end — audience research, creative, copy, bidding strategy, and conversion tracking — maximising every pound you spend.",
    circles3: [
      { cx: 12, cy: 12, r: 9 },
      { cx: 12, cy: 12, r: 5 },
      { cx: 12, cy: 12, r: 1 },
    ],
  },
  {
    tag: "Email",
    title: "Email Marketing",
    desc: "Your audience, nurtured. We build and run email strategies that drive repeat business, warm cold leads, and keep your brand front of mind — from campaign design to automation flows and list growth.",
    rect: true,
    path: "m3 7 9 6 9-6",
  },
  {
    tag: "Automation",
    title: "AI & Workflow Automation",
    desc: "Powered by Struct. We identify the repetitive, time-consuming tasks in your business and replace them with intelligent automated systems — from lead processing and CRM automation to AI-assisted content and reporting. Work smarter, not harder.",
    path: "M12 7v6M12 13 6.3 17.3M12 13l5.7 4.3",
    circles: [
      { cx: 12, cy: 5, r: 2 },
      { cx: 5, cy: 19, r: 2 },
      { cx: 19, cy: 19, r: 2 },
    ],
    badge: true,
  },
  {
    tag: "Bespoke",
    title: "Bespoke Solutions",
    desc: "No two businesses are the same. If your challenge doesn't fit a category, we build around it. Bring us your problem — we'll build you the solution. From custom integrations to full digital transformations, Struct delivers what you actually need.",
    path: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Services</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Everything you need.
            <br />
            <em className="text-green-light not-italic">Nothing you don&apos;t.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            We don&apos;t sell packages — we build solutions around your business.
            Here&apos;s what&apos;s in our toolkit.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-border bg-bg-2 p-7"
              >
                {s.badge && (
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
                    {s.rect && <rect x="3" y="5" width="18" height="14" rx="2" />}
                    {s.path && <path d={s.path} />}
                    {s.circle && <circle cx={s.circle.cx} cy={s.circle.cy} r={s.circle.r} />}
                    {s.circles?.map((c, i) => (
                      <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
                    ))}
                    {s.circles3?.map((c, i) => (
                      <circle key={i} cx={c.cx} cy={c.cy} r={c.r} />
                    ))}
                  </svg>
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {s.tag}
                </span>
                <h3 className="mt-2 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{s.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Not sure where to start?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Book a free audit. We&apos;ll map your current digital presence, identify
              the gaps, and tell you exactly what would move the needle — no
              commitment, no pressure.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Get a Free Audit →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
