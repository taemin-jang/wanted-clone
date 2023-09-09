import JobCard from '@/app/(main)/wdlist/jobcard'
import getProducts from '@/utils/getProducts'

export default async function JobList() {
	const data = await getProducts('no-store')

	return <JobCard jobList={data} />
}
