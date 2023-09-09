export default async function getProduct(
	id: string,
	cacheOption: RequestCache | undefined,
) {
	const response = await fetch(`https://dummyjson.com/products/${id}`, {
		cache: cacheOption,
	})

	if (!response.ok) {
		throw console.error('api error')
	}

	return response.json()
}
