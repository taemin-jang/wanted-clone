const isValid = (type: string, data: string) => {
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%#*?&^~]).{8,}$/
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	const TestId = 'helloworld'
	const TestPassword = 'Qwer!234'

	if (type === 'password' && !data.match(passwordRegex)) {
		return {
			isError: true,
			message:
				'8자 이상 + 특수문자 1개 이상 + 영문 소문자 최소 1개 + 영문 대문자 최소 1개',
			type: type,
		}
	}

	if (type === 'email' && !data.match(emailRegex)) {
		return {
			isError: true,
			message: '이메일 형식이 맞지 않습니다. (example@example.com)',
			type: type,
		}
	}

	if (type === 'login') {
		const { id, password } = JSON.parse(data)
		if (id !== TestId)
			return {
				isError: true,
				message: '아이디가 일치하지 않습니다.',
				type: 'id',
			}
		if (password !== TestPassword)
			return {
				isError: true,
				message: '비밀번호가 일치하지 않습니다.',
				type: 'password',
			}
		return { isError: false, message: '로그인 되었습니다!', type: '' }
	}

	return { isError: false, message: '', type: '' }
}

export default isValid
