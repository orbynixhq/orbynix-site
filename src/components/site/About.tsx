import { Section } from "./Section";
import { Target, Compass, Rocket } from "lucide-react";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Orbynix"
      title={<>A small studio with <span className="text-gradient">startup DNA</span>.</>}
      description="We're a two-person web studio obsessed with shipping fast, beautiful, and conversion-focused websites. No bloated agencies, no endless meetings — just clean code and crisp design delivered on time."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {[
          {
            icon: Target,
            title: "Our Mission",
            text: "Help founders launch credible, conversion-ready web presences without enterprise pricing or enterprise timelines.",
          },
          {
            icon: Compass,
            title: "Our Vision",
            text: "Be the go-to web partner for early-stage teams who care about craft as much as they care about growth.",
          },
          {
            icon: Rocket,
            title: "Why Choose Us",
            text: "Direct founder access, modern stack, transparent process, and an obsession with the details most studios skip.",
          },
        ].map((c) => (
          <div key={c.title} className="glass rounded-2xl p-6 hover-lift">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-white/10">
              <c.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 font-[Space_Grotesk] text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}