'use client';
import { useState, useEffect } from 'react';
import Loading from '@/app/(main)/wdlist/loading';
import dynamic from 'next/dynamic';

export interface Product {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: string[];
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}

export interface ProductsAPI {
	limit: number;
	products: Product[];
	skip: number;
	total: number;
}

export default function JobList() {
	let [data, setData] = useState<ProductsAPI | undefined>();

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
