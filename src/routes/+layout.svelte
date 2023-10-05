<script>
	import { fade } from 'svelte/transition';
	import Header from './Header.svelte';
	import './styles.css';

	export let data;

</script>

<div class="app">
	<Header />

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
	}

	main {
		flex: 1;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
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
