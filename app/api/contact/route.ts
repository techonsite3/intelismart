import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import {
  emailTemplateConfig,
  escapeHtml,
  renderButton,
  renderCallout,
  renderEmailShell,
  renderField,
  renderServicesList
} from "@/lib/contact-email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Intelismart <noreply@send.intelismart.com>";
const TO_EMAIL = process.env.CONTACT_EMAIL || "sales@intelismart.com";

const phoneSchema = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number.")
  .max(30, "Enter a valid phone number.");

const systemEvaluationSchema = z.object({
  formType: z.literal("system-evaluation"),
  name: z.string().trim().min(2, "Enter your name.").max(120),
  services: z.array(z.string().trim().min(1)).min(1, "Choose at least one service."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: phoneSchema
});

const contactSchema = z.object({
  formType: z.literal("contact"),
  company: z.string().trim().min(2, "Enter your company name.").max(160),
  name: z.string().trim().min(2, "Enter your name.").max(120),
  phone: phoneSchema.optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address."),
  service: z.string().trim().min(1, "Select a service."),
  businessType: z.string().trim().min(1, "Select a business type."),
  locations: z.string().trim().min(1, "Select the number of locations."),
  timeline: z.string().trim().min(1, "Select a timeline."),
  budget: z.string().trim().min(1, "Select a budget range."),
  preferredCallbackTime: z.string().trim().max(160).optional().or(z.literal("")),
  telecomBillReview: z.string().trim().min(1, "Select a telecom bill review option."),
  currentCustomer: z.string().trim().min(1, "Select one option."),
  message: z.string().trim().min(10, "Add a short message.").max(2400)
});

const contactRequestSchema = z.discriminatedUnion("formType", [
  systemEvaluationSchema,
  contactSchema
]);

type ContactRequest = z.infer<typeof contactRequestSchema>;

function buildEmail(data: ContactRequest) {
  if (data.formType === "system-evaluation") {
    return {
      subject: `New System Evaluation Request from ${data.name}`,
      html: renderEmailShell({
        title: "New System Evaluation Request",
        eyebrow: "Intelismart lead",
        content: `
          <p style="margin: 0 0 18px; color: #111827; font-size: 16px; line-height: 1.65;">
            A new system evaluation request has been submitted through the Intelismart website.
          </p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 0;">${renderField("Name", data.name)}</td></tr>
            <tr><td style="padding: 0;">${renderField("Email", data.email)}</td></tr>
            <tr><td style="padding: 0;">${renderField("Phone", data.phone)}</td></tr>
          </table>
          <div style="margin-top: 26px;">
            <p style="margin: 0 0 12px; color: #71717a; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;">Selected Services</p>
            <div>${renderServicesList(data.services)}</div>
          </div>
        `
      })
    };
  }

  return {
    subject: `New Contact Request from ${data.name}`,
    html: renderEmailShell({
      title: "New Contact Request",
      eyebrow: "Intelismart contact form",
      content: `
        <p style="margin: 0 0 18px; color: #111827; font-size: 16px; line-height: 1.65;">
          A new contact request has been submitted through the Intelismart website.
        </p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 0;">${renderField("Company", data.company)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Name", data.name)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Email", data.email)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Phone", data.phone)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Service", data.service)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Business Type", data.businessType)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Locations", data.locations)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Timeline", data.timeline)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Budget Range", data.budget)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Preferred Callback Time", data.preferredCallbackTime)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Telecom Bill Review", data.telecomBillReview)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Current Customer", data.currentCustomer)}</td></tr>
        </table>
        <div style="margin-top: 26px; border-radius: 14px; background: #f9fafb; padding: 20px;">
          <p style="margin: 0 0 10px; color: #71717a; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;">Message</p>
          <p style="margin: 0; color: #111827; font-size: 16px; line-height: 1.65; overflow-wrap: anywhere; word-break: break-word;">${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    })
  };
}

function buildAcknowledgementEmail(data: ContactRequest) {
  if (data.formType === "system-evaluation") {
    return {
      subject: "We received your Intelismart system evaluation request",
      html: renderEmailShell({
        title: "We received your request",
        eyebrow: "Intelismart confirmation",
        content: `
          <p style="margin: 0 0 18px; color: #111827; font-size: 16px; line-height: 1.7;">
            Hi ${escapeHtml(data.name)}, your system evaluation request has been received.
          </p>
          <p style="margin: 0 0 18px; color: #111827; font-size: 16px; line-height: 1.7;">
            A systems consultant may review your submission and Intelismart may contact you if clarification is needed before we recommend the next step. Typical response time is within 1 business day.
          </p>
          ${renderCallout(
            "What happens next",
            `
              We will review the services you selected, align the request to the right specialist, and follow up using the contact details you provided.
            `
          )}
          <div style="margin-top: 24px; border-radius: 14px; background: #f9fafb; padding: 20px;">
            <p style="margin: 0 0 12px; color: #71717a; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;">Requested Services</p>
            <div>${renderServicesList(data.services)}</div>
          </div>
          ${renderCallout(
            "Reply with documents if helpful",
            `
              You can reply to this same email thread with telecom bills, infrastructure photos, floor plans, supporting documentation, or equipment lists. That keeps everything in one place for our review.
            `
          )}
          ${renderButton("Schedule Consultation", emailTemplateConfig.bookingsUrl)}
          <p style="margin: 18px 0 0; color: #71717a; font-size: 13px; line-height: 1.7;">
            Microsoft Bookings handles scheduling confirmations, reminders, and calendar invitations.
          </p>
        `
      })
    };
  }

  const shouldShowBookingLink = !["Customer support", "Urgent incident"].includes(data.service);

  return {
    subject: "We received your Intelismart message",
    html: renderEmailShell({
      title: "We received your message",
      eyebrow: "Intelismart confirmation",
      content: `
        <p style="margin: 0 0 18px; color: #111827; font-size: 16px; line-height: 1.7;">
          Hi ${escapeHtml(data.name)}, your request has been received by Intelismart.
        </p>
        <p style="margin: 0 0 18px; color: #111827; font-size: 16px; line-height: 1.7;">
          A systems consultant may review your submission and Intelismart may contact you for clarification before we advise the next step. Typical response time is within 1 business day.
        </p>
        ${renderCallout(
          "Request summary",
          `
            We will route your inquiry to the right team based on the service, environment, timeline, and business context you shared.
          `
        )}
        <table style="width: 100%; border-collapse: collapse; margin-top: 12px;">
          <tr><td style="padding: 0;">${renderField("Company", data.company)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Service", data.service)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Business Type", data.businessType)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Locations", data.locations)}</td></tr>
          <tr><td style="padding: 0;">${renderField("Timeline", data.timeline)}</td></tr>
        </table>
        ${renderCallout(
          "Reply with supporting documents",
          `
            If helpful, reply to this email thread with telecom bills, infrastructure photos, floor plans, supporting documentation, or equipment lists so our team can review them with your request.
          `
        )}
        ${
          shouldShowBookingLink
            ? `
              ${renderButton("Schedule Consultation", emailTemplateConfig.bookingsUrl)}
              <p style="margin: 18px 0 0; color: #71717a; font-size: 13px; line-height: 1.7;">
                If you prefer to choose a time now, use our Microsoft Bookings calendar. Scheduling confirmations and reminders will still come from Microsoft Bookings.
              </p>
            `
            : ""
        }
      `
    })
  };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email sending is not configured." },
      { status: 500 }
    );
  }

  const email = buildEmail(parsed.data);
  const acknowledgementEmail = buildAcknowledgementEmail(parsed.data);

  const result = await resend.batch.send([
    {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: parsed.data.email,
      subject: email.subject,
      html: email.html
    },
    {
      from: FROM_EMAIL,
      to: [parsed.data.email],
      replyTo: TO_EMAIL,
      subject: acknowledgementEmail.subject,
      html: acknowledgementEmail.html
    }
  ]);

  if (result.error) {
    return NextResponse.json(
      { error: result.error.message || "Failed to send message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
