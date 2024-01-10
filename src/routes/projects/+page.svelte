<svelte:head>
	<title>G.N. - Projects</title>
	<meta name="description" content="My Projects" />
</svelte:head>

<script>
	import './page.scss';
	
	import ProjectCard from '../../components/project-card/project-card.svelte';
	import MonsterPlayable from '../../lib/images/projects/monster-playable/monster-playable.png';
	import LeFaubourg from '../../lib/images/projects/le-faubourg/le-faubourg.png';
	import StarLiva from '../../lib/images/projects/starliva/starliva.png';
	import VoodooBlog from '../../lib/images/projects/voodoo/voodoo-blog.png';
	import DesignMyBic from '../../lib/images/projects/design-my-bic/design-my-bic.png';
	import Inovoiz from '../../lib/images/projects/inovoiz/inovoiz-dashboard.png';
	import VotreGarageMoto from '../../lib/images/projects/votre-garage-moto/votre-garage-moto.png';
	
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
			image: Inovoiz,
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
			image: VotreGarageMoto,
		},
		{
			name: "Le Faubourg",
			image: LeFaubourg,
		},
		{
			name: "Starliva",
			image: StarLiva,
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
