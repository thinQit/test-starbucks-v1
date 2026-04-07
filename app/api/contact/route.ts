import { NextRequest, NextResponse } from "next/server";
import { ContactTopic } from "@prisma/client";
import { db } from "@/lib/db";
import { contactSubmissionSchema } from "@/lib/validators";

const topicMap: Record<string, ContactTopic> = {
  "Store question": "STORE_QUESTION",
  "Order issue": "ORDER_ISSUE",
  Rewards: "REWARDS",
  Careers: "CAREERS",
  Accessibility: "ACCESSIBILITY",
  "Press inquiry": "PRESS_INQUIRY",
  Meetup: "MEETUP",
  Newsletter: "NEWSLETTER",
  Store: "STORE",
};

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = contactSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const mappedTopic = topicMap[data.topic];

    const created = await db.contactSubmission.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        topic: mappedTopic,
        preferredStore: data.preferredStore || null,
        message: data.message,
      },
    });

    return NextResponse.json(
      { success: true, submissionId: created.id, message: "Contact request submitted." },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Failed to submit contact request." }, { status: 500 });
  }
}
