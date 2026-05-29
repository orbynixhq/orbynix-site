import { useState } from "react";
import { z } from "zod";
import { Section } from "./Section";
import { Mail, Send, Calendar, Loader2, CheckCircle2 } from "lucide-react";
import { BRAND } from "./constants";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/api/contact.functions";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please share a bit more detail").max(2000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    try {
      await sendContactEmail({ data: parsed.data });
      setSent(true);
      toast.success("Message sent! We'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">worth shipping</span>.</>}
      description="Tell us about your project — we typically reply within one business day."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <a
            href={`mailto:${BRAND.email}`}
            className="glass rounded-2xl p-5 flex gap-4 hover-lift block"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-white/10 shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="font-[Space_Grotesk] font-medium break-all">{BRAND.email}</div>
            </div>
          </a>

          <a
            href={BRAND.calendly}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-5 flex gap-4 hover-lift block"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft border border-white/10 shrink-0">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Schedule a meeting</div>
              <div className="font-[Space_Grotesk] font-medium">Book a 20-min Google Meet</div>
            </div>
          </a>

          <div className="glass rounded-2xl p-5">
            <div className="text-xs text-muted-foreground mb-3">Find us elsewhere</div>
            <div className="flex flex-wrap gap-2">
              <a
                href={BRAND.socials.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm hover:bg-white/10 transition-smooth"
              >
                <span className="font-mono">𝕏</span> @orbynix
              </a>
              <a
                href={BRAND.socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm hover:bg-white/10 transition-smooth"
              >
                Telegram · @orbynix_studio
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-2xl p-6 sm:p-8 space-y-4"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="font-[Space_Grotesk] text-lg font-semibold">Message sent!</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Thanks for reaching out. We'll be in touch within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-2 text-xs text-muted-foreground hover:text-foreground transition-smooth underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" name="name" placeholder="Jane Founder" />
                <Field label="Email" name="email" type="email" placeholder="jane@startup.com" />
              </div>
              <Field
                label="Tell us about your project"
                name="message"
                as="textarea"
                placeholder="What are you building, who is it for, and what's your timeline?"
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:shadow-violet transition-smooth disabled:opacity-70"
              >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {submitting ? "Sending…" : "Send message"}
              </button>
              <p className="text-xs text-muted-foreground">
                Your message is sent directly to our inbox — no email client needed.
              </p>
            </>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: "textarea";
}) {
  const base =
    "w-full rounded-xl bg-background/40 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-smooth";
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground mb-1.5 inline-block">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} required placeholder={placeholder} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}