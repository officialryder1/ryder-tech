<script>
  import * as Card from '$lib/components/ui/card/index.js';
  let { data } = $props();    
  console.log(data);
</script>

<h1 class="text-2xl font-bold mb-6">Latest Posts</h1>

<div class="space-y-6">
  {#each data.posts as post}
    <a href={post.path} class="block border p-4 rounded-lg hover:bg-accent transition">
      <h2 class="text-xl font-semibold">{post.title}</h2>
      <p class="text-sm text-muted-foreground">{post.date}</p>
      <p class="mt-2 text-muted-foreground line-clamp-2">{post.description}</p>
    </a>
  {/each}
</div>
