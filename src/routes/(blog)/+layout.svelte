<script>
	import Footer from '$lib/components/blog/footer.svelte';
	import { fade } from 'svelte/transition';
	import { Home, BookOpen, Rss, LayoutDashboard, Menu } from '@lucide/svelte';

	import { page } from '$app/stores';
	import '../../app.css'

	let { children, data } = $props();

	const links = [
		{ href: '/', name: 'Home', icon: Home },
		{ href: '/blog', name: 'Blog', icon: BookOpen },
		{ href: '../#about', name: 'About', icon: Rss },
		{ href: '/', name: 'Dashboard', icon: LayoutDashboard }
	];

	const posts = data?.posts;
</script>

<svelte:head>
	<title>Blog - Web Design & Development</title>
	<meta name="description" content="RyderTech is a leading web design and development agency specializing in creating stunning, user-friendly websites that drive results.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
</svelte:head>

<div class="drawer lg:drawer-open min-h-screen bg-base-100 text-base-content">
	<input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col p-6">
		<!-- Mobile navbar toggle -->
		<div class="lg:hidden mb-4">
			<label for="sidebar-toggle" class="btn btn-outline btn-sm btn-circle">
				<Menu />
			</label>
		</div>

		<!-- Main content slot -->
		<div class="flex flex-col" transition:fade={{ duration: 300 }}>
			{@render children()}
		</div>
		
	</div>

	<div class="drawer-side">
		<label for="sidebar-toggle" class="drawer-overlay"></label>
		<aside class="w-64 bg-base-200 p-4 min-h-full">
			<h2 class="text-xl font-bold mb-6">RyderTech Blog</h2>

			<nav class="space-y-2">
				{#each links as { name, href, icon: Icon }}
					<a href={href} class="flex items-center px-3 py-2 rounded-lg hover:bg-base-300 transition">
						<Icon class="mr-3 h-5 w-5" />
						<span>{name}</span>
					</a>
				{/each}
			</nav>

			{#if $page.url.pathname.startsWith('/blog')}
				<div class="mt-6">
					<h3 class="text-lg font-semibold mb-2">Recent Posts</h3>
					<ul class="space-y-1">
						{#each posts as { path, title }}
							<li>
								<a href={path} class="block px-3 py-2 rounded hover:bg-base-300 text-sm">
									{title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</aside>
	</div>
</div>
<Footer />

<style>
	:global(body) {
		font-family: "Montserra", sans-serif;
		font-optical-sizing: auto;
  		font-weight: 300;
  		font-style: normal;
	}
</style>
