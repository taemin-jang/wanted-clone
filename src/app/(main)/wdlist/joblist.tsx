import JobCard from '@/app/(main)/wdlist/jobcard'
import getProduct from '@/utils/getProduct'

export default async function JobList() {
	const data = await getProduct('no-store')

	return <JobCard jobList={data} />
}
