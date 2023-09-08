const RecruitCard = () => {
	return (
		<div>
			<div className='border rounded w-48 h-72'>
				<div className='border-b bg-gray-500 w-full h-1/2'></div>
				<div className='relative w-full h-1/2'>
					<div className='absolute w-12 h-12 bg-gray-100 left-5 -top-6 border border-black'></div>
					<div className='absolute left-5 top-1/3'>
						<h2 className='font-bold mb-2'>브라이언임팩트</h2>
						<p className='text-xs text-gray-400'>1개 포지션</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function ActiveRecruiting() {
	return (
		<div className='my-6'>
			<h1 className='text-xl font-bold'>적극 채용 중인 회사</h1>
			<div className='mt-2 flex justify-between'>
				<RecruitCard />
				<RecruitCard />
				<RecruitCard />
				<RecruitCard />
				<RecruitCard />
			</div>
		</div>
	)
}
