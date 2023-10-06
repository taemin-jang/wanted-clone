/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'image.wanted.co.kr',
			},
			{
				protocol: 'https',
				hostname: 'i.dummyjson.com',
			},
			{
				protocol: 'https',
				hostname: 'static.wanted.co.kr',
			},
			{
				protocol: 'https',
				hostname: 's3.ap-northeast-2.amazonaws.com',
			},
			{
				protocol: 'http',
				hostname: 'k.kakaocdn.net',
			},
			{
				protocol: 'https',
				hostname: 'k.kakaocdn.net',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'ssl.pstatic.net',
			},
			{
				protocol: 'https',
				hostname: 'graph.facebook.com',
			},
		],
	},
	swcMinify: true,
}

module.exports = nextConfig
