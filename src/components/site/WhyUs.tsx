import { Section } from "./Section";
import { Zap, Code, Smartphone, Search, Sparkles, Rocket, TrendingUp } from "lucide-react";

const ITEMS = [
  { icon: Zap, title: "Fast Delivery", text: "Most projects ship in 7–14 days, not months." },
  { icon: Code, title: "Clean Code", text: "Type-safe, componentized, and easy to extend." },
  { icon: Smartphone, title: "Mobile Responsive", text: "Mobile-first layouts that look intentional everywhere." },
  { icon: Search, title: "SEO Friendly", text: "Semantic markup, meta, and Core Web Vitals out of the box." },
  { icon: Sparkles, title: "Modern UI", text: "Premium design, motion, and details — never templated." },
  { icon: Rocket, title: "Startup Focused", text: "Built for founders who need to ship and iterate fast." },
  { icon: TrendingUp, title: "Scalable Solutions", text: "Architecture that grows with your roadmap and team." },
];

export function WhyUs() {
  return (
    <Section
      id="why"
      eyebrow="Why Orbynix"
      title={<>Built around what <span className="text-gradient">actually matters</span>.</>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ITEMS.map((i) => (
          <div key={i.title} className="glass rounded-2xl p-5 hover-lift">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-soft border border-white/10">
              <i.icon className="h-4.5 w-4.5 text-primary" />
            </div>
            <h3 className="mt-4 font-[Space_Grotesk] font-semibold">{i.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}