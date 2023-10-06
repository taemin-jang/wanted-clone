import type { Metadata } from 'next'
import JobFilter from '@/app/(main)/wdlist/jobfilter'
import Loading from '@/app/(main)/wdlist/loading'
import { Suspense } from 'react'
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
			<Suspense fallback={<Loading />}>{children}</Suspense>
		</div>
	)
}
