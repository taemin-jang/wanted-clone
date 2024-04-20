'use client'
import type { JobAPI, Job } from '@/types/wanted-api'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Card from '@/app/(main)/wdlist/card'

const JobCard = ({
	jobList,
	bookmark,
}: {
	jobList: JobAPI
	bookmark?: { idArr: string[]; data: Job[] }
}) => {
	const jobs = jobList.data
	const [bookmarkState, setBookmark] = useState(bookmark)
	const [isRootSelect, setIsRootSelect] = useState(false)
	const path = usePathname()
	useEffect(() => {
		const getBookmark = async () => {
			const res = await fetch('http://localhost:3000/api/bookmark')
			const data = await res.json()
			setBookmark(data)
		}
		getBookmark()
	}, [isRootSelect])
	const changeRootSelect = (value: boolean | undefined) => {
		if (value) setIsRootSelect(value)
	}
	return (
		<>
			<div className='flex flex-wrap justify-between'>
				{path !== '/bookmarks'
					? jobs &&
					  jobs.map((job: Job) => (
							<div key={job.id}>
								<Card
									job={job}
									bookmark={bookmarkState}
									setIsRootSelect={changeRootSelect}
								/>
							</div>
					  ))
					: bookmarkState &&
					  bookmarkState?.data.map((job: Job) => (
							<div key={job.id}>
								<Card
									job={job}
									bookmark={bookmarkState}
									setIsRootSelect={changeRootSelect}
								/>
							</div>
					  ))}
			</div>
		</>
	)
}

export default JobCard
