import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in Denton, Greater Manchester. Two marketers building digital growth systems for local and growing UK businesses.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    title: "Our Mission",
    desc: "To give growing businesses the digital infrastructure they need to compete and win — without the bloat, jargon, or guesswork that usually comes with it.",
  },
  {
    title: "Our Roots",
    desc: "Born in Denton, Greater Manchester, out of a frustration with agencies that sell packages instead of solutions. We build around the business, not the other way round.",
  },
  {
    title: "Our Focus",
    desc: "Measurable growth. Every site, every strategy, every system we build is tied to a number that matters — traffic, leads, or revenue.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">About</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Built from Denton.
            <br />
            <em className="text-green-light not-italic">
              Driven by a problem we couldn&apos;t ignore.
            </em>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[760px] px-6">
          <Reveal>
            <span className="inline-block rounded-full border border-border px-4 py-1.5 text-xs text-text-secondary">
              Founded in Denton, Greater Manchester
            </span>
            <div className="mt-7 flex flex-col gap-5 text-text-secondary">
              <p>
                Struct Solutions started with a simple frustration: too many good local
                businesses were being let down by their digital presence. Slow
                websites. Invisible on Google. No idea what was actually working. We
                saw owners pouring money into marketing with no structure behind it —
                no clear system tracking what brought in customers and what didn&apos;t.
              </p>
              <p>
                So we built one. Starting in Denton, Greater Manchester, we set out to
                give growing businesses the same calibre of digital infrastructure that
                bigger companies take for granted — fast websites, real SEO, local
                search dominance, and reporting that actually means something. Not
                vanity metrics. Not guesswork. Structure.
              </p>
              <p>
                Today we work with businesses who are ready to stop guessing and start
                measuring. We bring the same engineering rigour to a local trades
                website as we would to an enterprise platform, because the size of the
                business doesn&apos;t change what good structure requires.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mb-14 text-center">
            <div className="eyebrow justify-center">What drives us</div>
            <h2 className="mt-4 text-3xl sm:text-[2.25rem]">Three pillars.</h2>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-bg-2 p-8">
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-3 text-sm text-text-secondary">{p.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Ready to build with structure?</h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Work with us →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
