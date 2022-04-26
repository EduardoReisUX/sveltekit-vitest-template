<h3>How to install Vitest</h3>
<ol>
	<li>npm init svelte my-app</li>
	<li>cd my-app</li>
	<li>yarn</li>
	<li>yarn add -D vitest</li>
	<li>
		Add this inside package.json:
		<pre>{`
"scripts": {
    "test": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
}`}
        </pre>
	</li>
	<li>
		Install as dev dependencies `jsdom @testing-library/svelte @testing-library/jest-dom
		@types/jest`
	</li>
	<li>
		Create `setupTests.ts` and add this:
		<pre>{`import '@testing-library/jest-dom';`}</pre>
	</li>
	<li>
		Create `vitest.config.ts` in root folder and add this:
		<pre>{`
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte({ hot: !process.env.VITEST })],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/tests/setupTests.ts'] 
		// tell where setupTest.ts is located
	}
});
    `}
        </pre>
	</li>
	<li>Create a test `test.spec.ts` and run with `yarn test`.</li>
</ol>

<style>
	pre {
		font-size: 0.5rem;
	}

	@media (min-width: 600px) {
		pre {
			font-size: 0.75rem;
		}
	}
</style>
