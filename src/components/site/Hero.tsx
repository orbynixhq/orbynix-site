import { ArrowRight, Sparkles } from "lucide-react";
import { BRAND } from "./constants";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Orbit decoration */}
      <div className="pointer-events-none absolute left-1/2 top-24 -z-0 hidden lg:block">
        <div className="relative h-[520px] w-[520px] -translate-x-1/2 animate-orbit opacity-50">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-10 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-brand shadow-glow" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs sm:text-sm text-muted-foreground animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Now booking projects for 2026
          </div>

          <h1
            className="mt-6 font-[Space_Grotesk] text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Premium websites,
            <br />
            engineered for <span className="text-gradient">ambitious startups</span>.
          </h1>

          <p
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            {BRAND.name} is a boutique web studio building fast, modern, conversion-focused
            websites — from launch-ready landing pages to scalable custom platforms.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <a
              href={BRAND.calendly}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm sm:text-base font-medium text-primary-foreground shadow-glow hover:shadow-violet transition-smooth"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm sm:text-base font-medium hover:bg-white/10 transition-smooth"
            >
              View Services
            </a>
          </div>

          {/* metric bar */}
          <div
            className="mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {[
              { k: "7–14d", v: "Avg. delivery" },
              { k: "100%", v: "Responsive & SEO" },
              { k: "1:1", v: "Founder access" },
            ].map((m) => (
              <div key={m.v} className="glass rounded-2xl px-3 py-4">
                <div className="font-[Space_Grotesk] text-lg sm:text-2xl font-semibold text-gradient">
                  {m.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}