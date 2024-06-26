'use client'
import type { Job } from '@/types/wanted-api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { useState } from 'react'

const Card = ({
	job,
	bookmark,
	setIsRootSelect,
}: {
	job: Job
	bookmark?: { idArr: string[]; data: Job[] }
	setIsRootSelect: (value: boolean | undefined) => void
}) => {
	const router = useRouter()
	const [isSelect, setIsSelect] = useState(
		bookmark?.idArr.includes(`${job.id}`),
	)
	setIsRootSelect(isSelect)

	return (
		<div className='relative w-[250px] h-96 cursor-pointer mb-4'>
			{isSelect ? (
				<BookmarkIcon
					className='absolute top-1 right-1 z-10'
					color='primary'
					onClick={async () => {
						await fetch('http://localhost:3000/api/bookmark', {
							method: 'DELETE',
							body: `${job.id}`,
						})
						setIsSelect(!isSelect)
					}}
				/>
			) : (
				<BookmarkBorderIcon
					className='absolute top-1 right-1 z-10'
					sx={{ color: 'white' }}
					onClick={async () => {
						await fetch('http://localhost:3000/api/bookmark', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(job),
						})
						setIsSelect(!isSelect)
					}}
				/>
			)}
			<div onClick={() => router.push(`/wd/${job.id}`)}>
				<div className='relative w-full h-[180px]'>
					<Image
						alt={job.company.name}
						src={job.title_img.thumb}
						fill
						className='border'
					/>
				</div>
				<div className='mt-5'>
					<h3 className='text-lg font-bold'>{job.position}</h3>
					<h4 className='text-sm mt-2 font-semibold'>{job.company.name}</h4>
					{job.company.application_response_stats.level === 'very_high' ? (
						<span className='mt-2 text-xs bg-green-100 text-green-600 p-1'>
							응답률 매우 높음
						</span>
					) : (
						<></>
					)}
					<p className='text-sm text-gray-400 mt-2'>
						{job.address.location} {job.address.country}
					</p>
					<p className='text-sm mt-2'>
						합격보상금 {job.reward.formatted_recommendee}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Card
