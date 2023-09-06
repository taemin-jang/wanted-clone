'use client';
import { useState, useEffect } from 'react';
import Loading from '@/app/(main)/wdlist/loading';
import dynamic from 'next/dynamic';
import { ProductsAPI } from '@/types/product-api';

export default function JobList() {
	const [data, setData] = useState<ProductsAPI | undefined>();

	useEffect(() => {
		fetch('https://dummyjson.com/products').then(async (res) => {
			setData(await res.json());
		});
	}, []);

	const JobCard = dynamic(() => import('@/app/(main)/wdlist/jobcard'), {
		loading: () => <Loading />,
	});

	return <JobCard jobList={data} />;
}
