import ActiveRecruiting from '@/app/(main)/wdlist/active-recruiting'
import BookMark from '@/app/(main)/wdlist/bookmark'
import dynamic from 'next/dynamic'
import Loading from '@/app/(main)/wdlist/loading'

export default function WdList({ params }: { params: { id: string } }) {
	const JobList = dynamic(() => import('@/app/(main)/wdlist/joblist'), {
		ssr: false,
		loading: () => <Loading />,
	})
	return (
		<>
			<section className='max-w-wanted mt-10 m-auto'>
				<BookMark />
				<ActiveRecruiting />
			</section>
			<section className='max-w-wanted mt-10 m-auto'>
				<JobList />
			</section>
		</>
	)
}
