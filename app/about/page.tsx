import type { Metadata } from "next";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { buildPageMetadata } from "@/lib/seo";
import { approach } from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Approach",
  description:
    "Learn how Intelismart assesses, designs, deploys, and supports reliable infrastructure for organizations that need secure, connected, efficient environments.",
  path: "/about",
  image: "/og-image.jpg",
  imageAlt: "Intelismart approach to integrated infrastructure planning"
});

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="page-hero">
        <p className="label">Our Approach</p>
        <h1>Reliable infrastructure, clean execution, long-term support.</h1>
        <p>
          Intelismart designs, deploys, and supports secure technology systems
          for organizations that need connected, protected, efficient spaces.
        </p>
        <LeadCapture />
      </section>
      <section className="process-section" id="approach">
        <div className="process-grid">
          {approach.map((step) => (
            <article className="process-card" key={step.title}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
