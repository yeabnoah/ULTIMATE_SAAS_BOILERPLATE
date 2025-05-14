import {
	Activity,
	AppWindowIcon,
	Brush,
	BrushIcon,
	DraftingCompass,
	Key,
	Lock,
	LucideBrush,
	Mail,
	Monitor,
	Smartphone,
	Zap,
} from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
	return (
		<section className="pt-10 pb-16 md:pt-24 md:pb-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
					<div className="lg:col-span-2">
						<div className="md:pr-6 lg:pr-0">
							<h2 className="font-semibold text-4xl lg:text-5xl">
								Built for Scaling SAAS Products
							</h2>
							<p className="mt-6">
								Launch fast with battle-tested auth, billing, and a scalable
								codebase — so you can grow without the setup hassle.
							</p>
						</div>
						<ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
							<li>
								<AppWindowIcon className="size-5" />
								Full stack web app using Next.js and Hono
							</li>
							<li>
								<Smartphone className="size-5" />
								MObile suppoer with React Native (Expo)
							</li>
							<li>
								<Monitor className="size-5" />
								Desktop app support with Tauri
							</li>
							<li>
								<Lock className="size-5" />
								Auth and payments with Better Auth & Polar
							</li>
							<li>
								<Brush className="size-5" />
								Design with Tailwind CSS and shadcn/ui
							</li>
						</ul>
					</div>
					<div className="relative rounded-3xl border border-border/50 p-3 lg:col-span-3">
						<div className="relative aspect-76/59 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
							<Image
								src="/square.jpg"
								className="hidden rounded-[15px] dark:block"
								alt="payments illustration dark"
								width={1207}
								height={929}
							/>
							<Image
								src="/square.jpg"
								className="rounded-[15px] shadow dark:hidden"
								alt="payments illustration light"
								width={1207}
								height={929}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
