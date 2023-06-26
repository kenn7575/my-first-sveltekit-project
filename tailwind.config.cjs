/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#f5f3f1',
					100: '#e6dfdb',
					200: '#cec2ba',
					300: '#b29d92',
					400: '#9c7f73',
					500: '#8d6f65',
					600: '#735751',
					700: '#624946',
					800: '#543f3f',
					900: '#4a393a',
					950: '#291f20'
				},
				crail: {
					50: '#fcf6e6',
					100: '#faece9',
					200: '#f5d9d6',
					300: '#edbab4',
					400: '#e2918a',
					500: '#d36760',
					600: '#bf4342',
					700: '#9f3133',
					800: '#862b2f',
					900: '#73282e',
					950: '#3f1215'
				}
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
