import '@/app/globals.css'
import Container from '@/app/(form)/container'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/contexts/prtovider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: '로그인 및 회원가입',
	description: '로그인 및 회원가입 페이지',
}

export default function FormRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// return (
	// 	<div id='signup'>
	// 		<Container>{children}</Container>
	// 	</div>
	// )
	return (
		<html
			lang='en'
			id='signup'>
			<body>
				<Provider>
					<Container>{children}</Container>
				</Provider>
			</body>
		</html>
	)
}
