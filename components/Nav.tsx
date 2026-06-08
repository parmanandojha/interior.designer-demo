"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Work", n: "01" },
  { href: "/services", label: "Services", n: "02" },
  { href: "/about", label: "About", n: "03" },
  { href: "/process", label: "Process", n: "04" },
  { href: "/contact", label: "Contact", n: "05" }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light text over the home full-screen hero (only at the very top)
  const light = pathname === "/" && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur border-b hair text-ink" : light ? "text-paper" : "text-ink"
      }`}
    >
      <div className="container-x">
        <div className="grid-12 items-center py-4">
          <Link href="/" className="col-span-6 md:col-span-3 flex items-center gap-2.5">
            <span className="mark" />
            <span className="font-serif text-xl tracking-tight">Lake &amp; Wells</span>
          </Link>

          <nav className="hidden md:flex col-span-6 justify-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="label hover:text-rust transition flex items-baseline gap-1.5">
                <span className="mono text-rust/80">{l.n}</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex col-span-3 justify-end items-center gap-4">
            <span className={`mono ${light ? "text-paper/70" : "text-mute"}`}>CHI · 2026</span>
            <Link
              href="/contact"
              className={`btn !py-2 !px-3 text-[10px] ${light ? "bg-paper text-coal border-paper hover:bg-rust hover:border-rust hover:text-paper" : "btn-ink"}`}
            >
              Book
            </Link>
          </div>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden col-span-6 justify-self-end p-2 label"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="container-x py-6 flex flex-col border-t hair">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-4 border-b hair flex items-center justify-between"
            >
              <span className="font-serif text-3xl tracking-tight">{l.label}</span>
              <span className="mono text-rust">{l.n}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
