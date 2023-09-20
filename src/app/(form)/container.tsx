import Link from 'next/link'

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-6'>
			<div className='border-2 border-gray-200 rounded-md bg-white p-5 w-[400px]'>
				<div className='flex flex-col items-center'>
					<Link
						href={'/'}
						className='font-bold font- text-3xl pt-10 mb-4'>
						wanted
					</Link>
					<h2 className='text-center font-semibold text-2xl my-4'>
						하나의 계정으로
						<br />
						더욱 편리하게
					</h2>
					<p className='text-gray-500 text-center text-sm mb-11'>
						원티드가 제공하는 서비스를
						<br />
						하나의 계정으로 모두 이용할 수 있습니다.
					</p>
				</div>
				{children}
			</div>
		</main>
	)
}
