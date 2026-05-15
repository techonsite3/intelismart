import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Network,
  PhoneCall,
  SearchCheck,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { LeadCapture } from "@/components/lead-capture";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About the Company",
  description:
    "Intelismart provides managed IT, network infrastructure, communication systems, infrastructure deployment, audits, and cost optimization for scalable business operations.",
  path: "/about-intelismart",
  image: "/og-image.jpg",
  imageAlt: "Intelismart infrastructure and operations overview"
});

const coreServices = [
  {
    title: "Managed IT Services",
    text:
      "Your systems need more than emergency attention. We monitor, maintain, and support your environment so uptime, continuity, and user productivity stay protected.",
    icon: ShieldCheck
  },
  {
    title: "Network Design & Optimization",
    text:
      "We design secure network architecture for offices, remote operations, and multi-site teams, then tune performance so the network can grow without becoming fragile.",
    icon: Network
  },
  {
    title: "VoIP & Business Communication Systems",
    text:
      "From hosted voice to on-premise phone systems, intercoms, and unified communication platforms, we keep teams connected clearly across the places they work.",
    icon: PhoneCall
  },
  {
    title: "Infrastructure Deployment",
    text:
      "Structured cabling, wireless systems, cloud integration, and hardware provisioning are planned together so every layer supports the next one.",
    icon: Wrench
  },
  {
    title: "IT Audits & Cost Optimization",
    text:
      "We identify redundant services, vendor overlap, and hidden inefficiencies, then turn the findings into practical savings and stronger performance.",
    icon: SearchCheck
  }
];

const approachSteps = [
  {
    number: "01",
    title: "Assessment",
    text:
      "We start with the systems you already depend on: performance data, contracts, user pain points, network structure, security posture, and the business goals driving the work."
  },
  {
    number: "02",
    title: "Analysis",
    text:
      "Then we separate symptoms from root causes, identifying risk, inefficiency, cost drag, and scalability limits before any recommendation is made."
  },
  {
    number: "03",
    title: "Optimization",
    text:
      "The plan is built around measurable improvement: cleaner infrastructure, fewer redundant services, better reliability, and technology that supports the way your organization operates."
  },
  {
    number: "04",
    title: "Ongoing Support",
    text:
      "After implementation, we continue monitoring, supporting users, refining systems, and helping the environment evolve as your organization changes."
  }
];

const valuePoints = [
  "Reduced IT costs through redundant-service elimination and vendor optimization",
  "Improved system reliability with proactive management and resilient architecture",
  "Operational clarity without unnecessary technical complexity",
  "Scalable infrastructure designed to support expansion without recurring rework"
];

const industries = [
  "Small and mid-sized businesses",
  "Churches and nonprofit organizations",
  "Hospitality and multi-location operations",
  "Construction and field-service teams"
];

const outcomes = [
  "Multiple networks consolidated into one reliable infrastructure",
  "Telecom and internet expenses reduced, often up to 50%",
  "Internal communication and workflow efficiency improved",
  "Security posture and system performance strengthened"
];

export default function AboutIntelismartPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />

      <section className="about-intel-hero">
        <div className="about-intel-hero-copy">
          <p className="label">About Us</p>
          <h1>Strategic IT Solutions for Scalable Business Operations</h1>
          <p>
            Intelismart helps organizations turn technology from a daily source
            of friction into a stable operating advantage. We design, optimize,
            and manage IT environments that support growth, reduce cost, and
            keep the work moving.
          </p>
          <LeadCapture />
        </div>
        <div className="about-intel-hero-panel" aria-label="Intelismart focus areas">
          <span>Our work is grounded in one objective.</span>
          <strong>Align technology with business performance.</strong>
          <p>
            When infrastructure, communication, security, and support are planned
            together, your team gets fewer disruptions and clearer decisions.
          </p>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-copy">
          <p className="label">What We Solve</p>
          <h2>Technology should make operations easier to run, not harder to manage.</h2>
          <p>
            Most organizations do not set out to build complicated systems. It
            happens slowly: a second internet line here, a phone vendor there, a
            camera system that does not talk to the network, equipment no one is
            sure should still be renewed, and support that only appears after the
            problem has already slowed the business down.
          </p>
          <p>
            Intelismart steps into that complexity with a structured view. We
            look at how the environment performs, what it costs, where it fails,
            and what your team needs next. From there, we help you build a system
            that is easier to understand, easier to support, and ready for the
            way your organization is growing.
          </p>
        </div>
        <figure className="about-story-image">
          <Image
            src="/images/services/System-Evaluation-2.png"
            alt="Technician evaluating network infrastructure"
            fill
            sizes="(max-width: 980px) 100vw, 42vw"
          />
        </figure>
      </section>

      <section className="about-core-section">
        <div className="narrow-copy centered">
          <p className="label">Our Core Services</p>
          <h2>End-to-end support across the infrastructure layers your business depends on.</h2>
        </div>
        <div className="about-service-grid">
          {coreServices.map(({ title, text, icon: Icon }) => (
            <article className="about-service-card" key={title}>
              <Icon aria-hidden="true" size={19} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-method-section">
        <div className="about-method-head">
          <p className="label">Operational Approach</p>
          <h2>A structured method for decisions that hold up after installation.</h2>
          <p>
            Every engagement is outcome-driven. We do the technical work, but
            the real goal is business confidence: lower waste, fewer surprises,
            clearer priorities, and systems that stay dependable.
          </p>
        </div>
        <div className="about-method-list">
          {approachSteps.map((step) => (
            <article key={step.title}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-value-section">
        <div className="about-value-copy">
          <p className="label">Value Proposition</p>
          <h2>Measurable results without burying your team in technical noise.</h2>
          <p>
            Clients choose Intelismart when they need practical answers: what is
            working, what is costing too much, what is exposed, and what should
            change first. We translate that into a plan your leadership and your
            users can act on.
          </p>
        </div>
        <div className="about-value-list">
          {valuePoints.map((point) => (
            <div key={point}>
              <Check aria-hidden="true" size={16} />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-impact-section">
        <div>
          <p className="label">Industries Served</p>
          <h2>Built for teams that depend on network reliability, secure systems, and clear communication.</h2>
          <p>
            We support small and mid-sized businesses, churches, nonprofits,
            hospitality groups, multi-location operators, construction teams,
            and field-service organizations. The environments are different, but
            the need is the same: infrastructure that lets people work without
            fighting the tools underneath them.
          </p>
          <div className="about-industry-tags">
            {industries.map((industry) => (
              <span key={industry}>{industry}</span>
            ))}
          </div>
        </div>
        <div className="about-outcome-panel">
          <p className="label">Business Impact</p>
          {outcomes.map((outcome) => (
            <div key={outcome}>
              <ArrowRight aria-hidden="true" size={15} />
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-final-section">
        <div>
          <p className="label">Next Step: System Evaluation</p>
          <h2>Start with a clear view of what your technology is doing for or against you.</h2>
          <p>
            If your organization is dealing with unreliable systems, escalating
            technology costs, inefficient infrastructure, or growth limits caused
            by system constraints, a structured IT system evaluation gives you a
            data-driven path forward.
          </p>
          <LeadCapture variant="inline" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
