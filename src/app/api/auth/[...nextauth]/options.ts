import type { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import NaverProvider from 'next-auth/providers/naver'
import CredentialsProvider from 'next-auth/providers/credentials'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { cert } from 'firebase-admin/app'
import { getUserInfoFromKakao } from '@/utils/getUserInfo'

export const options: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,

	adapter: FirestoreAdapter({
		credential: cert({
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(
				/\\n/g,
				'\n',
			),
		}),
	}),
	providers: [
		KakaoProvider({
			clientId: process.env.KAKAO_API_KEY as string,
			clientSecret: process.env.KAKAO_SECRET_KEY as string,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_API_KEY as string,
			clientSecret: process.env.GOOGLE_SECRET_KEY as string,
		}),
		NaverProvider({
			clientId: process.env.NAVER_API_KEY as string,
			clientSecret: process.env.NAVER_SECRET_KEY as string,
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
		async signIn({ user, account, profile, email, credentials }) {
			const access_token = account?.access_token
			let isAllowedToSignIn: boolean | undefined

			switch (account?.provider) {
				case 'kakao':
					isAllowedToSignIn = await getUserInfoFromKakao(access_token)
					break
				case 'google':
					isAllowedToSignIn =
						profile?.email_verified && profile?.email?.endsWith('@gmail.com')
					break
				case 'naver':
					isAllowedToSignIn =
						profile?.message === 'success' &&
						profile?.response?.email.endsWith('@naver.com')
					break
			}

			if (isAllowedToSignIn) {
				return true
			} else {
				return false
			}
		},
	},
	pages: {
		signIn: '/signin',
		signOut: '/wdlist',
	},
}
