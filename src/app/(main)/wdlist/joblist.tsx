import JobCard from '@/app/(main)/wdlist/jobcard'
import getJobs from '@/utils/getJobs'

export default async function JobList() {
	const data = await getJobs('no-store')

	return <JobCard jobList={data} />
}
