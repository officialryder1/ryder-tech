<script>
  let { data } = $props();    
  console.log(data);
</script>

<h1 class="text-2xl font-bold mb-6">Latest Posts</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each data.posts as post}
		<!-- You can also extract this to a component -->
		<a href={post.path} class="card bg-base-100 border shadow-md hover:shadow-lg transition">
			<figure class="h-48 overflow-hidden">
				<img src={post.image || '/placeholder.jpg'} alt={post.title} class="w-full h-full object-cover" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{post.title}</h2>
				<p class="text-sm text-base-content/70 line-clamp-3">
					{post.description || 'No description available.'}
				</p>
				<div class="card-actions justify-end">
					<button class="btn btn-sm btn-outline">Read more</button>
				</div>
			</div>
		</a>
	{/each}
</div>
