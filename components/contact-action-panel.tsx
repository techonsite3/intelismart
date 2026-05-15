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
        businessType: formData.get("businessType"),
        locations: formData.get("locations"),
        timeline: formData.get("timeline"),
        budget: formData.get("budget"),
        preferredCallbackTime: formData.get("preferredCallbackTime"),
        telecomBillReview: formData.get("telecomBillReview"),
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
          <p>
            A systems consultant may review your request and follow up within 1
            business day. For urgent outages, call Intelismart directly so we can
            route the issue faster.
          </p>
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
          <label>
            Business type
            <select name="businessType" defaultValue="" required>
              <option value="" disabled>Select type</option>
              <option>Office / Small business</option>
              <option>Church / Campus</option>
              <option>Retail / Restaurant</option>
              <option>Warehouse / Industrial</option>
              <option>Hotel / Hospitality</option>
              <option>Government / Public sector</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Number of locations
            <select name="locations" defaultValue="" required>
              <option value="" disabled>Select range</option>
              <option>1 location</option>
              <option>2-5 locations</option>
              <option>6-20 locations</option>
              <option>21+ locations</option>
              <option>Planning new location</option>
            </select>
          </label>
          <label>
            Timeline
            <select name="timeline" defaultValue="" required>
              <option value="" disabled>Select timeline</option>
              <option>Urgent / this week</option>
              <option>Next 30 days</option>
              <option>1-3 months</option>
              <option>3+ months</option>
              <option>Researching options</option>
            </select>
          </label>
          <label>
            Budget range
            <select name="budget" defaultValue="" required>
              <option value="" disabled>Select range</option>
              <option>Under $5,000</option>
              <option>$5,000-$15,000</option>
              <option>$15,000-$50,000</option>
              <option>$50,000+</option>
              <option>Not sure yet</option>
            </select>
          </label>
          <label>
            Preferred callback time
            <input name="preferredCallbackTime" type="text" placeholder="Morning, afternoon, or a specific time" />
          </label>
          <label>
            Telecom bill review?
            <select name="telecomBillReview" defaultValue="" required>
              <option value="" disabled>Select one</option>
              <option>Yes, we want a cost review</option>
              <option>No, not right now</option>
              <option>Not sure</option>
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
              placeholder="Briefly describe the project, issue, sites, or links to photos, bills, or documents."
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
