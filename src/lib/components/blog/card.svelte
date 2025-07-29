<script>
    export let title = "Blog Title";
    export let description = "This is a brief description of the blog post.";
    export let date = "2025-07-28";
    export let image = "https://via.placeholder.com/150"; // Placeholder image URL

    function shortDescription(desc) {
        return desc.length > 10 ? desc.substring(0, 100) + '...' : desc;
    }
</script>
<div class="card sm:w-full md:w-80 lg:w-96 shadow-xl hover:shadow-2xl transition-all bg-base-30 h-[300px] rounded-md overflow-hidden hover:scale-105 transform duration-500">
    <div class="card-image">
        <!-- svelte-ignore a11y_mi  sing_attribute -->
        <figure class="h-35 overflow-hidden">
            <img src={image} alt={title} class="w-full h-full object-cover" loading="lazy">
        </figure>
    </div>
    <div class="category text-green-400 tracking-tight mb-5 mt-2"> {title} </div>
    <div class="heading font-bold tracking-tight leading-tight"> {shortDescription(description)}
        <div class="author"> By <span class="name">Victor</span> {date}</div>
    </div>

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