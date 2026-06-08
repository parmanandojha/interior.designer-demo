import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const services = [
  {
    idx: "01", code: "A", name: "Residential",
    headline: "Homes that fit how you actually live.",
    body: "For homeowners renovating or starting fresh — from Lincoln Park greystones to North Shore estates. Full-service design from layout to the last fixture. Best for clients who want it done once, done right.",
    bullets: ["Layout & spatial planning", "Materials, finishes, millwork", "Lighting & atmosphere", "Furniture, art & styling"],
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=85"
  },
  {
    idx: "02", code: "B", name: "Commercial",
    headline: "Spaces that earn their square footage.",
    body: "For cafés, retail, and offices where design is a business decision. We design for foot traffic, dwell time, brand, and the photo your customers will post. Form that moves the numbers.",
    bullets: ["Customer journey & flow", "Brand-led environments", "Materials that survive use", "Lighting for hours, not minutes"],
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=85"
  },
  {
    idx: "03", code: "C", name: "Developer & Fit-Out",
    headline: "Interiors that sell before the buyer walks in.",
    body: "For developers and builders across the Chicago metro. Model units, show homes, and fit-outs that lift perceived value and shorten the sale. Built to spec, delivered on timeline.",
    bullets: ["Model unit strategy", "Repeatable spec packages", "On-site execution oversight", "Timeline-locked delivery"],
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=85"
  }
];

const testimonials = [
  { q: "They got the bones right. Every guest stops in the hallway — and we live in it every day.", who: "Rachel & Mark Donnelly", role: "Residential" },
  { q: "Foot traffic went up 38% in the first quarter. The space does the marketing now.", who: "Andre Foster", role: "Commercial" },
  { q: "Three model units, three sell-outs. On our standing roster.", who: "Related Midwest", role: "Developer" }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        section="Services"
        idx="02"
        right="Three practices · 1 standard"
        title={<>What we<br /><em className="text-rust">do</em>.</>}
        lead="We work across three worlds. The discipline is the same — the brief is what changes. Every engagement begins with a paid consultation, applied to your project."
      />

      {/* PRACTICE BANDS — full-bleed image with overlaid index */}
      {services.map((s) => (
        <section key={s.idx} id={s.code} className="container-x section scroll-mt-24">
          <div className="grid-12 gap-y-10 items-start">
            {/* image with big number overlay */}
            <div className="col-span-12 md:col-span-7">
              <div className="relative aspect-[16/11] overflow-hidden bg-off group" data-reveal>
                <Image src={s.img} alt={s.name} fill className="object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
                <span className="absolute left-4 top-3 font-serif text-paper text-7xl md:text-8xl leading-none">{s.code}</span>
                <span className="absolute top-4 right-4 mono bg-paper px-2 py-1">FILE / {s.idx}</span>
              </div>
            </div>
            {/* content */}
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <p className="mono text-rust mb-5" data-reveal>Practice {s.idx}</p>
              <h2 className="tx-h2 mb-5" data-reveal>{s.name}</h2>
              <p className="tx-h3 text-mute mb-6" data-reveal>{s.headline}</p>
              <p className="tx-body text-mute mb-8" data-reveal>{s.body}</p>
              <div className="flex flex-wrap gap-2 mb-8" data-reveal>
                {s.bullets.map((b) => (
                  <span key={b} className="mono px-3 py-1.5 rounded-full border hair">{b}</span>
                ))}
              </div>
              <Link href="/contact" className="btn btn-ink" data-reveal>Start a project <span>↗</span></Link>
            </div>
          </div>
        </section>
      ))}

      {/* TESTIMONIALS — stacked */}
      <section className="container-x section">
        <p className="mono text-mute mb-12" data-reveal>(What clients say)</p>
        <div>
          {testimonials.map((t, i) => (
            <div key={i} className="grid-12 gap-y-4 py-10 border-t hair items-start" data-reveal>
              <p className="col-span-2 md:col-span-1 mono text-rust">0{i + 1}</p>
              <blockquote className="col-span-12 md:col-span-7 tx-h3">&ldquo;{t.q}&rdquo;</blockquote>
              <div className="col-span-12 md:col-span-3 md:col-start-10 md:text-right">
                <p className="font-medium tracking-tight">{t.who}</p>
                <p className="mono text-mute mt-1.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x section">
        <div className="grid-12 items-end border-t hair pt-14">
          <h2 className="col-span-12 md:col-span-8 tx-display" data-reveal>Not sure which fits your project? <em className="text-rust">Let&apos;s talk.</em></h2>
          <div className="col-span-12 md:col-span-3 md:col-start-10 mt-8 md:mt-0 md:text-right" data-reveal>
            <Link href="/contact" className="btn btn-ink">Book a consultation <span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
