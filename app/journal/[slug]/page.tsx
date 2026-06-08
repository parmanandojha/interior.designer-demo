import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug);
  return { title: a ? `${a.title} — Lake & Wells` : "Journal — Lake & Wells" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const i = articles.findIndex((x) => x.slug === params.slug);
  if (i === -1) notFound();
  const a = articles[i];
  const next = articles[(i + 1) % articles.length];

  return (
    <>
      {/* HEADER */}
      <section className="container-x page-intro">
        <div className="flex items-center justify-between mb-10 md:mb-14" data-reveal>
          <Link href="/journal" className="mono text-rust link-arrow">← Journal</Link>
          <p className="mono text-mute">{a.date} · {a.read}</p>
        </div>
        <p className="mono text-rust mb-6" data-reveal>{a.tag}</p>
        <h1 className="tx-display max-w-4xl" data-reveal>{a.title}</h1>
      </section>

      {/* COVER */}
      <section className="container-x section-sm">
        <div className="relative aspect-[16/9] md:aspect-[16/7] overflow-hidden bg-off" data-reveal>
          <Image src={a.img} alt={a.title} fill priority className="object-cover" />
        </div>
      </section>

      {/* BODY */}
      <section className="container-x section">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <p className="tx-h3 mb-10" data-reveal>{a.excerpt}</p>
            {a.body.map((para, j) => (
              <p key={j} className="tx-lead text-ink/85 mb-7" data-reveal>{para}</p>
            ))}
            <div className="border-t hair mt-10 pt-6 flex items-center justify-between" data-reveal>
              <span className="mono text-mute">Lake &amp; Wells — Studio</span>
              <span className="mono text-mute">{a.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="container-x section border-t hair">
        <p className="mono text-mute mb-4" data-reveal>Next article</p>
        <Link href={`/journal/${next.slug}`} className="group block" data-reveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="tx-h2 group-hover:text-rust transition max-w-3xl">{next.title}</h2>
            <span className="text-rust text-2xl shrink-0 mb-1">↗</span>
          </div>
          <p className="mono text-mute mt-3">{next.tag} · {next.date}</p>
        </Link>
      </section>
    </>
  );
}
