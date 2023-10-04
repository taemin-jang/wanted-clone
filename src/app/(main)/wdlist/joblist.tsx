import JobCard from '@/app/(main)/wdlist/jobcard'
import { JobAPI } from '@/types/wanted-api'
import getFetch from '@/utils/getFetch'

export default async function JobList({
	params,
}: {
	params?: { [key: string]: string | string[] | undefined }
}) {
	let query = ''
	if (params) {
		if (typeof params.selected === 'string') {
			query = `?selected=${params.selected}`
		} else if (Array.isArray(params.selected)) {
			query = '?' + params.selected.map((v) => `selected=${v}`).join('&')
		}
	}

	const data: JobAPI = await getFetch(`/jobs${query}`, 'no-store')
	const bookmark = await getFetch('/bookmark')

	return (
		<JobCard
			jobList={data}
			bookmark={bookmark}
		/>
	)
}
