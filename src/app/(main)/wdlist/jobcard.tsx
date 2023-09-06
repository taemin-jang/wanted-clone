import type { ProductsAPI, Product } from '@/app/(main)/wdlist/joblist';
import Loading from '@/app/(main)/wdlist/loading';
import Image from 'next/image';

const JobCard = ({ jobList }: { jobList: ProductsAPI | undefined }) => {
	if (!jobList) {
		return <Loading />;
	}
	const products: Product[] = jobList.products;
	console.log(products);
	return (
		<>
			<div className='flex flex-wrap justify-between'>
				{products.map((product: Product) => (
					<div
						key={product.id}
						className=' w-[250px] h-96'>
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
	);
};

export default JobCard;
