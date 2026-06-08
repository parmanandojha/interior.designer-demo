"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Reveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Content rises up into place — matching the upward stair page transition.
      // Batched so elements entering together cascade (a staircase feel).
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(items, { opacity: 0, y: 44 });

      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            stagger: 0.09,
            overwrite: true,
            clearProps: "transform,opacity"
          })
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.1");
        gsap.fromTo(
          el,
          { yPercent: -speed * 24 },
          {
            yPercent: speed * 24,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = parseFloat(el.dataset.counter || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.v).toString();
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true }
        });
      });
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return null;
}
