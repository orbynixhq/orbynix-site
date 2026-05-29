import { Section } from "./Section";
import { Check } from "lucide-react";
import { BRAND } from "./constants";

const TIERS = [
  {
    name: "Launchpad",
    blurb: "For founders who need a sharp landing page, fast.",
    price: "From $299",
    features: [
      "1-page landing or portfolio",
      "Custom design, mobile-first",
      "SEO basics + analytics",
      "Delivery in 5–7 days",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Studio",
    blurb: "Full marketing site for early-stage startups.",
    price: "From $699",
    featured: true,
    features: [
      "Up to 6 custom pages",
      "Tailored design system",
      "Contact + booking integrations",
      "Performance + SEO tuning",
      "Delivery in 10–14 days",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Custom",
    blurb: "Bespoke web apps, dashboards, and custom builds.",
    price: "Let's talk",
    features: [
      "Custom scope & roadmap",
      "Web apps, dashboards, CMS",
      "Auth, payments, integrations",
      "Ongoing iteration & support",
      "Scoped to your timeline",
    ],
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={<>Simple, <span className="text-gradient">startup-friendly</span> pricing.</>}
      description="Transparent starting points. Every project is scoped and quoted individually after a free intro call."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={
              "relative rounded-2xl p-6 sm:p-7 hover-lift " +
              (t.featured
                ? "border border-primary/40 bg-gradient-soft shadow-glow"
                : "glass")
            }
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-brand px-3 py-1 text-[11px] font-medium text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="font-[Space_Grotesk] text-xl font-semibold">{t.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
            <div className="mt-5 font-[Space_Grotesk] text-3xl font-semibold">{t.price}</div>
            <ul className="mt-5 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-soft border border-white/10 shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noreferrer"
              className={
                "mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-smooth " +
                (t.featured
                  ? "bg-gradient-brand text-primary-foreground shadow-glow hover:shadow-violet"
                  : "border border-white/10 hover:bg-white/5")
              }
            >
              Book a Free Call
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}