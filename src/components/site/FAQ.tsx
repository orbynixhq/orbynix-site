import { Section } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Most projects start from $299 for a single landing page and from $699 for a full marketing site. Custom builds are scoped individually. Every quote is fixed after a free intro call — no hidden fees.",
  },
  {
    q: "How long does delivery take?",
    a: "Landing pages typically go live in 5–7 days. Full marketing sites take 10–14 days. Custom apps depend on scope and are estimated upfront.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — every project includes a post-launch support window for fixes and small tweaks. Ongoing care and iteration plans are available on request.",
  },
  {
    q: "What technologies do you use?",
    a: "We build on a modern React stack (TanStack, Vite, Tailwind, TypeScript) with attention to performance, accessibility, and SEO. The output is clean, owned, and easy to extend.",
  },
  {
    q: "How many revisions are included?",
    a: "Landing pages include 2 rounds of revisions, and full marketing sites include 3 rounds. Additional revisions are quoted transparently if needed.",
  },
  {
    q: "Can you help with hosting and domains?",
    a: "Yes. We help you choose a domain registrar and a hosting setup (Vercel, Cloudflare, or similar), and handle the deploy end-to-end so you go live without friction.",
  },
];

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Frequently asked <span className="text-gradient">questions</span>.</>}
    >
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl border-0 px-5"
            >
              <AccordionTrigger className="text-left font-[Space_Grotesk] text-base sm:text-lg font-medium hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}