import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-wrap items-center justify-between gap-6">
        <Image
          src="/imgs/structlogo1w.png"
          alt="Struct Solutions"
          width={336}
          height={68}
          className="h-[24px] w-auto"
        />
        <div className="flex flex-wrap gap-7">
          <Link href="/services" className="text-sm text-text-secondary hover:text-text-primary">
            Services
          </Link>
          <Link href="/work" className="text-sm text-text-secondary hover:text-text-primary">
            Work
          </Link>
          <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary">
            About
          </Link>
          <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary">
            Contact
          </Link>
          <a
            href="mailto:contact@struct.solutions"
            className="text-sm text-text-secondary hover:text-text-primary"
          >
            contact@struct.solutions
          </a>
          <a href="#" className="text-sm text-text-secondary hover:text-text-primary">
            LinkedIn
          </a>
        </div>
        <p className="w-full text-[0.82rem] text-text-muted">
          © 2026 Struct Solutions. Denton, Greater Manchester.
        </p>
      </div>
    </footer>
  );
}
