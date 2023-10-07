import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Image from 'next/image'
import type { Detail } from '@/types/wanted-api'
import BookmarkBtn from '@/app/(main)/wd/[id]/bookmarkBtn'
export default async function JobPorcess({ jobDetail }: { jobDetail: Detail }) {
	const data = await fetch(
		`http://localhost:3000/api/bookmark/${jobDetail.job.id}`,
		{
			cache: 'no-store',
		},
	)
	const res = await data.json()
	console.log(res)
	return (
		<div className='sticky-layout w-[21.25rem] h-full'>
			<div className=' px-4 py-6  border rounded font-semibold'>
				<div className='flex justify-between'>
					<p className='text-sm'>합격보상금</p>
					<div className='border rounded-full p-1'>
						<ShareOutlinedIcon color='info' />
					</div>
				</div>
				<div className='w-full flex'>
					<div className='w-1/2'>
						<p className='text-sm text-gray-400'>추천인</p>
						<p className='text-sm mt-2'>
							{jobDetail.job.reward.formatted_recommendee}
						</p>
					</div>
					<div className='w-1/2'>
						<p className='text-sm text-gray-400'>지원자</p>
						<p className='text-sm mt-2'>
							{jobDetail.job.reward.formatted_recommender}
						</p>
					</div>
				</div>
				<div className='mt-8'>
					<BookmarkBtn
						job={jobDetail.job}
						isBookmark={res}
					/>
					<div className='flex justify-center bg-blue-600 border rounded-full py-3 mt-2 text-white font-semibold cursor-pointer'>
						지원하기
					</div>
				</div>
				<div className='flex items-center mt-6 '>
					<div className='border rounded-lg py-2 px-4 mr-6 inline-flex items-center'>
						<FavoriteIcon
							sx={{ color: 'lightgray', fontSize: '16px' }}
							className='mr-1'
						/>
						<p className='text-sm'>3</p>
					</div>
					<div className='flex relative'>
						{jobDetail.like_users &&
							jobDetail.like_users.map((user, index) => (
								<div
									key={user.id}
									className={`-ml-2`}>
									<Image
										src={user.avatar}
										alt={user.name}
										width={30}
										height={30}
										className='border border-white rounded-full'
									/>
								</div>
							))}
					</div>
				</div>
			</div>
			<div className='border border-blue-100 bg-blue-50 flex items-center justify-between rounded p-4 mt-4'>
				<div>
					<p className='font-semibold text-sm'>
						이 포지션의 면접 예상 질문 확인하기
					</p>
					<p className='font-semibold text-sm text-blue-500 mt-2'>
						AI 면접코칭 받기 {'>'}
					</p>
				</div>
				<Image
					src='https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fposition%2Fwanted-plus.png&w=256&q=100'
					alt='question'
					width={68}
					height={68}
				/>
			</div>
		</div>
	)
}
