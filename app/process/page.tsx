import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const steps = [
  {
    n: "01", t: "Discover",
    short: "Understand the space, the goals, the constraints.",
    body: "A paid consultation where we understand your space, your goals, and your constraints. You leave with direction whether or not we work together. The fee applies to your project if we proceed.",
    duration: "Week 0 — 1",
    deliverables: ["90-minute on-site or studio meeting", "Initial direction document", "Indicative budget bands", "Engagement proposal"],
    img: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1400&q=85"
  },
  {
    n: "02", t: "Design",
    short: "Concept, layout, materials, and a clear plan.",
    body: "Concept, layout, materials, and a clear plan. You see exactly what you're getting before anything is built — in drawings, models, and material samples.",
    duration: "Week 2 — 8",
    deliverables: ["Concept boards & mood direction", "Floor plans, RCPs, elevations", "Material & finish library", "3D visualization", "Final scope & estimate"],
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1400&q=85"
  },
  {
    n: "03", t: "Deliver",
    short: "Execution to the standard we promised.",
    body: "We manage execution to the standard we promised, on the timeline we set. Site visits, contractor coordination, punch list — all handled, so you don't have to.",
    duration: "Week 9 — Handover",
    deliverables: ["Site execution oversight", "Contractor coordination", "Procurement & furniture staging", "Punch list & walkthrough", "Final handover"],
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=85"
  }
];

const faqs = [
  { q: "How long does a typical home take?", a: "A two- to three-bedroom renovation runs 14–20 weeks from design kickoff to handover. Larger homes and gut renovations of vintage greystones run longer." },
  { q: "Do you take projects outside Chicago?", a: "Yes. We currently work across Chicago, the North Shore, Lake Geneva, and southwest Michigan. Other locations case-by-case if the project warrants travel." },
  { q: "Can I bring my own contractor?", a: "Yes — but we'll vet them. Our standard is non-negotiable, so we need confidence the build team can meet it. We can also recommend trusted Chicago trades." },
  { q: "Do you handle furniture and styling?", a: "Yes. Procurement, custom millwork, art curation, and final styling are all part of Signature and Bespoke engagements." }
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        section="Process"
        idx="04"
        right="Three steps · No surprises"
        title={<>Three<br />steps<span className="text-rust">.</span></>}
        lead="A linear process from first conversation to final walkthrough. Designed so you always know where the project stands — and what happens next."
      />

      {steps.map((s, i) => (
        <section key={s.n} className={`section ${i % 2 ? "bg-off" : ""}`}>
          <div className="container-x grid-12 items-start">
            <div className="col-span-12 md:col-span-2 flex md:flex-col justify-between md:gap-8 mb-6 md:mb-0" data-reveal>
              <p className="tx-display text-rust">{s.n}</p>
              <p className="mono text-mute self-end md:self-auto">{s.duration}</p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <h2 className="tx-display mb-8" data-reveal>{s.t}</h2>
              <p className="tx-h3 mb-6 max-w-md" data-reveal>{s.short}</p>
              <p className="tx-body text-mute mb-10 max-w-md" data-reveal>{s.body}</p>
              <p className="mono text-mute mb-3" data-reveal>You receive</p>
              <ul className="border-t hair" data-reveal>
                {s.deliverables.map((d, j) => (
                  <li key={d} className="py-2.5 border-b hair flex items-baseline gap-3">
                    <span className="mono text-rust">{String(j + 1).padStart(2, "0")}</span>
                    <span className="tx-body">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 md:col-span-5 mt-10 md:mt-0">
              <div className="relative aspect-[4/5] overflow-hidden bg-off cell">
                <div className="absolute inset-0 scale-105" data-parallax="0.1">
                  <Image src={s.img} alt={s.t} fill className="object-cover" />
                </div>
                <span className="absolute top-3 left-3 mono bg-paper px-2 py-1">STEP — {s.n}</span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="container-x section">
        <div className="grid-12 pt-6 mb-14">
          <p className="col-span-12 md:col-span-3 mono text-mute mb-6 md:mb-0" data-reveal>§ FAQ</p>
          <h2 className="col-span-12 md:col-span-9 tx-h2" data-reveal>Questions we hear often.</h2>
        </div>
        <div className="border-t hair">
          {faqs.map((f, i) => (
            <details key={i} className="border-b hair py-6 group" data-reveal>
              <summary className="grid-12 cursor-pointer list-none items-baseline">
                <p className="col-span-2 md:col-span-1 mono text-rust">0{i + 1}</p>
                <p className="col-span-9 md:col-span-10 tx-h3">{f.q}</p>
                <p className="col-span-1 md:text-right mono text-mute group-open:rotate-45 transition">+</p>
              </summary>
              <div className="grid-12 mt-5">
                <p className="col-span-12 md:col-span-10 md:col-start-2 tx-body text-mute max-w-2xl">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x section">
        <div className="grid-12 items-center">
          <h2 className="col-span-12 md:col-span-8 tx-h2" data-reveal>
            Start with a<br />conversation<span className="text-rust">.</span>
          </h2>
          <Link href="/contact" className="col-span-12 md:col-span-4 md:justify-self-end btn btn-ink mt-6 md:mt-0" data-reveal>
            Start with a Consultation <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
