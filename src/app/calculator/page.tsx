import type { Metadata } from "next";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description:
    "See what a manual task is actually costing your business each year, and how fast an automation pays for itself.",
  alternates: { canonical: "/calculator" },
};

export default function Calculator() {
  return (
    <section className="relative overflow-hidden pt-44 pb-24">
      <Lattice variant="page" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div className="eyebrow justify-center">ROI Calculator</div>
        <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
          What&apos;s your admin actually costing you?
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-text-secondary">
          Plug in a task you do by hand, see the annual cost, and how quickly an
          automation pays for itself.
        </p>
      </div>

      <Reveal className="relative z-10 mx-auto mt-14 max-w-3xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-bg-2">
          <iframe
            src="https://structuk.github.io/struct-roi-calculator/"
            title="Struct Solutions ROI Calculator"
            className="h-[900px] w-full sm:h-[820px]"
            loading="lazy"
          />
        </div>
      </Reveal>
    </section>
  );
}
