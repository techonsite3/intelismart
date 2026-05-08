"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import { RequestCallbackButton } from "@/components/lead-capture";
import { services } from "@/lib/site-content";

export function ContactActionPanel() {
  const [showForm, setShowForm] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        formType: "contact",
        company: formData.get("company"),
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        service: formData.get("service"),
        currentCustomer: formData.get("currentCustomer"),
        message: formData.get("message")
      })
    }).catch(() => null);

    if (!response?.ok) {
      const data = await response?.json().catch(() => null);
      setSubmitError(data?.error || "We couldn't send your message. Please try again.");
      setSubmitting(false);
      return;
    }

    form.reset();
    setSent(true);
    setSubmitting(false);
  }

  return (
    <div className="contact-action-panel">
      <div className="contact-choice-buttons">
        <RequestCallbackButton />
        <button
          type="button"
          className="btn btn-ghost contact-message-button"
          aria-expanded={showForm}
          aria-controls="contact-message-form"
          onClick={() => setShowForm(true)}
        >
          <Mail aria-hidden="true" size={15} />
          Send us a message
        </button>
      </div>

      {sent ? (
        <div className="contact-success-panel" role="status">
          <p className="label">Message sent</p>
          <h2>Thanks. We received your request.</h2>
          <p>An Intelismart team member will review it and follow up with the right next step.</p>
        </div>
      ) : showForm ? (
        <form className="contact-form" id="contact-message-form" onSubmit={submitContactForm}>
          <label>
            Company
            <input name="company" type="text" placeholder="Company name" required />
          </label>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" placeholder="(000) 000-0000" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@company.com" required />
          </label>
          <label className="wide">
            Service
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select service</option>
              {services.map((service) => (
                <option value={service.title} key={service.title}>
                  {service.title}
                </option>
              ))}
              <option>New project or quote</option>
              <option>Customer support</option>
              <option>Urgent incident</option>
            </select>
          </label>
          <label className="wide">
            Current customer?
            <select name="currentCustomer" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>Yes</option>
              <option>No</option>
              <option>I am not sure</option>
            </select>
          </label>
          <label className="wide">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Briefly describe the project or current issue."
              required
            />
          </label>
          <button className="btn btn-light wide" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Request"}
          </button>
          {submitError ? (
            <p className="service-error wide" role="alert">
              {submitError}
            </p>
          ) : null}
        </form>
      ) : null}
    </div>
  );
}
