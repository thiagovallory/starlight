// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CVA',
			logo: {
        src: './src/assets/logo.svg',
      },
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
			social: {
				github: 'https://github.com/cva-plugin/cva',
				discord: 'https://discord.gg/W3MfaawZeH',
				'x.com': 'https://x.com/cva_design',
				threads: 'https://www.threads.net/@cva_design',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 		{ label: 'Example Guide 2', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Privacy Policy',
					autogenerate: { directory: 'privacy' },
				},
				{
					label: 'Terms and Conditions',
					autogenerate: { directory: 'terms' },
				},
				{
					label: 'Report a vulnerability',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Discord #-troubleshooting',
							link: 'https://discord.gg/hS8FNCEZTR',
							attrs: { target: '_blank', style: 'font-style: italic' },
							badge: { text: 'New', variant: 'danger' },
						},
					],
				},
				
			],
		}),
	],
});
