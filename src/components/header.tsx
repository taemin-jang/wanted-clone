'use client'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import Image from 'next/image'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { useSession } from 'next-auth/react'

export const Header_list = () => {
	const list = [
		{ data: '채용', checked: true, link: '/wdlist' },
		{ data: '이벤트', checked: false, link: '/event' },
		{ data: '이력서', checked: false, link: '/cv/list' },
		{ data: '소셜', checked: false, link: '/community' },
		{ data: '프리랜서', checked: false, link: '/experts' },
		{ data: 'AI 합격예측', checked: false, link: '/aiscore/resume' },
	]
	return (
		<ul className='flex'>
			{list.map((el, key) => (
				<li
					className={`${
						el.checked
							? 'p-4 font-bold text-sm border-b-2 border-blue-600'
							: 'p-4 font-bold text-sm hover:border-b-2 hover:border-gray-300'
					}`}
					key={key}>
					<Link href={el.link}>{el.data}</Link>
				</li>
			))}
		</ul>
	)
}

export default function Header() {
	const { data: session } = useSession()

	return (
		<header className='border-b-2 border-gray-200'>
			<nav className='max-w-wanted flex justify-between items-center m-auto'>
				<div>
					<div>
						<MenuIcon className='mr-4' />
						<Link
							href='/'
							className='font-extrabold text-2xl'>
							wanted
						</Link>
					</div>
				</div>
				<Header_list />
				<aside>
					<ul className='flex items-center'>
						<li className='mx-1'>
							<button>
								<SearchIcon />
							</button>
						</li>
						<li className='mx-4 text-sm font-bold'>
							{session?.user ? (
								<span className='flex items-center gap-4'>
									<NotificationsNoneOutlinedIcon />
									<Link href={'/my/profile'}>
										<Image
											src={session.user.image as string}
											alt={session.user.name as string}
											width={26}
											height={26}
											className='rounded-full cursor-pointer'
										/>
									</Link>
								</span>
							) : (
								<Link href={'/ko/signin'}>회원가입/로그인</Link>
							)}
						</li>
						<li className='mx-4 text-xs text-gray-300'>|</li>
						<li className='mx-4'>
							<a
								href='#'
								className='border-2 rounded-3xl border-gray-200 p-2 text-xs font-bold text-gray-400'>
								기업 서비스
							</a>
						</li>
					</ul>
				</aside>
			</nav>
		</header>
	)
}
