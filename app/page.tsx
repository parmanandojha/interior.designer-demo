import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";

const featured = [
  { slug: "lincoln-park-greystone", idx: "01", tag: "Residential", title: "A 2-bed that lives like a 3", place: "Lincoln Park — Chicago", year: "2025", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&q=85" },
  { slug: "cafe-sable", idx: "02", tag: "Commercial", title: "Footfall up, dwell time doubled", place: "Café Sable — West Loop", year: "2025", img: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=85" },
  { slug: "fulton-market-model-unit", idx: "03", tag: "Developer", title: "Sold the floor before the launch", place: "Related Midwest — Fulton", year: "2024", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85" }
];

const logos = ["Architectural Digest", "ELLE Decor", "Dwell", "Chicago Magazine", "Crain's Chicago", "Luxe Interiors", "Dezeen"];

const practices = [
  { idx: "01", title: "Residential", line: "Homes that fit how you actually live — Lincoln Park greystones to North Shore estates.", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1400&q=85" },
  { idx: "02", title: "Commercial", line: "Cafés, retail, and offices designed for footfall, dwell time, and the photo guests post.", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=85" },
  { idx: "03", title: "Developer & Fit-Out", line: "Model units and fit-outs that lift perceived value and shorten the sale.", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85" }
];

const stats = [
  { n: "400+", l: "Projects delivered" },
  { n: "12", l: "Years in practice" },
  { n: "96%", l: "Client referrals" },
  { n: "3", l: "States served" }
];

const testimonials = [
  { q: "They got the bones right. Every guest stops in the hallway — and we live in it every day.", who: "Rachel & Mark Donnelly", role: "Lincoln Park Greystone · Residential" },
  { q: "Foot traffic went up 38% in the first quarter. The space does the marketing now.", who: "Andre Foster", role: "Founder, Café Sable" },
  { q: "Three model units, three sell-outs. Lake & Wells is on our standing roster.", who: "Related Midwest", role: "Developer fit-out" }
];

const awards = [
  { y: "2025", t: "AD100 — Editor's pick", w: "Architectural Digest" },
  { y: "2024", t: "Best Residential Interior", w: "Chicago Magazine" },
  { y: "2024", t: "Café of the Year — Design", w: "ELLE Decor" },
  { y: "2023", t: "Emerging Studio", w: "Dezeen Awards" }
];

const journal = [
  { slug: "light-at-5pm-in-january", tag: "Journal", date: "May 2026", title: "How light changes a room at 5pm in January", img: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=80" },
  { slug: "why-we-specify-white-oak-and-lime-plaster", tag: "Notes", date: "Apr 2026", title: "Why we still specify white oak and lime plaster", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80" },
  { slug: "behind-a-lincoln-park-greystone", tag: "Studio", date: "Mar 2026", title: "Behind a Lincoln Park greystone, room by room", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80" }
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-screen slideshow */}
      <HeroSlider />

      {/* MANIFESTO */}
      <section className="container-x section">
        <div className="grid-12 items-start">
          <p className="col-span-12 md:col-span-3 mono text-mute mb-8 md:mb-0" data-reveal>(Studio)</p>
          <div className="col-span-12 md:col-span-9">
            <p className="tx-display" data-reveal>
              A space should feel inevitable — like it couldn&apos;t have been any other way.
            </p>
            <p className="tx-lead text-mute max-w-xl mt-10" data-reveal>
              One studio, one standard. We work across residential, commercial, and developer projects
              with the same obsession for proportion, light, material, and how a person actually moves
              through a room.
            </p>
          </div>
        </div>
      </section>

      {/* STATS — dark band */}
      <section className="bg-coal text-paper section-sm">
        <div className="container-x">
          <div className="grid-12 gap-y-10">
            {stats.map((s, i) => (
              <div key={s.l} className={`col-span-6 md:col-span-3 ${i > 0 ? "md:border-l hair-light md:pl-8" : ""}`} data-reveal>
                <p className="font-serif text-[clamp(3rem,6vw,5.5rem)] leading-none tabular">{s.n}</p>
                <p className="mono text-paper/50 mt-4">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK — lead project + pair */}
      <section className="container-x section">
        <div className="flex items-end justify-between mb-12">
          <h2 className="tx-h2" data-reveal>Selected work</h2>
          <Link href="/work" className="mono text-rust link-arrow" data-reveal>Full index <span className="arr">↗</span></Link>
        </div>

        {/* lead */}
        <Link href={`/work/${featured[0].slug}`} className="grid-12 gap-y-8 items-center group mb-16" data-reveal>
          <div className="col-span-12 md:col-span-8 relative aspect-[16/10] overflow-hidden bg-off order-2 md:order-1">
            <Image src={featured[0].img} alt={featured[0].title} fill className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 order-1 md:order-2">
            <p className="mono text-rust mb-4">{featured[0].idx} / {featured[0].tag}</p>
            <h3 className="tx-h3 mb-3 group-hover:text-rust transition">{featured[0].title}</h3>
            <p className="mono text-mute">{featured[0].place}</p>
            <p className="mono text-mute mt-1">{featured[0].year}</p>
          </div>
        </Link>

        {/* pair */}
        <div className="grid-12 gap-y-24 md:gap-y-10">
          {featured.slice(1).map((p) => (
            <Link key={p.idx} href={`/work/${p.slug}`} className="col-span-12 md:col-span-6 group block" data-reveal>
              <div className="relative aspect-[16/11] overflow-hidden bg-off mb-5">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <span className="absolute top-3 left-3 mono bg-paper px-2 py-1">{p.idx}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="mono text-rust mb-1.5">{p.tag}</p>
                  <h3 className="tx-h3 group-hover:text-rust transition">{p.title}</h3>
                </div>
                <p className="mono text-mute">{p.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRACTICES — alternating editorial rows */}
      <section className="container-x section">
        <p className="mono text-mute mb-3" data-reveal>(Practices)</p>
        <h2 className="tx-display mb-16" data-reveal>Three worlds,<br />one discipline.</h2>

        <div className="space-y-16 md:space-y-24">
          {practices.map((s, i) => (
            <div key={s.idx} className="grid-12 gap-y-6 items-center">
              <div className={`col-span-12 md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}>
                <div className="relative aspect-[16/11] overflow-hidden bg-off group" data-reveal>
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                </div>
              </div>
              <div className={`col-span-12 md:col-span-5 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
                <p className="mono text-rust mb-4" data-reveal>{s.idx}</p>
                <h3 className="tx-h2 mb-5" data-reveal>{s.title}</h3>
                <p className="tx-lead text-mute max-w-sm mb-8" data-reveal>{s.line}</p>
                <Link href="/services" className="mono text-rust link-arrow" data-reveal>Start a project <span className="arr">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — stacked pull-quotes */}
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

      {/* PRESS MARQUEE — dark */}
      <section className="bg-coal text-paper section-sm overflow-hidden">
        <div className="container-x mb-8">
          <p className="mono text-paper/50" data-reveal>(As seen in — Trusted by)</p>
        </div>
        <div className="marquee-wrap">
          <div className="marquee py-2">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-serif italic tracking-tight text-4xl md:text-7xl text-paper/35 flex items-center gap-12">
                {l}<span className="mark" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION + JOURNAL */}
      <section className="container-x section">
        <div className="grid-12 gap-y-28 md:gap-y-16">
          {/* awards */}
          <div className="col-span-12 md:col-span-5">
            <h2 className="tx-h2 mb-10" data-reveal>Recognition</h2>
            <div className="border-t hair">
              {awards.map((a) => (
                <div key={a.t} className="py-4 border-b hair flex items-baseline justify-between gap-4" data-reveal>
                  <span className="tx-body">{a.t}</span>
                  <span className="mono text-mute shrink-0">{a.y}</span>
                </div>
              ))}
            </div>
          </div>
          {/* journal */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="flex items-end justify-between mb-10">
              <h2 className="tx-h2" data-reveal>Journal</h2>
              <Link href="/journal" className="mono text-rust link-arrow" data-reveal>All articles <span className="arr">↗</span></Link>
            </div>
            <div className="space-y-8">
              {journal.map((a) => (
                <Link key={a.title} href={`/journal/${a.slug}`} className="grid grid-cols-3 gap-5 group items-center" data-reveal>
                  <div className="relative aspect-[4/3] overflow-hidden bg-off col-span-1">
                    <Image src={a.img} alt="" fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="mono text-rust">{a.tag}</span>
                      <span className="mono text-mute">{a.date}</span>
                    </div>
                    <h3 className="tx-h3 group-hover:text-rust transition">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="container-x section">
        <div className="grid-12 items-end border-t hair pt-14">
          <h2 className="col-span-12 md:col-span-9 tx-display" data-reveal>
            Good design isn&apos;t an expense. It&apos;s the thing people <em className="text-rust">remember</em>.
          </h2>
          <div className="col-span-12 md:col-span-3 mt-8 md:mt-0 md:text-right" data-reveal>
            <Link href="/contact" className="btn btn-ink">Book a consultation <span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
