import '@/app/globals.css'
import Container from '@/app/(form)/[locale]/container'
import type { Metadata } from 'next'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/app/(form)/[locale]/translationsProvider'
import Provider from '@/contexts/prtovider'

export const metadata: Metadata = {
	title: '로그인 및 회원가입',
	description: '로그인 및 회원가입 페이지',
}

export default async function FormRootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: any }
}) {
	const { t, options } = await initTranslations(locale, ['signin'])
	return (
		<html
			lang='en'
			id='signup'>
			<body>
				<TranslationsProvider
					namespaces={options.ns}
					locale={locale}>
					<Provider>
						<Container locale={locale}>{children}</Container>
					</Provider>
				</TranslationsProvider>
			</body>
		</html>
	)
}
