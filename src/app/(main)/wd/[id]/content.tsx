import Image from 'next/image'
import Keyword from '@/components/keyword'
import { Data } from '@/types/job-filter'
import { JobDetail } from '@/types/wanted-api'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

export default function Content({ data }: { data: JobDetail }) {
	console.log(data)
	const keywordDatas: Data[] = [
		{
			keyword: '#스타트업',
			style: 'rounded-3xl bg-gray-100 text-xs px-3 py-2 mr-2',
			query: {
				key: 'tag',
				value: '#스타트업',
			},
		},
		{
			keyword: '#자율복장',
			style: 'rounded-3xl bg-gray-100 text-xs px-3 py-2 mr-2',
			query: {
				key: 'tag',
				value: '#자율복장',
			},
		},
		{
			keyword: '#간식',
			style: 'rounded-3xl bg-gray-100 text-xs px-3 py-2 mr-2',
			query: {
				key: 'tag',
				value: '#간식',
			},
		},
		{
			keyword: '#IoT',
			style: 'rounded-3xl bg-gray-100 text-xs px-3 py-2 mr-2',
			query: {
				key: 'tag',
				value: '#IoT',
			},
		},
		{
			keyword: '#IT, 컨텐츠',
			style: 'rounded-3xl bg-gray-100 text-xs px-3 py-2 mr-2',
			query: {
				key: 'tag',
				value: '#IT, 컨텐츠',
			},
		},
	]
	return (
		<div className='w-[43.75rem]'>
			<Image
				src={data?.title_img.origin}
				width={700}
				height={490}
				alt={data?.company.name}
			/>
			<div className='mt-10'>
				<h1 className='font-bold text-3xl'>{data?.position}</h1>
				<div className='mt-3 mb-6'>
					<span className='text-xs font-bold mr-2'>{data.company.name}</span>
					{data.company.application_response_stats.level === 'very_high' ? (
						<span className='mt-2 text-xs bg-green-100 text-green-600 p-1'>
							응답률 매우 높음
						</span>
					) : (
						<></>
					)}
					<span className='before:content-["|"] before:px-2 before:text-gray-400 before:text-xs text-gray-400 text-xs'>
						{data.address.location}ㆍ{data.address.country}
					</span>
				</div>
				<Keyword datas={keywordDatas} />
			</div>
			<div className='whitespace-pre-line text-sm text-gray-500 mt-12 pb-12 border-b border-gray-500'>
				<span>{`${data.detail.intro}`}</span>
				<p className='font-extrabold text-base text-gray-600 mt-3'>주요업무</p>
				<span>{`${data.detail.main_tasks}`}</span>
				<p className='font-extrabold text-base text-gray-600 mt-3'>자격요건</p>
				<span>{`${data.detail.requirements}`}</span>
				<p className='font-extrabold text-base text-gray-600 mt-3'>우대사항</p>
				<span>{`${data.detail.preferred_points}`}</span>
				<p className='font-extrabold text-base text-gray-600 mt-3'>
					혜택 및 복지
				</p>
				<span>{`${data.detail.benefits}`}</span>
			</div>
			<div className='mt-8 font-semibold text-gray-700'>
				<span className='flex'>
					<p className='w-20 text-gray-400 mr-2'>마감일</p>
					<span>{`${data.due_time ? data.due_time : '상시'}`}</span>
				</span>
				<span className='flex mt-3'>
					<p className='w-20 text-gray-400 mr-2'>근무 지역</p>
					<span>{`${data.address.full_location}`}</span>
				</span>
			</div>
			<div className='flex border rounded p-5 w-full mt-20'>
				<Image
					src={data.logo_img.thumb}
					width={50}
					height={50}
					alt={data.company.name}
					className='mr-5'
				/>
				<div className='flex justify-between w-full'>
					<div className='font-semibold text-gray-700'>
						<p>{data.company.name}</p>
						<p className='text-gray-400'>{data.company.industry_name}</p>
					</div>
					<div className='flex items-center'>
						<p className='border border-blue-600 rounded text-blue-600 text-sm font-bold px-4 py-2'>
							팔로우
						</p>
					</div>
				</div>
			</div>
			<div className='flex items-center mt-2 p-6 bg-gray-100 w-full rounded-md'>
				<ErrorOutlineOutlinedIcon className='mr-5' />
				<div className='flex justify-between items-center w-full'>
					<p className='text-xs text-gray-700 font-bold leading-5 '>
						본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
						없으며, 구직활동 이외의
						<br />
						용도로 사용할 수 없습니다.
					</p>
					<KeyboardArrowDownOutlinedIcon />
				</div>
			</div>
			<div className='w-full'>
				<span className='flex justify-between items-center mt-20'>
					<p className='font-semibold text-gray-700'>면접 리뷰</p>
					<p className='text-xs text-gray-400'>
						ㆍ해당 정보는 원티드인사이트 데이터를 통해 제공됩니다.
					</p>
				</span>
				<div className='py-10 w-full border rounded-xl'>
					<div className='flex flex-col justify-center'>
						<span className='inline-flex justify-evenly border rounded-full text-sm text-gray-500 font-semibold m-auto'>
							<p className='px-4 py-2 border-r'>진행 방식</p>
							<p className='px-4 py-2 border-r'>질문 내용</p>
							<p className='px-4 py-2 border-r'>면접관 태도</p>
							<p className='px-4 py-2'>분위기</p>
						</span>
						<p className='m-auto text-sm text-gray-400'>총 참여수</p>
					</div>
				</div>
			</div>
		</div>
	)
}
