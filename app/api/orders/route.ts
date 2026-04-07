import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";
import { createOrderSchema } from "@/lib/validators";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn("STRIPE_SECRET_KEY is not set. /api/orders will fail until configured.");
}

const stripe = new Stripe(stripeSecretKey || "", {
  apiVersion: "2024-06-20",
});

const TAX_RATE = 0.1025;

export async function POST(req: NextRequest) {
  try {
    if (!stripeSecretKey) {
      return NextResponse.json({ error: "Payment service is not configured." }, { status: 500 });
    }

    const json = await req.json();
    const parsed = createOrderSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body.", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const subtotalCents = data.items.reduce(
      (sum, item) => sum + item.unitPriceCents * item.quantity,
      0
    );
    const taxCents = Math.round(subtotalCents * TAX_RATE);
    const totalCents = subtotalCents + taxCents;

    const order = await db.order.create({
      data: {
        email: data.email,
        pickupName: data.pickupName,
        pickupTime: new Date(data.pickupTime),
        storeId: data.storeId,
        subtotalCents,
        taxCents,
        totalCents,
        items: {
          create: data.items.map((item) => ({
            itemId: item.itemId,
            name: item.name,
            unitPriceCents: item.unitPriceCents,
            quantity: item.quantity,
            customizations: item.customizations ?? undefined,
            lineTotalCents: item.unitPriceCents * item.quantity,
          })),
        },
      },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCents,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: {
        orderId: order.id,
        storeId: order.storeId,
        pickupName: order.pickupName,
      },
      receipt_email: order.email,
    });

    await db.order.update({
      where: { id: order.id },
      data: {
        stripePaymentIntentId: paymentIntent.id,
        stripeClientSecret: paymentIntent.client_secret ?? null,
      },
    });

    return NextResponse.json(
      {
        orderId: order.id,
        clientSecret: paymentIntent.client_secret,
        amountCents: totalCents,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/orders error:", error);
    return NextResponse.json({ error: "Failed to create order." }, { status: 500 });
  }
}
