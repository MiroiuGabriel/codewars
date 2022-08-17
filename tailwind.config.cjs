/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {},
			transitionProperty: {
				width: 'width',
			},
			width: {
				inherit: 'inherit',
			},
			screens: {
				'3xl': '1921px',
			},
			typography: ({ theme }) => ({
				code: {
					css: {
						'--tw-prose-body': '#27272a',
						'--tw-prose-headings': '#18181b',
						'--tw-prose-lead': '#27272a',
						'--tw-prose-links': '#555',
						'--tw-prose-bold': '#18181b',
						'--tw-prose-counters': '#d4d4d8',
						'--tw-prose-bullets': '#d4d4d8',
						'--tw-prose-hr': '#d4d4d8',
						'--tw-prose-quotes': '#27272a',
						'--tw-prose-quote-borders': '#ffffff20',
						'--tw-prose-captions': '#3f3f46',
						'--tw-prose-code': '#18181b',
						'--tw-prose-pre-code': '#18181b',
						'--tw-prose-pre-bg': '#fff',
						'--tw-prose-th-borders': '#d4d4d8',
						'--tw-prose-td-borders': '#d4d4d8',
						'--tw-prose-invert-body': '#efefef',
						'--tw-prose-invert-headings': '#fff',
						'--tw-prose-invert-lead': '#9ca3af',
						'--tw-prose-invert-links': '#fff',
						'--tw-prose-invert-bold': '#fff',
						'--tw-prose-invert-counters': '#9ca3af',
						'--tw-prose-invert-bullets': '#4b5563',
						'--tw-prose-invert-hr': '#374151',
						'--tw-prose-invert-quotes': '#f3f4f6',
						'--tw-prose-invert-quote-borders': '#ffffff20',
						'--tw-prose-invert-captions': '#9ca3af',
						'--tw-prose-invert-code': '#fff',
						'--tw-prose-invert-pre-code': '#d1d5db',
						'--tw-prose-invert-pre-bg': '#131414',
						'--tw-prose-invert-th-borders': '#4b5563',
						'--tw-prose-invert-td-borders': '#374151',
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
