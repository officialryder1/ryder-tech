<script>
  import Card from '$lib/components/blog/card.svelte';
  let { data } = $props(); 
  console.log(data.posts);  
 
</script>
<svelte:head>
  <title>Blog - Web Design & Development</title>
  <meta name="description" content="RyderTech is a leading web design and development agency specializing in creating stunning, user-friendly websites that drive results.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</svelte:head>
<h1 class="text-2xl font-bold mb-6 ">Latest Posts</h1>

<div class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6">
	{#each data.posts as post}
		<!-- You can also extract this to a component -->
		<a href={post.path}>
			<Card title={post.title} 
            description={post.description} 
            date={post.date} 
            image={post.image || 'https://via.placeholder.com/150'} 
            author ={post.author}
            tags = {post.tags}/>
		</a>
	{/each}
</div>
