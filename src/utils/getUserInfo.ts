const kakaoAPIUrl = 'https://kapi.kakao.com/v2/user/me'

export const getUserInfoFromKakao = async (accessToken: any) => {
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
