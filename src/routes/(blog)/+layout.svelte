<script>
	import { Home, BookOpen, Rss, LayoutDashboard, Menu } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import { page } from '$app/stores';
	import '../../app.css'

	let { children, data } = $props();

	const links = [
		{ href: '/', name: 'Home', icon: Home },
		{ href: '/blog', name: 'Blog', icon: BookOpen },
		{ href: '/about', name: 'About', icon: Rss },
		{ href: '/dashboard', name: 'Dashboard', icon: LayoutDashboard }
	];

	const posts = data?.posts;
</script>

<svelte:head>
	<title>Blog - Web Design & Development</title>
	<meta name="description" content="RyderTech is a leading web design and development agency specializing in creating stunning, user-friendly websites that drive results.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
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

		<!-- Theme Toggle -->
		<div class="flex justify-end mb-4">
			<button class="btn btn-outline btn-circle" onclick={toggleMode}>
				<SunIcon class="h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all" />
				<MoonIcon class="absolute h-5 w-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all" />
				<span class="sr-only">Toggle Theme</span>
			</button>
		</div>

		<!-- Main content slot -->
		{@render children()}
	</div>

	<div class="drawer-side">
		<label for="sidebar-toggle" class="drawer-overlay"></label>
		<aside class="w-64 bg-base-200 p-4">
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

<style>
	:global(body) {
		font-family: "Roboto", sans-serif;
		font-optical-sizing: auto;
  		font-weight: 300;
  		font-style: normal;
	}
</style>
