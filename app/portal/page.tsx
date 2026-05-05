import type { Metadata } from "next";
import { ArrowRight, CalendarClock, Gauge, Home, LifeBuoy, ShieldCheck, Wifi } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";

export const metadata: Metadata = {
  title: "Client Portal Coming Soon",
  description:
    "The Intelismart client portal is coming soon for service requests, system visibility, scheduling, and support."
};

const portalStats = [
  { label: "Open Requests", value: "04" },
  { label: "Sites Online", value: "12" },
  { label: "Avg Response", value: "2h" }
];

const portalModules = [
  { icon: Wifi, label: "Network Health", value: "99.98%" },
  { icon: ShieldCheck, label: "Security Status", value: "Protected" },
  { icon: LifeBuoy, label: "Support Queue", value: "Active" },
  { icon: CalendarClock, label: "Scheduled Work", value: "3 Visits" }
];

export default function PortalPage() {
  return (
    <main>
      <SiteHeader />
      <StickyBottomMenu />
      <section className="portal-coming-soon">
        <div className="portal-copy">
          <p className="label">Client portal</p>
          <h1>Your Intelismart portal is coming soon.</h1>
          <p>
            Soon, customers will be able to manage requests, review service activity,
            track infrastructure health, and coordinate support from one secure place.
          </p>
          <div className="lead-actions">
            <a className="btn btn-light" href="/">
              <Home aria-hidden="true" size={15} />
              Home
            </a>
            <a className="btn btn-ghost" href="/contact">
              Contact Support
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>

        <div className="portal-preview" aria-label="Preview of the coming Intelismart client portal">
          <div className="portal-window-bar">
            <span />
            <span />
            <span />
            <p>Intelismart Portal</p>
          </div>
          <div className="portal-dashboard">
            <div className="portal-dashboard-head">
              <div>
                <p>Operations</p>
                <h2>Customer Dashboard</h2>
              </div>
              <div className="portal-status">
                <Gauge aria-hidden="true" size={16} />
                Systems stable
              </div>
            </div>

            <div className="portal-stat-grid">
              {portalStats.map((stat) => (
                <div className="portal-stat" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>

            <div className="portal-module-grid">
              {portalModules.map((module) => {
                const Icon = module.icon;

                return (
                  <div className="portal-module" key={module.label}>
                    <Icon aria-hidden="true" size={18} />
                    <div>
                      <span>{module.label}</span>
                      <strong>{module.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="portal-ticket">
              <div>
                <span>Next rollout</span>
                <strong>Firewall refresh and Wi-Fi optimization</strong>
              </div>
              <p>Scheduled</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
