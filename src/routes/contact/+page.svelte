<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact Nicolas Gomes" />
</svelte:head>

<script>
	import './page.scss';
</script>

<div id="contact">
	<h1>Contact</h1>

	<div class="content">
		<form class="form" action="">
			<label class="email">
				Email
				<input name="email" type="email" placeholder="obiwan.kenobi@galactic-senate.jedi"/>
			</label>
			<label class="first-name">
				First Name
				<input name="text" type="text" placeholder="Obi-Wan" />
			</label>
			<label class="last-name">
				Last Name
				<input name="text" type="First Name" placeholder="Kenobi" />
			</label>
			<label class="message">
				Message
				<textarea name="message" rows="5" cols="33"  placeholder="Hello there ..."/>
			</label>
			<button>Send</button>
		</form>
	</div>
</div>
