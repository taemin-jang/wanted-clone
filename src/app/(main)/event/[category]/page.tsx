import Content from '@/app/(main)/event/[category]/content'
import JobCard from '@/app/(main)/wdlist/jobcard'
import getProductCategory from '@/utils/getProductCategory'

export default async function Event({
	params: { category },
}: {
	params: { category: string }
}) {
	const data = await getProductCategory(category)
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

export async function generateStaticParams() {
	const res = await fetch('https://dummyjson.com/products/categories')
	const categories: string[] = await res.json()
	return categories.map((category) => {
		category
	})
}
