import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	kit: { adapter: adapter() },
	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
