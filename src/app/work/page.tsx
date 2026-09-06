import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";
import WorkflowDiagram from "@/components/WorkflowDiagram";

export const metadata: Metadata = {
  title: "Explanation",
  description:
    "A real automation, built and walked through step by step: how Struct Solutions automated overdue-invoice chasing with n8n.",
  alternates: { canonical: "/work" },
};

const STEPS = [
  {
    n: "01",
    title: "Daily 9am trigger",
    desc: "A schedule node wakes the workflow up once a day. No one has to remember to run it.",
  },
  {
    n: "02",
    title: "Read every invoice",
    desc: "Pulls the full invoice list from a Google Sheet - number, client, amount, due date, status.",
  },
  {
    n: "03",
    title: "Work out what's overdue",
    desc: "A code step checks each due date against today, skips anything paid or cancelled, and sorts what's left into 7/14/30-day tiers.",
  },
  {
    n: "04",
    title: "Route by tier",
    desc: "A switch step sends each invoice down one of three paths, so the right tone goes to the right invoice.",
  },
  {
    n: "05",
    title: "Send the email",
    desc: "Friendly nudge at 7 days, firm follow-up at 14, final notice at 30 - pre-written, no one typing it out.",
  },
  {
    n: "06",
    title: "Log the chase",
    desc: "Writes the tier, date, and chase count back to the sheet, so tomorrow's run knows what's already been sent.",
  },
];

const STATS = [
  { value: "0", label: "Manual emails sent" },
  { value: "3", label: "Escalation tiers" },
  { value: "2 hrs", label: "Time to build" },
  { value: "£800", label: "Typical build cost" },
];

export default function Work() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Explanation</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            How this stuff
            <br />
            <em className="text-green-light not-italic">really works.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            Here&apos;s exactly how one of our automations works, start to finish -
            the same kind of build we do for the businesses we work with.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <SectionSpine side="left" branch="out" />
        <div className="mx-auto max-w-[760px] px-6">
          <Reveal>
            <div className="eyebrow">The problem</div>
            <h2 className="mt-4 text-2xl sm:text-[1.75rem]">
              Chasing invoices always gets pushed to tomorrow.
            </h2>
            <p className="mt-5 text-text-secondary">
              Nobody wants to send an awkward &quot;please pay me&quot; email, so it
              either doesn&apos;t happen for weeks, or the tone and timing are
              different every time depending on who&apos;s writing it that day. Every
              day it doesn&apos;t happen is cash sitting in someone else&apos;s
              account instead of yours.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-20">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-10 max-w-xl">
            <div className="eyebrow">The build</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Invoice Chaser, laid out simply.
            </h2>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-border bg-bg-2 px-4 py-8 sm:px-8">
              <WorkflowDiagram />
            </div>
          </Reveal>

          <Reveal className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-green-light/40 font-display text-sm text-green-light">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-base">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-text-secondary">{s.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-10">
            <a
              href="https://github.com/StructUK/n8n-invoice-chaser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-green-light hover:text-green"
            >
              See the full workflow file on GitHub →
            </a>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative overflow-hidden py-20">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={480} />
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal className="mb-12 max-w-xl">
            <div className="eyebrow">The outcome</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">
              Nobody has to remember to chase anyone.
            </h2>
            <p className="mt-5 text-text-secondary">
              The workflow escalates on its own - a friendly nudge never goes out to
              someone 40 days late, and nobody gets a final notice at day eight. The
              sheet keeps a running log of what was sent and when, so &quot;did we
              already chase them?&quot; is a lookup, not a guess.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl text-green-light sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-text-muted">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Have something similar?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              If invoice chasing, follow-ups, or admin like this eats your week, we can
              build the same thing for your business.
            </p>
            <Link
              href="/contact"
              prefetch={false}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Book a free call →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
