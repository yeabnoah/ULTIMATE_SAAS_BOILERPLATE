import { GalleryVerticalEnd } from "lucide-react";

import { DemoHeroGeometric } from "@/components/login_image";
import { ModeToggle } from "@/components/mode-toggle";
import { SignUpForm } from "@/components/signup-form";

export default function SignUpPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="relative hidden bg-muted lg:block">
				<DemoHeroGeometric />
			</div>
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex items-center justify-between">
					<a href="/signup" className="flex items-center gap-2 font-medium">
						<div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						SAS.
					</a>
					<ModeToggle />
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<SignUpForm />
					</div>
				</div>
			</div>
		</div>
	);
}
