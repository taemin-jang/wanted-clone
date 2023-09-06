import JobList from '@/app/(main)/wdlist/joblist';
import JobFilter from '@/app/(main)/wdlist/jobfilter';
import ActiveRecruiting from '@/app/(main)/wdlist/active-recruiting';
import BookMark from '@/app/(main)/wdlist/bookmark';

export default function WdList() {
	return (
		<>
			<JobFilter />
			<section className='max-w-wanted mt-10 m-auto'>
				<BookMark />
				<ActiveRecruiting />
			</section>
			<section className='max-w-wanted mt-10 m-auto'>
				<JobList />
			</section>
		</>
	);
}
