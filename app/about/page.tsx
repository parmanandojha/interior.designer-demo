import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const team = [
  { name: "Margaret Ellison", role: "Principal · Founder", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
  { name: "David Hartwell", role: "Director, Architecture", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
  { name: "Claire Donovan", role: "Head of Interiors", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" },
  { name: "Marcus Reed", role: "Lead, Commercial", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80" }
];

const principles = [
  { n: "01", t: "Proportion before pattern.", b: "Get the bones right and the rest follows. A room that feels right doesn't need decoration to rescue it." },
  { n: "02", t: "Material over surface.", b: "We specify materials that age — limestone, white oak, lime plaster, brass. Things that get better, not tired." },
  { n: "03", t: "Light as architecture.", b: "Light is the difference between a photograph and a place you want to be in at 5pm in a Chicago January." },
  { n: "04", t: "Made to last ten years.", b: "If a choice won't survive the trend cycle, we don't make it. Restraint is the long game." }
];

const timeline = [
  { y: "2013", e: "Studio founded in River North, Chicago" },
  { y: "2016", e: "First commercial project — Café Sable, West Loop" },
  { y: "2019", e: "North Shore residential practice opens" },
  { y: "2021", e: "Developer fit-out practice launched" },
  { y: "2023", e: "Named to AD100 by Architectural Digest" },
  { y: "2025", e: "400th project completed" }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        section="About"
        idx="03"
        right="Est. 2013 — Chicago"
        title={<>Details<br />no one<br />notices<span className="text-rust">.</span></>}
        lead="Design is decided in the details no one notices — until they're wrong. We do interiors that are still right in ten years."
      />

      {/* STUDIO IMAGE */}
      <section className="container-x section-sm">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-7 relative aspect-[16/10] overflow-hidden bg-off cell">
            <Image src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=2000&q=85" alt="The studio" fill className="object-cover" />
            <span className="absolute top-3 left-3 mono bg-paper px-2 py-1">Studio / River North</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-between gap-8 mt-10 md:mt-0">
            <p className="mono text-mute" data-reveal>↳ A note from the studio</p>
            <p className="tx-h3" data-reveal>
              A studio of architects, designers, and project leads. Chicago — building across the Midwest.
            </p>
            <div className="grid grid-cols-2 gap-y-6 mono" data-reveal>
              <div><p className="text-mute mb-1.5">Team</p><p className="tx-h3">16</p></div>
              <div><p className="text-mute mb-1.5">Projects</p><p className="tx-h3">400+</p></div>
              <div><p className="text-mute mb-1.5">States</p><p className="tx-h3">3</p></div>
              <div><p className="text-mute mb-1.5">Since</p><p className="tx-h3">2013</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="container-x section">
        <div className="grid-12 pt-6">
          <p className="col-span-12 md:col-span-3 mono text-mute mb-6 md:mb-0" data-reveal>§ A — Belief</p>
          <div className="col-span-12 md:col-span-9 space-y-8">
            <p className="tx-h2 max-w-3xl" data-reveal>
              A space should feel inevitable. Like it couldn&apos;t have been any other way.
            </p>
            <p className="tx-lead text-mute max-w-2xl" data-reveal>
              We don&apos;t do trends for their own sake. We&apos;ve delivered homes, commercial spaces,
              and developer projects across Chicago, the North Shore, Lake Geneva, and Michigan. Every
              project, whatever its scale, gets the same obsession with proportion, light, material, and
              how a person actually moves through a room.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — DARK */}
      <section className="bg-coal text-paper section">
        <div className="container-x">
          <div className="grid-12 border-t hair-light pt-6 mb-14">
            <p className="col-span-12 md:col-span-3 mono text-paper/50 mb-6 md:mb-0" data-reveal>§ B — Principles</p>
            <h2 className="col-span-12 md:col-span-9 tx-h2" data-reveal>Four rules. No exceptions.</h2>
          </div>
          <div className="grid-12 gap-y-12">
            {principles.map((p) => (
              <div key={p.n} className="col-span-12 md:col-span-6 border-t hair-light pt-6 md:pr-12" data-reveal>
                <div className="flex justify-between mb-6">
                  <span className="mono text-rust">{p.n}</span>
                  <span className="mono text-paper/40">RULE</span>
                </div>
                <h3 className="tx-h2 mb-4 max-w-md">{p.t}</h3>
                <p className="tx-body text-paper/65 max-w-md">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container-x section">
        <div className="grid-12 pt-6 mb-14">
          <p className="col-span-12 md:col-span-3 mono text-mute mb-6 md:mb-0" data-reveal>§ C — Studio</p>
          <h2 className="col-span-12 md:col-span-9 tx-h2" data-reveal>The people<br />behind the rooms.</h2>
        </div>
        <div className="grid-12 gap-y-10">
          {team.map((m, i) => (
            <div key={m.name} className="col-span-6 md:col-span-3" data-reveal>
              <div className="relative aspect-[3/4] overflow-hidden bg-off cell mb-4">
                <Image src={m.img} alt={m.name} fill className="object-cover grayscale hover:grayscale-0 transition duration-700" />
                <span className="absolute top-3 left-3 mono bg-paper px-2 py-1">0{i + 1}</span>
              </div>
              <p className="tx-h3">{m.name}</p>
              <p className="mono text-mute mt-1.5">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-x section">
        <div className="grid-12 pt-6 mb-14">
          <p className="col-span-12 md:col-span-3 mono text-mute mb-6 md:mb-0" data-reveal>§ D — Timeline</p>
          <h2 className="col-span-12 md:col-span-9 tx-h2" data-reveal>Twelve years,<br />in milestones.</h2>
        </div>
        <div className="border-t hair">
          {timeline.map((t) => (
            <div key={t.y} className="grid-12 py-5 border-b hair items-center" data-reveal>
              <p className="col-span-3 md:col-span-2 mono text-rust">{t.y}</p>
              <p className="col-span-9 md:col-span-10 tx-h3">{t.e}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x section">
        <div className="grid-12 items-center">
          <h2 className="col-span-12 md:col-span-8 tx-h2" data-reveal>
            If that&apos;s the kind of<br />work you&apos;re after<span className="text-rust">,</span> we should talk.
          </h2>
          <Link href="/contact" className="col-span-12 md:col-span-4 md:justify-self-end btn btn-ink mt-6 md:mt-0" data-reveal>
            Book Consultation <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
