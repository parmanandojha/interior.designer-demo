import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { projects } from "@/lib/content";

export const metadata = { title: "Work — Lake & Wells" };

export default function WorkPage() {
  const [recent, ...rest] = projects;

  return (
    <>
      <PageHero
        section="Work"
        idx="01"
        right={`${projects.length} projects · 2023—2026`}
        title={<>Every<br />space<span className="text-rust">.</span></>}
        lead="The people who live there, the moments that unfold, and the choices that shape it. Here are the homes, studios, and interiors we've already brought to life across Chicago."
      />

      {/* ONE RECENT PROJECT — featured above the grid */}
      <section className="container-x section-sm">
        <p className="mono text-mute mb-6" data-reveal>Most recent</p>
        <Link href={`/work/${recent.slug}`} className="group block" data-reveal>
          <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-off">
            <Image src={recent.cover} alt={recent.title} fill priority className="object-cover transition-transform duration-[1600ms] group-hover:scale-105" />
            <div className="absolute left-0 right-0 bottom-0 p-5 md:p-8 flex justify-between items-end">
              <div>
                <p className="mono text-paper/70 mb-2">{recent.tag} · {recent.year}</p>
                <h2 className="font-serif text-3xl md:text-5xl text-paper">{recent.title}</h2>
              </div>
              <p className="mono text-paper/70 hidden md:block">{recent.place} · {recent.area}</p>
            </div>
          </div>
        </Link>
      </section>

      {/* PROJECT GRID */}
      <section className="container-x section">
        <div className="flex items-end justify-between mb-10">
          <h2 className="tx-h2" data-reveal>All projects</h2>
          <p className="mono text-mute" data-reveal>{rest.length} more</p>
        </div>
        <div className="grid-12 gap-y-14">
          {rest.map((p, i) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`group block ${i % 2 === 0 ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5"}`}
              data-reveal
            >
              <div className={`relative overflow-hidden bg-off ${i % 2 === 0 ? "aspect-[16/11]" : "aspect-[4/5]"}`}>
                <Image src={p.cover} alt={p.title} fill className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                <span className="absolute top-3 left-3 mono bg-paper px-2 py-1">{p.idx}</span>
              </div>
              <div className="flex items-baseline justify-between mt-4">
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

      {/* CTA */}
      <section className="container-x section">
        <div className="grid-12 items-end border-t hair pt-14">
          <h2 className="col-span-12 md:col-span-8 tx-display" data-reveal>Have a space in mind? <em className="text-rust">Bring it to us.</em></h2>
          <div className="col-span-12 md:col-span-3 md:col-start-10 mt-8 md:mt-0 md:text-right" data-reveal>
            <Link href="/contact" className="btn btn-ink">Book consultation <span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
