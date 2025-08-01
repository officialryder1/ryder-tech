<script>
    let current = $state(0)
    const intervalTime = 5000


	const testimonials = [
		{
			name: 'Amb Ken Nwakanma.',
			role: "Founder, Sogca int'l",
			image: '/logos/testimony.jpeg',
			quote:
				"Ryder Tech completely transformed our website and digital presence. Their team is creative, responsive, and truly understands branding.",
		},
		{
			name: 'Victor Onuorah',
			role: 'CTO, CoupleQuest',
			image: '/logos/testimony.jpeg',
			quote:
				"We've seen a 200% increase in engagement since launching our new site. They're the best agency we've worked with.",
		},
		{
			name: 'Amara Benson',
			role: 'CEO, GlowEdge',
			image: '/logos/testimony.jpeg',
			quote:
				"I can't recommend Ryder Tech enough! They handled everything from design to deployment with such professionalism.",
		},
	];

    const rotate = () => {
        setInterval(() => {
            current = (current + 1) % testimonials.length;
        }, intervalTime);
    }

    const goTo = (index) => {
        current = index;
        clearInterval(rotate);
        rotate();
    }

    $effect(() => {
        rotate();
    });
</script>


<section class="py-20 bg-base-200  relative overflow-hidden">
	<div class="max-w-5xl mx-auto px-4 text-center">
		<h2 class="text-4xl font-bold mb-10 text-green-400 tracking-tighter sm:tracking-tighter md:tracking-tighter shadow-primary shadow-2xl">What Our Clients Love About Our Work</h2>

		<!-- Testimonials Wrapper -->
		<div class="relative h-[300px] sm:h-[350px] transition-all duration-500">
			{#each testimonials as t, i}
				<div
					class="absolute top-0 left-0 w-full transition-opacity duration-700 ease-in-out flex flex-col items-center px-6 md:px-12"
					style="opacity: {current === i ? 1 : 0}; transform: translateY({current === i ? '0' : '20px'});">
					<img src={t.image} alt={t.name} class="w-24 h-24 rounded-full shadow-lg mb-4 border-4 border-green-400" />
					<p class="text-lg italic max-w-xl">"{t.quote}"</p>
					<h3 class="mt-4 text-xl font-semibold text-green-300">{t.name}</h3>
					<p class="text-s">{t.role}</p>
                    
				</div>
			{/each}
		</div>

        <!-- Dot Indicators -->
		<div class="mt-10 flex justify-center gap-3">
			{#each testimonials as _, index}
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<!-- svelte-ignore event_directive_deprecated -->
				<button
					class="w-4 h-4 rounded-full border-2 border-green-500 transition-all duration-300"
					class:bg-green-400={current === index}
					class:bg-transparent={current !== index}
					on:click={() => goTo(index)}
					aria-label={`Go to testimonial ${index + 1}`}
				/>
			{/each}
		</div>
	</div>
</section>
<style>

    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    

</style>