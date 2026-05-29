import { Section } from "./Section";
import {
  Code2,
  LayoutTemplate,
  Briefcase,
  User,
  Palette,
  Smartphone,
  RefreshCw,
  Rocket,
  Wrench,
} from "lucide-react";

const SERVICES = [
  { icon: Code2, title: "Website Development", desc: "Production-grade websites built on modern React + TanStack stacks — fast, type-safe, and scalable." },
  { icon: LayoutTemplate, title: "Landing Page Design", desc: "High-conversion landing pages designed around one clear goal — sign-ups, sales, or bookings." },
  { icon: Briefcase, title: "Business Websites", desc: "Credible, polished sites that turn first-time visitors into qualified leads for your business." },
  { icon: User, title: "Portfolio Websites", desc: "Editorial-grade portfolios for creators, freelancers, and studios that want their work to stand out." },
  { icon: Palette, title: "UI / UX Design", desc: "Interfaces designed in code with a real design system — tokens, components, motion from day one." },
  { icon: Smartphone, title: "Responsive Design", desc: "Mobile-first layouts that look intentional on every screen, from 360px phones to ultra-wide displays." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize an outdated site with a refreshed brand, faster performance, and better conversion." },
  { icon: Rocket, title: "Startup Websites", desc: "End-to-end web presence for early-stage teams — from brand wordmark to launch-ready marketing site." },
  { icon: Wrench, title: "Custom Web Solutions", desc: "Bespoke web apps, dashboards, integrations, and tailored features built around your workflow." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we do"
      title={<>Everything you need to <span className="text-gradient">launch on the web</span>.</>}
      description="One studio, every layer of your web presence — strategy, design, development, and launch."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className="group relative overflow-hidden glass rounded-2xl p-6 hover-lift"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-3xl transition-smooth" />
            <div className="flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-soft border border-white/10 group-hover:scale-110 transition-smooth">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground/70 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-[Space_Grotesk] text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}