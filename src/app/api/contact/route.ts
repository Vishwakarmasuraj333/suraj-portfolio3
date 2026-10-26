import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, budget, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please write a message with at least 10 characters." },
        { status: 422 }
      );
    }

    // Log the contact inquiry for development / production observation
    console.log("[Contact Inquiry Received]", {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      subject: subject || "General Inquiry",
      budget: budget || "Not specified",
      messageLength: message.trim().length,
    });

    // In production with real environment variables:
    // If process.env.RESEND_API_KEY is configured, send actual email via Resend or SMTP.
    // Otherwise, simulate successful server logging.
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been received. Ratan will get back to you within 24 hours.",
        receivedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Server error occurred. Please try again later or email directly." },
      { status: 500 }
    );
  }
}
