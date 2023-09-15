'use client'
import type { JobAPI, Job } from '@/types/wanted-api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const JobCard = ({ jobList }: { jobList: JobAPI }) => {
	const router = useRouter()

	console.log(jobList)
	const jobs: Job[] = jobList.jobs.data
	return (
		<>
			<div className='flex flex-wrap justify-between'>
				{jobs.map((job: Job) => (
					<div
						key={job.id}
						className=' w-[250px] h-96 cursor-pointer'
						onClick={() => router.push(`wd/${job.id}`)}>
						<Image
							alt={job.company.name}
							src={job.title_img.thumb}
							width={250}
							height={140}
							className='border'
						/>
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
