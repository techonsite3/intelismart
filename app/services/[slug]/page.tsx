import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Plus } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema
} from "@/lib/seo";
import { services } from "@/lib/site-content";

const serviceBundles = [
  {
    title: "Business Infrastructure Package",
    items: ["Network + Wi-Fi + VoIP + Security", "Designed for offices and growing businesses"]
  },
  {
    title: "Church / Campus Systems",
    items: ["AV + Streaming + Network + Training", "Built for reliability and ease of use"]
  },
  {
    title: "Retail & Hospitality Systems",
    items: ["Wi-Fi + CCTV + Digital Displays + VoIP", "Optimized for customer experience and operations"]
  },
  {
    title: "Industrial & Facility Systems",
    items: ["Intercom + Network + Security + Connectivity", "Designed for warehouses, factories, and construction"]
  }
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const serviceSeoContent: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "digital-menu-board-solutions": {
    title: "Digital Menu Board Solutions Houston",
    description:
      "Centralized digital menu board solutions in Houston for restaurants, churches, retail counters, and multi-site operations that need fast updates and reliable playback."
  },
  "av-media-systems": {
    title: "Audio Visual & Media Systems Houston",
    description:
      "Intelismart designs and supports AV and media systems in Houston for sanctuaries, conference rooms, event spaces, and commercial environments that need clean control and dependable performance."
  },
  "network-infrastructure": {
    title: "Network Infrastructure Installation Houston",
    description:
      "Structured cabling, Wi-Fi, switching, routing, firewall, and commercial network infrastructure installation in Houston for organizations that need performance, uptime, and growth."
  },
  "fiber-optics-dedicated-internet": {
    title: "Fiber Optics & Dedicated Internet Houston",
    description:
      "Houston fiber infrastructure, dedicated internet, failover planning, and carrier coordination for environments that need stable bandwidth, low latency, and business continuity."
  },
  "security-surveillance": {
    title: "Commercial Security & CCTV Installation Houston",
    description:
      "Commercial CCTV, surveillance, access control, and entry systems in Houston for offices, churches, retail, hospitality, and industrial sites that need reliable visibility and control."
  },
  "managed-it-services": {
    title: "Managed IT Services Houston",
    description:
      "Managed IT services in Houston with monitoring, support, security, backups, Microsoft 365 help, and multi-site operational support for growing organizations."
  },
  "datacenter-support-services": {
    title: "Datacenter Support Services Houston",
    description:
      "Datacenter support in Houston including remote hands, rack and stack, patching, cabling, audits, and documented execution for time-sensitive infrastructure work."
  },
  "training-enablement": {
    title: "IT Training & Enablement Services",
    description:
      "Intelismart provides training and enablement services so teams can operate infrastructure, AV, security, and communication systems with confidence after deployment."
  },
  "system-evaluation": {
    title: "Free System Evaluation Houston",
    description:
      "Request a free Intelismart system evaluation in Houston to uncover technology cost savings, performance gaps, infrastructure risks, and practical next steps."
  },
  "voip-intercom-solutions": {
    title: "VoIP & Intercom Systems Houston",
    description:
      "VoIP phone systems, intercoms, paging, and business communication infrastructure in Houston for commercial spaces, churches, campuses, and multi-site teams."
  }
};

function getServiceFaqs(service: (typeof services)[number]) {
  return [
    ...(service.faqs || []),
    ...(service.faqGroups?.flatMap((group) => group.items) || [])
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const seoContent = serviceSeoContent[service.slug] || {
    title: service.title,
    description: service.detail
  };

  return buildPageMetadata({
    title: seoContent.title,
    description: seoContent.description,
    path: `/services/${service.slug}`,
    image: service.image,
    imageAlt: service.alt
  });
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const seoContent = serviceSeoContent[service.slug] || {
    title: service.title,
    description: service.detail
  };
  const faqs = getServiceFaqs(service);
  const structuredData = [
    buildServiceSchema({
      name: service.title,
      description: seoContent.description,
      path: `/services/${service.slug}`,
      image: service.image
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` }
    ]),
    ...(faqs.length ? [buildFaqSchema(faqs)] : [])
  ];

  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="service-detail-hero">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          priority
          sizes="100vw"
          style={service.heroImagePosition ? { objectPosition: service.heroImagePosition } : undefined}
        />
        <div className="media-scrim" />
        <div className="service-detail-copy">
          <p className="label">{service.kicker}</p>
          <h1>{service.title}</h1>
          <p>{service.detail}</p>
          <LeadCapture />
        </div>
      </section>
      <section className="service-detail-body">
        <div>
          <p className="label">What this includes</p>
          <h2>{service.text}</h2>
        </div>
        <div className="detail-list">
          {service.bullets.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={16} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {service.slug === "managed-it-services" ? (
        <section className="service-bundle-section">
          <div className="narrow-copy">
            <p className="label">Complete Technology Solutions</p>
            <h2>Service bundles that match how real environments operate.</h2>
          </div>
          <div className="bundle-grid">
            {serviceBundles.map((bundle) => (
              <article className="bundle-card" key={bundle.title}>
                <h3>{bundle.title}</h3>
                {bundle.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {service.images?.length ? (
        <section className="service-gallery-section">
          <div className="service-gallery">
            {service.images.map((image) => (
              <figure key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 820px) 100vw, 50vw" />
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="service-sections">
        <div className="service-section-grid">
          {service.sections.map((section) => (
            <article className="service-section-card" key={section.title}>
              <p className="label">{section.title}</p>
              <div className="service-section-list">
                {section.items.map((item) => (
                  <div key={item}>
                    <Check aria-hidden="true" size={15} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {service.workflow ? (
        <section className="service-workflow-section">
          <div className="service-workflow-copy">
            <p className="label">{service.workflow.title}</p>
            <h2>Clear steps from first conversation to supported system.</h2>
          </div>
          <div className="service-workflow-list">
            {service.workflow.items.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="service-why-section">
        <div>
          <p className="label">Why Intelismart</p>
          <h2>Built to perform cleanly in the real environment.</h2>
        </div>
        <div className="detail-list">
          {service.why.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={16} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {service.addOns?.length ? (
        <section className="service-addons-section">
          <div>
            <p className="label">Optional Add-Ons</p>
            <h2>Expand the system where uptime, visibility, or operations need more.</h2>
          </div>
          <div className="service-addon-list">
            {service.addOns.map((item) => (
              <div key={item}>
                <Plus aria-hidden="true" size={15} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {service.faqs?.length || service.faqGroups?.length ? (
        <section className="service-faq-section">
          <div className="service-faq-head">
            <p className="label">FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="service-faq-list">
            {service.faqs?.map((faq) => (
              <details key={faq.question} open>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
            {service.faqGroups?.map((group) => (
              <article className="service-faq-group" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map((faq) => (
                  <details key={`${group.title}-${faq.question}`} open>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="service-final-cta">
        <div>
          <p className="label">Next step</p>
          <h2>{service.cta.title}</h2>
          <LeadCapture variant="inline" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
