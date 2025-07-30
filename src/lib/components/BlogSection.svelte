<script>
	// const posts = [
	// 	{
	// 		title: 'How Great Design Builds Strong Brands',
	// 		snippet: 'Discover how good design elevates brand identity and builds trust with your audience.',
	// 		image: 'https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
	// 		date: 'July 10, 2025',
	// 		author: 'Ryder Tech',
	// 		link: '/blog/design-brand'
	// 	},
	// 	{
	// 		title: 'Top 5 E-commerce Features Customers Love',
	// 		snippet: 'Learn the key features you need to implement to keep your customers coming back.',
	// 		image: 'https://images.unsplash.com/photo-1593437955835-fc8c51725430?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VvfGVufDB8fDB8fHww',
	// 		date: 'June 25, 2025',
	// 		author: 'Ryder Tech',
	// 		link: '/blog/ecommerce-features'
	// 	},
	// 	{
	// 		title: 'SEO Tips for Small Business Websites',
	// 		snippet: 'Optimize your website for search engines with these actionable SEO techniques.',
	// 		image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D',
	// 		date: 'June 14, 2025',
	// 		author: 'Ryder Tech',
	// 		link: '/blog/seo-tips'
	// 	}
	// ];

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
					{#if tags}
						<div class="mt-8 flex flex-wrap gap-2">
							{#each tags as tag}
								<span class="badge badge-outline">{tag}</span>
							{/each}
						</div>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</section>
