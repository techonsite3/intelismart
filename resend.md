Build a production-ready form handling system for the Intelismart NextJS website using:

* NextJS App Router
* API Routes
* Resend
* React Hook Form
* Zod validation

IMPORTANT:
Keep the implementation lean, modern, scalable, and enterprise-clean.
Do NOT use:
* Microsoft Forms
* SMTP
* Microsoft Graph API
* Exchange integrations
* Power Automate
* Mailgun

==================================================
ARCHITECTURE
============

Website Form
↓
NextJS API Route
↓
Resend
↓
Client receives email

The website forms should send transactional emails using Resend while keeping the client’s email system untouched.

==================================================
RESEND SETUP
============

Use:

* Resend
* verified subdomain:
  send.intelismart.com

Sending addresses:

* [noreply@send.intelismart.com](mailto:noreply@send.intelismart.com)
* [support@send.intelismart.com](mailto:support@send.intelismart.com)

Environment variable:
RESEND_API_KEY=added-to-.env.local

==================================================
FORMS TO BUILD
==============

1. SIMPLE CONTACT FORM
   Purpose:

* CTA bars
* hero sections
* quick callback requests

Fields:

* Name

* Services
* email & Phone number and send them in a beatiful format to the client's email
* Phone

==================================================

2. FULL CONTACT FORM
   Fields:

* Name
* Company
* Email
* Phone
* Service Needed
* Current Customer?
* Message

==================================================
VALIDATION
==========

Use:

* React Hook Form
* Zod

Requirements:

* clean validation
* inline errors
* disabled submit state during request
* success + error states
* responsive UI

==================================================
API ROUTES
==========

Create:

* /api/contact
* /api/subscribe

Requirements:

* server-side validation
* clean JSON responses
* rate-limit ready structure
* async/await
* proper error handling

==================================================
EMAIL BEHAVIOR
==============

When a form is submitted:

* validate data
* send formatted HTML email via Resend
* email arrives inside inbox

Recipient examples:

* [info@clientdomain.com](mailto:info@clientdomain.com)
* [support@clientdomain.com](mailto:support@clientdomain.com)

==================================================
EMAIL TEMPLATE STYLE
====================

Use:

* modern clean HTML email
* professional formatting
* dark/light neutral style
* readable spacing
* clearly labeled fields

Example sections:

* New Lead
* Contact Details
* Service Requested
* Message

==================================================
EXAMPLE IMPLEMENTATION
======================

Use this implementation style:

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
try {
const body = await req.json();

```
await resend.emails.send({
  from: 'Intelismart <noreply@send.intelismart.com>',
  to: ['info@clientdomain.com'],
  subject: 'New Contact Request',
  html: `
    <h2>New Lead</h2>
    <p>Name: ${body.name}</p>
    <p>Email: ${body.email}</p>
    <p>Phone: ${body.phone}</p>
    <p>Message: ${body.message}</p>
  `,
});

return Response.json({ success: true });
```

} catch (error) {
return Response.json(
{ success: false, error: 'Failed to send message' },
{ status: 500 }
);
}
}

==================================================
DNS / DOMAIN NOTES
==================

The Resend domain is:
send.intelismart.com

DNS is managed inside:

* Vercel DNS

Resend records already include:

* DKIM
* SPF
* MX
* optional DMARC

Do NOT implement any mail server logic manually.

==================================================
UI/UX REQUIREMENTS
==================

The forms should match the Intelismart premium website aesthetic:

* dark enterprise look
* clean spacing
* subtle animations
* professional typography
* responsive
* minimal clutter

==================================================
FUTURE-READY
============

Structure code cleanly so future integrations can be added later:

* HubSpot
* CRM
* Auto replies
* SMS
* RingCentral
* Booking confirmations
* Slack notifications
* Lead dashboards

But do NOT build those now.

Keep implementation focused, clean, and production-ready.
