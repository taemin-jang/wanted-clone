export default async function getWanted(path: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_WANTED_API_URL}${path}`,
		{
			cache: 'no-store',
		},
	)

	if (!response.ok) {
		throw console.error('wanted api error')
	}

	return response.json()
}
