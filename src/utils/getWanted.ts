export default async function getWanted(path: string) {
	const response = await fetch(`${process.env.WANTED_API_URL}${path}`)

	if (!response.ok) {
		throw console.error('wanted api error')
	}

	return response.json()
}
