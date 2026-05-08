import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Intelismart <noreply@send.intelismart.com>";
const TO_EMAIL = process.env.CONTACT_EMAIL || "support@intelismart.com";

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
  currentCustomer: z.string().trim().min(1, "Select one option."),
  message: z.string().trim().min(10, "Add a short message.").max(2400)
});

const contactRequestSchema = z.discriminatedUnion("formType", [
  systemEvaluationSchema,
  contactSchema
]);

type ContactRequest = z.infer<typeof contactRequestSchema>;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(label: string, value?: string) {
  const cleanValue = value?.trim() || "Not provided";

  return `
    <div style="border-bottom: 1px solid #eceff3; padding: 15px 0;">
      <div style="margin-bottom: 7px; color: #71717a; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; line-height: 1.35; text-transform: uppercase;">${escapeHtml(label)}</div>
      <div style="color: #111827; font-size: 16px; font-weight: 700; line-height: 1.5; overflow-wrap: anywhere; word-break: break-word;">${escapeHtml(cleanValue)}</div>
    </div>
  `;
}

function servicesList(services: string[]) {
  return services
    .map(
      (service) => `
        <span style="display: inline-block; max-width: 100%; box-sizing: border-box; margin: 0 8px 8px 0; border: 1px solid #e5e7eb; border-radius: 999px; padding: 8px 12px; background: #f9fafb; color: #111827; font-size: 14px; font-weight: 700; line-height: 1.35; overflow-wrap: anywhere; word-break: break-word;">${escapeHtml(service)}</span>
      `
    )
    .join("");
}

function emailShell(title: string, eyebrow: string, content: string) {
  return `
    <!doctype html>
    <html>
      <body style="margin: 0; background: #f4f4f5; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%;">
        <div style="box-sizing: border-box; width: 100%; padding: 24px 12px;">
          <div style="box-sizing: border-box; width: 100%; max-width: 680px; margin: 0 auto; overflow: hidden; border-radius: 18px; background: #ffffff; box-shadow: 0 24px 70px rgba(17, 24, 39, 0.12);">
            <div style="background: #050505; padding: 28px 24px;">
              <p style="margin: 0 0 12px; color: #f1873b; font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase;">${escapeHtml(eyebrow)}</p>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; line-height: 1.12; overflow-wrap: anywhere;">${escapeHtml(title)}</h1>
            </div>
            <div style="padding: 24px;">
              ${content}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function buildEmail(data: ContactRequest) {
  if (data.formType === "system-evaluation") {
    return {
      subject: `New System Evaluation Request from ${data.name}`,
      html: emailShell(
        "New System Evaluation Request",
        "Intelismart lead",
        `
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 0;">${field("Name", data.name)}</td></tr>
            <tr><td style="padding: 0;">${field("Email", data.email)}</td></tr>
            <tr><td style="padding: 0;">${field("Phone", data.phone)}</td></tr>
          </table>
          <div style="margin-top: 26px;">
            <p style="margin: 0 0 12px; color: #71717a; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;">Selected Services</p>
            <div>${servicesList(data.services)}</div>
          </div>
        `
      )
    };
  }

  return {
    subject: `New Contact Request from ${data.name}`,
    html: emailShell(
      "New Contact Request",
      "Intelismart contact form",
      `
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 0;">${field("Company", data.company)}</td></tr>
          <tr><td style="padding: 0;">${field("Name", data.name)}</td></tr>
          <tr><td style="padding: 0;">${field("Email", data.email)}</td></tr>
          <tr><td style="padding: 0;">${field("Phone", data.phone)}</td></tr>
          <tr><td style="padding: 0;">${field("Service", data.service)}</td></tr>
          <tr><td style="padding: 0;">${field("Current Customer", data.currentCustomer)}</td></tr>
        </table>
        <div style="margin-top: 26px; border-radius: 14px; background: #f9fafb; padding: 20px;">
          <p style="margin: 0 0 10px; color: #71717a; font-size: 12px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;">Message</p>
          <p style="margin: 0; color: #111827; font-size: 16px; line-height: 1.65; overflow-wrap: anywhere; word-break: break-word;">${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    )
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

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    replyTo: parsed.data.email,
    subject: email.subject,
    html: email.html
  });

  if (result.error) {
    return NextResponse.json(
      { error: result.error.message || "Failed to send message." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
