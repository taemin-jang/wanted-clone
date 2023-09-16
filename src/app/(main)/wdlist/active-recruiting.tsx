import { Targeting, TargetingAPI } from '@/types/wanted-api'
import getFetch from '@/utils/getFetch'
import Image from 'next/image'

const RecruitCard = async () => {
	const targets: TargetingAPI = await getFetch('/targeting', 'no-store')
	return (
		<>
			{targets.data.map((target: Targeting) => (
				<div key={target.id}>
					<div className='border rounded w-48 h-72'>
						<div className='relative border-b w-full h-1/2'>
							<Image
								alt={target.name}
								src={target.title_img.thumb}
								fill
							/>
						</div>
						<div className='relative w-full h-1/2'>
							<div className='absolute w-12 h-12 bg-gray-100 left-5 -top-6 border'>
								<Image
									alt={target.name}
									src={target.logo_img.thumb}
									fill
								/>
							</div>
							<div className='absolute left-5 top-1/3'>
								<h2 className='font-bold mb-2'>{target.name}</h2>
								<p className='text-xs text-gray-400'>
									{target.job_count}개 포지션
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default function ActiveRecruiting() {
	return (
		<div className='my-6'>
			<h1 className='text-xl font-bold'>적극 채용 중인 회사</h1>
			<div className='mt-2 flex justify-between'>
				<RecruitCard />
			</div>
		</div>
	)
}
