'use client'
import { getSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import Image from 'next/image'

export default function Profile() {
	const [session, setSession] = useState<Session | null>(null)
	useEffect(() => {
		;(async () => {
			const res = await getSession()
			setSession(res)
		})()
	}, [])
	return (
		<div className='relative max-w-wanted m-auto flex'>
			<div className='w-1/3 border-l border-r'>
				<div className='p-10'>
					<span
						className='text-lg font-bold text-gray-400 cursor-pointer'
						onClick={() =>
							signOut({
								callbackUrl: '/',
							})
						}>
						로그아웃
					</span>
				</div>
			</div>
			<div className='w-2/3'>
				<div className='p-20'>
					<span className='flex gap-8 items-center'>
						<Image
							src={session?.user?.image as string}
							alt={session?.user?.name as string}
							width={78}
							height={78}
							className='rounded-full'
						/>
						<div className='flex flex-col gap-1'>
							<p className='text-xl font-bold'>{session?.user?.name}</p>
							<p className='text-sm font-semibold text-gray-400'>개발</p>
						</div>
					</span>
				</div>
			</div>
		</div>
	)
}
