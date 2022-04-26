<script lang="ts">
	export let counter = 0;
</script>

<button
	on:click={() => {
		counter++;
	}}>{counter}</button
>

<style>
	button {
		padding: 1rem 2rem;
		font-weight: bold;
		font-size: 2rem;
		border: 0;
		border-radius: 8px;

		background: hsl(240, 15%, 15%);
		color: #fff;
		cursor: pointer;

		transition: 150ms ease-in-out;
	}

	button:hover {
		filter: brightness(0.8);
	}
</style>
