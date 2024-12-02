// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mattivaha-heikkila.fi',
	integrations: [mdx(), sitemap()],
	prefetch: true,
	build: {
		format: 'file',
	}
});
