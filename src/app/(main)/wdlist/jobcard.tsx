'use client'
import type { ProductsAPI, Product } from '@/types/product-api'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const JobCard = ({ jobList }: { jobList: ProductsAPI }) => {
	const router = useRouter()

	const products: Product[] = jobList.products
	return (
		<>
			<div className='flex flex-wrap justify-between'>
				{products.map((product: Product) => (
					<div
						key={product.id}
						className=' w-[250px] h-96 cursor-pointer'
						onClick={() => router.push(`wd/${product.id}`)}>
						<Image
							alt={product.title}
							src={product.thumbnail}
							width={250}
							height={150}
							className='border'
						/>
						<div>
							<h3>{product.title}</h3>
							<p>{product.brand}</p>
							<p>{product.category}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default JobCard
