"use client";

import { cn } from "@/lib/utils";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";

function ElegantShape({
	className,
	delay = 0,
	width = 400,
	height = 100,
	rotate = 0,
	gradient = "from-white/[0.08]",
}: {
	className?: string;
	delay?: number;
	width?: number;
	height?: number;
	rotate?: number;
	gradient?: string;
}) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -150,
				rotate: rotate - 15,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: rotate,
			}}
			transition={{
				duration: 2.4,
				delay,
				ease: [0.23, 0.86, 0.39, 0.96],
				opacity: { duration: 1.2 },
			}}
			className={cn("absolute", className)}
		>
			<motion.div
				animate={{
					y: [0, 15, 0],
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{
					width,
					height,
				}}
				className="relative"
			>
				<div
					className={cn(
						"absolute inset-0 rounded-full",
						"bg-gradient-to-r to-transparent",
						gradient,
						"border-2 border-white/[0.15] backdrop-blur-[2px]",
						"shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
						"after:absolute after:inset-0 after:rounded-full",
						"after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
					)}
				/>
			</motion.div>
		</motion.div>
	);
}

function HeroGeometric({
	badge = "Design Collective",
	title1 = "Elevate Your Digital Vision",
	title2 = "Crafting Exceptional Websites",
}: {
	badge?: string;
	title1?: string;
	title2?: string;
}) {
	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.5 + i * 0.2,
				ease: [0.25, 0.4, 0.25, 1],
			},
		}),
	};

	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030303]">
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

			<div className="absolute inset-0 overflow-hidden">
				<ElegantShape
					delay={0.3}
					width={600}
					height={140}
					rotate={12}
					gradient="from-indigo-500/[0.15]"
					className="top-[15%] left-[-10%] md:top-[20%] md:left-[-5%]"
				/>

				<ElegantShape
					delay={0.5}
					width={500}
					height={120}
					rotate={-15}
					gradient="from-rose-500/[0.15]"
					className="top-[70%] right-[-5%] md:top-[75%] md:right-[0%]"
				/>

				<ElegantShape
					delay={0.4}
					width={300}
					height={80}
					rotate={-8}
					gradient="from-violet-500/[0.15]"
					className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
				/>

				<ElegantShape
					delay={0.6}
					width={200}
					height={60}
					rotate={20}
					gradient="from-amber-500/[0.15]"
					className="top-[10%] right-[15%] md:top-[15%] md:right-[20%]"
				/>

				<ElegantShape
					delay={0.7}
					width={150}
					height={40}
					rotate={-25}
					gradient="from-cyan-500/[0.15]"
					className="top-[5%] left-[20%] md:top-[10%] md:left-[25%]"
				/>
			</div>

			<div className="container relative z-10 mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-3xl text-center">
					<motion.div
						custom={0}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
						className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 md:mb-12"
					>
						<Circle className="h-2 w-2 fill-rose-500/80" />
						<span className="text-sm text-white/60 tracking-wide">{badge}</span>
					</motion.div>

					<motion.div
						custom={1}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<h1 className="mb-6 font-bold text-4xl tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
							<span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
								{title1}
							</span>
							<br />
							<span
								className={cn(
									"bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent ",
								)}
							>
								{title2}
							</span>
						</h1>
					</motion.div>

					<motion.div
						custom={2}
						variants={fadeUpVariants}
						initial="hidden"
						animate="visible"
					>
						<p className="mx-auto mb-8 max-w-xl px-4 font-light text-base text-white/40 leading-relaxed tracking-wide sm:text-lg md:text-xl">
							Crafting exceptional digital experiences through innovative design
							and cutting-edge technology.
						</p>
					</motion.div>
				</div>
			</div>

			<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
		</div>
	);
}

export { HeroGeometric };
