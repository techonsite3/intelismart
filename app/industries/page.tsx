import Image from "next/image";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { industries } from "@/lib/site-content";

export default function IndustriesPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="page-hero">
        <p className="label">Industries</p>
        <h1>Technology environments for organizations that cannot afford confusion.</h1>
        <p>
          Churches, clinics, retail spaces, offices, properties, and growing
          businesses all need infrastructure that works quietly in the background.
        </p>
        <LeadCapture />
      </section>
      <section className="page-grid-section">
        <div className="industry-page-grid">
          {industries.map((industry) => (
            <article className="industry-page-card" id={industry.slug} key={industry.slug}>
              <Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              <div>
                <h2>{industry.title}</h2>
                <p>{industry.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
