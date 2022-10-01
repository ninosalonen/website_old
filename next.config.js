/** @type {import('next').NextConfig } */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
