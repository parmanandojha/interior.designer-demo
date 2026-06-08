"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container-x page-intro">
        <div className="grid-12 pt-6">
          <p className="col-span-6 mono text-mute">↳ Contact / 05</p>
          <p className="col-span-6 md:text-right mono text-mute">Booking — Paid Consultation</p>
        </div>
        <h1 className="tx-display mt-10">
          Your<br />space<span className="text-rust">.</span>
        </h1>
        <div className="grid-12 mt-10 pt-6">
          <p className="col-span-12 md:col-span-7 md:col-start-6 tx-lead">
            The consultation is paid and applied to your project — it keeps the conversation serious on both sides.
          </p>
        </div>
      </section>

      <section className="container-x section">
        <div className="grid-12">
          <aside className="col-span-12 md:col-span-4 md:sticky md:top-28 self-start space-y-10">
            <div>
              <p className="mono text-mute mb-3">— Fee</p>
              <p className="tx-display">$500</p>
              <p className="tx-body text-mute mt-4 max-w-xs">
                90-minute consultation. On-site or at the studio. Includes initial direction document.
                Fully applied to your project fee if we proceed.
              </p>
            </div>
            <div className="border-t hair pt-6 space-y-4">
              <div>
                <p className="mono text-mute mb-1.5">Studio</p>
                <p className="tx-body">318 W Grand Ave, River North, Chicago, IL 60654</p>
              </div>
              <div>
                <p className="mono text-mute mb-1.5">Email</p>
                <p className="tx-body">studio@lakeandwells.com</p>
              </div>
              <div>
                <p className="mono text-mute mb-1.5">Phone</p>
                <p className="tx-body">+1 312 555 0148</p>
              </div>
              <div>
                <p className="mono text-mute mb-1.5">Hours</p>
                <p className="tx-body">Mon — Sat · 9:00 — 18:00 CT</p>
              </div>
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="col-span-12 md:col-span-7 md:col-start-6 mt-14 md:mt-0"
          >
            {sent ? (
              <div className="border-t hair pt-10">
                <p className="mono text-rust mb-4">— Received</p>
                <h3 className="tx-h2 mb-4">Thank you.</h3>
                <p className="tx-body text-mute max-w-md">
                  We&apos;ll be in touch within two business days to schedule your consultation and share
                  payment details.
                </p>
              </div>
            ) : (
              <>
                <Field n="01" label="Name" name="name" required />
                <Field n="02" label="Email" name="email" type="email" required />
                <SelectField n="03" label="Project type" name="type" options={["Residential", "Commercial", "Developer & Fit-Out"]} />
                <SelectField n="04" label="Approximate budget" name="budget" options={["Under $50k", "$50k – $150k", "$150k – $500k", "$500k +"]} />
                <SelectField n="05" label="Timeline" name="timeline" options={["Less than 3 months", "3 – 6 months", "6 – 12 months", "Exploring / flexible"]} />
                <TextareaField n="06" label="Tell us about the space" name="message" />
                <div className="pt-8 flex flex-col md:flex-row md:items-center gap-4">
                  <button type="submit" className="btn btn-ink">Send &amp; book consultation <span>↗</span></button>
                  <p className="mono text-mute md:ml-4">By submitting you agree to our consultation terms.</p>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ n, label, name, type = "text", required = false }: { n: string; label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block border-t hair pt-4 pb-5">
      <span className="mono text-mute mb-3 block">{n} — {label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={label}
        className="w-full bg-transparent tx-h3 outline-none placeholder:text-mute/40"
      />
    </label>
  );
}

function SelectField({ n, label, name, options }: { n: string; label: string; name: string; options: string[] }) {
  return (
    <label className="block border-t hair pt-4 pb-5">
      <span className="mono text-mute mb-3 block">{n} — {label}</span>
      <select name={name} className="w-full bg-transparent tx-h3 outline-none appearance-none cursor-pointer">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function TextareaField({ n, label, name }: { n: string; label: string; name: string }) {
  return (
    <label className="block border-t hair pt-4 pb-5">
      <span className="mono text-mute mb-3 block">{n} — {label}</span>
      <textarea
        name={name}
        rows={3}
        placeholder="Square footage, neighborhood, when you'd like to begin, anything else."
        className="w-full bg-transparent tx-body font-bold tight outline-none resize-none placeholder:text-mute/40"
      />
    </label>
  );
}
