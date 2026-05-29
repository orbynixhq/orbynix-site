import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Calendar, Video, Clock } from "lucide-react";
import { BRAND } from "./constants";

export function Booking() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoaded(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [loaded]);

  return (
    <Section
      id="book"
      eyebrow="Book a call"
      title={<>Schedule a <span className="text-gradient">free intro call</span>.</>}
      description="A 20-minute Google Meet to walk through your project, scope, and timeline. No pressure, no obligation."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Calendar, title: "Pick a time", text: "Choose any slot that works for you — your timezone, automatically." },
            { icon: Video, title: "Google Meet", text: "A calendar invite with a Google Meet link is created instantly." },
            { icon: Clock, title: "20 minutes", text: "Short, focused, and structured around your goal." },
          ].map((b) => (
            <div key={b.title} className="glass rounded-2xl p-5 flex gap-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-soft border border-white/10 shrink-0">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-[Space_Grotesk] font-semibold">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{b.text}</p>
              </div>
            </div>
          ))}
          <a
            href={BRAND.calendly}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-violet transition-smooth"
          >
            Open Calendly in a new tab
          </a>
        </div>

        <div ref={ref} className="lg:col-span-3 glass rounded-2xl overflow-hidden min-h-[640px] relative">
          {loaded ? (
            <iframe
              title="Book a call with Orbynix"
              src={`${BRAND.calendly}?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1&background_color=141425&text_color=ffffff&primary_color=22d3ee`}
              className="w-full h-[640px] border-0"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-sm text-muted-foreground">
              Loading scheduler…
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}