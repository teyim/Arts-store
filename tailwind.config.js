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
				'fade-in-down': 'fadeInDown 0.2s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'50%': { opacity: 0.5 },
					'100%': { opacity: 1 },
				},
				fadeInDown: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
		},
	},
	plugins: [],
}
