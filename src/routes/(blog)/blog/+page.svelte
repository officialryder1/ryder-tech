<script>
    export let data;

    console.log(data)
</script>

<section class="max-w-4xl mx-auto px-4 py-10">
  <h1 class="text-4xl font-bold mb-6">Our Blog</h1>
  {#each data.posts as post}
    <a href={post.path} class="block p-4 rounded-md bg-white/10 hover:bg-white/20 mb-4 transition">
      <h2 class="text-2xl font-semibold">{post.title}</h2>
      <p class="text-sm text-gray-400">{post.date}</p>
      <p class="text-base mt-2">{post.description}</p>
    </a>
  {/each}
</section>