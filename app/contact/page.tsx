import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomMenu } from "@/components/sticky-bottom-menu";
import { contact, services } from "@/lib/site-content";

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
            infrastructure? Fill in your contact details and we will get back to
            you with the right next step.
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

        <form className="contact-form">
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
            <select name="service" defaultValue="">
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
            <select name="currentCustomer" defaultValue="">
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
          <button className="btn btn-light wide" type="submit">
            Send Request
          </button>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
