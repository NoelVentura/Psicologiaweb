import { spawnSync } from 'node:child_process';

const result = spawnSync('npx', ['astro', 'build'], {
	stdio: 'inherit',
	env: { ...process.env, GITHUB_PAGES: 'true' },
	shell: true,
});

process.exit(result.status ?? 1);
