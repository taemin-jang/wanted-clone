'use client'
import utilCreateQueryString from '@/utils/create-query-string'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import jobObj from '@/data/jobObj.json'
const JobCategory = () => {
	return (
		<>
			<Link
				href='/wdlist'
				className='flex hover:bg-gray-100 cursor-pointer px-8 py-2'>
				전체
			</Link>
			<ul>
				{jobObj.data.map((job, index) => (
					<li
						className=' hover:bg-gray-100 cursor-pointer'
						key={job.title}
						value={index}>
						<Link
							className='flex px-8 py-2'
							href={`/wdlist/${job.path}`}>
							{job.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}

const DetailCategory = ({
	index,
	onClick,
}: {
	index: number
	onClick: any
}) => {
	return (
		<div className='px-4 mb-4'>
			<p className='text-xs text-gray-600 mb-2'>
				직무를 선택해주세요. (최대 5개 선택 가능)
			</p>
			<ul
				className='flex flex-wrap gap-2'
				onClick={onClick}>
				{jobObj.data[index].detail?.map((job) => (
					<li
						className='text-xs hover:border hover:border-blue-200 border border-white rounded-full cursor-pointer bg-gray-100'
						key={job.title}>
						<Link
							className='flex px-4 py-2'
							href={`?tag=${job.path}`}>
							{job.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default function JobGroup() {
	const [jobState, setJobState] = useState({
		value: '전체',
		isSelect: false,
		index: 1,
	})
	const [detailState, setdetaolState] = useState({
		isSelect: false,
		value: undefined,
	})

	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const createQueryString = useCallback(
		(key: string, value: string) =>
			utilCreateQueryString(key, value, searchParams),
		[searchParams],
	)

	const onClickJob = (e: React.MouseEvent<HTMLAnchorElement>) => {
		setJobState({
			value: e.target.text,
			isSelect: !jobState.isSelect,
			index: 1,
		})
	}
	const onClickDetail = (e: React.MouseEvent<HTMLAnchorElement>) => {
		console.log(e)
		console.log(detailState)

		setdetaolState({
			value: e.target.text ? e.target.text : detailState.value,
			isSelect: e.target.innerText === '선택 완료하기' ? false : true,
		})
	}
	return (
		<div className='flex items-center relative'>
			<div className='flex items-center'>
				<button
					onClick={() =>
						setJobState({
							value: jobState.value,
							isSelect: !jobState.isSelect,
							index: jobState.index,
						})
					}>
					<span className='text-2xl font-bold mr-4 leading-none'>
						{jobState.value}
					</span>
					<span>
						<KeyboardArrowDownIcon className='border rounded-full' />
					</span>
				</button>
				{jobState.isSelect ? (
					<section
						className='absolute top-10 h-[70vh] bg-white overflow-auto overflow-y-hidden hover:overflow-y-auto hover:scrollbar-thin z-50 py-4 border rounded shadow-lg shadow-gray-400 max-w-[210px]'
						onClick={onClickJob}>
						<JobCategory />
					</section>
				) : (
					<></>
				)}
			</div>
			<div className='flex items-center before:content-["|"] before:px-4 before:text-gray-300 before:text-2xl'>
				<button
					onClick={() =>
						setdetaolState({
							value: detailState.value,
							isSelect: !detailState.isSelect,
						})
					}
					disabled={jobState.value === '전체'}>
					{jobState.value === '전체' ? (
						<span className='text-2xl mr-4 leading-none text-gray-400'>
							직군을 선택해주세요
						</span>
					) : (
						<>
							<span className='text-2xl mr-4 leading-none'>
								{detailState.value
									? detailState.value
									: jobObj.data[jobState.index - 1].detail?.[0].title}
							</span>

							<span>
								<KeyboardArrowDownIcon className='border rounded-full' />
							</span>
						</>
					)}
				</button>
				{detailState.isSelect ? (
					<>
						<section className='absolute w-full left-0 top-10 bg-white overflow-auto overflow-y-hidden hover:overflow-y-auto hover:scrollbar-thin z-50 py-4 border rounded shadow-lg shadow-gray-400 max-w-[940px]'>
							<DetailCategory
								index={jobState.index - 1}
								onClick={onClickDetail}
							/>
							<hr />
							<div className='py-2 pr-3 flex justify-end'>
								<button className='rounded-lg bg-blue-600 text-white font-bold px-8 py-2'>
									선택 완료하기
								</button>
							</div>
						</section>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
