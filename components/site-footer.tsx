import Image from "next/image";
import { CircleArrowOutUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact, serviceAreaPages, services } from "@/lib/site-content";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-intelismart" },
  { label: "Our Approach", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" }
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-brand-col">
          <a className="footer-brand-logo" href="/" aria-label="Intelismart home">
            <Image
              className="brand-mark"
              src="/inteli-trans.png"
              alt=""
              width={1024}
              height={1024}
            />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-text">Intelismart</span>
          </a>
          <p className="footer-brand-tagline">Smart Technology. Reliable Infrastructure.</p>
          <p className="footer-brand-sub">Technology infrastructure partner for businesses that need reliable systems installed and supported with precision.</p>
        </div>

        <div className="footer-col">
          <span className="footer-col-heading">Company</span>
          <nav aria-label="Footer company navigation">
            {footerNav.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <span className="footer-col-heading">Services</span>
          <nav aria-label="Footer services navigation">
            {services.map((service) => (
              <a href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-col">
          <span className="footer-col-heading">Service Areas</span>
          <nav aria-label="Footer service area navigation">
            {serviceAreaPages.slice(0, 6).map((page) => (
              <a href={`/service-areas/${page.slug}`} key={page.slug}>
                {page.eyebrow}
              </a>
            ))}
            <a href="/service-areas">All Service Areas</a>
          </nav>
        </div>

        <div className="footer-col">
          <span className="footer-col-heading">Get Started</span>
          <a className="footer-contact-item" href={`mailto:${contact.email}`}>
            <Mail size={13} aria-hidden="true" />
            {contact.email}
          </a>
          <a className="footer-contact-item" href={`tel:${contact.phoneLink}`}>
            <Phone size={13} aria-hidden="true" />
            {contact.phone}
          </a>
          <div className="footer-locations" aria-label="Office locations">
            <MapPin size={13} aria-hidden="true" />
            <div>
              <div className="footer-location">
                <span className="footer-location-flag" aria-hidden="true">🇺🇸</span>
                <span className="footer-location-country">USA</span>
                <address>11767 Katy Freeway, Suite 730, Houston, TX 77079</address>
              </div>
              <div className="footer-location">
                <span className="footer-location-flag" aria-hidden="true">🇨🇦</span>
                <span className="footer-location-country">Canada</span>
              </div>
            </div>
          </div>
          <a
            className="footer-portal-link"
            href="/portal"
          >
            Client Portal
            <CircleArrowOutUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {year} Intelismart LLC. All rights reserved.
        </p>
        <a
          className="footer-credit"
          href="https://www.practicalabs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built By Practicalabs
        </a>
      </div>
    </footer>
  );
}
