export const dynamic = 'force-dynamic'

import JobCard from '@/app/(main)/wdlist/jobcard'

export default async function BookMarks() {
	const res = await fetch(process.env.PRODUCT_API_URL + '/bookmark', {
		cache: 'no-store',
	})
	const bookmark = await res.json()
	return (
		<div className='bg-gray-50 w-full h-full absolute'>
			<div className='flex flex-col gap-3 max-w-wanted mt-10 m-auto'>
				<h1 className='font-bold text-xl'>북마크</h1>
				<JobCard
					jobList={bookmark}
					bookmark={bookmark}
				/>
			</div>
		</div>
	)
}
