import Content from '@/app/(main)/event/content'
import JobCard from '@/app/(main)/wdlist/jobcard'
import getProducts from '@/utils/getProducts'

export default async function Event() {
	const data = await getProducts('force-cache')
	return (
		<>
			<div>
				<div className='bg-wanted-kakao h-80 w-full bg-cover bg-no-repeat bg-center'></div>
				<div className='max-w-wanted mt-10 m-auto'>
					<Content />
					<div>
						<JobCard jobList={data} />
					</div>
				</div>
			</div>
		</>
	)
}
