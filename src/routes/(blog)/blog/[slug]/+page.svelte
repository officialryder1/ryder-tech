<script>
  export let data;
  console.log(data.post.metadata)
</script>

<article class="prose max-w-3xl mx-auto p-6">
  <h1 class="text-4xl font-bold">{data.post.metadata.title}</h1>
  <p></p>
  <p class="text-sm text-gray-100 mb-4">{data.post.metadata.date}</p>

  <svelte:component this={data.post.default} />
  
  <p class="pt-5">{data.post.metadata.description}</p>
</article>
