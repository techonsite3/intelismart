import Image from "next/image";
import { ArrowRight, Calendar, Check, Clock } from "lucide-react";
import { GoogleReviewsSection } from "@/components/google-reviews-section";
import { HeroVideo } from "@/components/hero-video";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import {
  approach,
  heroPoster,
  industries,
  services,
  whyIntelismart
} from "@/lib/site-content";

const painPoints = [
  "Multiple internet lines and rising monthly costs",
  "Slow or unreliable Wi-Fi and network performance",
  "Systems that do not integrate across AV, VoIP, and security",
  "Underutilized equipment and wasted investment",
  "Constant troubleshooting and support dependency"
];

const evaluationFindings = [
  "Cost savings opportunities, often 20-50% reduction",
  "Redundant services such as multiple ISPs, modems, and devices",
  "Performance bottlenecks and failure points",
  "Upgrade paths with clear ROI"
];

const evaluationOutcomes = [
  "Consolidated 3 internet services into 1 optimized network",
  "Reduced monthly telecom costs by up to 50%",
  "Improved Wi-Fi coverage and speed across the facility"
];

const integratedSystems = [
  "Network powers all systems",
  "AV, VoIP, and security operate on unified infrastructure",
  "Centralized management and control",
  "No vendor finger-pointing"
];

const transformation = {
  before: [
    "Multiple ISPs and high monthly costs",
    "Weak Wi-Fi coverage",
    "Disconnected systems"
  ],
  after: [
    "Single optimized network",
    "Reduced monthly costs",
    "Fully integrated infrastructure",
    "Improved performance and reliability"
  ]
};

const managedSupport = [
  "24/7 monitoring",
  "Proactive maintenance",
  "Security updates",
  "Performance optimization"
];

const trainingValue = [
  "Operate systems confidently",
  "Use advanced features",
  "Troubleshoot common issues",
  "Maximize performance"
];

const partnerLogos = [
  { name: "Cisco", src: "/images/brands/cisco.svg", className: "logo-cisco" },
  { name: "UniFi", src: "/images/brands/ubiquiti.svg", className: "logo-ubiquiti" },
  { name: "Aruba", src: "/images/brands/aruba.svg", className: "logo-aruba" },
  { name: "HP", src: "/images/brands/hp.svg", className: "logo-hp" },
  { name: "Dell", src: "/images/brands/dell.svg", className: "logo-dell" },
  { name: "SonicWall", src: "/images/brands/sonicwall.svg", className: "logo-sonicwall" },
  { name: "Fortinet", src: "/images/brands/fortinet.svg", className: "logo-fortinet" }
];

const trustStats = [
  { text: "26 years of experience", icon: Calendar },
  { text: "Response times beginning at 2 hours", icon: Clock }
];

const compassServiceBreakdown = [
  { letter: "C", slug: "network-infrastructure" },
  { letter: "O", slug: "managed-it-services" },
  { letter: "M", slug: "datacenter-support-services" },
  { letter: "P", slug: "security-surveillance" },
  { letter: "A", slug: "av-media-systems" },
  { letter: "S", slug: "fiber-optics-dedicated-internet" },
  { letter: "S", slug: "voip-intercom-solutions" },
  { letter: "E", slug: "training-enablement" },
  { letter: "D", slug: "digital-menu-board-solutions" }
].map(({ letter, slug }) => {
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    throw new Error(`Missing C.O.M.P.A.S.S.E.D. service: ${slug}`);
  }

  return { letter, service };
});

const evaluationService = services.find((service) => service.slug === "system-evaluation");

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />

      <section className="hero" id="home">
        <HeroVideo poster={heroPoster} />
        <div className="media-scrim" />
        <div className="hero-inner">
          <p className="label">Intelismart</p>
          <h1>
            Smart Technology.<br />
            <span className="hero-mobile-break">Reliable</span> Infrastructure.
          </h1>
          <p>
            We design, install, and manage integrated technology systems built
            for performance, scalability, and cost efficiency.
          </p>
          <p className="hero-value-hook">
            Most systems we evaluate are overpaying or underperforming. We fix both.
          </p>
          <LeadCapture variant="hero" />
        </div>
      </section>
      <GoogleReviewsSection />

      <section className="home-split-section">
        <div className="home-section-copy">
          <p className="label">Problem to solution</p>
          <h2>Is your technology working for you or against you?</h2>
          <p>
            We consolidate, optimize, and integrate your systems into one
            efficient, high-performing infrastructure.
          </p>
          <a className="home-about-link" href="/about-intelismart">
            About Us
            <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="home-check-grid">
          {painPoints.map((item) => (
            <div key={item}>
              <Check aria-hidden="true" size={16} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-evaluation-section">
        <div className="home-evaluation-media">
          <Image
            src="/images/services/System-Evaluation-1.png"
            alt="Two professionals reviewing infrastructure in a server room"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="home-evaluation-copy">
          <p className="label">Core conversion</p>
          <h2>Start with a System Evaluation</h2>
          <p>We assess your current infrastructure and identify what is costing too much, slowing you down, or ready to be consolidated.</p>
          <div className="home-check-grid compact">
            {evaluationFindings.map((item) => (
              <div key={item}>
                <Check aria-hidden="true" size={15} />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="home-outcome-list">
            {evaluationOutcomes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <LeadCapture variant="inline" />
        </div>
      </section>

      <section className="plans-section" id="services">
        <div className="narrow-copy compass-copy">
          <p className="label">What We Do</p>
          <h2>C.O.M.P.A.S.S.E.D. Service Breakdown</h2>
          <p>
            At Intelismart, we know that technology shouldn&apos;t feel complicated or disconnected. Our C.O.M.P.A.S.S.E.D. approach integrates your entire technology environment, from your network and data systems to security, communication, and AV, under one dependable strategy.
          </p>
        </div>
        <div className="core-service-grid">
          {compassServiceBreakdown.map(({ letter, service }) => (
            <article className="core-service-card compass-service-card" key={service.title}>
              <div className="compass-card-top">
                <span className="compass-letter">{letter}</span>
                <span className="plan-kicker">{service.kicker}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={`/services/${service.slug}`}>
                Learn more
                <ArrowRight aria-hidden="true" size={14} />
              </a>
            </article>
          ))}
        </div>
        {evaluationService ? (
          <div className="compass-cta">
            <div>
              <span className="plan-kicker">{evaluationService.kicker}</span>
              <h3>Not sure where to start?</h3>
              <p>{evaluationService.text}</p>
            </div>
            <a href={`/services/${evaluationService.slug}`}>
              Request System Evaluation
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
        ) : null}
      </section>

      <section className="image-feature">
        <div className="image-feature-media">
          <Image
            src="/images/services/Datacenter-Support-Services-3.png"
            alt="Structured network cabling and switch ports"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
        <div className="image-feature-copy">
          <p className="label">Everything works together</p>
          <h2>One system. One strategy. One point of accountability.</h2>
          <p>
            Most providers install isolated systems. Intelismart integrates
            network, AV, VoIP, security, and management so the environment is
            easier to operate and support.
          </p>
          <div className="home-inline-list">
            {integratedSystems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-transformation-section">
        <div className="home-section-copy">
          <p className="label">Real Results</p>
          <h2>From fragmented and expensive to integrated and dependable.</h2>
        </div>
        <div className="before-after-grid">
          <article>
            <p className="label">Before</p>
            {transformation.before.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </article>
          <article>
            <p className="label">After</p>
            {transformation.after.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="home-dual-section">
        <article>
          <p className="label">Ongoing Support & Optimization</p>
          <h2>Technology requires maintenance to stay efficient.</h2>
          <p>Reduce downtime. Extend system lifespan. Keep the environment tuned as the business changes.</p>
          <div className="home-inline-list">
            {managedSupport.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
        <article>
          <p className="label">Training Value</p>
          <h2>Your system is only as good as your team.</h2>
          <p>Full system value comes from full user capability, not just installed hardware.</p>
          <div className="home-inline-list">
            {trainingValue.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </section>

      <section className="industries-section" id="industries">
        <div className="narrow-copy">
          <p className="label">Built for Your Industry</p>
          <h2>Different spaces. Same requirement: dependable technology.</h2>
        </div>
        <div className="industry-rail">
          {industries.map((industry) => (
            <article className="industry-tile" key={industry.title}>
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <div>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="approach">
        <div className="narrow-copy centered">
          <p className="label">How It Works</p>
          <h2>Simple path. Clear plan. Supported execution.</h2>
        </div>
        <div className="process-grid">
          {approach.map((step) => (
            <article className="process-card" key={step.title}>
              <span className="process-ghost" aria-hidden="true">{step.number}</span>
              <span className="process-step-label">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-inner">
          <div className="why-copy">
            <p className="label">Why Intelismart</p>
            <h2>Technology that works. Support that stays.</h2>
            <p>
              Intelismart focuses on practical infrastructure, clean execution,
              cost-aware planning, and support that keeps systems performing
              after installation.
            </p>
            <div className="why-checklist">
              {whyIntelismart.map((item) => (
                <div className="why-check-item" key={item}>
                  <Check aria-hidden="true" size={16} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image">
            <Image
              src="/images/services/System-Evaluation-2.png"
              alt="Field technician auditing a network cabinet"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="home-trust-section" id="platform-experience">
        <div className="narrow-copy">
          <p className="label">Platform Experience</p>
          <h2>Experienced with the brands and infrastructure your environment already uses.</h2>
        </div>
        <div className="partner-logo-grid" aria-label="Technology brands Intelismart works with">
          {partnerLogos.map((brand) => (
            <span className="partner-logo-tile" key={brand.name}>
              {brand.src ? (
                <Image
                  className={brand.className}
                  src={brand.src}
                  alt={brand.name}
                  width={120}
                  height={32}
                />
              ) : (
                <span className="partner-logo-text">{brand.name}</span>
              )}
            </span>
          ))}
        </div>
        <div className="trust-stat-grid">
          {trustStats.map(({ text, icon: Icon }) => (
            <span key={text}>
              <Icon aria-hidden="true" size={16} />
              {text}
            </span>
          ))}
        </div>
      </section>

      <section className="contact-section contact-cta-section" id="contact">
        <div className="contact-copy">
          <p className="label">Start Here</p>
          <h2>Stop overpaying for underperforming systems.</h2>
          <p>
            Let us evaluate your infrastructure and show you what it should be
            costing, and how it should perform.
          </p>
          <LeadCapture variant="inline" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
