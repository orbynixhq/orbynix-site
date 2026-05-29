import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";
import nimbus from "@/assets/proj-nimbus.jpg";
import folio from "@/assets/proj-folio.jpg";
import mitti from "@/assets/proj-mitti.jpg";

const PROJECTS = [
  {
    name: "Nimbus",
    role: "SaaS Landing Page",
    desc: "A polished landing site for an AI operations platform — dark, conversion-focused, and engineered for speed.",
    stack: ["React", "TanStack", "Tailwind", "Motion"],
    image: nimbus,
    url: "https://nimbus-orbynix.vercel.app",
  },
  {
    name: "Folio",
    role: "Creative Portfolio Product",
    desc: "A creator-first portfolio product with a clean, editorial layout, waitlist flow, and analytics-first IA.",
    stack: ["React", "Tailwind", "Vercel"],
    image: folio,
    url: "https://folio-orbynix.vercel.app",
  },
  {
    name: "Mitti Coffee",
    role: "Premium E-Commerce Website",
    desc: "A luxury e-commerce experience for India's finest single-origin specialty coffee — editorial design, farm-to-cup storytelling, and seamless product discovery.",
    stack: ["Next.js", "Sanity CMS", "Vercel"],
    image: mitti,
    url: "https://mitti-three.vercel.app",
  },
];

export function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title={<>Real projects, <span className="text-gradient">shipped by us</span>.</>}
      description="A snapshot of recent builds — each one shipped end-to-end, from concept to live URL."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group glass rounded-2xl overflow-hidden hover-lift block"
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-secondary/40">
              <img
                src={p.image}
                alt={`${p.name} — ${p.role}`}
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full glass-strong group-hover:bg-gradient-brand transition-smooth">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="p-5">
              <div className="text-xs text-muted-foreground">{p.role}</div>
              <h3 className="mt-1 font-[Space_Grotesk] text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] uppercase tracking-wider rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}