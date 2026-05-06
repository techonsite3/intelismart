"use client";

import Image from "next/image";
import { ChevronDown, CircleArrowOutUpRight, Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { contact, navGroups } from "@/lib/site-content";

const mobileItems = [
  { label: "About Us", href: "/about-intelismart" },
  { label: "Our Approach", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="brand-image" href="/" aria-label="Intelismart home">
          <Image
            className="brand-mark"
            src="/inteli-trans.png"
            alt=""
            width={1024}
            height={1024}
            priority
          />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-text">Intelismart</span>
        </a>

        <nav aria-label="Primary navigation" className="desktop-nav">
          <a href="/">Home</a>
          <Dropdown label="About" items={navGroups.about} />
          <Dropdown label="Industries" items={navGroups.industries} />
          <Dropdown label="Services" items={navGroups.services} />
        </nav>

        <a className="header-phone" href={`tel:${contact.phoneLink}`}>
          <Phone aria-hidden="true" size={14} />
          {contact.phone}
        </a>
        <a className="header-contact" href="/contact">
          Contact Us
        </a>
        <a
          className="portal-link"
          href="/portal"
        >
          <CircleArrowOutUpRight aria-hidden="true" size={13} />
          Client Portal
        </a>
        <MobileNav
          items={mobileItems}
          trigger={
            <>
              <Menu aria-hidden="true" size={20} />
              <span className="sr-only">Open navigation</span>
            </>
          }
        />
      </div>
    </header>
  );
}

function Dropdown({
  label,
  items
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="nav-dropdown">
      <button type="button">
        {label}
        <ChevronDown aria-hidden="true" size={14} />
      </button>
      <div className="nav-menu">
        {items.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
