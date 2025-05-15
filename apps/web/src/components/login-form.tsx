"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import { toast } from "sonner";
import type { loginType } from "zod-schema";
import { loginSchema } from "zod-schema";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"form">) {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<loginType>({
		resolver: zodResolver(loginSchema),
	});
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const onSubmit: SubmitHandler<loginType> = async (data) => {
		await authClient.signIn.email(
			{
				email: data.email,
				password: data.password,
				callbackURL: "/dashboard",
			},
			{
				onRequest: () => {
					toast.success("your request is on a process ...");
					setLoading(true);
				},
				onSuccess: () => {
					setLoading(false);
					router.push("/dashboard");
					toast.success("successfully logged in ...");
				},
				onError: (ctx) => {
					setLoading(false);
					alert(ctx.error.message);
				},
			},
		);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("flex flex-col gap-6", className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="font-bold text-2xl">Log In to your account</h1>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						{...register("email")}
						placeholder="m@example.com"
						required
					/>
					{errors.password && (
						<span className="text-red-500/50 text-xs ">
							{errors.password.message}
						</span>
					)}
				</div>
				<div className="grid gap-3">
					<Label htmlFor="password">Password</Label>
					<div className="relative">
						<Input
							{...register("password")}
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="Create a password"
							required
						/>
						{errors.password && (
							<span className="text-red-500/50 text-xs ">
								{errors.password.message}
							</span>
						)}
						<button
							type="button"
							onClick={() => setShowPassword((prev) => !prev)}
							className="absolute inset-y-0 right-3 flex cursor-pointer items-center text-muted-foreground text-sm"
						>
							{showPassword ? <FaEyeSlash /> : <FaEye />}
						</button>
					</div>
				</div>
				<Button type="submit" className="w-full cursor-pointer">
					{loading ? "Loading..." : "Log In"}
				</Button>
				<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
				<Button variant="outline" className="w-full cursor-pointer">
					<FaGithub size={24} />
					Login with GitHub
				</Button>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an accoint?{" "}
				<a href="/signup" className="underline underline-offset-4">
					create an account
				</a>
			</div>
		</form>
	);
}
