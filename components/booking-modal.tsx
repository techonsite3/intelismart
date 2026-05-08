"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { CalendarDays, X } from "lucide-react";

const BOOKINGS_URL = "https://outlook.office365.com/book/YOUR-PLACEHOLDER-LINK-HERE";
const OPEN_BOOKING_EVENT = "intelismart:open-booking";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

type ScheduleConsultationButtonProps = {
  className?: string;
  children?: ReactNode;
  iconSize?: number;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="booking-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="booking-close" type="button" onClick={onClose} aria-label="Close booking calendar">
          <X aria-hidden="true" size={18} />
          <span>Close</span>
        </button>
        <h2 id="booking-modal-title" className="sr-only">
          Schedule Consultation
        </h2>
        <iframe
          src={BOOKINGS_URL}
          title="Schedule Consultation"
          className="booking-frame"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export function BookingModalHost() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function openBooking() {
      setOpen(true);
    }

    window.addEventListener(OPEN_BOOKING_EVENT, openBooking);
    return () => window.removeEventListener(OPEN_BOOKING_EVENT, openBooking);
  }, []);

  return <BookingModal open={open} onClose={() => setOpen(false)} />;
}

export function ScheduleConsultationButton({
  className = "btn btn-ghost",
  children = "Schedule Consultation",
  iconSize = 15
}: ScheduleConsultationButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_BOOKING_EVENT))}
    >
      <CalendarDays aria-hidden="true" size={iconSize} />
      {children}
    </button>
  );
}
