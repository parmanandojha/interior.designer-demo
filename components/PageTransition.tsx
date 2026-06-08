"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";

let introPlayed = false; // survives client-side navigation; resets on full reload

const COLS = 4;

export default function PageTransition() {
  const overlay = useRef<HTMLDivElement>(null);
  const cols = useRef<(HTMLDivElement | null)[]>([]);
  const brand = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const animating = useRef(false);
  const prevPath = useRef(pathname);
  const introRan = useRef(false);

  const colEls = () => cols.current.filter(Boolean) as HTMLDivElement[];

  // PRELOADER (first load only). Ref-guarded so React Strict Mode's double
  // effect invoke can't restart or kill it; no cleanup kill on purpose.
  useEffect(() => {
    if (introRan.current) return;
    introRan.current = true;

    const els = colEls();

    if (introPlayed) {
      gsap.set(overlay.current, { autoAlpha: 0 });
      gsap.set(els, { yPercent: 100 });
      return;
    }
    introPlayed = true;

    const obj = { v: 0 };
    gsap.set(overlay.current, { autoAlpha: 1 });
    gsap.set(els, { yPercent: 0 });
    gsap.set([brand.current, count.current], { autoAlpha: 0, y: 18 });

    gsap.timeline({ defaults: { ease: "power4.inOut" } })
      .to([brand.current, count.current], { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 }, 0.15)
      .to(obj, {
        v: 100, duration: 1.4, ease: "power2.inOut",
        onUpdate: () => { if (count.current) count.current.textContent = String(Math.round(obj.v)).padStart(3, "0"); }
      }, "<")
      .to([brand.current, count.current], { autoAlpha: 0, y: -18, duration: 0.4, ease: "power2.in" }, "+=0.2")
      .to(els, { yPercent: -100, duration: 0.9, stagger: 0.1 }, "-=0.1")
      .set(overlay.current, { autoAlpha: 0 })
      .set(els, { yPercent: 100 });
  }, []);

  // Intercept internal link clicks → COVER (stairs up), then navigate
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      const targetAttr = a.getAttribute("target");
      if (!href || targetAttr === "_blank") return;
      if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href === pathname) { e.preventDefault(); return; }

      e.preventDefault();
      if (animating.current) return;
      animating.current = true;

      const els = colEls();
      gsap.set(overlay.current, { autoAlpha: 1 });
      gsap.set(els, { yPercent: 100 });
      gsap.to(els, {
        yPercent: 0, duration: 0.6, ease: "power4.inOut", stagger: 0.08,
        onComplete: () => router.push(href)
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, router]);

  // After route change → REVEAL (stairs continue up and off)
  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    if (!animating.current) return;

    const els = colEls();
    window.scrollTo(0, 0);
    gsap.set(overlay.current, { autoAlpha: 1 });
    gsap.set(els, { yPercent: 0 });
    gsap.to(els, {
      yPercent: -100, duration: 0.7, ease: "power4.inOut", stagger: 0.08, delay: 0.08,
      onComplete: () => {
        gsap.set(overlay.current, { autoAlpha: 0 });
        gsap.set(els, { yPercent: 100 });
        animating.current = false;
      }
    });
  }, [pathname]);

  return (
    <div ref={overlay} className="fixed inset-0 z-[100] pointer-events-none">
      <div className="absolute inset-0 flex">
        {Array.from({ length: COLS }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { cols.current[i] = el; }}
            className="flex-1 h-full bg-coal border-r border-paper/5 last:border-r-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div ref={brand} className="font-serif text-paper text-4xl md:text-6xl tracking-tight opacity-0">
          Lake <span className="text-rust italic">&amp;</span> Wells
        </div>
        <span ref={count} className="mono text-paper/50 opacity-0">000</span>
      </div>
    </div>
  );
}
