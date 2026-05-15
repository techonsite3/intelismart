import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { buildPageMetadata } from "@/lib/seo";
import { serviceAreaPages, services } from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Integrated Technology Services",
  description:
    "Intelismart delivers integrated technology services across managed IT, AV, network infrastructure, fiber, VoIP, security, datacenter support, training, and system evaluations.",
  path: "/services",
  image: "/images/services/Managed-IT-Services-1.png",
  imageAlt: "Intelismart integrated technology services overview"
});

const recurringPlans = [
  "Managed monitoring for network, firewall, Wi-Fi, VoIP, and critical infrastructure",
  "Preventive maintenance, lifecycle reviews, patch planning, and documentation",
  "Quarterly infrastructure audits for cost, uptime, risk, and expansion readiness",
  "Multi-site standards for churches, restaurants, clinics, offices, warehouses, and public-sector teams"
];

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
      <section className="service-area-related">
        <div>
          <p className="label">Recurring Support</p>
          <h2>Project work should become a maintained infrastructure standard.</h2>
          <p>
            Intelismart supports one-time deployments and ongoing managed
            infrastructure plans for organizations that need uptime, visibility,
            lifecycle management, and fewer vendor handoffs.
          </p>
        </div>
        <div className="service-area-signal-list">
          {recurringPlans.map((plan) => (
            <div key={plan}>
              <ArrowRight aria-hidden="true" size={15} />
              <p>{plan}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="service-area-related">
        <div>
          <p className="label">Local SEO Markets</p>
          <h2>Houston first, Texas ready, North America conscious.</h2>
          <p>
            These targeted pages help customers and search engines understand
            exactly where Intelismart operates and which commercial service
            categories we support.
          </p>
        </div>
        <div className="service-area-service-list">
          {serviceAreaPages.map((page) => (
            <a href={`/service-areas/${page.slug}`} key={page.slug}>
              {page.eyebrow}
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
