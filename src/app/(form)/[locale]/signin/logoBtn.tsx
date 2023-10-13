import { signIn } from 'next-auth/react'
import Skeleton from '@mui/material/Skeleton'
import { Suspense } from 'react'
import Logo from '@/app/(form)/[locale]/signin/logo'
export default function LogoBtn({
	name,
	color,
}: {
	name: string
	color?: string
}) {
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
				<Suspense
					fallback={
						<Skeleton
							variant='circular'
							width={56}
							height={56}
						/>
					}>
					<Logo name={name} />
				</Suspense>
			</div>
			<p>{name[0].toUpperCase() + name.slice(1)}</p>
		</button>
	)
}
