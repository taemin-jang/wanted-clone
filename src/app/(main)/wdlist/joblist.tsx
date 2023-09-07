import { useState, useEffect } from 'react'
import Loading from '@/app/(main)/wdlist/loading'
import dynamic from 'next/dynamic'
import { ProductsAPI } from '@/types/product-api'
import JobCard from '@/app/(main)/wdlist/jobcard'

export default async function JobList() {
	// const [data, setData] = useState<ProductsAPI | undefined>()
	let data

	const res = await fetch('https://dummyjson.com/products')

	data = await res.json()

	return <JobCard jobList={data} />
}
