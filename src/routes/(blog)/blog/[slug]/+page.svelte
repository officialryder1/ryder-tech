<script>
  import { onMount, onDestroy } from 'svelte';
  import CardDetail from '$lib/components/blog/cardDetail.svelte';
  import SharePost from '$lib/components/blog/sharePost.svelte';
  let { data } = $props();
  let post = $state(data.post.metadata)
 
  let path = $state('')
  let url = $state('')

  onMount(() => {
	path = data.slug;
	url = 'https://rydertech.pages.dev/blog/' + path
  });

  onDestroy(() => {
	path = '';
	url = '';
  }
  );
</script>

<svelte:head>
  <title>{post.title} - RyderTech Blog</title>
  <meta name="description" content={post.description}>
  <meta property="og:title" content={post.title}>
  <meta property="og:description" content={post.description}>
  <meta property="og:image" content={post.image || 'https://via.placeholder.com/150'}>
  <meta property="og:url" content={url}>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={post.title}>
  <meta name="twitter:description" content={post.description}>
  <meta name="twitter:image" content={post.image || 'https://via.placeholder.com/150'}>
  <link rel="canonical" href={url}>
  <link rel="alternate" type="application/rss+xml" href="/blog/feed.xml" title="RyderTech Blog RSS Feed">
  <link rel="alternate" type="application/atom+xml" href="/blog/feed.atom" title="RyderTech Blog Atom Feed">
</svelte:head>

<CardDetail title={post.title} description={post.description} image={post.image} date={data.post.metadata.date} author={post.author} tags={post.tag} {url}>
  <!-- Markdown Content -->
	<section class="blog-content">
		<!-- svelte-ignore svelte_component_deprecated -->
		<svelte:component this={data.post.default} />
	</section>
	
</CardDetail>


<style>
	.blog-content :global(p) {
		margin-bottom: 1.25rem;
	}
	.blog-content :global(img) {
		margin: 1rem 0;
		border-radius: 0.5rem;
	}
</style>