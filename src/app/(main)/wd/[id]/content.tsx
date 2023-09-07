import Image from 'next/image'
import Keyword from '@/components/keyword'
import { Data } from '@/types/job-filter'
import { Product } from '@/types/product-api'
import Loading from '@/app/(main)/wd/[id]/loading'

export default function Content({ data }: { data: Product | undefined }) {
	if (!data) return <Loading />
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
		<>
			<Image
				src={data?.thumbnail}
				width={700}
				height={490}
				alt={data?.title}
			/>
			<div className='mt-10'>
				<h1 className='font-bold text-3xl'>{data?.title}</h1>
				<div className='mt-3 mb-6'>
					<span className='text-xs font-bold mr-2'>지엔</span>
					<span className='text-xs border border-blue-500 text-blue-500 py-0.5 px-1 font-bold'>
						응답률 높음
					</span>
					<span className='before:content-["|"] before:px-2 before:text-gray-400 before:text-xs text-gray-400 text-xs'>
						서울ㆍ한국
					</span>
				</div>
				<Keyword datas={keywordDatas} />
			</div>
		</>
	)
}
