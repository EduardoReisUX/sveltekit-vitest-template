<h3>How to set path alias to sveltekit and vitest</h3>
<ul>
	<li>
		Add in tsconfig.json:
		<pre>{`
"compilerOptions": {
	"paths": {
		"$src/*": ["./src/*"]
	}
}`}
		</pre>
	</li>
	<li>
		Add in svelte.config.js:
		<pre>{`
kit: {
	adapter: adapter(),
	vite: {
		resolve: {
			alias: {
				$src: path.resolve('./src')
			}
		}
	}
}`}
		</pre>
	</li>
	<li>
		Add in vitest.config.ts:
		<pre>{`
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
}`}
		</pre>
	</li>
</ul>

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
