import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";
import SectionDivider from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Struct Solutions is a lean business systems company for UK small businesses: we find the problems in how a business operates and build the systems to fix them.",
  alternates: { canonical: "/about" },
};

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

export default function About() {
  return (
    <>
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
              opportunities or accuracy are being lost, and design a practical system to
              fix it. The system could be a website, a CRM, an integration, a piece of
              automation, an internal tool, or AI, whichever combination actually solves
              the problem. The technology isn&apos;t the product. The solved problem is.
            </p>
            <p>
              We&apos;re a lean, specialist company, which means no account managers, no
              handoffs, and no one translating what you want into something a developer
              will actually build. You work directly with the person doing the work.
              Most clients see their first piece of the system running within a week or
              two of the initial call.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="relative py-24">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 text-center">
            <div className="eyebrow justify-center">How we work</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Three principles.</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="card-hover rounded-2xl border border-border bg-bg-2 p-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-green-light/40 text-green-light">
                  →
                </div>
                <h3 className="mt-5 text-lg">{v.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{v.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={460} />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Want to see if we&apos;re a fit?</h2>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Book a free 20-minute call. We&apos;ll talk about your business, not ours.
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
