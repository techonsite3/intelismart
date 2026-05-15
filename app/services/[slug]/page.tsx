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

const serviceKnowledgeContent: Record<
  string,
  {
    eyebrow: string;
    title: string;
    summary: string;
    points: string[];
  }
> = {
  "digital-menu-board-solutions": {
    eyebrow: "Digital Signage SEO",
    title: "Houston digital menu board solutions for restaurants, retail counters, churches, and multi-site operators.",
    summary:
      "Digital menu boards work best when the displays, network, content workflow, and support model are planned together. Intelismart helps organizations replace static menus and disconnected media players with a controlled signage system that can be updated quickly, scheduled by location, and supported after installation.",
    points: [
      "For restaurants and hospitality teams, the value is operational speed: pricing changes, daypart menus, promotions, and limited-time offers can be managed without reprinting materials or relying on one person at one site.",
      "For churches, retail counters, and campuses, the same display infrastructure can support cafe menus, announcements, event schedules, lobby messaging, and internal communication.",
      "Because signage depends on reliable connectivity, Intelismart treats menu boards as part of the broader infrastructure plan, including commercial displays, media players, cabling, network access, permissions, and monitoring."
    ]
  },
  "av-media-systems": {
    eyebrow: "AV Systems SEO",
    title: "Houston AV systems, worship media, conference rooms, streaming, and control systems.",
    summary:
      "Audio visual systems are no longer isolated equipment purchases. They depend on network performance, clean cabling, tuned audio, reliable displays, room control, operator training, and support that understands live environments. Intelismart designs AV and media systems for spaces where communication has to be clear and repeatable.",
    points: [
      "Churches and campuses benefit from AV systems that volunteers can operate confidently, including worship audio, livestreaming, stage displays, confidence monitors, and simple presets.",
      "Commercial teams need conference rooms, event spaces, lobbies, and training rooms where video, audio, and control systems work without constant technical rescue.",
      "Intelismart connects the AV layer with the network, cabling, streaming, cameras, and support process so the final system feels engineered instead of assembled from unrelated parts."
    ]
  },
  "network-infrastructure": {
    eyebrow: "Network Infrastructure SEO",
    title: "Houston network infrastructure, structured cabling, Wi-Fi, switching, firewalls, and secure connectivity.",
    summary:
      "Network infrastructure is the foundation for nearly every business system: phones, cameras, cloud applications, POS, guest Wi-Fi, AV, access control, and remote work. Intelismart plans wired and wireless networks around coverage, capacity, security, documentation, and long-term support instead of short-term patchwork.",
    points: [
      "A strong network design starts with the physical layer: structured cabling, fiber backbone, racks, patch panels, access point placement, labeling, and serviceable pathways.",
      "The logical layer matters just as much. VLANs, firewall policies, guest isolation, QoS, monitoring, and failover planning help keep business traffic separated and dependable.",
      "For Houston, Katy, Texas, and multi-site organizations, Intelismart creates network standards that can be repeated across offices, churches, restaurants, warehouses, and facilities."
    ]
  },
  "fiber-optics-dedicated-internet": {
    eyebrow: "Fiber & DIA SEO",
    title: "Houston fiber installation, dedicated internet, business internet failover, and bandwidth planning.",
    summary:
      "Fiber and dedicated internet decisions affect uptime, voice quality, cloud access, security systems, and multi-site operations. Intelismart helps organizations evaluate internet costs, carrier options, circuit design, demarc conditions, firewall readiness, and failover requirements before committing to another long-term connectivity contract.",
    points: [
      "Dedicated Internet Access is often the right choice when stable upload speed, low latency, service-level agreements, and predictable performance matter more than lowest-cost broadband.",
      "Fiber value depends on the surrounding infrastructure, including conduit, terminations, optics, rack layout, switch capacity, firewall throughput, and backup connectivity.",
      "Intelismart supports Houston-first fiber and internet planning while designing standards that can extend to Texas, the United States, Canada, and broader North America rollouts."
    ]
  },
  "security-surveillance": {
    eyebrow: "CCTV & Security SEO",
    title: "Houston CCTV installation, commercial surveillance, access control readiness, and camera networking.",
    summary:
      "Security and surveillance systems need more than cameras on walls. Good outcomes require coverage planning, lighting review, retention design, secure remote access, network segmentation, PoE capacity, and support procedures for the moments when footage actually matters.",
    points: [
      "Intelismart designs CCTV systems around entrances, registers, parking areas, docks, children's areas, yards, warehouses, and other operational risk zones.",
      "Camera uptime depends on the network underneath it, so surveillance planning includes cabling, switching, storage, VLANs, user permissions, and remote viewing security.",
      "For commercial teams, churches, hospitality, retail, and industrial facilities, this creates a security layer that is easier to maintain, expand, and integrate with voice, intercom, access control, and monitoring."
    ]
  },
  "managed-it-services": {
    eyebrow: "Managed IT SEO",
    title: "Houston managed IT services for monitoring, support, cybersecurity, backups, Microsoft 365, and infrastructure lifecycle management.",
    summary:
      "Managed IT should reduce operational risk, not just react when something breaks. Intelismart supports organizations that need monitoring, maintenance, user support, security controls, backup planning, cloud administration, and clear accountability across the systems that keep the business running.",
    points: [
      "The managed model starts with visibility: devices, users, network equipment, servers, endpoints, cloud services, security policies, and recurring problems are documented before support becomes routine.",
      "Ongoing support includes patching, monitoring, helpdesk response, endpoint protection, Microsoft 365 assistance, backup checks, and escalation for network, voice, camera, or infrastructure issues.",
      "For Houston businesses and multi-site teams, Intelismart can operate as a fully managed IT partner or a co-managed extension of an internal team."
    ]
  },
  "datacenter-support-services": {
    eyebrow: "Datacenter Support SEO",
    title: "Houston datacenter support, remote hands, rack and stack, cabling, patching, and documentation.",
    summary:
      "Datacenter work needs disciplined execution because small mistakes can create major downtime. Intelismart provides hands-on infrastructure support for teams that need local execution, clean cabling, accurate documentation, hardware swaps, and coordinated change windows inside controlled environments.",
    points: [
      "Remote hands support can include rack and stack, power checks, cable tracing, fiber or copper patching, device replacement, console access, and photo-backed closeout reporting.",
      "The work is planned around runbooks, access requirements, maintenance windows, vendor coordination, and verification steps so the remote team knows exactly what changed.",
      "For distributed infrastructure teams, Intelismart reduces travel burden while improving consistency across Houston, Texas, and broader North America support needs."
    ]
  },
  "training-enablement": {
    eyebrow: "Training SEO",
    title: "IT training and enablement for teams operating AV, network, security, voice, and infrastructure systems.",
    summary:
      "Technology investments only create value when people know how to use them. Intelismart provides role-based training and enablement for teams that need to operate newly deployed or existing systems with more confidence, consistency, and independence.",
    points: [
      "Training can cover AV operation, livestream workflows, camera playback, network basics, content updates, phone system features, administrator responsibilities, and incident procedures.",
      "Instead of generic classroom material, the training is based on the actual environment, actual users, and the real scenarios the organization faces during services, events, shifts, or outages.",
      "This is especially valuable for churches, hospitality teams, retail managers, facilities teams, and organizations where non-technical staff are expected to run critical systems."
    ]
  },
  "system-evaluation": {
    eyebrow: "System Evaluation SEO",
    title: "Houston system evaluations for technology cost savings, infrastructure risk, performance gaps, and upgrade planning.",
    summary:
      "A system evaluation gives leadership a clearer view of what is underperforming, what is overcomplicated, and what may be costing more than it should. Intelismart reviews infrastructure, internet services, telecom, network design, support gaps, and operational risk before recommending changes.",
    points: [
      "Common findings include redundant internet services, unmanaged switches, aging firewalls, poor Wi-Fi coverage, unsupported equipment, unclear vendor ownership, and systems that were never designed to work together.",
      "The goal is practical: identify savings, reduce failure points, improve performance, simplify support, and prioritize upgrades based on business impact.",
      "This evaluation is often the best first step for Houston organizations, churches, restaurants, warehouses, and multi-site operators that need a roadmap before investing in new infrastructure."
    ]
  },
  "voip-intercom-solutions": {
    eyebrow: "VoIP & Intercom SEO",
    title: "Houston VoIP systems, business phone systems, paging, intercom, call routing, and communication infrastructure.",
    summary:
      "Voice and intercom systems only perform well when they are designed around the network, facility layout, call flow, users, and support model. Intelismart helps organizations choose between hosted VoIP, on-premise PBX, hybrid voice, paging, and intercom systems based on real operating needs.",
    points: [
      "For offices and multi-site teams, the right VoIP design can improve routing, voicemail, call queues, mobile access, remote work, analytics, and telecom cost control.",
      "For hotels, warehouses, schools, churches, construction sites, and facilities, paging and intercom coverage can be just as important as desk phones.",
      "Intelismart handles voice quality from the infrastructure up, including VLANs, QoS, failover, cabling, device setup, E911 coordination, training, and ongoing support."
    ]
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
  const knowledge = serviceKnowledgeContent[service.slug];
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

      {knowledge ? (
        <section className="service-knowledge-section">
          <div className="service-knowledge-copy">
            <p className="label">{knowledge.eyebrow}</p>
            <h2>{knowledge.title}</h2>
            <p>{knowledge.summary}</p>
          </div>
          <div className="service-knowledge-list">
            {knowledge.points.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </section>
      ) : null}

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
