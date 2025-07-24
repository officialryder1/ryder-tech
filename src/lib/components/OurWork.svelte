<script>
    let selectedCategory = $state('all');
    let filteredProjects = $state([]);
    
    const categories = ['all', 'E-commerce', 'Fintech', 'Agency', 'Portfolio', 'SaaS']

    const projects = [
        {
			title: 'RyderX',
			category: 'Fintech',
			image: '/projects/ryderx.png',
			description: 'A seamless digital payment solution for modern businesses.',
		},
		{
			title: 'CoupleQuest',
			category: 'SaaS',
			image: '/projects/dashboard2.png',
			description: 'An immersive shopping platform with user-friendly checkout.',
		},
		{
			title: 'Sogca',
			category: 'Agency',
			image: '/projects/sogca.png',
			description: 'Smart hiring and team management for tech companies.',
		},
		{
			title: 'Glow Agency',
			category: 'Agency',
			image: '/projects/ryderx.png',
			description: 'A brand-forward agency portfolio site with animations.',
		}
    ]
    
    // filter logic
    $effect(() => {
        if (selectedCategory === 'all') {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());
        }
    });
   
</script>

<svelte:head>
	<title>Our Work - RyderTech</title>
	<meta name="description" content="Explore our portfolio of web design and development projects. See how we can help elevate your brand online.">
	<meta name="viewport" content="width=device-width, initial-scale=1">

</svelte:head>

<section class="py-20 bg-base-100 text-base-content">
	<div class="max-w-6xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-green-500">Our Work</h2>
			<p class="text-lg mt-2 text-gray-300">Explore the projects we've proudly built for our clients.</p>
		</div>

		<!-- Category Filter -->
		<div class="flex justify-center mb-10">
			<select bind:value={selectedCategory} class="select select-bordered w-full max-w-xs text-lg border-primary ">
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
		</div>

		<!-- Projects Grid -->
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project (project.title)}
				<div class="bg-base-200 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-green-400 hover:shadow-2xs">
					<img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
					<div class="p-5">
						<h3 class="text-xl font-semibold">{project.title}</h3>
						<p class="text-sm text-gray-400">{project.category}</p>
						<p class="mt-2 text-sm">{project.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>