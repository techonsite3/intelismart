import type { Metadata } from "next";

export const siteUrl = "https://intelismart.com";
const brandName = "Intelismart";
const companyName = "Intelismart LLC";
const googleReviewsUrl =
  "https://www.google.com/search?sca_esv=0d82fdce82ae5c26&sxsrf=ANbL-n7qfRaBUaUAJA5iowWInUVZaT-fEw:1778871907972&q=intelismart+llc+houston+reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcw4ncZkyleYZL78l6cs8B3lLxKoN87To2bqKRPaW3-wZnjMBA1GUEEsfAQ_9SsrXaB6izDSnSRKlyb-ikN3Vh7q-J_ykD16iZz2YrEUlwpKLlkUdg%3D%3D&sa=X&ved=2ahUKEwibxbOh_ruUAxWKmmoFHTK2JA8Q9qsLegQIGBAG&biw=411&bih=850&dpr=3.5#ebo=2";

const organizationNode = {
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: companyName,
  url: siteUrl,
  logo: toAbsoluteUrl("/inteli-trans.png"),
  image: toAbsoluteUrl("/og-image.jpg"),
  description:
    "Intelismart designs, deploys, and supports integrated technology infrastructure including managed IT, networks, VoIP, CCTV, fiber, AV, and multi-site rollouts for Houston, Katy, Texas, and North America.",
  telephone: "+1-979-999-1901",
  email: "sales@intelismart.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11767 Katy Freeway",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77079",
    addressCountry: "US"
  },
  areaServed: [
    { "@type": "City", name: "Houston" },
    { "@type": "City", name: "Katy" },
    { "@type": "State", name: "Texas" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" }
  ],
  sameAs: [googleReviewsUrl]
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  image?: string;
  areaServed?: string[];
};

export function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function withBrand(title: string) {
  return title.includes(brandName) ? title : `${title} | ${brandName}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = "/og-image.jpg",
  imageAlt = `${brandName} technology infrastructure`
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const absoluteUrl = toAbsoluteUrl(canonicalPath);
  const absoluteImage = toAbsoluteUrl(image);
  const brandedTitle = withBrand(title);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath
    },
    openGraph: {
      title: brandedTitle,
      description,
      url: absoluteUrl,
      type: "website",
      siteName: brandName,
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [absoluteImage]
    }
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path)
    }))
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  image = "/og-image.jpg",
  areaServed = ["Houston", "Katy", "Texas", "United States", "Canada", "North America"]
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: toAbsoluteUrl(path),
    image: toAbsoluteUrl(image),
    serviceType: name,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: companyName,
      url: siteUrl,
      telephone: "+1-979-999-1901",
      email: "sales@intelismart.com",
      address: organizationNode.address
    },
    areaServed: areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    }))
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: brandName,
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };
}
