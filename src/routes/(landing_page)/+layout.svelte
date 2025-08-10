<script>
	import '../../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LiveUpdate from '$lib/components/LiveUpdate.svelte';
	

	let { children } = $props();
</script>

<svelte:head>
	<title>RyderTech - Web Design & Development</title>
	<meta name="description" content="RyderTech is a leading web design and development agency specializing in creating stunning, user-friendly websites that drive results.">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</svelte:head>
<Navbar/>
<div class="container mx-auto px-4 py-6">
<LiveUpdate />
</div>
{@render children()}
<Footer />

<style>
:global(body) {
  
	font-family: "Montserrat", sans-serif;
	font-optical-sizing: auto;
  	font-weight: 300;
  	font-style: normal;
}
</style>
