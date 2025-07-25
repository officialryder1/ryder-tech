<script>
	import { Mail, MapPin, User, Layers3 } from '@lucide/svelte';
    import { fade, fly } from 'svelte/transition';

	let name = '';
	let email = '';
	let location = '';
	let selectedSkill = '';
	let submitted = false;
    let loading = false;

	const skills = [
		'Web Development',
		'Mobile Development',
		'Content Creation',
		'SEO & Digital Marketing',
		'UI/UX Design',
		'Brand Strategy',
		'Video Editing',
		'Copywriting',
		'Project Management'
	];

	async function handleSubmit(e) {
		e.preventDefault();

		if (name && email && location && selectedSkill) {
			const formData = new FormData();
			formData.append('name', name);
			formData.append('email', email);
			formData.append('location', location);
			formData.append('skill', selectedSkill);
            loading = true;

			try {
				const res = await fetch('https://formspree.io/f/mzzvenwe', {
					method: 'POST',
					body: formData,
					headers: {
						Accept: 'application/json'
					}
				});

				if (res.ok) {
					submitted = true;
					name = '';
					email = '';
					location = '';
					selectedSkill = '';
				} else {
					alert('Submission failed. Please try again.');
				}
			} catch (err) {
				console.error(err);
				alert('An error occurred.');
			} finally {
                loading = false;
            }
		} else {
			alert('Please fill in all fields.');
		}
	}
</script>

<style>
	.glass {
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}
</style>

<section class="min-h-screen px-4 py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white" in:fade={{duration:700,}} out:fly={{ y: 100, duration: 300 }}>
	<div class="max-w-3xl mx-auto text-center mb-12">
		<h2 class="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-green-300">Acquire a Digital Skill</h2>
		<p class="text-gray-300 text-lg">Choose a skill to start your tech journey. We’ll follow up via email shortly after.</p>
	</div>

	<form
		on:submit={handleSubmit}
		class="glass max-w-2xl mx-auto rounded-2xl shadow-lg p-8 md:p-10 space-y-6 animate-fade-in-up"
	>
		<!-- Name -->
		<div class="form-control">
			<label class="label text-sm font-semibold">Full Name</label>
			<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
				<User class="w-5 h-5 text-green-400" />
				<input
					type="text"
					bind:value={name}
					class="bg-transparent flex-1 outline-none text-white placeholder:text-gray-400"
					placeholder="Your name"
				/>
			</div>
		</div>

		<!-- Email -->
		<div class="form-control">
			<label class="label text-sm font-semibold">Email Address</label>
			<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
				<Mail class="w-5 h-5 text-green-400" />
				<input
					type="email"
					bind:value={email}
					class="bg-transparent flex-1 outline-none text-white placeholder:text-gray-400"
					placeholder="Your email"
				/>
			</div>
		</div>

		<!-- Location -->
		<div class="form-control">
			<label class="label text-sm font-semibold">Location</label>
			<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
				<MapPin class="w-5 h-5 text-green-400" />
				<input
					type="text"
					bind:value={location}
					class="bg-transparent flex-1 outline-none text-white placeholder:text-gray-400"
					placeholder="City, Country"
				/>
			</div>
		</div>

		<!-- Skill -->
		<div class="form-control">
			<label class="label text-sm font-semibold">Skill to Learn</label>
			<div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md">
				<Layers3 class="w-5 h-5 text-green-400" />
				<select
					bind:value={selectedSkill}
					class="bg-transparent flex-1 outline-none text-white placeholder:text-gray-400"
				>
					<option disabled value="">Select a skill</option>
					{#each skills as skill}
						<option class="bg-gray-900 text-white">{skill}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Submit -->

        {#if loading}
            <button class="btn bg-green-500 w-full" disabled>
                <span class="loading loading-spinner loading-lg"></span>
                Submitting...
            </button>
        {:else}
		    <button type="submit" class="btn bg-green-500 w-full">Submit Application</button>
        {/if}

		{#if submitted}
			<p class="text-green-400 font-medium text-center mt-4 animate-fade-in-up">🎉 Submission received! We'll reach out shortly.</p>
		{/if}
	</form>
</section>
