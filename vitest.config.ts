import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['src/tests/setupTests.ts'],
		coverage: {
			include: ['src/*'],
			exclude: ['src/tests/*']
		}
	},
	resolve: {
		alias: {
			$src: path.resolve('./src')
		}
	}
});
