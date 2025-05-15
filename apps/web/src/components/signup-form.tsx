import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa6";

export function SignUpForm({
	className,
	...props
}: React.ComponentProps<"form">) {
	return (
		<form className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="font-bold text-2xl">Create your account</h1>
				{/* <p className="text-muted-foreground text-sm text-balance">
          Enter your details below to create a new account
        </p> */}
			</div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="name">Name</Label>
					<Input id="name" type="text" placeholder="John Doe" required />
				</div>
				<div className="grid gap-3">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div className="grid gap-3">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						placeholder="Create a password"
						required
					/>
				</div>
				<Button type="submit" className="w-full">
					Sign Up
				</Button>
				<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-border after:border-t">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
				<Button variant="outline" className="w-full">
					<FaGithub size={24} />
					Login with GitHub
				</Button>
			</div>
			<div className="text-center text-sm">
				Already have an account?{" "}
				<a href="/login" className="underline underline-offset-4">
					Login
				</a>
			</div>
		</form>
	);
}
