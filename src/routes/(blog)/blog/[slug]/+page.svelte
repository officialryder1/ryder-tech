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