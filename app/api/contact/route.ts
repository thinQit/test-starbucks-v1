import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const submission = await prisma.contactSubmission.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone ?? null,
        topic: body.topic,
        preferredStore: body.preferredStore ?? null,
        message: body.message,
      },
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unable to submit contact form" },
      { status: 500 }
    );
  }
}
