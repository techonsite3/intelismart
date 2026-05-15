"use client";

import Image from "next/image";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { ChevronDown, CircleArrowOutUpRight, Phone, Search, X } from "lucide-react";
import { contact, navGroups } from "@/lib/site-content";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: NavItem[];
  trigger: ReactNode;
};

export function MobileNav({ items, trigger }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string | null>("Services");

  const groupedItems = [
    { label: "About", items: navGroups.about },
    { label: "Industries", items: navGroups.industries },
    { label: "Services", items: navGroups.services },
    { label: "Service Areas", items: navGroups.serviceAreas }
  ];

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return [];
    }

    return [
      { label: "Home", href: "/" },
      ...items,
      ...groupedItems.flatMap((group) => group.items)
    ].filter((item) => item.label.toLowerCase().includes(normalizedQuery));
  }, [groupedItems, items, query]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    setQuery("");
  }

  return (
    <div className="mobile-nav">
      <button className="mobile-nav-trigger" type="button" onClick={() => setOpen(true)}>
        {trigger}
      </button>
      {open ? (
        <div className="mobile-menu-layer" role="presentation" onMouseDown={closeMenu}>
          <aside
            className="mobile-panel"
            aria-label="Mobile navigation"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mobile-panel-head">
              <a className="mobile-mark" href="/" onClick={closeMenu} aria-label="Intelismart home">
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
              <button className="mobile-panel-close" type="button" onClick={closeMenu} aria-label="Close navigation">
                <X aria-hidden="true" size={22} />
              </button>
            </div>

            <label className="mobile-search">
              <span className="sr-only">Search navigation</span>
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Search aria-hidden="true" size={18} />
            </label>

            <nav className="mobile-menu-links">
              {query.trim() ? (
                <div className="mobile-search-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <a href={item.href} key={`${item.href}-${item.label}`} onClick={closeMenu}>
                        {item.label}
                      </a>
                    ))
                  ) : (
                    <p>No matches found.</p>
                  )}
                </div>
              ) : (
                <>
                  <a href="/" onClick={closeMenu}>
                    Home
                  </a>
                  {groupedItems.map((group) => {
                    const isExpanded = expanded === group.label;

                    return (
                      <div className="mobile-menu-group" key={group.label}>
                        <button
                          type="button"
                          onClick={() => setExpanded(isExpanded ? null : group.label)}
                          aria-expanded={isExpanded}
                        >
                          {group.label}
                          <ChevronDown aria-hidden="true" size={15} />
                        </button>
                        {isExpanded ? (
                          <div className="mobile-submenu">
                            {group.items.map((item) => (
                              <a href={item.href} key={item.href} onClick={closeMenu}>
                                {item.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                  <a href="/contact" onClick={closeMenu}>
                    Contact
                  </a>
                </>
              )}
            </nav>

            <a className="mobile-phone" href={`tel:${contact.phoneLink}`} onClick={closeMenu}>
              <Phone aria-hidden="true" size={15} />
              {contact.phone}
            </a>

            <div className="mobile-panel-actions">
              <a
                href="/portal"
                onClick={closeMenu}
              >
                Client Portal
                <CircleArrowOutUpRight aria-hidden="true" size={15} />
              </a>
              <a href="/contact" onClick={closeMenu}>
                Contact Us
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
