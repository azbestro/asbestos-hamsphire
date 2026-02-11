import { Resend } from "resend";
import { NextResponse } from "next/server";

const BUSINESS_EMAIL = "asbestoslad@gmail.com";
const SITE_NAME = "Asbestos Services Hampshire";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const location = formData.get("location") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Process file attachments
    const attachments: { filename: string; content: Buffer }[] = [];
    const files = formData.getAll("files") as File[];

    for (const file of files) {
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        attachments.push({
          filename: file.name,
          content: Buffer.from(bytes),
        });
      }
    }

    const serviceLabel = service || "Not specified";
    const locationLabel = location || "Not specified";
    const fileList =
      attachments.length > 0
        ? attachments.map((a) => a.filename).join(", ")
        : "None";

    // Email to business
    await resend.emails.send({
      from: `${SITE_NAME} <${FROM_EMAIL}>`,
      to: [BUSINESS_EMAIL],
      replyTo: email,
      subject: `New Enquiry from ${name} — ${serviceLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">New Enquiry Received</h1>
            <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">${SITE_NAME}</p>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #1e3a5f;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #1e3a5f;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                <td style="padding: 8px 0; color: #1f2937;">${serviceLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Location:</td>
                <td style="padding: 8px 0; color: #1f2937;">${locationLabel}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Files:</td>
                <td style="padding: 8px 0; color: #1f2937;">${fileList}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px;">Message:</p>
              <p style="color: #1f2937; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
      attachments,
    });

    // Confirmation email to client
    await resend.emails.send({
      from: `${SITE_NAME} <${FROM_EMAIL}>`,
      to: [email],
      subject: `We've received your enquiry — ${SITE_NAME}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a5f; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 20px;">${SITE_NAME}</h1>
            <p style="margin: 8px 0 0; opacity: 0.8; font-size: 14px;">Enquiry Confirmation</p>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 8px 8px;">
            <p style="color: #1f2937; line-height: 1.6;">Dear ${name},</p>
            <p style="color: #1f2937; line-height: 1.6;">
              Thank you for contacting ${SITE_NAME}. We have received your enquiry
              regarding <strong>${serviceLabel}</strong> and will be in touch shortly.
            </p>
            <p style="color: #1f2937; line-height: 1.6;">
              We aim to respond to all enquiries within one working day. If your
              matter is urgent, please call us directly on
              <a href="tel:+447424521865" style="color: #1e3a5f; font-weight: bold;">07424 521865</a>.
            </p>
            <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
              <p style="font-weight: bold; color: #374151; margin: 0 0 8px; font-size: 14px;">Your enquiry summary:</p>
              <p style="color: #6b7280; font-size: 14px; margin: 0; line-height: 1.6;">
                Service: ${serviceLabel}<br/>
                Location: ${locationLabel}<br/>
                Files attached: ${attachments.length}
              </p>
            </div>
            <p style="color: #6b7280; font-size: 13px; margin-top: 24px; line-height: 1.5;">
              This is an automated confirmation. Please do not reply to this email.
              For further correspondence, email us at asbestoslad@gmail.com or call 07424 521865.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
