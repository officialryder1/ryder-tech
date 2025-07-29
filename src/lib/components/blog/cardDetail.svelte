<script>
    import { fade } from "svelte/transition";
	let { title, image, date, description, tags, author, children } = $props()
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description || ''} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-10 prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-white" transition:fade={{ duration: 300 }}>
	<!-- Header Image -->
	{#if image}
		<img src={image} alt={title} class="w-full rounded-lg mb-8 object-cover h-72 sm:h-96" />
	{/if}

	<!-- Title and Meta -->
	<header class="mb-6">
		<h1 class="text-3xl sm:text-5xl font-bold mb-2">{title}</h1>
		<p class="text-base-content/70 mb-1">{description}</p>
		<div class="flex items-center gap-4 text-sm text-base-content/60">
			{#if author}
				<span>👤 {author}</span>
			{/if}
			<span>📅 {new Date(date).toLocaleDateString()}</span>
		</div>
	</header>

	{@render children()}

	<!-- Tags -->
	{#if tags}
		<div class="mt-8 flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="badge badge-outline">{tag}</span>
			{/each}
		</div>
	{/if}
</article>


