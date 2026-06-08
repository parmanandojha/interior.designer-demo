"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=2400&q=85", label: "Lakeshore Drive Penthouse", place: "Streeterville · 6,400 sqft", tag: "Residential" },
  { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=2400&q=85", label: "Lincoln Park Greystone", place: "Lincoln Park · 3,200 sqft", tag: "Residential" },
  { img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=2400&q=85", label: "Café Sable", place: "West Loop · 2,200 sqft", tag: "Commercial" },
  { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=85", label: "Lake Geneva Lake House", place: "Lake Geneva, WI · 6,800 sqft", tag: "Residential" }
];

const DURATION = 5500;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((a) => (a + 1) % slides.length), DURATION);
  }, []);

  useEffect(() => {
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [start]);

  const go = (i: number) => {
    setActive(i);
    start();
  };

  const current = slides[active];

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-coal">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={s.img}
            alt={s.label}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover scale-105"
          />
        </div>
      ))}

      {/* Overlays for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-coal/45 via-transparent to-coal/75" />
      <div className="absolute inset-0 bg-coal/10" />

      {/* Content */}
      <div className="absolute inset-0 container-x flex flex-col justify-end pb-8 md:pb-12 text-paper">
        <div className="grid-12 items-end gap-y-10">
          {/* Bottom-left text */}
          <div className="col-span-12 md:col-span-7">
            <p className="mono text-paper/70 mb-5">Interior Design — Chicago / Est. 2013</p>
            <h1 className="font-serif leading-[0.98] tracking-[-0.02em] text-[clamp(2.6rem,6.5vw,6.5rem)]">
              Spaces designed<br />to be <span className="text-rust italic">lived in</span>.
            </h1>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/contact" className="btn bg-paper text-coal border-paper hover:bg-rust hover:border-rust hover:text-paper">
                Book consultation <span>↗</span>
              </Link>
              <Link href="/work" className="btn border-paper/60 text-paper hover:bg-paper hover:text-coal">
                View work
              </Link>
            </div>
          </div>

          {/* Bottom-right thumbnails */}
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <p className="font-serif text-lg md:text-xl">{current.label}</p>
                <p className="mono text-paper/60 mt-1">{current.place}</p>
              </div>
              <p className="mono text-paper/60 tabular shrink-0 ml-4">
                {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
            </div>

            <div className="flex gap-2.5">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`View ${s.label}`}
                  className={`relative flex-1 aspect-[3/4] overflow-hidden transition-all duration-500 ${
                    i === active ? "opacity-100 ring-1 ring-paper" : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <Image src={s.img} alt="" fill sizes="120px" className="object-cover" />
                  {i === active && (
                    <span className="absolute bottom-0 left-0 h-[3px] bg-rust animate-[grow_5.5s_linear]" style={{ width: "100%" }} />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes grow { from { transform: scaleX(0); transform-origin:left } to { transform: scaleX(1); transform-origin:left } }`}</style>
    </section>
  );
}
