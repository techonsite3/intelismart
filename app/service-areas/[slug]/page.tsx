import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { contact, serviceAreaPages } from "@/lib/site-content";

const siteUrl = "https://intelismart.com";

export function generateStaticParams() {
  return serviceAreaPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = serviceAreaPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/service-areas/${page.slug}`
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}/service-areas/${page.slug}`,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image]
    }
  };
}

export default async function ServiceAreaDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = serviceAreaPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Intelismart",
        url: siteUrl,
        email: contact.email,
        telephone: contact.phoneLink,
        address: {
          "@type": "PostalAddress",
          streetAddress: "11767 Katy Freeway",
          addressLocality: "Houston",
          addressRegion: "TX",
          postalCode: "77079",
          addressCountry: "US"
        },
        areaServed: ["Houston", "Katy", "Texas", "United States", "Canada", "North America"]
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/service-areas/${page.slug}#service`,
        name: page.title,
        description: page.metaDescription,
        provider: {
          "@id": `${siteUrl}/#organization`
        },
        areaServed: page.region,
        serviceType: page.focus,
        url: `${siteUrl}/service-areas/${page.slug}`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/service-areas/${page.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: `${siteUrl}/service-areas`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.eyebrow,
            item: `${siteUrl}/service-areas/${page.slug}`
          }
        ]
      }
    ]
  };

  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="service-area-hero">
        <Image src={page.image} alt={page.alt} fill priority sizes="100vw" />
        <div className="media-scrim" />
        <div className="service-detail-copy">
          <p className="label">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.summary}</p>
          <LeadCapture />
        </div>
      </section>

      <section className="service-area-overview">
        <div>
          <p className="label">Market Focus</p>
          <h2>{page.focus}</h2>
          <p>{page.expansionNote}</p>
        </div>
        <div className="service-area-keywords" aria-label="Search focus">
          {page.keywords.map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>

      <section className="service-area-detail-grid">
        <article>
          <p className="label">Problems We Solve</p>
          {page.problems.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={15} />
              <p>{item}</p>
            </div>
          ))}
        </article>
        <article>
          <p className="label">What Intelismart Does</p>
          {page.solutions.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={15} />
              <p>{item}</p>
            </div>
          ))}
        </article>
        <article>
          <p className="label">Business Outcomes</p>
          {page.outcomes.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={15} />
              <p>{item}</p>
            </div>
          ))}
        </article>
      </section>

      <section className="service-area-related">
        <div>
          <p className="label">Related Services</p>
          <h2>Connected workstreams, not isolated vendors.</h2>
        </div>
        <div className="service-area-service-list">
          {page.relatedServices.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="service-final-cta">
        <div>
          <p className="label">Next step</p>
          <h2>{page.cta}</h2>
          <p>
            Start with a clear assessment of the systems, costs, risks, and
            operational goals behind the project.
          </p>
          <LeadCapture variant="inline" />
          <a className="service-area-contact-link" href="/contact">
            Use the detailed project intake form
            <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
