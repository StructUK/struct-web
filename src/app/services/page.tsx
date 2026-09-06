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
    "AI workflow automation, website hosting, email hosting, and ongoing support - everything a growing business needs to stop doing admin manually.",
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

const EMAIL_ICON: IconShape = { rect: true, path: "m3 7 9 6 9-6" };

const CARE_ICON: IconShape = {
  path: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z",
  circle: { cx: 12, cy: 12, r: 2.5 },
};

const BUNDLE_ICON: IconShape = {
  circles: [
    { cx: 9, cy: 12, r: 4.5 },
    { cx: 15, cy: 12, r: 4.5 },
  ],
};

const AUTOMATION_TIERS = [
  {
    tag: "Single workflow",
    name: "Starter",
    price: "£200–280",
    desc: "One trigger, no branching, 1–2 integrations. No AI.",
    examples: [
      "Lead notification to Slack + spreadsheet",
      "New enquiry logged straight into your CRM",
      "Form submission triggers a team alert",
    ],
  },
  {
    tag: "Proven template",
    name: "Playbook",
    price: "£200–280",
    desc: "A tested, repeatable build we've already delivered before - fast because we've built it, not because it's lower quality.",
    examples: [
      "Invoice chasing sequences (7/14/30-day)",
      "Booking confirmations and reminders",
      "Review request sequences",
      "Monthly report generation",
    ],
  },
  {
    tag: "Custom process",
    name: "Bespoke Standard",
    price: "£400–550",
    desc: "Multi-step logic with conditional branching, 2–3 integrations - for a process that doesn't match an existing Playbook.",
    examples: [
      "Multi-branch quote logic based on job type and location",
      "Cross-system data sync unique to how you run reporting",
      "Conditional escalation paths for different client types",
    ],
  },
  {
    tag: "AI-powered",
    name: "Complex / AI Agent",
    price: "From £900",
    desc: "RAG pipeline or AI agent reasoning, tool use, memory, approval steps.",
    examples: [
      "AI chatbot that answers from your docs and pricing",
      "Automated quote generation with a human approval step",
      "Multi-tool agent handling enquiries end-to-end",
    ],
  },
];

const CARE_PLAN_INCLUDED = [
  "Monitoring for automation failures",
  "Fixes when a connected API or tool changes behaviour",
  "A set number of hours each month for small tweaks",
];

const HOSTING_INCLUDED = [
  "EU-based VPS hosting with 99.9% uptime",
  "Cloudflare CDN and DDoS protection on every domain",
  "Automatic SSL certificates - always HTTPS",
  "Daily backups",
  "Uptime monitoring with instant alerts",
];

const FAQS = [
  {
    q: "Do I need technical knowledge to work with you?",
    a: "None at all. We handle the technical side completely. You describe what you want to achieve in plain language - we make it happen and explain what we've built.",
  },
  {
    q: "How quickly can you get something live?",
    a: "Most automation projects are live within 3-7 days of the call. Hosting and email setup is usually same-day or next-day.",
  },
  {
    q: "What tools does the automation connect to?",
    a: "Anything you're already using - Gmail, Outlook, Google Sheets, Notion, Xero, QuickBooks, Stripe, Calendly, Typeform, and hundreds more. If it has an API or a webhook, we can connect to it.",
  },
  {
    q: "What if something breaks?",
    a: "All setups include a testing period and initial support. If something breaks after that, you can contact us and we'll sort it - or take out a Care Plan if you'd rather things were monitored proactively.",
  },
  {
    q: "Where's my data hosted, and who can see it?",
    a: "Everything runs on EU-based infrastructure. Only the person building and maintaining your automation has access to your n8n instance and credentials - it's never shared beyond that. If you offboard, we hand over or delete your workflows and credentials at your instruction - your data doesn't sit on our systems afterwards.",
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
            Pick one thing that&apos;s eating your time. We&apos;ll automate it. Here&apos;s
            what that looks like in practice.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <SectionSpine side="left" branch="out" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="relative max-w-2xl">
            <span className="absolute top-0 right-0 hidden rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light sm:inline-block">
              Core service
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={AUTOMATION_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              AI Workflow Automation
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              Automate the tasks that keep coming back
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                Every business has a handful of tasks that happen over and over - chasing
                invoices, responding to enquiries, updating spreadsheets, sending
                confirmations. We build automations that do these things automatically,
                reliably, and without you having to think about them.
              </p>
              <p>
                We use n8n as our core automation tool, connected to whatever software
                you&apos;re already using - Gmail, Outlook, Google Sheets, Notion, Xero,
                and hundreds more. No ripping out your current setup.
              </p>
            </div>
            <p className="mt-5 text-sm font-medium text-green-light">
              Agency-quality builds, priced below what UK agencies charge for the same
              thing.
            </p>
          </Reveal>
          <Reveal className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AUTOMATION_TIERS.map((t) => (
              <div
                key={t.name}
                className="card-hover relative rounded-2xl border border-border bg-bg-2 p-7"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  {t.tag}
                </span>
                <h3 className="mt-2 text-xl">{t.name}</h3>
                <p className="mt-1 text-lg text-text-primary">{t.price}</p>
                <p className="mt-3 text-sm text-text-secondary">{t.desc}</p>
                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-text-muted">
                  Examples
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {t.examples.map((e) => (
                    <div key={e} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                      <span className="text-sm text-text-secondary">{e}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-6 rounded-2xl border border-border bg-bg-2 p-6 text-sm text-text-secondary">
            <span className="text-text-primary">A note on Complex / AI Agent builds:</span>{" "}
            AI-agent builds that use OpenAI or Anthropic&apos;s models carry ongoing API
            usage costs on top of the build fee - this scales with how much the
            automation is actually used. In most cases you&apos;ll hold your own API key
            so usage is billed directly to you at cost, with full visibility. We&apos;ll
            always tell you the expected running cost before you commit.
          </Reveal>
          <p className="mt-4 text-xs text-text-muted">
            Two rounds of revisions are included in every fixed price - further changes
            are quoted separately.
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
                Not required - your automation keeps working without it, and this
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
              <span className="text-text-primary">£150–400/month.</span> Scoped to how
              many automations you have and how much monitoring you want.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-8">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-border bg-bg-2 p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={HOSTING_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Website Hosting &amp; Management
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              Fast, secure hosting you don&apos;t have to think about
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                We host websites on enterprise-grade European infrastructure with
                Cloudflare protecting every domain. You get fast load times, automatic
                HTTPS, and us as the single point of contact when anything needs
                changing.
              </p>
              <p>
                No shared hosting, no mystery downtimes, no &quot;contact your hosting
                provider&quot; when something breaks. We are the hosting provider.
              </p>
              <p>
                £20/month covers hosting, Cloudflare protection, SSL, daily backups,
                uptime monitoring - and a person who fixes it, not a ticket queue. A
                generic host with the same technical spec runs a similar price, but
                you&apos;re on your own when something breaks; a separate website
                maintenance service on top of that typically costs £25-100/month by
                itself.
              </p>
            </div>
            <p className="mt-7 text-xs font-medium uppercase tracking-wider text-text-muted">
              What&apos;s included
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {HOSTING_INCLUDED.map((e) => (
                <div key={e} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green" />
                  <span className="text-sm text-text-secondary">{e}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-border pt-5 text-sm text-text-secondary">
              <span className="text-text-primary">From £20/month per site.</span>{" "}
              Includes monitoring, backups, and SSL. Ask about migration from your
              current host.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-border bg-bg-2 p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={EMAIL_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Email Hosting &amp; Setup
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              Professional email that actually gets delivered
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                We set up and manage professional email addresses on your domain - with
                the proper DNS records (SPF, DKIM, DMARC) that stop your emails going to
                spam. Something most businesses never think about until it&apos;s too
                late.
              </p>
              <p>
                Want email automation on top? We can build that in. Your enquiry form
                auto-responds. Your invoices chase themselves.
              </p>
              <p>
                A small team on Google Workspace pays close to this much in licence fees
                alone, before anyone configures your domain&apos;s email authentication
                (SPF, DKIM, DMARC) correctly - which is where most DIY setups quietly
                fail and end up in spam folders.
              </p>
            </div>
            <div className="mt-7 border-t border-border pt-5 text-sm text-text-secondary">
              <span className="text-text-primary">From £18/month per domain.</span>{" "}
              Includes setup, DNS configuration, and ongoing management. No per-user
              fees.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-8">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="card-hover relative rounded-2xl border border-green-light/30 bg-bg-2 p-8 sm:p-10">
            <span className="absolute top-8 right-8 rounded-full bg-green-glow px-2.5 py-1 text-[0.7rem] font-medium text-green-light">
              Bundle
            </span>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-green-glow">
              <ServiceIcon shape={BUNDLE_ICON} />
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
              Domain Essentials
            </span>
            <h2 className="mt-2 text-2xl sm:text-[1.75rem]">
              Hosting and email, bundled
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-text-secondary">
              <p>
                Get your website hosting and professional email running together as one
                package - one invoice, one point of contact.
              </p>
            </div>
            <div className="mt-7 border-t border-border pt-5 text-sm text-text-secondary">
              <span className="text-text-primary">£34/month combined.</span> That&apos;s
              £4/month less than buying hosting (£20) and email (£18) separately.
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
              Book a free call. We&apos;ll talk through what&apos;s slowing you down and
              tell you honestly whether automation would help - no pitch, no pressure.
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
