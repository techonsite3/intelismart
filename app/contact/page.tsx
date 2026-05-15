import type { Metadata } from "next";
import { ContactActionPanel } from "@/components/contact-action-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { buildPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Our Team",
  description:
    "Contact Intelismart for system evaluations, infrastructure support, managed IT, AV, VoIP, security, fiber, and commercial technology projects in Houston and beyond.",
  path: "/contact",
  image: "/og-image.jpg",
  imageAlt: "Contact Intelismart for infrastructure and support services"
});

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="contact-section contact-page-section">
        <div className="contact-copy">
          <p className="label">Start here</p>
          <h1>Tell us what needs to stay online.</h1>
          <p>
            Have a project, a failing system, or a facility that needs better
            infrastructure? Choose the quickest next step and we will route you
            to the right person.
          </p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneLink}`}>{contact.phone}</a>
          </div>
          <div className="contact-support-copy">
            <h2>Fast answers. Real people. 24/7 coverage.</h2>
            <p>
              Whether you are scoping a rollout or need help with a live issue,
              we will route you to the right specialist and keep the work moving.
            </p>
          </div>
        </div>

        <ContactActionPanel />
      </section>
      <SiteFooter />
    </main>
  );
}
