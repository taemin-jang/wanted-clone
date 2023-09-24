import '@/app/globals.css'
import Header from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from '@/contexts/prtovider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Wanted Clone',
	description: 'Wanted Clone coding',
}

export default function MainRootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Provider>
					<Header />
					{children}
				</Provider>
			</body>
		</html>
	)
}
