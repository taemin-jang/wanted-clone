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
		],
	},
	swcMinify: true,
}

module.exports = nextConfig
