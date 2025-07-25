<script>
    import { ArrowBigRight, SparkleIcon, School } from '@lucide/svelte';
	import OfferModel from '$lib/components/OfferModel.svelte';
	
</script>

<div class="relative hero min-h-screen bg-cover bg-center" style="background-image: url('/hero-bg.jpg')">
	<!-- Overlay -->
	<div class="absolute inset-0 bg-gradient-to-r from-[#06265d]/90 to-[#1e3a8a]/60 backdrop-brightness-75"></div>

	<!-- Content -->
	<div class="relative z-10 hero-content text-white flex flex-col items-start px-6 md:px-16 lg:px-24 py-20">
		<div class="space-y-5 max-w-4xl animate-fadeIn mb-10">
			<!-- Small Heading with Icon -->
			<div class="flex items-center gap-2">
				<SparkleIcon class="w-6 h-6 text-green-400 animate-bounce" />
				<small class="text-sm uppercase font-bold tracking-widest text-green-300">Deluxe Web Design Agency</small>
			</div>

			<!-- Main Heading -->
			<h1 class="text-4xl sm:text-2xl  lg:text-4xl font-extrabold leading-tight tracking-tight">
				Giving Your <span class="text-primary">Brands</span> a Voice
			</h1>

			<!-- Subtext -->
			<p class="text-lg sm:text-sm text-gray-200 font-medium">
				Custom Websites, Brand Identity & Strategic Digital Marketing to elevate your business presence.
			</p>

			<!-- Description -->
			<p class="text-gray-300 max-w-md">
				We provide tailored digital solutions designed to help your brand thrive in the online world.
			</p>

			<!-- Call-to-Action Button -->
		</div>
		<div class="flex items-center gap-4">
			<OfferModel />
			<a href="/skill" class="btn btn-outline btn-secondary gap-2 hover:scale-105 transition-transform duration-300">
				Acquire a Skill
				<School class="w-5 h-5" />
			</a>

		</div>
		
        <!-- Marquee at bottom of hero -->
        
        <div class="absolute bottom-5 left-0 w-full  overflow-hidden">
           
            <div class="whitespace-nowrap animate-scroll flex gap-10 items-center px-6">
            <img loading="lazy" src="/logos/google.svg" alt="Google" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/meta.svg" alt="Meta" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/shopify.svg" alt="Shopify" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/netflix.svg" alt="Netflix" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/tesla.svg" alt="Tesla" class="h-8 grayscale hover:grayscale-0 transition" />
            <!-- Repeat logos if needed for continuous scroll -->
            <img loading="lazy" src="/logos/google.svg" alt="Google" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/meta.svg" alt="Meta" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/shopify.svg" alt="Shopify" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/netflix.svg" alt="Netflix" class="h-8 grayscale hover:grayscale-0 transition" />
            <img loading="lazy" src="/logos/tesla.svg" alt="Tesla" class="h-8 grayscale hover:grayscale-0 transition" />
            </div>
        </div>
	</div>
</div>

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
	.animate-fadeIn {
		animation: fadeIn 1.2s ease-out both;
	}

    @keyframes scroll {
        0% {
        transform: translateX(100%);
        }
        100% {
        transform: translateX(-100%);
        }
    }
    .animate-scroll {
        animation: scroll 25s linear infinite;
    }
</style>
