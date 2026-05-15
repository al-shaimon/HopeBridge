"use server";

import Stripe from "stripe";
import { headers } from "next/headers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2026-04-22.dahlia",
});

export async function checkoutAction({
  amount,
  campaignName,
}: {
  amount: number;
  campaignName: string;
}) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn("Stripe secret key is missing. Running in mock mode.");
      return null;
    }

    const headersList = await headers();
    const origin = headersList.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Donation: ${campaignName}`,
              description: "Thank you for your generous support.",
            },
            unit_amount: Math.round(amount * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      submit_type: "donate",
    });

    return session.url;
  } catch (error) {
    console.error("Stripe checkout error:", error);
    throw new Error("Failed to create checkout session.");
  }
}
