<script lang="ts">
	import Button from '$src/components/Button.svelte';
	import HowToAlias from '$src/components/HowToAlias.svelte';
	import HowToVitest from '$src/components/HowToVitest.svelte';
</script>

<main>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	<Button />
	<HowToVitest />
	<HowToAlias />
</main>

<style>
	main {
		max-width: 30rem;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		flex-direction: column;
	}
</style>
