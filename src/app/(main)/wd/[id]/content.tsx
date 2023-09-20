import Image from 'next/image'
import Keyword from '@/components/keyword'
import { JobDetail, Job } from '@/types/wanted-api'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import dynamic from 'next/dynamic'
import Loading from '@/app/(main)/wdlist/loading'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp'
import FavoriteIcon from '@mui/icons-material/Favorite'
interface API {
	newJob: {
		data: Job[]
	}
	jobDetail: {
		job: JobDetail
		like_users: LikeUser[]
	}
}

interface LikeUser {
	avatar: string
	id: number
	name: string
}

export default function Content({ api }: { api: API }) {
	const { newJob, jobDetail } = api
	const JobCard = dynamic(() => import('@/app/(main)/wdlist/jobcard'), {
		loading: () => <Loading />,
	})

	return (
		<>
			<div className='w-[43.75rem]'>
				<Image
					src={jobDetail.job?.title_img.origin}
					width={700}
					height={490}
					alt={jobDetail.job?.company.name}
				/>
				<div className='mt-10'>
					<h1 className='font-bold text-3xl'>{jobDetail.job?.position}</h1>
					<div className='mt-3 mb-6'>
						<span className='text-xs font-bold mr-2'>
							{jobDetail.job.company.name}
						</span>
						{jobDetail.job.company.application_response_stats.level ===
						'very_high' ? (
							<span className='mt-2 text-xs bg-green-100 text-green-600 p-1'>
								응답률 매우 높음
							</span>
						) : (
							<></>
						)}
						<span className='before:content-["|"] before:px-2 before:text-gray-400 before:text-xs text-gray-400 text-xs'>
							{jobDetail.job.address.location}ㆍ{jobDetail.job.address.country}
						</span>
					</div>
					<Keyword datas={jobDetail.job.company_tags} />
				</div>
				<div className='whitespace-pre-line text-sm text-gray-500 mt-12 pb-12 border-b border-gray-500'>
					<span>{`${jobDetail.job.detail.intro}`}</span>
					<p className='font-extrabold text-base text-gray-600 mt-3'>
						주요업무
					</p>
					<span>{`${jobDetail.job.detail.main_tasks}`}</span>
					<p className='font-extrabold text-base text-gray-600 mt-3'>
						자격요건
					</p>
					<span>{`${jobDetail.job.detail.requirements}`}</span>
					<p className='font-extrabold text-base text-gray-600 mt-3'>
						우대사항
					</p>
					<span>{`${jobDetail.job.detail.preferred_points}`}</span>
					<p className='font-extrabold text-base text-gray-600 mt-3'>
						혜택 및 복지
					</p>
					<span>{`${jobDetail.job.detail.benefits}`}</span>
				</div>
				<div className='mt-8 font-semibold text-gray-700'>
					<span className='flex'>
						<p className='w-20 text-gray-400 mr-2'>마감일</p>
						<span>{`${
							jobDetail.job.due_time ? jobDetail.job.due_time : '상시'
						}`}</span>
					</span>
					<span className='flex mt-3'>
						<p className='w-20 text-gray-400 mr-2'>근무 지역</p>
						<span>{`${jobDetail.job.address.full_location}`}</span>
					</span>
				</div>
				<div className='flex border rounded p-5 w-full mt-20'>
					<Image
						src={jobDetail.job.logo_img.thumb}
						width={50}
						height={50}
						alt={jobDetail.job.company.name}
						className='mr-5'
					/>
					<div className='flex justify-between w-full'>
						<div className='font-semibold text-gray-700'>
							<p>{jobDetail.job.company.name}</p>
							<p className='text-gray-400'>
								{jobDetail.job.company.industry_name}
							</p>
						</div>
						<div className='flex items-center'>
							<p className='border border-blue-600 rounded text-blue-600 text-sm font-bold px-4 py-2'>
								팔로우
							</p>
						</div>
					</div>
				</div>
				<div className='flex items-center mt-2 p-6 bg-gray-100 w-full rounded-md'>
					<ErrorOutlineOutlinedIcon />
					<div className='flex justify-between items-center w-full ml-5'>
						<p className='text-xs text-gray-700 font-bold leading-5 '>
							본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
							없으며, 구직활동 이외의
							<br />
							용도로 사용할 수 없습니다.
						</p>
						<KeyboardArrowDownOutlinedIcon />
					</div>
				</div>
				<div className='w-full'>
					<span className='flex justify-between items-center mt-20'>
						<p className='font-semibold text-gray-700'>면접 리뷰</p>
						<p className='text-xs text-gray-400'>
							ㆍ해당 정보는 원티드인사이트 데이터를 통해 제공됩니다.
						</p>
					</span>
					<div className='py-10 mt-4 w-full border rounded-xl'>
						<div className='flex flex-col justify-center'>
							<span className='inline-flex justify-evenly border rounded-full text-sm text-gray-500 font-semibold m-auto'>
								<p className='px-4 py-2 border-r'>진행 방식</p>
								<p className='px-4 py-2 border-r'>질문 내용</p>
								<p className='px-4 py-2 border-r'>면접관 태도</p>
								<p className='px-4 py-2'>분위기</p>
							</span>
							<p className='m-auto text-sm text-gray-400'>총 참여수</p>
						</div>
					</div>
				</div>
				<div className='w-[66.25rem] mt-20'>
					<p className='text-gray-700 font-bold text-lg mb-4'>
						이 포지션을 찾고 계셨나요?
					</p>
					<JobCard jobList={newJob} />
				</div>
			</div>
			<div className='fixed-layout'>
				<div className=' px-4 py-6 w-[21.25rem] border rounded font-semibold'>
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
						<div className='flex justify-center border border-blue-500 rounded-full text-blue-500 py-3 font-semibold'>
							<BookmarkBorderSharpIcon color='info' />
							<p>북마크하기</p>
						</div>
						<div className='flex justify-center bg-blue-600 border rounded-full py-3 mt-2 text-white font-semibold'>
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
		</>
	)
}
