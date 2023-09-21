'use client'
import { signOut } from 'next-auth/react'

export default function Profile() {
	return (
		<div className='relative max-w-wanted mt-10 m-auto'>
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
	)
}
