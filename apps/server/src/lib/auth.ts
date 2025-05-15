import { polar } from "@polar-sh/better-auth";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import client from "polar/polar";
import prisma from "../../prisma";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	trustedOrigins: [
		process.env.CORS_ORIGIN || "",
		"https://5094-2a09-bac1-2420-8-00-3b7-5b.ngrok-free.app/api/auth/polar/webhooks",
	],
	emailAndPassword: {
		enabled: true,
	},

	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		},
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
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
						productId: process.env.POLAR_ENTERPRISE_PLAN_PRODUCT_ID as string,
						slug: "enterprise",
					},
				],
				successUrl: "/success?checkout_id={CHECKOUT_ID}",
				authenticatedUsersOnly: true,
			},

			webhooks: {
				secret: process.env.POLAR_WEBHOOK_SECRET as string,

				onPayload: async (payload) => {
					switch (payload.type) {
						case "customer.state_changed":
							console.log("Customer state changed: ", payload.type);
							break;
						case "subscription.created":
							console.log("Subscription created: ", payload.type);
							break;
						case "subscription.canceled":
							console.log("Subscription cancelled: ", payload.type);
							break;
					}
				},
			},
		}),
	],
});
