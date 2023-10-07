'use client'
import { Job } from '@/types/wanted-api'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp'
import BookmarkIcon from '@mui/icons-material/Bookmark'

import { useState } from 'react'

export default function BookmarkBtn({
	job,
	isBookmark,
}: {
	job: Job
	isBookmark: boolean
}) {
	const [select, setSelect] = useState(isBookmark)
	return (
		<>
			{select ? (
				<div
					className='flex justify-center border border-blue-500 rounded-full text-blue-500 py-3 font-semibold cursor-pointer'
					onClick={async () => {
						await fetch(`http://localhost:3000/api/bookmark`, {
							method: 'DELETE',
							body: `${job.id}`,
							cache: 'no-store',
						})
						setSelect(!select)
					}}>
					<BookmarkIcon color='primary' />
					<p>북마크 완료</p>
				</div>
			) : (
				<div
					className='flex justify-center border border-blue-500 rounded-full text-blue-500 py-3 font-semibold cursor-pointer'
					onClick={async () => {
						await fetch(`http://localhost:3000/api/bookmark`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(job),
							cache: 'no-store',
						})
						setSelect(!select)
					}}>
					<BookmarkBorderSharpIcon color='info' />
					<p>북마크 하기</p>
				</div>
			)}
		</>
	)
}
