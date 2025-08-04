<script>
    export let title = "Blog Title";
    export let description = "This is a brief description of the blog post.";
    export let date = "2025-07-28";
    export let image = "https://via.placeholder.com/150"; 
    export let tags = [];
    export let author = "Author Name";

    function shortDescription(desc) {
        return desc.length > 10 ? desc.substring(0, 100) + '...' : desc;
    }
</script>
<div class="card p-3 sm:w-full md:w-80 lg:w-96 bg-base-30 h-[350px] overflow-hidden shadow-lg bg-base-200 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-accent-content">
    <div class="card-image">
        <!-- svelte-ignore a11y_mi  sing_attribute -->
        <figure class="h-35 overflow-hidden">
            <img src={image} alt={title} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" fetchpriority="high">
        </figure>
    </div>
    <div class="category text-green-400 tracking-tight mb-5 mt-2"> {title} </div>
    <div class="heading font-bold tracking-tight leading-tight"> {shortDescription(description)}
        <div class="author"> By <span class="name">{author}</span> {date}</div>
    </div>
    {#if tags}
		<div class="mt-5 flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="badge badge-outline badge-accent">{tag}</span>
			{/each}
		</div>
	{/if}

</div>

<style>

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 0 0;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}


.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}

</style>