"use client";

import { FormEvent, useEffect, useState } from "react";
import { Mail, Phone, Wrench, X } from "lucide-react";
import { ScheduleConsultationButton } from "@/components/booking-modal";
import { services } from "@/lib/site-content";

type LeadType = "callback" | "request";

type LeadCaptureProps = {
  variant?: "hero" | "sticky" | "inline";
};

type RequestCallbackButtonProps = {
  className?: string;
};

export function LeadCapture({ variant = "hero" }: LeadCaptureProps) {
  const [active, setActive] = useState<LeadType | null>(null);

  return (
    <>
      <div className={`lead-actions lead-actions-${variant}`}>
        <button type="button" className="btn btn-light" onClick={() => setActive("request")}>
          <Wrench aria-hidden="true" size={15} />
          Request System Evaluation
        </button>
        <ScheduleConsultationButton />
      </div>
      {active ? <LeadModal type={active} onClose={() => setActive(null)} /> : null}
    </>
  );
}

export function RequestCallbackButton({ className = "" }: RequestCallbackButtonProps) {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`btn btn-light request-callback-button ${className}`.trim()}
        onClick={() => setActive(true)}
      >
        <Phone aria-hidden="true" size={15} />
        Request callback
      </button>
      {active ? <LeadModal type="callback" onClose={() => setActive(false)} /> : null}
    </>
  );
}

export function LeadModal({ type, onClose }: { type: LeadType; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [name, setName] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState(false);
  const [requestStep, setRequestStep] = useState<"name" | "services" | "contact">("name");
  const isCallback = type === "callback";
  const firstName = name.trim().split(/\s+/)[0] || "there";

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const endpoint = isCallback ? "/api/ringcentral/callback" : "/api/contact";
    const payload = isCallback
      ? {
          type: "schedule",
          name,
          phone: formData.get("phone")
        }
      : {
          formType: "system-evaluation",
          name,
          services: selectedServices,
          phone: formData.get("phone"),
          email: formData.get("email")
        };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).catch(() => null);

    if (!response?.ok) {
      const data = await response?.json().catch(() => null);
      setSubmitError(
        data?.error ||
          (isCallback ? "We couldn't start the call. Please try again." : "We couldn't send your request. Please try again.")
      );
      setSubmitting(false);
      return;
    }

    setSent(true);
    setSubmitting(false);
  }

  function continueToServices(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRequestStep("services");
  }

  function continueToContact() {
    if (selectedServices.length === 0) {
      setServiceError(true);
      return;
    }
    setServiceError(false);
    setRequestStep("contact");
  }

  function toggleService(serviceTitle: string) {
    setSelectedServices((current) => {
      const next = current.includes(serviceTitle)
        ? current.filter((title) => title !== serviceTitle)
        : [...current, serviceTitle];

      if (next.length > 0) {
        setServiceError(false);
      }

      return next;
    });
  }

  return (
    <div className="lead-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="lead-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="lead-close" type="button" onClick={onClose} aria-label="Close lead form">
          <X aria-hidden="true" size={20} />
          <span>Close</span>
        </button>

        {sent ? (
          <div className="lead-success">
            <span>
              {isCallback ? <Phone aria-hidden="true" size={20} /> : <Mail aria-hidden="true" size={20} />}
            </span>
            <p className="label">Request received</p>
            <h2 id="lead-modal-title">
              {isCallback ? "Somebody will be reaching out very soon." : `Thanks, ${firstName}. We'll take it from here.`}
            </h2>
            <p>
              {isCallback
                ? "We're excited to help you. An Intelismart team member will follow up using the phone number you provided."
                : "We're excited to help you. Your request has been sent to the Intelismart team."}
            </p>
            <button className="btn btn-light" type="button" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <p className="label">{isCallback ? "Request callback" : "Request system evaluation"}</p>
            <h2 id="lead-modal-title">
              {isCallback
                ? "We're excited to help you."
                : requestStep === "name"
                  ? "I'm a Specialist and ready to help you."
                  : requestStep === "services"
                  ? "Choose your service."
                  : `${firstName}, where should we reach you?`}
            </h2>
            <p className="lead-intro">
              {isCallback
                ? "Share the best phone number for you. Somebody will be reaching out to you very soon."
                : requestStep === "name"
                  ? "What is you name?"
                  : requestStep === "services"
                    ? `Thanks, ${firstName}. Select one or more areas where Intelismart can help.`
                    : "Add your contact details and we'll route this to the right team."}
            </p>
            {!isCallback && requestStep === "name" ? (
              <form className="lead-form" onSubmit={continueToServices}>
                <label>
                  Name
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    autoFocus
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </label>
                <button className="btn btn-light" type="submit">
                  Continue
                </button>
              </form>
            ) : !isCallback && requestStep === "services" ? (
              <div className="lead-form">
                <fieldset className="service-picker" aria-describedby={serviceError ? "service-error" : undefined}>
                  <legend>Services</legend>
                  <div className="service-picker-list">
                    {services.map((service) => {
                      const checked = selectedServices.includes(service.title);

                      return (
                        <label className="service-option" key={service.slug}>
                          <input
                            type="checkbox"
                            name="services"
                            value={service.title}
                            checked={checked}
                            onChange={() => toggleService(service.title)}
                          />
                          <span className="service-option-box" aria-hidden="true" />
                          <span>
                            <strong>{service.title}</strong>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {serviceError ? (
                    <p className="service-error" id="service-error">
                      Choose at least one service.
                    </p>
                  ) : null}
                </fieldset>
                <button className="btn btn-light" type="button" onClick={continueToContact}>
                  Continue
                </button>
              </div>
            ) : (
              <form className="lead-form" onSubmit={submit}>
                {!isCallback ? (
                  <div className="selected-services-summary" aria-label="Selected services">
                    <span>Selected</span>
                    <input type="hidden" name="name" value={name} />
                    <div>
                      {selectedServices.map((service) => (
                        <strong key={service}>{service}</strong>
                      ))}
                    </div>
                  </div>
                ) : null}
                <label>
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(000) 000-0000"
                    required
                  />
                </label>
                {!isCallback ? (
                  <label>
                    Email
                    <input name="email" type="email" placeholder="you@company.com" required />
                  </label>
                ) : null}
                {!isCallback ? (
                  <div className="lead-form-actions">
                    <button className="btn btn-ghost" type="button" onClick={() => setRequestStep("services")}>
                      Back
                    </button>
                    <button className="btn btn-light" type="submit" disabled={submitting}>
                      {submitting ? "Sending..." : "Send request"}
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-light" type="submit" disabled={submitting}>
                    {submitting ? "Starting call..." : "Request my call"}
                  </button>
                )}
                {submitError ? (
                  <p className="service-error" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
