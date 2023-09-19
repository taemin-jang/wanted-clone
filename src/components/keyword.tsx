'use client'
import { Tag, onClick } from '@/types/job-filter'

export default function Keyword({
	datas,
	onClick,
}: {
	datas: Tag[]
	onClick?: onClick
}) {
	return (
		<>
			{datas.map((data) =>
				data.id ? (
					<span
						key={data.id}
						className='rounded-3xl bg-gray-100 text-xs px-3 py-2 mr-2'>
						<button
							className='my-3'
							onClick={() =>
								onClick && onClick(data.query.key, data.query.value)
							}>
							{data.title}
						</button>
					</span>
				) : (
					<span
						key={data.query.value}
						className={data.style}>
						<button
							onClick={() =>
								onClick && onClick(data.query.key, data.query.value)
							}>
							{data.keyword}
						</button>
					</span>
				),
			)}
		</>
	)
}
