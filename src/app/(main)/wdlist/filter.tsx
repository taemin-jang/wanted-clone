'use client'
import { Data, onClick } from '@/types/job-filter'
import utilCreateQueryString from '@/utils/create-query-string'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useCallback } from 'react'

const JobSort = ({ datas, onClick }: { datas: Data[]; onClick: onClick }) => {
	return (
		<select>
			{datas.map((data: Data) => (
				<option
					key={data.query.value}
					value={data.query.value}
					onClick={() => onClick(data.query.key, data.query.value)}>
					{data.keyword}
				</option>
			))}
		</select>
	)
}

export default function Filter() {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const createQueryString = useCallback(
		(key: string, value: string) =>
			utilCreateQueryString(key, value, searchParams),
		[searchParams],
	)

	const onClick = (key: string, value: string) => {
		router.push(pathname + '?' + createQueryString(key, value))
	}

	const jobSortDatas: Data[] = [
		{
			keyword: '최신순',
			query: {
				key: 'job_sort',
				value: 'job.latest_order',
			},
		},
		{
			keyword: '응답률순',
			query: {
				key: 'job_sort',
				value: 'company.response_rate_order',
			},
		},
		{
			keyword: '보상금순',
			query: {
				key: 'job_sort',
				value: 'job.compensation_order',
			},
		},
		{
			keyword: '인기순',
			query: {
				key: 'job_sort',
				value: 'job.popularity_order',
			},
		},
	]
	return (
		<section className='my-8 flex justify-between'>
			<div>
				<button className='w-28 border py-2.5 rounded mr-4 text-sm'>
					<span>지역</span>
					<span className='ml-4 text-blue-600 font-bold'>전세계</span>
				</button>
				<button className='w-28 border py-2 rounded mr-4 text-sm'>
					<span>경력</span>
					<span className='ml-4 text-blue-600 font-bold'>전체</span>
					<ArrowDropDownRoundedIcon />
				</button>
				<button className='w-28 border py-2 rounded mr-4 text-sm'>
					<span>기술스택</span>
					<span> </span>
					<ArrowDropDownRoundedIcon />
				</button>
			</div>
			<div>
				<button className='w-28 border flex justify-evenly items-center py-2 rounded text-sm'>
					<JobSort
						datas={jobSortDatas}
						onClick={onClick}
					/>
				</button>
			</div>
		</section>
	)
}
