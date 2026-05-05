import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { services } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="page-hero">
        <p className="label">Services</p>
        <h1>Integrated technology services built around infrastructure that has to perform.</h1>
        <p>
          Network, AV, security, communications, connectivity, support, and
          training planned as one operating environment.
        </p>
        <LeadCapture />
      </section>
      <section className="page-grid-section">
        <div className="service-page-grid">
          {services.map((service) => (
            <article className="service-page-card" key={service.slug}>
              <div className="service-page-image">
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <div>
                <span className="plan-kicker">{service.kicker}</span>
                <h2>{service.title}</h2>
                <p>{service.detail}</p>
                <a href={`/services/${service.slug}`}>
                  Learn more
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
