import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please provide a valid email address."),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();

    const parsed = ContactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form data." },
        { status: 400 }
      );
    }

    const { name, email, phone, company, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || "GNE Infra Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER || "info@gneinfra.com"],
      replyTo: email,
      subject: "New Inquiry from GNE Infra Website",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16A34A; border-bottom: 2px solid #16A34A; padding-bottom: 10px;">
            New Inquiry from GNE Infra Website
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #334155; width: 120px;">Name:</td>
              <td style="padding: 8px 12px; color: #475569;">${name}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: bold; color: #334155;">Email:</td>
              <td style="padding: 8px 12px; color: #475569;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #334155;">Phone:</td>
              <td style="padding: 8px 12px; color: #475569;">${phone || "Not provided"}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: bold; color: #334155;">Company:</td>
              <td style="padding: 8px 12px; color: #475569;">${company || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #f0fdf4; border-left: 4px solid #16A34A; border-radius: 4px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #334155;">Message:</p>
            <p style="margin: 0; color: #475569; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #94a3b8;">
            This inquiry was submitted via the GNE Infra website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}