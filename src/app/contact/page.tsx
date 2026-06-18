import type { Metadata } from "next";
import Lattice from "@/components/Lattice";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free website audit from Struct Solutions. No commitment. Results within 48 hours.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden pt-44 pb-24">
        <Lattice variant="page" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="eyebrow justify-center">Contact</div>
          <h1 className="mt-5 text-[2.5rem] sm:text-[3rem]">
            Ready for
            <br />
            <em className="text-green-light not-italic">real growth?</em>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary">
            No commitment. Results within 48 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <ContactForm />
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Email
                </span>
                <a
                  href="mailto:contact@struct.solutions"
                  className="mt-2 block text-text-primary hover:text-green-light"
                >
                  contact@struct.solutions
                </a>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-text-muted">
                  Based in
                </span>
                <p className="mt-2 text-text-primary">Denton, Greater Manchester</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
