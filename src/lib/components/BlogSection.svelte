<script>
	const { posts} = $props();
</script>

<svelte:head>
	<title>Blog - RyderTech</title>
	<meta name="description" content="Explore our latest blog posts on design, e-commerce, SEO, and more. Stay updated with insights from RyderTech.">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="/favicon.ico">
</svelte:head>

<section class="py-20 bg-base-100 text-base-content" id="blog">
	<div class="max-w-6xl mx-auto px-4">
		<!-- Section Title -->
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-green-400 shadow-2xl shadow-accent-content">Latest From Our Blog</h2>
			<p class="text-gray-300 mt-2 text-lg">Insights, strategies, and tips to grow your brand online.</p>
		</div>

		<!-- Blog Grid -->
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each posts as post}
				<a href="blog/{post.title}" class="group rounded-xl overflow-hidden shadow-lg bg-base-200 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-accent-content">
					<img src={post.image} alt={post.title} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
					<div class="p-5">
						<h3 class="text-xl font-bold group-hover:text-info">{post.title}</h3>
						<p class="text-sm text-gray-400 mb-2">{post.date} · {post.author}</p>
						<p class="text-sm text-gray-500">{post.description}</p>
					</div>
					<div class="p-5 bg-base-300">
						{#if post.tags}
							<div class="flex flex-wrap gap-2">
								{#each post.tags as tag}
									<span class="badge badge-outline badge-accent">{tag}</span>
								{/each}
							</div>
						{/if}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
