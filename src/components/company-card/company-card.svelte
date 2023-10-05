<script lang="ts">
	export let name: string = '';
	export let description: string = '';
	import './company-card.scss';
</script>

<div class="company-card">
	<div class="content">
		<div class="name">{name}</div>
		<div class="description">{description}</div>
		<div class="tags">
			<div class="tag">Node.JS</div>
			<div class="tag">React.JS</div>
		</div>
	</div>
</div>
