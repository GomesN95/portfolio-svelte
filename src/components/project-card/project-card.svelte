<script lang="ts">
	export let project: {name: string, image: string};
	import './project-card.scss';
</script>

<div class="project-card">
	<div class="content">
		<div class="name">{project.name}</div>
		<img src={project.image} alt={project.name}>
	</div>
</div>
