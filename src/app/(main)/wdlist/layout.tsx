import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Wanted Clone',
	description: 'Wanted Clone coding',
}

export default function MainRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div>{children}</div>
}
