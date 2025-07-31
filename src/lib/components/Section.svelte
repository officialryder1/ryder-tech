<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { fade } from 'svelte/transition';

    let {title, subtitle, children} = $props();

</script>

<svelte:head>
    <title>About - RyderTech</title>
    <meta name="description" content="Learn more about RyderTech, our mission, and how we can help you grow your business online.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>
<section class="py- bg-base-200 text-white px-4 md:px-12 lg:px-20" id="about">
  <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    <!-- Left: Animated Image -->
    <div class="w-full md:w-1/2 animate-pulse">
      <img src="/logos/web-designs-with-trophy.png.webp" loading="lazy" alt="Team working" class="w-full max-w-md mx-auto drop-shadow-xl shadow-2xl shadow-green-400" />
    </div>

    <!-- Right: Text Content -->
    <div class="w-full md:w-1/2 text-center md:text-left">
      <h2 class="text-4xl font-extrabold mb-4 animate-fade-in-down text-green-400  shadow-2xl shadow-accent-content">Empowering Your Digital Presence</h2>
      <p class="text-gray-200 mb-8 leading-relaxed animate-fade-in-up">
        At Ryder Tech, we don’t just build websites — we craft digital experiences that captivate, convert, and connect.
      </p>

      <!-- Feature List -->
      <div class="space-y-6">
        <div class="flex items-start gap-4 animate-fade-in-up">
          <div class="bg-green-400 animate-ping p-3 rounded-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-green-300">Responsive Design</h3>
            <p class="text-gray-200">Your website will look amazing on every screen size.</p>
          </div>
        </div>

        <div class="flex items-start gap-4 animate-fade-in-up delay-100">
          <div class="bg-green-400 animate-spin p-3 rounded-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 8v4l3 3" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-green-300">Fast & SEO Friendly</h3>
            <p class="text-gray-200">Optimized for speed and search engine visibility.</p>
          </div>
        </div>

        <div class="flex items-start gap-4 animate-fade-in-up delay-200">
          <div class="bg-green-400 animate-pulse p-3 rounded-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12l2 2l4-4" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-bold text-green-300">Built for Growth</h3>
            <p class="text-gray-200">Scale your business with tools and strategies that evolve with you.</p>
          </div>
        </div>
      </div>
      <!-- CTA Button -->
      <div class="mt-12">
        <a href="/#contact" class="btn bg-green-500 btn-wide text-lg animate-pulse hover:scale-105 transition-transform duration-300 float-end">
          Book a Free Section
        </a>
      </div>
    </div>
  </div>
  <!-- Logo Marquee -->
  <div class="mt-16">
    <div class="text-center text-lg font-semibold mb-4 text-gray-400 shadow-lg shadow-amber-400">Trusted by brands like:</div>
    <div class="overflow-hidden whitespace-nowrap animate-marquee space-x-12 flex items-center justify-center">
      <img src="/logos/google.svg" class="h-10 grayscale hover:grayscale-0 transition duration-300" alt="google"/>
      <img src="/logos/netflix.svg" class="h-10 grayscale hover:grayscale-0 transition duration-300" alt="netflix" />
      <img src="/logos/meta.svg" class="h-10 grayscale hover:grayscale-0 transition duration-300" alt="meta"/>
      <img src="/logos/tesla.svg" class="h-10 grayscale hover:grayscale-0 transition duration-300" alt="tesla" />
      <img src="/logos/shopify.svg" class="h-10 grayscale hover:grayscale-0 transition duration-300" alt="shopify" />
    </div>
    </div>
</section>

<style>
    @keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
    @keyframes fadeInUp{
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out both;
    }
    .animate-fade-in-down {
        animation: fadeInDown 0.8s ease-out both;
    }
   
</style>