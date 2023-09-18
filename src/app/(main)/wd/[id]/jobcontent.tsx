import getFetch from '@/utils/getFetch'
import Content from '@/app/(main)/wd/[id]/content'

export default async function JobContent({ id }: { id: string }) {
	const data = await getFetch(`/jobs/${id}`, 'no-store')
	return (
		<div className='max-w-wanted mt-10 m-auto'>
			<Content api={data} />
		</div>
	)
}
