<script>
    import { fade } from "svelte/transition";
	let { title, image, date, description, tags, author, children } = $props()
    
    const formattedDate = new Date(date).toISOString(); // ISO format for structured data
	const displayDate = new Date(date).toLocaleDateString(); // For visible date
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description || ''} />
    <meta name="author" content={author || 'RyderTech'} />

    <!-- Open Graph / Facebook-->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description || ''} />
    {#if image}
        <meta property="og:image" content={image} />
    {/if}

    <!-- Twitter         -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description || ''} />
    {#if image}
        <meta name="twitter:image" content={image} />
    {/if}

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
        {`
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${title}",
            "image": "${image || 'https://via.placeholder.com/150'}",
            "datePublished": "${formattedDate}",
            "author": {
                "@type": "Person",
                "name": "${author || 'RyderTech'}"
            },
            "description": "${description || ''}"
            "datePublished": "${formattedDate}",
        }
        `}
    </script>

</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-10 prose prose-sm sm:prose-base lg:prose-lg prose-headings:text-white" transition:fade={{ duration: 300 }}>
	<!-- Header Image -->
	<!-- Title and Meta -->
	<header class="mb-6">
		<h1 class="text-3xl sm:text-5xl font-bold mb-2">{title}</h1>
        <div class="flex items-center gap-4 text-sm text-base-content/60">
			{#if author}
				<span>👤 {author}</span>
			{/if}
			<span>📅 {new Date(date).toLocaleDateString()}</span>
		</div>
        {#if image}
            <img src={image} alt={title} class="w-full rounded-lg mb-8 object-cover h-72 sm:h-96" />
        {/if}
		<p class="text-base-content/70 mb-1">{description}</p>
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
