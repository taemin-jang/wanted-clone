import type { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
	providers: [
		KakaoProvider({
			clientId: process.env.KAKAO_API_KEY as string,
			clientSecret: process.env.KAKAO_SECRET_KEY as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: '아이디',
					type: 'text',
					placeholder: '아이디를 입력해주세요.',
				},
				password: {
					label: '비밀번호',
					type: 'password',
					placeholder: '비밀번호를 입력해주세요.',
				},
			},
			async authorize(credentials) {
				const res = await fetch(`${process.env.PRODUCT_API_URL}/signin`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ credentials }),
				})
				const user = await res.json()

				if (!user) return null
				return user
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},

		async session({ session, token }) {
			session.user = token as any
			return session
		},
	},
	pages: {
		signIn: '/signin',
	},
}
