import JobFilter from '@/app/(main)/wdlist/jobfilter'
import ActiveRecruiting from '@/app/(main)/wdlist/active-recruiting'
import BookMark from '@/app/(main)/wdlist/bookmark'
import dynamic from 'next/dynamic'
import Loading from '@/app/(main)/wdlist/loading'

export default function WdList() {
	const JobList = dynamic(() => import('@/app/(main)/wdlist/joblist'), {
		ssr: false,
		loading: () => <Loading />,
	})
	return (
		<>
			<JobFilter />
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
