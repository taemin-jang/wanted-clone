import Loading from '@/app/(main)/wdlist/loading';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Wanted Clone',
	description: 'Wanted Clone coding',
};

export default function MainRootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{/* <Suspense fallback={<Loading />}></Suspense> */}
				{children}
			</body>
		</html>
	);
}
