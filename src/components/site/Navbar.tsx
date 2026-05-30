import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "./constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-smooth",
            scrolled ? "glass-strong shadow-elegant" : "border border-transparent",
          )}
        >
<a href="#top" className="flex items-center gap-2 group">
  <img 
    src="/logo.png" 
    alt="Brand Logo" 
    className="h-8 w-auto" 
  />
  {/* Optional: Keep the text next to the image by leaving this span */}
  <span className="font-[Space_Grotesk] text-xl font-semibold tracking-tight">
    {BRAND.name}
  </span>
</a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-violet transition-smooth"
            >
              Book a Free Call
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg glass"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground border-b border-white/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Book a Free Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
