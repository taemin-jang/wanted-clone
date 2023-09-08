import JobGruop from '@/app/(main)/wdlist/jobgruop'
import Filter from '@/app/(main)/wdlist/filter'
import Category from '@/app/(main)/wdlist/category'

export default function JobFilter() {
	return (
		<>
			<div className='max-w-wanted mt-10 m-auto'>
				<JobGruop />
				<Filter />
				<hr />
				<Category />
			</div>
			<hr />
		</>
	)
}
