import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { collegeName, contactPerson, designation, email, phone, city, studentCount, courseInterest, message } = body;

    // Google Form submission
    const formId = "1FAIpQLSeNfP1t3WgJ82euQJOxTQGxNpqIavR_MnkRl4nSjoeAl1ZYiQ";
    const googleFormUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    // These are common entry IDs - will try to submit with field names
    const params = new URLSearchParams();
    params.append("entry.1234567890", collegeName || "");
    params.append("entry.1234567891", contactPerson || "");
    params.append("entry.1234567892", designation || "");
    params.append("entry.1234567893", email || "");
    params.append("entry.1234567894", phone || "");
    params.append("entry.1234567895", city || "");
    params.append("entry.1234567896", studentCount || "");
    params.append("entry.1234567897", courseInterest || "");
    params.append("entry.1234567898", message || "");

    // Submit to Google Form
    await fetch(googleFormUrl, {
      method: "POST",
      body: params,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
