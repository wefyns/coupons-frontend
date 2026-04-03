import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!resend) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    // Send welcome email via Resend
    const { data, error } = await resend.emails.send({
      from: "DealCoupon <newsletter@dealcoupon.de>",
      to: email,
      subject: "Willkommen bei DealCoupon!",
      html: `
        <h1>Willkommen bei DealCoupon!</h1>
        <p>Vielen Dank für Ihre Anmeldung zu unserem Newsletter.</p>
        <p>Sie erhalten ab sofort täglich die besten Gutscheine und Rabattcodes.</p>
        <p>Mit freundlichen Grüßen,<br>Das DealCoupon Team</p>
      `,
      tags: [
        {
          name: "source",
          value: "newsletter",
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}