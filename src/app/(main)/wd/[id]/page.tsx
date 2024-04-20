
import Loading from '@/app/(main)/wd/[id]/loading'
import dynamic from 'next/dynamic'

export default function WD({ params }: { params: { id: string } }) {
	const JobContent = dynamic(() => import('@/app/(main)/wd/[id]/jobcontent'), {
		loading: () => <Loading />,
	})
	return (
		<div className='relative max-w-wanted mt-10 m-auto'>
			<JobContent id={params.id} />
		</div>
	)
}
