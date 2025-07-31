<script>
  import CardDetail from '$lib/components/blog/cardDetail.svelte';
  
  let { data } = $props();
  let post = $state(data.post.metadata)


  

</script>

<CardDetail title={data.post.metadata.title} description={post.description} image={post.image} date={data.post.metadata.date} author={post.author} tags={post.tags}>
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