'use client';
import { Data, onClick } from '@/types/job-filter';
import utilCreateQueryString from '@/utils/create-query-string';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const Keyword = ({ datas, onClick }: { datas: Data[]; onClick: onClick }) => {
	return (
		<>
			{datas.map((data) => (
				<span
					key={data.query.value}
					className={data.style}>
					<button onClick={() => onClick(data.query.key, data.query.value)}>
						{data.keyword}
					</button>
				</span>
			))}
		</>
	);
};

export default function Category() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(key: string, value: string) =>
			utilCreateQueryString(key, value, searchParams),
		[searchParams],
	);

	const onClick = (key: string, value: string) => {
		router.push(pathname + '?' + createQueryString(key, value));
	};

	const keywordDatas: Data[] = [
		{
			keyword: '연봉이 최고의 복지',
			style: 'rounded-3xl bg-green-200 text-xs px-3 py-2 mr-2',
			query: {
				key: 'user_tags',
				value: '10245',
			},
		},
		{
			keyword: '재택 근무',
			style: 'rounded-3xl bg-blue-200 text-xs px-3 py-2 mr-2',
			query: {
				key: 'user_tags',
				value: '10248',
			},
		},
		{
			keyword: '퇴사율 10% 이하',
			style: 'rounded-3xl bg-red-200 text-xs px-3 py-2 mr-2',
			query: {
				key: 'user_tags',
				value: '10249',
			},
		},
		{
			keyword: '급성장 중',
			style: 'rounded-3xl bg-green-200 text-xs px-3 py-2 mr-2',
			query: {
				key: 'user_tags',
				value: '10250',
			},
		},
		{
			keyword: '병역특례',
			style: 'rounded-3xl bg-red-200 text-xs px-3 py-2 mr-2',
			query: {
				key: 'user_tags',
				value: '10255',
			},
		},
		{
			keyword: '50인 이하',
			style: 'rounded-3xl bg-blue-200 text-xs px-3 py-2 mr-2',
			query: {
				key: 'user_tags',
				value: '10264',
			},
		},
	];
	console.log(pathname, 'dfd', searchParams);
	return (
		<section className='my-8'>
			<div className='flex'>
				<Keyword
					datas={keywordDatas}
					onClick={onClick}
				/>
			</div>
		</section>
	);
}
