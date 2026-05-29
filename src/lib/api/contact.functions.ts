import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Server-side contact form handler using Resend.
// SETUP:
//   1. Get your API key from https://resend.com/api-keys
//   2. Add RESEND_API_KEY=re_xxxx to your .env file (local) or deployment env vars
//   3. The "from" address must be from a verified domain on Resend, OR use the
//      Resend shared domain: "onboarding@resend.dev" (but this only allows sending
//      to your own Resend-verified email address in test mode)
//   4. To send to any address (like buildwithorbynix@gmail.com), you MUST verify
//      your own domain at https://resend.com/domains

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().trim().min(1).max(100),
      email: z.string().trim().email().max(255),
      message: z.string().trim().min(10).max(2000),
    }),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // No key configured — throw so the UI shows a real error instead of fake success
      throw new Error(
        "Contact form is not configured yet. Please email us directly at buildwithorbynix@gmail.com",
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    // Use Resend's shared "onboarding@resend.dev" as a from address if you don't
    // have a verified domain yet. Replace with "contact@orbynix.studio" once your
    // domain is verified in Resend dashboard.
    const fromAddress = process.env.RESEND_FROM_EMAIL ?? "Orbynix <onboarding@resend.dev>";
    const toAddress = process.env.RESEND_TO_EMAIL ?? "buildwithorbynix@gmail.com";

    const { error, data: result } = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: data.email,
      subject: `New project enquiry from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a14;color:#e5e5e5;border-radius:12px;">
          <h2 style="color:#a78bfa;margin-bottom:8px;">New Project Enquiry</h2>
          <p style="color:#9ca3af;font-size:14px;margin-bottom:24px;">via orbynix.studio</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:13px;width:80px;">Name</td>
              <td style="padding:8px 0;font-weight:600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;font-size:13px;">Email</td>
              <td style="padding:8px 0;"><a href="mailto:${data.email}" style="color:#a78bfa;">${data.email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #1f1f30;margin:20px 0;" />
          <p style="white-space:pre-wrap;line-height:1.7;color:#d1d5db;">${data.message}</p>
          <hr style="border:none;border-top:1px solid #1f1f30;margin:20px 0;" />
          <p style="font-size:12px;color:#6b7280;">Reply directly to this email to respond to ${data.name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", JSON.stringify(error));
      throw new Error(
        `Failed to send email: ${error.message ?? "Unknown error"}. Please try again or email us directly.`,
      );
    }

    console.log("[contact] Email sent successfully, id:", result?.id);
    return { ok: true };
  });
