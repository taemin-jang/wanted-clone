import NextAuth from 'next-auth/next'

declare module 'next-auth' {
	interface Profile {
		email_verified?: boolean
		message?: string
		response?: {
			id: string
			nickname: string
			profile_image: string
			email: string
			name: string
		}
	}
}
