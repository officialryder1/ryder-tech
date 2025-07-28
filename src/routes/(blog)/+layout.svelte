<script>
	import './style.css';
	import { Button } from "$lib/components/ui/button/index.js";
	import { Home, BookOpen, Rss, LayoutDashboard } from '@lucide/svelte';
	import { page } from '$app/stores';

	let { children, data } = $props();

	const links = [
		{ href: '/', name: 'Home', icon: Home },
		{ href: '/blog', name: 'Blog', icon: BookOpen },
		{ href: '/about', name: 'About', icon: Rss },
		{ href: '/dashboard', name: 'Dashboard', icon: LayoutDashboard }
	]

	const posts = data?.posts

</script>

<svelte:head>
	<title>Blog - Web Design & Development</title>
	<meta name="description" content="RyderTech is a leading web design and development agency specializing in creating stunning, user-friendly websites that drive results.">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</svelte:head>

<div class="flex min-h-screen bg-muted-foreground">
	<!-- Sidebar -->
	<aside class="w-64 bg-background border-r p-4 hidden md:block">
		<div class="mb-8">
		<h2 class="text-xl font-bold text-accent">RyderTech Blog</h2>
		</div>
		<nav class="space-y-2">
		{#each links as { name, href, icon: Icon }}
			<a href={href} class="flex items-center px-3 py-2 rounded-md hover:bg-accent transition">
			<Icon class="mr-3 h-5 w-5" />
			<span>{name}</span>
			</a>
		{/each}
		{#if $page.url.pathname.startsWith('/blog')}
			<div class="mt-4">
				<h3 class="text-lg font-semibold">Recent Posts</h3>
				<ul class="mt-2 space-y-1">
					{#each posts as { path, title}}
						<li>
							<a href={path} class="block px-3 py-2 rounded-md hover:bg-accent transition">
								<h4 class="text-sm font-medium">{title}</h4>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		</nav>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 p-6 overflow-y-auto">
		{@render children()}
	</main>
</div>


<style>
:global(body) {
	font-family: "Roboto", sans-serif;
	font-optical-sizing: auto;
  	font-weight: 300;
  	font-style: normal;
}
</style>
