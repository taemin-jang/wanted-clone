import { signIn } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Skeleton from '@mui/material/Skeleton'
export default function LogoBtn({
	name,
	color,
}: {
	name: string
	color?: string
}) {
	const Logo = dynamic(() => import('@/app/(form)/signin/logo'), {
		loading: () => (
			<Skeleton
				variant='circular'
				width={56}
				height={56}
			/>
		),
	})
	return (
		<button
			className='flex flex-col gap-1 justify-center items-center'
			onClick={() =>
				signIn(name, {
					redirect: true,
					callbackUrl: '/wdlist',
				})
			}>
			<div
				className={
					color
						? `h-14 w-14 rounded-full border ${color}`
						: 'h-14 w-14 rounded-full border'
				}>
				<Logo name={name} />
			</div>
			<p>{name[0].toUpperCase() + name.slice(1)}</p>
		</button>
	)
}
