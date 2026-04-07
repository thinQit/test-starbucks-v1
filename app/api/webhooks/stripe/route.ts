import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const stripe = new Stripe(stripeSecretKey || "", {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    if (!stripeSecretKey || !webhookSecret) {
      return NextResponse.json({ error: "Stripe webhook is not configured." }, { status: 500 });
    }

    const signature = req.headers.get("stripe-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing stripe-signature header." }, { status: 400 });
    }

    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const orderId = paymentIntent.metadata.orderId;

      if (orderId) {
        await db.order.update({
          where: { id: orderId },
          data: {
            status: "PAID",
            paidAt: new Date(),
            stripePaymentMethodType: paymentIntent.payment_method_types?.[0] ?? null,
            stripeReceiptUrl: null,
          },
        });
      }
    }

    if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      const orderId = paymentIntent.metadata.orderId;

      if (orderId) {
        await db.order.update({
          where: { id: orderId },
          data: { status: "FAILED" },
        });
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("POST /api/webhooks/stripe error:", error);
    return NextResponse.json({ error: "Webhook handling failed." }, { status: 400 });
  }
}
