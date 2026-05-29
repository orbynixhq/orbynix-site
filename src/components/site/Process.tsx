import { Section } from "./Section";

const STEPS = [
  { n: "01", title: "Discovery", text: "We unpack your goal, audience, and brand into a sharp one-page brief." },
  { n: "02", title: "Planning", text: "Sitemap, content outline, and design direction agreed before a pixel ships." },
  { n: "03", title: "Design", text: "Modern, on-brand UI designed directly in components — no static mockups." },
  { n: "04", title: "Development", text: "Type-safe React build, fully responsive, accessible, and SEO-ready." },
  { n: "05", title: "Launch", text: "Domain, hosting, analytics, and a clean handover — live in days, not months." },
  { n: "06", title: "Support", text: "Ongoing iteration, fixes, and improvements as your startup grows." },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How we work"
      title={<>A simple, <span className="text-gradient">repeatable process</span>.</>}
      description="Six clear phases — no surprises, no theatre. You always know what's next."
    >
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STEPS.map((s) => (
          <div key={s.n} className="relative glass rounded-2xl p-6 hover-lift overflow-hidden">
            <div className="font-[Space_Grotesk] text-5xl font-semibold text-gradient opacity-90">
              {s.n}
            </div>
            <h3 className="mt-4 font-[Space_Grotesk] text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            <div className="absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-gradient-brand opacity-10 blur-2xl" />
          </div>
        ))}
      </div>
    </Section>
  );
}