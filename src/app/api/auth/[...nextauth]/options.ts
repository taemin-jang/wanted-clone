import type { NextAuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import GoogleProvider from 'next-auth/providers/google'
import NaverProvider from 'next-auth/providers/naver'
import CredentialsProvider from 'next-auth/providers/credentials'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import { cert } from 'firebase-admin/app'
import { getServerSession } from 'next-auth/next'

export const options: NextAuthOptions = {
	adapter: FirestoreAdapter({
		credential: cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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
			const kakaoAPIUrl = 'https://kapi.kakao.com/v2/user/me'
			const access_token = account?.access_token
			const getUserInfoFromKakao = async (accessToken: any) => {
				try {
					const response = await fetch(kakaoAPIUrl, {
						method: 'GET',
						headers: {
							Authorization: `Bearer ${accessToken}`,
						},
					})

					if (!response.ok) {
						throw new Error('Failed to fetch user info from Kakao')
					}

					const userData = await response.json()

					// Kakao API로부터 받은 사용자 정보를 처리
					// Firebase 사용자 생성 또는 업데이트
					// Firebase Custom Token 생성 (선택 사항)

					return userData
				} catch (error) {
					console.error('Error fetching user info from Kakao:', error)
					throw error
				}
			}
			const isAllowedToSignIn = await getUserInfoFromKakao(access_token)

			if (isAllowedToSignIn) {
				return true
			} else {
				return false
			}
		},
	},
	pages: {
		signIn: '/signin',
		signOut: '/',
	},
}
