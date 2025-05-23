"use client";
import FeaturesSection from "@/components/features-5";
import FeaturesSection8 from "@/components/features-8";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import { LogoCloud } from "@/components/logo-cloud";
import { SpotlightPreview } from "@/components/ui-animated/hero-bg";
// import AnimatedBg from "@/components/ui-animated/animatedBg";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const healthCheck = useQuery(trpc.healthCheck.queryOptions());

	return (
		<div className="">
			{/* <AnimatedBg /> */}
			<SpotlightPreview>
				<HeroSection />
			</SpotlightPreview>

			<FeaturesSection />
			<LogoCloud />
			<FeaturesSection8 />
			<FooterSection />
		</div>
	);
}
