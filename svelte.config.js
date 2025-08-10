import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	kit: { 
		adapter: adapter(),
		version: {
			pollInterval: 5000
		}
	},
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
