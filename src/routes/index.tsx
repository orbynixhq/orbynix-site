import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Booking } from "@/components/site/Booking";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbynix — Premium Websites for Ambitious Startups" },
      {
        name: "description",
        content:
          "Orbynix designs and develops premium, conversion-focused websites for startups — landing pages, business sites, portfolios, UI/UX, and custom web solutions. Ships fast. Looks world-class.",
      },
      { property: "og:title", content: "Orbynix — Premium Websites for Ambitious Startups" },
      {
        property: "og:description",
        content:
          "Premium, fast, conversion-focused websites for startups and modern brands. Built end-to-end by Orbynix.",
      },
      { property: "og:url", content: "https://orbynix.studio" },
    ],
    links: [
      { rel: "canonical", href: "https://orbynix.studio" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <WhyUs />

        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}
