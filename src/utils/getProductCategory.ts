export default async function getProductCategory(
	category: string,
	cacheOption?: RequestCache | undefined,
) {
	const response = await fetch(
		`https://dummyjson.com/products/category/${category}`,
		{
			cache: cacheOption,
		},
	)

	if (!response.ok) {
		throw console.error('api error')
	}

	return response.json()
}
