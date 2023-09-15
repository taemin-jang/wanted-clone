export default async function getJobs(cacheOption: RequestCache | undefined) {
	const response = await fetch(`${process.env.PRODUCT_API_URL}/jobs`, {
		cache: cacheOption,
	})

	if (!response.ok) {
		throw console.error('api error')
	}

	return response.json()
}
