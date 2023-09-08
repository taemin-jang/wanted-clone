'use client'
import { Product } from '@/types/product-api'
import { useState, useEffect } from 'react'
import Loading from '@/app/(main)/wd/[id]/loading'
import dynamic from 'next/dynamic'

export default function JobContent({ id }: { id: string }) {
	const [data, setData] = useState<Product | undefined>()

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`, {
			cache: 'no-store',
		}).then(async (res) => {
			setData(await res.json())
		})
	}, [])

	const Content = dynamic(() => import('@/app/(main)/wd/[id]/content'), {
		loading: () => <Loading />,
	})

	return (
		<div className='max-w-wanted mt-10 m-auto'>
			<Content data={data} />
		</div>
	)
}
