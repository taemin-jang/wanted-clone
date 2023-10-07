export default async function getFetch(
	path: string,
	cacheOption?: RequestCache,
) {
	const response = await fetch(`${process.env.PRODUCT_API_URL + path}`, {
		cache: cacheOption,
	})

	if (!response.ok) {
		throw console.error('api error')
	}

	return response.json()
}
