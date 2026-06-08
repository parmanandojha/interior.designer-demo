"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Small interior thumbnails that float in the whitespace around the hero title.
const imgs = [
  { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&q=80", pos: "top-[20%] right-[6%]", size: "w-[150px] h-[190px]", depth: 0.7, rot: -6 },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&q=80", pos: "top-[4%] right-[26%]", size: "w-[112px] h-[112px]", depth: 1.1, rot: 5 },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&q=80", pos: "top-[60%] right-[12%]", size: "w-[170px] h-[210px]", depth: 0.45, rot: 7 },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80", pos: "top-[46%] right-[34%]", size: "w-[96px] h-[120px]", depth: 1.4, rot: -8 }
];

export default function FloatingImages() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".float-item");

      // Entrance
      gsap.from(items, {
        opacity: 0,
        scale: 0.7,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.25
      });

      // Continuous float on the inner element (separate transform target)
      gsap.utils.toArray<HTMLElement>(".float-inner").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 ? 16 : -16,
          rotation: i % 2 ? 2.5 : -2.5,
          duration: 3 + i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1
        });
      });
    }, ref);

    // Subtle mouse parallax on the outer items
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      const items = ref.current?.querySelectorAll<HTMLElement>(".float-item");
      items?.forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "1");
        gsap.to(el, { x: x * -40 * depth, y: y * -40 * depth, duration: 0.9, ease: "power2.out" });
      });
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-10 hidden md:block" aria-hidden>
      {imgs.map((im, i) => (
        <div key={i} data-depth={im.depth} className={`float-item absolute ${im.pos}`}>
          <div className="float-inner" style={{ transform: `rotate(${im.rot}deg)` }}>
            <div className={`relative ${im.size} overflow-hidden bg-off shadow-[0_18px_50px_-20px_rgba(20,19,15,0.45)]`}>
              <Image src={im.src} alt="" fill sizes="200px" className="object-cover" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
