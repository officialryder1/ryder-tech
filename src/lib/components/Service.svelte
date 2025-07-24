<script>
  import { X, Globe, Paintbrush, Search, PenTool, ArrowBigRight } from '@lucide/svelte';

  const services = [
    {
      icon: Globe,
      title: 'Website Design',
      description: 'Responsive and SEO-friendly websites tailored to your business needs.',
      options: ['E-commerce', 'FinTech', 'Portfolio', 'Corporate'],
      price: 'Starting from $350'
    },
    {
      icon: Paintbrush,
      title: 'Branding',
      description: 'Build a unique brand identity with logo, color palette, and tone of voice.',
      options: ['Logo Design', 'Brand Strategy', 'Rebranding'],
      price: 'Starting from $150'
    },
    {
      icon: Search,
      title: 'SEO Services',
      description: 'Rank higher on Google with technical, on-page, and content SEO.',
      options: ['Keyword Optimization', 'Backlink Strategy', 'Site Speed'],
      price: 'Starting from $100'
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Engaging blog posts, landing pages, and copywriting for conversions.',
      options: ['Landing Pages', 'Product Descriptions', 'Blog Writing'],
      price: 'Starting from $100'
    }
  ];
</script>

<svelte:head>
	<title>Our Work - RyderTech</title>
	<meta name="description" content="Explore our portfolio of web design and development projects. See how we can help elevate your brand online.">
	<meta name="viewport" content="width=device-width, initial-scale=1">

</svelte:head>

<div class=" bg-base-300 flex items-center justify-center mt-10" id="service">
    <div class="bg-white dark:bg-base-200 text-gray-800 dark:text-white w-full max-w-5xl mx-4 p-8 rounded-lg shadow-lg relative animate-fade-in-up  max-h-[90vh]">

      <h2 class="text-3xl font-bold mb-6 text-center tracking-wider shadow-lg shadow-accent-content">OUR SERVICES</h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {#each services as service}
          <div class="bg-gradient-to-tr from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div class="flex items-center gap-3 mb-4">
              <svelte:component this={service.icon} class="w-8 h-8 text-green-600 dark:text-green-400" />
              <h3 class="text-xl font-semibold">{service.title}</h3>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">{service.description}</p>
            <ul class="text-sm list-disc list-inside mb-3 space-y-1 text-gray-500 dark:text-gray-400">
              {#each service.options as option}
                <li>{option}</li>
              {/each}
            </ul>
            <p class="text-sm font-semibold text-green-700 dark:text-green-300">{service.price}</p>
          </div>
        {/each}
      </div>
    </div>
</div>