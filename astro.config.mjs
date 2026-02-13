// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE || 'https://blogolog.com.tr',
	integrations: [mdx(), sitemap({
		filter: (page) => page !== 'https://blogolog.com.tr/google3cacbdbb5cbfdfb4.html' && !page.includes('/drafts/'),
	})],
	trailingSlash: 'always',
});
