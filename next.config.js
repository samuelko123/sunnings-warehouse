module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		contentSecurityPolicy: "default-src 'self'; script-src 'none';",
		dangerouslyAllowSVG: true,
		domains: [
			'media.prod.bunnings.com.au',
		],
	},
	eslint: {
		dirs: ['src'],
	},
}
