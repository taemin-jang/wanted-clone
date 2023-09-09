export default async function getProducts(
	cacheOption: RequestCache | undefined,
) {
	const response = await fetch('https://dummyjson.com/products', {
		cache: cacheOption,
	})

	if (!response.ok) {
		throw console.error('api error')
	}

	return response.json()
}
