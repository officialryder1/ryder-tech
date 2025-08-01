<script>
	import Footer from '$lib/components/blog/footer.svelte';
	import { fade } from 'svelte/transition';
	import { Home, BookOpen, Rss, Menu,  Coins} from '@lucide/svelte';
	import ThemeToggle from '$lib/components/ThemeToggler.svelte';

	import { page } from '$app/stores';
	import '../../app.css'

	let { children, data } = $props();

	const links = [
		{ href: '/', name: 'Home', icon: Home },
		{ href: '/blog', name: 'Blog', icon: BookOpen },
		{ href: '../#about', name: 'About', icon: Rss },
		{ href: '/support', name: 'Support', icon: Coins }
	];

	const posts = data?.posts;
</script>

<svelte:head>
	<title>Blog - Web Design & Development</title>
	<meta name="description" content="RyderTech is a leading web design and development agency specializing in creating stunning, user-friendly websites that drive results.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
</svelte:head>

<div class="drawer lg:drawer-open min-h-screen bg-base-100 text-base-content">
	<input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col p-6">
		<!-- Mobile navbar toggle -->
		<div class="lg:hidden ">
			<label for="sidebar-toggle" class="btn btn-outline btn-sm btn-circle">
				<Menu />
				
			</label>
		</div>
		<div class="flex justify-end">
			<ThemeToggle/>
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
					<a href="/post-a-job" class="btn btn-accent w-full font-bold"><Coins />Post a job</a>
			</nav>

			{#if $page.url.pathname.startsWith('/blog')}
				<div class="mt-6">
					<h3 class="text-lg font-semibold mb-2">Recent Posts</h3>
					<ul class="space-y-1">
						{#each posts as { path, title }}
							<li>
								<a href={path} class="block px-3 py-2 rounded hover:bg-base-300 text-sm hover:text-accent transition-colors duration-300">
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
	:global(p){
		font-size: 1rem;
		line-height: 1.5;
		color: var(--text-color);
	}
</style>
