<svelte:head>
	<title>G.N. - Projects</title>
	<meta name="description" content="My Projects" />
</svelte:head>

<script>
	import './page.scss';
	import ProjectCard from '../../components/project-card/project-card.svelte';
	import MonsterPlayable from '../../lib/images/projects/monster_playable.png';
	export const projects = [
		{
			name: "Monster Playable",
			image: MonsterPlayable,
		},
		{
			name: "GameUtils",
			image: MonsterPlayable,
		},
		{
			name: "InovoiZ",
			image: MonsterPlayable,
		},
		{
			name: "Design My BIC",
			image: MonsterPlayable,
		},
	]
</script>

<div id="projects">
	<h1>Projects</h1>
	<div class="cards">
		{#each projects as project, i}
			<ProjectCard project={project}/>
		{/each}
	</div>
</div>
