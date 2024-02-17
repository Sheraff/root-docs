const { createPreset } = require('fumadocs-ui/tailwind-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	presets: [createPreset()],
	content: [
		'./node_modules/fumadocs-ui/dist/**/*.js',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
}