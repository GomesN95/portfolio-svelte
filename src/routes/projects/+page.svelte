<svelte:head>
	<title>G.N. - Projects</title>
	<meta name="description" content="My Projects" />
</svelte:head>

<script>
	import './page.scss';
	import ProjectCard from '../../components/project-card/project-card.svelte';
	import MonsterPlayable from '../../lib/images/projects/monster_playable.png';
	import LeFaubourg from '../../lib/images/projects/le-faubourg.png';
	import VoodooBlog from '../../lib/images/projects/voodoo-blog.png';
	import DesignMyBic from '../../lib/images/projects/design-my-bic.png';
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
			image: DesignMyBic,
		},
		{
			name: "Voodoo Blog",
			image: VoodooBlog,
		},
		{
			name: "Votre garage moto",
			image: MonsterPlayable,
		},
		{
			name: "Le Faubourg",
			image: LeFaubourg,
		},
		{
			name: "Starliva",
			image: LeFaubourg,
		},
	]
</script>

<div id="projects">
	<h1 class="title">Projects</h1>
	<div class="cards">
		{#each projects as project, i}
			<ProjectCard project={project}/>
		{/each}
	</div>
</div>
