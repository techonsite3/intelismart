import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Plus } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
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

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Intelismart`,
    description: service.detail
  };
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

  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
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
