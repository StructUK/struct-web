import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";
import ServiceIcon, { type IconShape } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital foundations, business systems and intelligent systems: what Struct Solutions builds to fix the problems slowing a business down.",
  alternates: { canonical: "/services" },
};

const AUTOMATION_ICON: IconShape = {
  path: "M12 7v6M12 13 6.3 17.3M12 13l5.7 4.3",
  circles: [
    { cx: 12, cy: 5, r: 2 },
    { cx: 5, cy: 19, r: 2 },
    { cx: 19, cy: 19, r: 2 },
  ],
};

const HOSTING_ICON: IconShape = {
  rects: [
    { x: 3, y: 4, width: 18, height: 7, rx: 1.5 },
    { x: 3, y: 13, width: 18, height: 7, rx: 1.5 },
  ],
  circles: [
    { cx: 7, cy: 7.5, r: 0.75 },
    { cx: 7, cy: 16.5, r: 0.75 },
  ],
};

const CARE_ICON: IconShape = {
  path: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",
  circle: { cx: 12, cy: 12, r: 2.5 },
};

const INTELLIGENT_ICON: IconShape = {
  circles: [
    { cx: 8, cy: 9, r: 2 },
    { cx: 16, cy: 9, r: 2 },
    { cx: 12, cy: 17, r: 2 },
  ],
  path: "M8 9 12 17M16 9 12 17M8 9 16 9",
};

const CARE_PLAN_INCLUDED = [
  "Monitoring for system failures",
  "Fixes when a connected API or tool changes behaviour",
  "A set number of hours each month for small tweaks",
];

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
    q: "Can I just buy hosting or email from you on their own?",
    a: "Not as a standalone product, no. We're not a hosting company. If hosting or email is part of the system we've built for you, we set it up properly and manage it as part of that system, not as a separate bill with no system behind it.",
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

export default function Services() {
  return (
    <>
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
                When hosting or email is part of what we build, we set it up properly
                (EU-based infrastructure, Cloudflare protection, the DNS records that
                keep your email out of spam) and manage it as part of your system. We
                don&apos;t sell a mailbox or a hosting plan on its own with nothing
                behind it, that&apos;s not a system, it&apos;s just a bill.
              </p>
              <p>
                We design the right foundation for what you need, then connect it to
                the rest of the business rather than leaving it as an island.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

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
                Where automation is the right answer, we often build it in n8n,
                connected to whatever software you&apos;re already using: Gmail,
                Outlook, Google Sheets, Notion, Xero, and hundreds more. The tool is
                whatever gets the job done properly, not the point of the exercise.
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
                Anything using OpenAI or Anthropic&apos;s models carries ongoing API usage
                costs on top of the build, scaled to how much it&apos;s actually used. In
                most cases you&apos;ll hold your own API key, so usage is billed to you at
                cost with full visibility. We&apos;ll always tell you the expected running
                cost before you commit.
              </p>
            </div>
          </Reveal>
          <p className="mt-4 text-xs text-text-muted">
            Two rounds of revisions are included in every fixed-price system, further
            changes are quoted separately.
          </p>
        </div>
      </section>

      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-border bg-bg-2 p-8 sm:p-10">
            <span className="absolute top-8 right-8 rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light">
              Optional
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={CARE_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Care Plan
            </span>
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
            <p className="mt-7 text-xs font-medium uppercase tracking-wider text-text-muted">
              What&apos;s included
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {CARE_PLAN_INCLUDED.map((e) => (
                <div key={e} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-sm text-text-secondary">{e}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-border pt-5 text-sm text-text-secondary">
              <span className="text-text-primary">From £100/month.</span> Scoped to how
              many systems you have and how much monitoring you want.
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-24">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-12 text-center">
            <div className="eyebrow justify-center">FAQ</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Common questions.</h2>
          </Reveal>
          <Reveal className="flex flex-col gap-5">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-bg-2 p-6">
                <h3 className="text-base">{f.q}</h3>
                <p className="mt-2 text-sm text-text-secondary">{f.a}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={460} />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Not sure where to start?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Talk to us. We&apos;ll talk through what&apos;s slowing you down and tell
              you honestly whether a system would help, no pitch, no pressure.
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
