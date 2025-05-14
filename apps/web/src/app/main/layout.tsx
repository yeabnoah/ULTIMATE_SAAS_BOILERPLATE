export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			className="
				"
		>
			<header />
			{children}
		</div>
	);
}
