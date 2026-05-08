"use client";

import { useEffect, useState } from "react";
import { Wrench } from "lucide-react";
import { ScheduleConsultationButton } from "@/components/booking-modal";
import { LeadModal } from "@/components/lead-capture";

export function StickyBottomMenu() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<"request" | null>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={`sticky-bottom ${visible ? "is-visible" : ""}`}>
        <a className="sticky-brand" href="#home" aria-label="Back to top">
          <span />
          Intelismart
        </a>
        <ScheduleConsultationButton className="sticky-schedule" iconSize={14}>
          Schedule
        </ScheduleConsultationButton>
        <button className="sticky-primary" type="button" onClick={() => setActive("request")}>
          <Wrench aria-hidden="true" size={14} />
          Request evaluation
        </button>
      </div>
      {active ? <LeadModal type={active} onClose={() => setActive(null)} /> : null}
    </>
  );
}
