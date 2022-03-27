/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'cdn.shopify.com',
			's3.amazonaws.com',
			'i2.wp.com',
			'www.creativeboom.com',
			'cdn11.bigcommerce.com',
			'images.unsplash.com',
			'images.ctfassets.net',
			'wac-cdn.atlassian.com',
			'www.riseart.com',
			'i.pinimg.com',
			'media.istockphoto.com',
			'mymodernmet.com',
		],
	},
}

module.exports = nextConfig
