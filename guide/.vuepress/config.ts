import path from 'path';
import { defineUserConfig } from 'vuepress-vite';
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite';
import sidebar from './sidebar';

const config = defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
	bundler: '@vuepress/vite',
	templateDev: path.join(__dirname, 'templates', 'index.dev.html'),
	templateSSR: path.join(__dirname, 'templates', 'index.ssr.html'),
	lang: 'en-US',
	title: 'Up Devs\'s Guide',
	description: 'A guide where you can explore everthing about the Up Devs team!',
	head: [
		['meta', { charset: 'utf-8' }],
		['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
		['link', { rel: 'icon', href: '/favicon.png' }],
		['meta', { name: 'theme-color', content: '#3eaf7c' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		['meta', { property: 'og:title', content: 'Up Devs\'s Guide' }],
		['meta', { property: 'og:description', content: 'A guide where you can explore everthing about the Up Devs team!' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://up.is-a.dev/' }],
		['meta', { property: 'og:locale', content: 'en_US' }],
		['meta', { property: 'og:image', content: '/meta-image.png' }],
	],
	theme: path.join(__dirname, 'theme', 'index.ts'),
	themeConfig: {
		contributors: false,
		sidebar,
		repo: 'Up-Devs/up-devs.github.io',
		docsDir: 'guide',
		notFound: ['Wait, this is the wrong way!', 'Lost in this website?', 'Check your spelling!', 'We didn\'t coded this!', 'Take a map first!'],
		sidebarDepth: 3,
		editLinks: true,
		lastUpdated: true,
		navbar: [
			{
				text: 'brawlup.js',
				link: '/bjs/',
			},
			{
				text: 'UpDevs.DB',
				link: '/updb/',
			},
		],
		themePlugins: {
			mediumZoom: false,
		},
	},
	plugins: [],
});

      const ALGOLIA_DOCSEARCH_API_KEY = '5dfdf72c0c568fd60ab17ebf1156287e'
      const { NODE_ENV } = process.env;

    if (NODE_ENV === 'production' && ALGOLIA_DOCSEARCH_API_KEY) {
	config.plugins.push(
		[
			'@vuepress/plugin-docsearch',
			{
				apiKey: ALGOLIA_DOCSEARCH_API_KEY,
				indexName: 'updevs',
				placeholder: 'Search guide',
			},
		],
		[
			'@vuepress/plugin-google-analytics',
			{ id: GOOGLE_ANALYTICS_ID },
		],
	);
}

export default config;
