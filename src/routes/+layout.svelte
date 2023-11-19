<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	import Header from './Header.svelte';
	import Three from './three-background.svelte';
	import './styles.scss';
	
	export let data;

</script>

<div class="app">
	<Header />

	<Three />
	{#key data.pathname}
	<main in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot/>
	</main>
	{/key}

	<footer>
		
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: rgba(0,0,0,0.2);
	}

	main {
		flex: 1;
		padding: 1rem;
		width: 100%;
		max-width: 66rem;
		margin: 0 auto;
	}

	footer {
		display: flex;
		gap: 10px;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
		width: 36px;
	}

	footer svg {
		fill: black;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
