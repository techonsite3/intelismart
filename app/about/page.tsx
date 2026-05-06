import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { approach } from "@/lib/site-content";

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
