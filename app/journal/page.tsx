import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { articles } from "@/lib/content";

export const metadata = { title: "Journal — Lake & Wells" };

export default function JournalPage() {
  const [lead, ...rest] = articles;
  return (
    <>
      <PageHero
        section="Journal"
        idx="06"
        right={`${articles.length} articles`}
        title={<>News &amp; <em className="text-rust">notes</em>.</>}
        lead="Thinking from the studio — on light, material, process, and the projects we're in the middle of."
      />

      {/* FEATURED ARTICLE */}
      <section className="container-x section-sm">
        <Link href={`/journal/${lead.slug}`} className="grid-12 gap-y-8 items-center group" data-reveal>
          <div className="col-span-12 md:col-span-7 relative aspect-[16/10] overflow-hidden bg-off">
            <Image src={lead.img} alt="" fill priority className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="flex items-center gap-3 mb-4">
              <span className="mono text-rust">{lead.tag}</span>
              <span className="mono text-mute">{lead.date} · {lead.read}</span>
            </div>
            <h2 className="tx-h2 mb-5 group-hover:text-rust transition">{lead.title}</h2>
            <p className="tx-body text-mute mb-6">{lead.excerpt}</p>
            <span className="mono text-rust link-arrow">Read article <span className="arr">→</span></span>
          </div>
        </Link>
      </section>

      {/* GRID */}
      <section className="container-x section">
        <div className="grid-12 gap-y-12">
          {rest.map((a) => (
            <Link key={a.slug} href={`/journal/${a.slug}`} className="col-span-12 md:col-span-6 group block" data-reveal>
              <div className="relative aspect-[16/10] overflow-hidden bg-off mb-5">
                <Image src={a.img} alt="" fill className="object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="mono text-rust">{a.tag}</span>
                <span className="mono text-mute">{a.date} · {a.read}</span>
              </div>
              <h3 className="tx-h3 group-hover:text-rust transition">{a.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
