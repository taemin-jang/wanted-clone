'use client'
import type { JobAPI, Job } from '@/types/wanted-api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const JobCard = ({ jobList }: { jobList: JobAPI }) => {
	const router = useRouter()

	const jobs: Job[] = jobList.data
	return (
		<>
			<div className='flex flex-wrap justify-between'>
				{jobs.map((job: Job) => (
					<div
						key={job.id}
						className=' w-[250px] h-80 cursor-pointer'
						onClick={() => router.push(`wd/${job.id}`)}>
						<div className='relative w-full h-[180px]'>
							<Image
								alt={job.company.name}
								src={job.title_img.thumb}
								fill
								className='border'
							/>
						</div>
						<div>
							<h3>{job.company.name}</h3>
							<p>
								{job.address.country} {job.address.location}
							</p>
							<p>{job.company.industry_name}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default JobCard
