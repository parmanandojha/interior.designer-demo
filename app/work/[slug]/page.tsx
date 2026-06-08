import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — Lake & Wells` : "Project — Lake & Wells" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      {/* HEADER */}
      <section className="container-x page-intro">
        <div className="flex items-center justify-between mb-10 md:mb-14" data-reveal>
          <Link href="/work" className="mono text-rust link-arrow">← Work</Link>
          <p className="mono text-mute">{p.tag} — {p.idx}</p>
        </div>
        <h1 className="tx-mega mb-12" data-reveal>{p.title}</h1>
        <div className="grid-12 border-t hair pt-8">
          <p className="col-span-12 md:col-span-6 md:col-start-7 tx-lead text-mute" data-reveal>{p.summary}</p>
        </div>
      </section>

      {/* COVER */}
      <section className="container-x section-sm">
        <div className="relative aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-off" data-reveal>
          <Image src={p.cover} alt={p.title} fill priority className="object-cover" />
        </div>
      </section>

      {/* OVERVIEW + DETAILS */}
      <section className="container-x section">
        <div className="grid-12 gap-y-12 items-start">
          <div className="col-span-12 md:col-span-7">
            {p.body.map((para, j) => (
              <p key={j} className={`${j === 0 ? "tx-h3" : "tx-lead text-mute"} max-w-xl mb-7`} data-reveal>{para}</p>
            ))}
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 border-t hair pt-6" data-reveal>
            {[["Client", p.client], ["Year", p.year], ["Location", p.place], ["Area", p.area]].map(([k, v]) => (
              <div key={k} className="flex justify-between py-3 border-b hair">
                <span className="mono text-mute">{k}</span>
                <span className="tx-body">{v}</span>
              </div>
            ))}
            <p className="mono text-mute mt-6 mb-3">Services</p>
            <ul className="space-y-2">
              {p.services.map((s) => (
                <li key={s} className="tx-body flex items-baseline gap-3"><span className="text-rust">+</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x section-sm">
        <div className="grid-12 gap-y-8">
          {p.gallery.map((src, j) => (
            <div
              key={j}
              className={`relative overflow-hidden bg-off ${j % 3 === 0 ? "col-span-12" : "col-span-12 md:col-span-6"} ${j % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
              data-reveal
            >
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* NEXT */}
      <section className="container-x section border-t hair">
        <p className="mono text-mute mb-4" data-reveal>Next project</p>
        <Link href={`/work/${next.slug}`} className="group block" data-reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="tx-display group-hover:text-rust transition">{next.title}</h2>
            <span className="text-rust text-2xl shrink-0 mb-2">↗</span>
          </div>
          <p className="mono text-mute mt-3">{next.tag} · {next.place} · {next.year}</p>
        </Link>
      </section>
    </>
  );
}
