// @ts-check
import { defineConfig } from 'astro/config';

const deployToGithubPages = process.env.GITHUB_PAGES === 'true';

// https://astro.build/config
export default defineConfig({
	site: deployToGithubPages ? 'https://noelventura.github.io' : undefined,
	base: deployToGithubPages ? '/Psicologiaweb' : undefined,
	build: {
		format: 'file',
	},
});
