/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'bg-primary': '#111315',
				'gray-dark': '#1B1D1F',
				'slate-gray':'#6F757C',
				'tea-green':'#BEE3CC',
				'floral-white':'#FEF7EE',
				'saffron': '#F6C768',
				'bitterswett': '#ED735D'
			}
		},
	},
	plugins: [],
}
