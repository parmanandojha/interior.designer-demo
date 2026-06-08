"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Persists across client-side navigations within a session; resets on full reload.
let firstLoad = true;

const COLS = 4;

export default function Transition({ children }: { children: React.ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const cols = useRef<(HTMLDivElement | null)[]>([]);
  const brand = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isFirst = firstLoad;
    firstLoad = false;

    const colEls = cols.current.filter(Boolean) as HTMLDivElement[];
    gsap.set(overlay.current, { autoAlpha: 1 });
    gsap.set(colEls, { yPercent: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    if (isFirst) {
      // PRELOADER — brand + counter, then stairs reveal
      const obj = { v: 0 };
      gsap.set([brand.current, count.current], { autoAlpha: 0, y: 16 });
      tl.to([brand.current, count.current], { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 })
        .to(obj, {
          v: 100,
          duration: 1.3,
          ease: "power2.inOut",
          onUpdate: () => { if (count.current) count.current.textContent = String(Math.round(obj.v)).padStart(3, "0"); }
        }, "<")
        .to([brand.current, count.current], { autoAlpha: 0, y: -16, duration: 0.45, ease: "power2.in" }, "+=0.15")
        .to(colEls, { yPercent: -100, duration: 0.85, stagger: 0.09 }, "-=0.1")
        .set(overlay.current, { autoAlpha: 0 });
    } else {
      // PAGE CHANGE — quick stairs reveal
      tl.to(colEls, { yPercent: -100, duration: 0.7, stagger: 0.08, delay: 0.06 })
        .set(overlay.current, { autoAlpha: 0 });
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <>
      <div ref={overlay} className="fixed inset-0 z-[100] pointer-events-none" style={{ opacity: 1 }}>
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
          <div ref={brand} className="font-serif text-paper text-4xl md:text-6xl tracking-tight">
            Lake <span className="text-rust italic">&amp;</span> Wells
          </div>
          <span ref={count} className="mono text-paper/50">000</span>
        </div>
      </div>
      {children}
    </>
  );
}
