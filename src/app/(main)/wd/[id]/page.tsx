import Loading from '@/app/(main)/wd/[id]/loading'
import dynamic from 'next/dynamic'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp'
import FavoriteIcon from '@mui/icons-material/Favorite'
export default function WD({ params }: { params: { id: string } }) {
	const JobContent = dynamic(() => import('@/app/(main)/wd/[id]/jobcontent'), {
		loading: () => <Loading />,
	})
	return (
		<div className='relative max-w-wanted mt-10 m-auto'>
			<JobContent id={params.id} />
			<div className='fixed top-[95px] right-[420px] p-4 w-[21.25rem] border rounded font-semibold'>
				<div className='flex justify-between'>
					<p className='text-sm'>합격보상금</p>
					<div className='border rounded-full p-1'>
						<ShareOutlinedIcon color='info' />
					</div>
				</div>
				<div className='w-full flex'>
					<div className='w-1/2'>
						<p className='text-sm text-gray-400'>추천인</p>
						<p className='text-sm mt-2'>500,000원</p>
					</div>
					<div className='w-1/2'>
						<p className='text-sm text-gray-400'>지원자</p>
						<p className='text-sm mt-2'>500,000원</p>
					</div>
				</div>
				<div className='mt-8'>
					<div className='flex justify-center border border-blue-500 rounded-full text-blue-500 py-3 font-semibold'>
						<BookmarkBorderSharpIcon color='info' />
						<p>북마크하기</p>
					</div>
					<div className='flex justify-center bg-blue-600 border rounded-full py-3 mt-2 text-white font-semibold'>
						지원하기
					</div>
				</div>
				<div>
					<div className='border rounded py-2 px-4 mt-8 inline-flex'>
						<FavoriteIcon sx={{ color: 'lightgray' }} />
						<p>3</p>
					</div>
				</div>
			</div>
		</div>
	)
}
