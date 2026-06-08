import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-coal text-paper mt-24">
      {/* CONTACT ROW */}
      <div className="container-x pt-20 pb-10">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-7">
            <p className="mono text-paper/50 mb-8">↳ Index / Get in touch</p>
            <a href="mailto:studio@lakeandwells.com" className="tx-display block hover:text-rust transition">
              Let&apos;s talk<span className="text-rust">.</span>
            </a>
            <Link href="/contact" className="btn mt-12 text-paper border-paper hover:bg-paper hover:text-coal">
              Book Consultation <span>↗</span>
            </Link>
          </div>

          <div className="col-span-12 md:col-span-5 mt-16 md:mt-0 grid grid-cols-2 gap-x-6 gap-y-10 content-start">
            <div>
              <p className="mono text-paper/40 mb-3">Studio</p>
              <p className="tx-body">318 W Grand Ave<br />River North<br />Chicago, IL 60654</p>
            </div>
            <div>
              <p className="mono text-paper/40 mb-3">Reach</p>
              <p className="tx-body">studio@lakeandwells.com<br />+1 312 555 0148</p>
            </div>
            <div>
              <p className="mono text-paper/40 mb-3">Index</p>
              <ul className="space-y-1.5 tx-body">
                <li><Link href="/work" className="hover:text-rust">Work</Link></li>
                <li><Link href="/services" className="hover:text-rust">Services</Link></li>
                <li><Link href="/about" className="hover:text-rust">About</Link></li>
                <li><Link href="/process" className="hover:text-rust">Process</Link></li>
              </ul>
            </div>
            <div>
              <p className="mono text-paper/40 mb-3">Channels</p>
              <ul className="space-y-1.5 tx-body">
                <li><a href="#" className="hover:text-rust">Instagram ↗</a></li>
                <li><a href="#" className="hover:text-rust">LinkedIn ↗</a></li>
                <li><a href="#" className="hover:text-rust">Pinterest ↗</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GIANT WORDMARK */}
      <div className="container-x pt-10 pb-8 border-t hair-light overflow-hidden">
        <h2 className="font-serif leading-[0.85] tracking-[-0.02em] text-[clamp(3rem,13.5vw,13.5rem)] whitespace-nowrap">
          Lake <span className="text-rust italic">&amp;</span> Wells
        </h2>
      </div>

      {/* META */}
      <div className="container-x pb-10">
        <div className="grid-12 pt-6 border-t hair-light items-center">
          <p className="col-span-6 md:col-span-3 mono text-paper/50">© 2026 — All rights</p>
          <p className="col-span-6 md:col-span-3 mono text-paper/50 md:text-center">v3.0 · Chicago</p>
          <p className="col-span-12 md:col-span-3 md:col-start-7 mono text-paper/50 md:text-center mt-2 md:mt-0">N 41°53&apos; · W 87°37&apos;</p>
          <p className="col-span-12 md:col-span-3 mono text-paper/50 md:text-right mt-2 md:mt-0">Built in Chicago</p>
        </div>
      </div>
    </footer>
  );
}
