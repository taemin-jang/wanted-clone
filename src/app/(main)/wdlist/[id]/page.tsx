import ActiveRecruiting from '@/app/(main)/wdlist/active-recruiting'
import BookMark from '@/app/(main)/wdlist/bookmark'
import dynamic from 'next/dynamic'
import Loading from '@/app/(main)/wdlist/loading'

export default function WdList({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const JobList = dynamic(() => import('@/app/(main)/wdlist/joblist'), {
		loading: () => <Loading />,
	})
	return (
		<>
			<section className='max-w-wanted mt-10 m-auto'>
				<BookMark />
				<ActiveRecruiting />
			</section>
			<section className='max-w-wanted mt-10 m-auto'>
				<JobList params={searchParams} />
			</section>
		</>
	)
}
