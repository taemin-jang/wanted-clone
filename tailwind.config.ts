import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'wanted-kakao':
					'url("https://static.wanted.co.kr/images/banners/themes/452_34d234da.jpg")',
			},
			maxWidth: {
				wanted: '66.25rem',
			},
			colors: {
				'primary-light': '#42a5f5',
				'naver-main': '#03c75a',
			},
		},
	},
	plugins: [],
}
export default config
