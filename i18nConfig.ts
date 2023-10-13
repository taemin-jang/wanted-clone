import { Config } from 'next-i18n-router/dist/types'

const i18nConfig: Config = {
	locales: ['en', 'ko', 'ja'],
	defaultLocale: 'ko',
	routingStrategy: 'dynamicSegment',
}

export default i18nConfig
