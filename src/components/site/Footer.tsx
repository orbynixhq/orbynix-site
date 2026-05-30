import { BRAND, NAV_LINKS } from "./constants";

const SERVICES = [
  "Website Development",
  "Landing Page Design",
  "Business Websites",
  "Portfolio Websites",
  "UI/UX Design",
  "Custom Web Solutions",
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
           <div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="Brand Logo" 
    className="h-8 w-auto" 
  />
  <span className="font-[Space_Grotesk] text-xl font-semibold">{BRAND.name}</span>
</div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {BRAND.tagline}
            </p>
          </div>

          <FooterCol title="Quick Links" items={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))} />
          <FooterCol title="Services" items={SERVICES.map((s) => ({ label: s, href: "#services" }))} />

          <div>
            <h4 className="text-sm font-medium mb-4">Get in touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-foreground transition-smooth break-all">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.calendly} target="_blank" rel="noreferrer" className="hover:text-foreground transition-smooth">
                  Book a free call
                </a>
              </li>
              <li>
                <a href={BRAND.socials.x} target="_blank" rel="noreferrer" className="hover:text-foreground transition-smooth">
                  X · @orbynix
                </a>
              </li>
              <li>
                <a href={BRAND.socials.telegram} target="_blank" rel="noreferrer" className="hover:text-foreground transition-smooth">
                  Telegram · @orbynix_studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Created by <a href="https://orbynix.studio" className="hover:text-foreground transition-smooth underline underline-offset-2">Orbynix</a></span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="hover:text-foreground transition-smooth">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
