import JobCard from '@/app/(main)/wdlist/jobcard'
import { JobAPI } from '@/types/wanted-api'
import getFetch from '@/utils/getFetch'

export default async function JobList() {
	const data: JobAPI = await getFetch('/jobs', 'no-store')

	return <JobCard jobList={data} />
}
