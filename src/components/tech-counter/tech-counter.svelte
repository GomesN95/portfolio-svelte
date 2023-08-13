<script lang="ts">
  import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	import NG_LOGO from "$lib/images/logo/ng.png"

	export let count: number = 0;
	export let logo: any = null;
	let animationDuration = 1000;
	// let RandomNumberBeforeCount = 2;

	const progress = tweened(0, {
		duration: animationDuration,
		easing: cubicOut
	});

	// function generateRandomNumberWithDelay(index: number) {
  //   setTimeout(() => {
  //       const randomNumber = Math.floor(Math.random() * 100);
	// 			progress.set(randomNumber);
  //   }, (index + 1) * 300);
	// }

	// for (let i = 0; i <= RandomNumberBeforeCount; i++) {
	// 	if(i < RandomNumberBeforeCount) {
	// 		generateRandomNumberWithDelay(i);
	// 		console.log('loop');
	// 	} else {
	// 		setTimeout(() => {
	// 		progress.set(count);
	// 		console.log('end');
	// 	}, (RandomNumberBeforeCount + 1) * 300);
	// 	}
	// }

	$: {
    progress.set(count)
  }
</script>

<style lang="scss">
  @import './tech-counter.scss';
</style>

<div class="tech-counter">
	<div class="content">
		<div class="logo">
			{#if logo}
			<img src={logo} alt="Svelte logo">
			{:else}
			<img src={NG_LOGO} alt="NG logo">
			{/if}
		</div>
		<div class="divider"></div>
		<div class="count">
			<p>
				{Math.floor($progress)}
			</p>
		</div>
	</div>
</div>
