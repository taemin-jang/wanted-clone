import JobContent from '@/app/(main)/wd/[id]/jobcontent';

export default function WD({ params }: { params: { id: string } }) {
	return (
		<>
			<JobContent id={params.id} />
		</>
	);
}
