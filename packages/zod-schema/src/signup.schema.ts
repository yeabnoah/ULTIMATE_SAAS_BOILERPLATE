import { z } from "zod";

export const signUpschema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters long",
		})
		.max(50, {
			message: "Name must be at most 50 characters long",
		}),
	email: z
		.string()
		.email({ message: "Invalid email address" })
		.min(1, { message: "Email is required" })
		.max(50, {
			message: "Email must be at most 50 characters long",
		}),
	password: z
		.string()
		.min(8, { message: "Password must be at least 8 characters long" })
		.max(50, {
			message: "Password must be at most 50 characters long",
		})
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
			{
				message:
					"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
			},
		),
});

export type signUpType = z.infer<typeof signUpschema>;
