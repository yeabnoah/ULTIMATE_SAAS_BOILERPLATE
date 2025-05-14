import { polar } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import client from "polar/polar";
import prisma from "../../prisma";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
	emailAndPassword: {
		enabled: true,
	},

	plugins: [
		polar({
			client,
			createCustomerOnSignUp: true,
			enableCustomerPortal: true,

			checkout: {
				enabled: true,
				products: [
					{
						productId: process.env.POLAR_STANDARD_PLAN_PRODUCT_ID as string,
						slug: "standard",
					},
					{
						productId: process.env.POLAR_PRO_PLAN_PRODUCT_ID as string,
						slug: "pro",
					},
					{
						productId: process.env.POLAR_INTERPRISE_PLAN_PRODUCT_ID as string,
						slug: "enterprise",
					},
				],
				successUrl: "/success?checkout_id={CHECKOUT_ID}",
				authenticatedUsersOnly: true,
			},

			webhooks: {
				secret: process.env.POLAR_WEBHOOK_SECRET as string,

				onCustomerCreated: async (payload) => {
					console.log("polar curstomer created");
				},

				onSubscriptionActive: async (payload) => {
					console.log(" user is subscribed");
					console.log("onSubscription Active", payload.data.customerId);
				},

				onSubscriptionRevoked: async (payload) => {
					console.log(" user is unsubscribed");
					console.log("Revoke Subscription", payload.data.customerId);
				},
			},
		}),
	],
});
