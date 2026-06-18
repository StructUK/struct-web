import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies and client sites built by Struct Solutions for performance, conversions, and search visibility.",
  alternates: { canonical: "/work" },
};

const LOCKED = [1, 2, 3];

export default function Work() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Our Work</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Built to perform.
            <br />
            <em className="text-green-light not-italic">Built to be found.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            Every site we deliver is engineered from the ground up — fast,
            conversion-focused, and built to rank.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  A bold digital home for a creative solutions powerhouse. Based Media
                  Group blends content, strategy, and production — we built them a site
                  that matches their ambition: sharp, fast, and impossible to ignore.
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
                  specialists. Built for speed, local search dominance, and walk-in
                  conversions — rated 4.9/5 by 800+ customers.
                </p>
              </div>
            </div>

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
                  <h3 className="mt-4 text-lg">New Project — Coming Soon</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    Reserved for a current client build. Details to follow once the
                    project goes live.
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-[2.25rem]">Want results like these?</h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-7 py-3.5 font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
            >
              Start with a Free Audit →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
