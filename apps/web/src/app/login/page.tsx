import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import { DemoHeroGeometric } from "@/components/login_image";
import { ModeToggle } from "@/components/mode-toggle";

export default function LoginPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex items-center justify-between">
					<a href="/login" className="flex items-center gap-2 font-medium">
						<div className="flex size-6 items-center justify-center rounded-xl bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						SAS.
					</a>
					<ModeToggle />
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<LoginForm />
					</div>
				</div>
			</div>
			<div className="relative hidden bg-muted lg:block">
				<DemoHeroGeometric />
			</div>
		</div>
	);
}
