export default function PageHero({
  section,
  idx,
  right,
  title,
  lead
}: {
  section: string;
  idx: string;
  right: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <section className="container-x page-intro">
      <div className="flex items-center justify-between mb-10 md:mb-14" data-reveal>
        <p className="mono text-rust">{section} — {idx}</p>
        <p className="mono text-mute">{right}</p>
      </div>
      <h1 className="tx-mega mb-12" data-reveal>{title}</h1>
      <div className="grid-12 border-t hair pt-8">
        <p className="col-span-12 md:col-span-6 md:col-start-7 tx-lead text-mute" data-reveal>{lead}</p>
      </div>
    </section>
  );
}
