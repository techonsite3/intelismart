import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { buildPageMetadata } from "@/lib/seo";
import { serviceAreaPages } from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Houston, Katy, Texas & North America Service Areas",
  description:
    "Intelismart serves Houston, Katy, Texas, the United States, and Canada with managed IT, structured cabling, network, VoIP, CCTV, fiber, AV, and multi-site rollout services.",
  path: "/service-areas",
  image: "/images/services/Datacenter-Support-Services-2.png",
  imageAlt: "Intelismart network infrastructure service areas across Houston, Texas, and North America"
});

const localSignals = [
  "Houston-first local SEO pages for high-intent commercial searches",
  "Katy and Texas coverage for regional business infrastructure demand",
  "North America rollout positioning for United States and Canada expansion",
  "Integrated infrastructure language across network, AV, security, voice, fiber, and support"
];

export default function ServiceAreasPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="page-hero">
        <p className="label">Service Areas</p>
        <h1>Local-first infrastructure SEO with room to scale across North America.</h1>
        <p>
          Intelismart is prioritizing Houston, Katy, and Texas search intent
          while building a clear path for United States and Canada expansion.
        </p>
        <LeadCapture />
      </section>

      <section className="service-area-intro">
        <div>
          <p className="label">Search Strategy</p>
          <h2>Built around how customers actually search for infrastructure partners.</h2>
          <p>
            These pages target commercial intent: managed IT, structured cabling,
            VoIP, CCTV, fiber, church AV, datacenter support, and multi-site
            rollouts. Each page has a specific market, service focus, and next step.
          </p>
        </div>
        <div className="service-area-signal-list">
          {localSignals.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={16} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-grid-section">
        <div className="service-page-grid">
          {serviceAreaPages.map((page) => (
            <article className="service-page-card" key={page.slug}>
              <div className="service-page-image">
                <Image src={page.image} alt={page.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <div>
                <span className="plan-kicker">{page.region}</span>
                <h2>{page.eyebrow}</h2>
                <p>{page.summary}</p>
                <a href={`/service-areas/${page.slug}`}>
                  Explore {page.eyebrow} Services
                  <ArrowRight aria-hidden="true" size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
