const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://intelismart.com";

export const emailTemplateConfig = {
  siteUrl,
  logoUrl: `${siteUrl}/inteli-trans.png`,
  bookingsUrl: "https://outlook.office.com/book/salesintelismartcom@intelismart.com/",
  signature: {
    company: "INTELISMART LLC",
    mobile: "M 832.759.3387",
    office: "O 979.999.1901",
    fax: "F 956.476.5186"
  },
  proofPoints: [
    "26+ Years Experience",
    "Commercial & Enterprise Systems",
    "Churches • Retail • Hospitality • Warehousing"
  ]
};

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderField(label: string, value?: string) {
  const cleanValue = value?.trim() || "Not provided";

  return `
    <div style="border-bottom: 1px solid #eceff3; padding: 15px 0;">
      <div style="margin-bottom: 7px; color: #71717a; font-size: 11px; font-weight: 800; letter-spacing: 0.12em; line-height: 1.35; text-transform: uppercase;">${escapeHtml(label)}</div>
      <div style="color: #111827; font-size: 16px; font-weight: 700; line-height: 1.5; overflow-wrap: anywhere; word-break: break-word;">${escapeHtml(cleanValue)}</div>
    </div>
  `;
}

export function renderServicesList(services: string[]) {
  return services
    .map(
      (service) => `
        <span style="display: inline-block; max-width: 100%; box-sizing: border-box; margin: 0 8px 8px 0; border: 1px solid #e5e7eb; border-radius: 999px; padding: 8px 12px; background: #f9fafb; color: #111827; font-size: 14px; font-weight: 700; line-height: 1.35; overflow-wrap: anywhere; word-break: break-word;">${escapeHtml(service)}</span>
      `
    )
    .join("");
}

export function renderCallout(title: string, body: string) {
  return `
    <div style="margin-top: 24px; border: 1px solid #eceff3; border-radius: 14px; background: #fafafa; padding: 18px 18px 16px;">
      <p style="margin: 0 0 8px; color: #111827; font-size: 13px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;">${escapeHtml(title)}</p>
      <div style="color: #52525b; font-size: 15px; line-height: 1.7;">${body}</div>
    </div>
  `;
}

export function renderButton(label: string, href: string) {
  return `
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 24px;">
      <tr>
        <td style="border-radius: 8px; background: #f1873b;">
          <a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 13px 18px; color: #050505; font-size: 13px; font-weight: 800; letter-spacing: 0.1em; text-decoration: none; text-transform: uppercase;">
            ${escapeHtml(label)}
          </a>
        </td>
      </tr>
    </table>
  `;
}

function renderFooter() {
  return `
    <div style="margin-top: 28px; padding-top: 22px; border-top: 1px solid #eceff3;">
      <p style="margin: 0 0 10px; color: #111827; font-size: 14px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase;">
        ${emailTemplateConfig.signature.company}
      </p>
      <p style="margin: 0; color: #52525b; font-size: 14px; line-height: 1.75;">
        ${emailTemplateConfig.signature.mobile}<br />
        ${emailTemplateConfig.signature.office}<br />
        ${emailTemplateConfig.signature.fax}
      </p>
      <p style="margin: 16px 0 0; color: #71717a; font-size: 13px; line-height: 1.7;">
        ${emailTemplateConfig.proofPoints.map((item) => escapeHtml(item)).join("<br />")}
      </p>
    </div>
  `;
}

type ShellOptions = {
  title: string;
  eyebrow: string;
  content: string;
};

export function renderEmailShell({ title, eyebrow, content }: ShellOptions) {
  return `
    <!doctype html>
    <html>
      <body style="margin: 0; background: #f4f4f5; font-family: Arial, Helvetica, sans-serif; -webkit-text-size-adjust: 100%;">
        <div style="box-sizing: border-box; width: 100%; padding: 24px 12px;">
          <div style="box-sizing: border-box; width: 100%; max-width: 680px; margin: 0 auto; overflow: hidden; border-radius: 18px; background: #ffffff; box-shadow: 0 24px 70px rgba(17, 24, 39, 0.12);">
            <div style="background: #050505; padding: 28px 24px 26px;">
              <div style="margin-bottom: 18px;">
                <img
                  src="${escapeHtml(emailTemplateConfig.logoUrl)}"
                  alt="Intelismart"
                  width="170"
                  style="display: block; width: 170px; max-width: 100%; height: auto; border: 0;"
                />
              </div>
              <p style="margin: 0 0 12px; color: #f1873b; font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase;">
                ${escapeHtml(eyebrow)}
              </p>
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; line-height: 1.12; overflow-wrap: anywhere;">
                ${escapeHtml(title)}
              </h1>
            </div>
            <div style="padding: 24px;">
              ${content}
              ${renderFooter()}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
