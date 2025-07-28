<script>
  export let data;
  console.log(data.post.metadata)
</script>

<article class="prose max-w-3xl mx-auto p-6">
    <figure class="h-48 overflow-hidden">
      <img src={data.post.metadata.image || '/placeholder.jpg'} alt={data.post.metadata.title} class="w-full h-full object-cover" loading="lazy"/>
    </figure>
  <h1 class="text-4xl font-bold">{data.post.metadata.title}</h1>
  <p></p>
  <p class="text-sm text-gray-100 mb-4">{data.post.metadata.date}</p>

  <svelte:component this={data.post.default} />
  
  <h4 class="pt-5">{data.post.metadata.description}</h4>
  <p class="card-body">{data.post.metadata.content}</p>

</article>
