module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				Vollkorn: ['Vollkorn'],
			},
			animation: {
				fadein: 'fadeIn 0.2s ease-in',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'50%': { opacity: 0.5 },
					'100%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
}
