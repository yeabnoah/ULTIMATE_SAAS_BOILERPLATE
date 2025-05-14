"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import client from "../../../../server/polar/polar";

export default function Dashboard() {
	const router = useRouter();
	const { data: session, isPending } = authClient.useSession();

	const privateData = useQuery(trpc.privateData.queryOptions());

	useEffect(() => {
		if (!session && !isPending) {
			router.push("/login");
		}
	}, [session, isPending, router]);

	if (isPending) {
		return <div>Loading...</div>;
	}

	async function run() {
		const result = await client.products.get({
			id: "<value>",
		});

		// Handle the result
		console.log(result);
	}

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Welcome {session?.user.name}</p>
			<p>privateData: {privateData.data?.message}</p>

			<Button onClick={() => run()} className="mt-4">
				Get Products
			</Button>
		</div>
	);
}
