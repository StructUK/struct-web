"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-border"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between py-5">
        <Link href="/" aria-label="Struct Solutions home" prefetch={false}>
          <Image
            src="/imgs/structlogo1w.png"
            alt="Struct Solutions"
            width={336}
            height={68}
            className="h-[26px] w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className={`relative text-[0.92rem] transition-colors ${
                link.href === pathname
                  ? "text-text-primary after:absolute after:left-0 after:right-0 after:-bottom-2 after:h-[2px] after:bg-green"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            prefetch={false}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-green px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_var(--green-glow)] transition-colors hover:bg-green-light"
          >
            Book a free call
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] z-101"
          >
            <span
              className={`block w-[22px] h-[2px] bg-text-primary transition-transform ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-text-primary transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-text-primary transition-transform ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-bg-2 border-t border-border">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className={`px-6 py-4 border-t border-border first:border-t-0 text-[0.95rem] ${
                link.href === pathname ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            prefetch={false}
            className="mx-6 my-4 flex justify-center rounded-full bg-green px-5 py-3 font-medium text-white"
          >
            Book a free call
          </Link>
        </div>
      )}
    </nav>
  );
}
