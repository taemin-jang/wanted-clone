'use client'
import { useState, useEffect, useLayoutEffect } from 'react'
import Loading from '@/app/(main)/wdlist/loading'
import dynamic from 'next/dynamic'
import { ProductsAPI } from '@/types/product-api'

export default function JobList() {
	const [data, setData] = useState<ProductsAPI | undefined>()

	useLayoutEffect(() => {
		fetch('https://dummyjson.com/products').then(async (res) => {
			setData(await res.json())
		})
	}, [])
	const JobCard = dynamic(() => import('@/app/(main)/wdlist/jobcard'), {
		loading: () => <div className='bg-blue-500 w-full h-96'></div>,
	})

	return <JobCard jobList={data} />
}
