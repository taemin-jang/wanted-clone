import type { Metadata } from 'next'
import JobFilter from '@/app/(main)/wdlist/jobfilter'

export const metadata: Metadata = {
	title: 'Wanted Clone',
	description: 'Wanted Clone coding',
}

export default function MainRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<JobFilter />
			{children}
		</div>
	)
}
