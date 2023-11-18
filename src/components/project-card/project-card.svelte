<script lang="ts">
	export let project: {name: string, image: string};
	import './project-card.scss';
</script>

<div class="project-card">
	<div class="content">
		<img src={project.image} alt={project.name}>
		<div class="name">
			<h3>{project.name}</h3>
		</div>
	</div>
</div>
