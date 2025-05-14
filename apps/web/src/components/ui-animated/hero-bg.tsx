import { cn } from "@/lib/utils";
import type React from "react";
import { Spotlight } from "../ui/spotlight";

export function SpotlightPreview({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-screen w-full overflow-hidden rounded-md bg-black/[0.001] antialiased md:items-center md:justify-center">
			<div
				className={cn(
					"pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
					"dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
					"[background-image:linear-gradient(to_right,#e9e9e9_1px,transparent_1px),linear-gradient(to_bottom,#e9e9e9_1px,transparent_1px)]",
				)}
			/>

			<Spotlight
				className="-top-40 md:-top-20 left-0 md:left-60"
				fill="white"
			/>
			<div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
				{children}
			</div>
		</div>
	);
}
