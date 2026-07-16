import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT = "alain.briez@excubate.xyz";
const SENDER = "Excubate <excubate@notifications.tryamigo.io>";
const TIMELINES = new Set([
  "This month",
  "Within 3 months",
  "Within 6 months",
  "No project yet",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email delivery is unavailable." },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name, 120);
    const email = clean(body.email, 254);
    const company = clean(body.company, 160);
    const timeline = clean(body.timeline, 40);
    const information = clean(body.information, 5000);
    const website = clean(body.website, 200);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !isEmail(email) || !company || !TIMELINES.has(timeline)) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: SENDER,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Excubate project — ${company}`,
      text: [
        "New project submitted through excubate.xyz",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Project timeline: ${timeline}`,
        "",
        "Complementary information:",
        information || "Not provided",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the contact email:", error);
      return NextResponse.json(
        { error: "Email delivery failed." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Invalid contact form submission." },
      { status: 400 },
    );
  }
}
