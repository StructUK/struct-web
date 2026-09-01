import type { Metadata } from "next";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import SectionSpine from "@/components/SectionSpine";
import GlowBloom from "@/components/GlowBloom";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Automation projects built by Struct Solutions - case studies coming soon.",
  alternates: { canonical: "/work" },
  robots: { index: false, follow: false },
};

const LOCKED = [1, 2, 3, 4];

export default function Work() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Case Studies</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Automation built to be
            <br />
            <em className="text-green-light not-italic">seen, not just felt.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            We&apos;re early into building out our automation case studies. Real client
            projects will land here as they go live.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <SectionSpine side="right" branch="in" />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {LOCKED.map((i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-bg-2 opacity-70"
              >
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-bg-3">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8"
                    fill="none"
                    stroke="var(--text-muted)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="text-sm text-text-muted">Coming Soon</span>
                </div>
                <div className="p-7">
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                    TBC
                  </span>
                  <h3 className="mt-4 text-lg">Client Project - Coming Soon</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Reserved for a future automation build. Details to follow once the
                    project goes live.
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-24">
        <GlowBloom className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={460} />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Want to be our next case study?</h2>
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
