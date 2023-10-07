import ActiveRecruiting from '@/app/(main)/wdlist/active-recruiting'
import BookMark from '@/app/(main)/wdlist/bookmark'
import JobList from '@/app/(main)/wdlist/joblist'

export default function WdList({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined }
}) {
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
