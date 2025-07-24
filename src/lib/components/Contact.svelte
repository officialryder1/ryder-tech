<script>
	import { goto } from '$app/navigation';
    import {Phone, MessageCircle, Mail, Instagram, X, Facebook, Twitter} from '@lucide/svelte';

    let name = $state('')
    let email = $state('')
    let message = $state('')
    let submitted = $state(false)
    let loading = $state(false);

     async function handleSubmit(e) {
        e.preventDefault();
        if (name && email && message) {
            loading = true;
            try {
                const response = await fetch('https://formspree.io/f/mzzvenwe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                })

                if(response.ok){
                    submitted = true
                    console.log('Form submitted:', { name, email, message });

                    // Rest the form fields
                    name = '';
                    email = '';
                    message = '';
                } else {
                    console.error('Form submission failed:', response.statusText);
                    alert('There was an error submitting your form. Please try again later.');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was an error submitting your form. Please try again later.');
            } finally {
                loading = false;
            }
            
            
        } else {
            alert('Please fill in all fields.');
        }
    }
</script>

<svelte:head>
    <title>Contact - RyderTech</title>
    <meta name="description" content="Get in touch with RyderTech for web design, development, and digital marketing services.">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.ico">
</svelte:head>

<section class="min-h-screen bg-base-100 text-base-content px-6 py-20" id="contact">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-4xl font-bold text-center mb-4 text-green-400 shadow-lg shadow-accent-content">Get in Touch</h2>
		<p class="text-center text-lg mb-12">Reach out to us via any of the platforms below or send a message directly.</p>

		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Info -->
			<div class="space-y-6">
				<div class="flex items-center space-x-4">
					<Phone class="w-6 h-6 text-green-400" />
					<span class="font-medium">Business WhatsApp: <a href="https://wa.me/2349033147769" class="text-green-400">+234 903 314 7769</a></span>
				</div>
				<div class="flex items-center space-x-4">
					<Mail class="w-6 h-6 text-green-400" />
					<span class="font-medium">Email: <a href="mailto:officialvictor07@gmail.com"class="text-green-400">officialvictor07@gmail.com</a></span>
				</div>
               
				<div class="flex items-center space-x-4">
					<MessageCircle class="w-6 h-6 text-green-400" />
					<span class="font-medium">Live Chat: <a href="/" class="text-green-400">Start Chat</a></span>
				</div>

				<!-- Socials -->
				<div class="mt-6 flex space-x-6">
					<a href="https://x.com/official_ryder0" target="_blank" aria-label="Twitter"><X class="w-6 h-6 hover:text-blue-400 transition" /></a>
					<a href="https://facebook.com" target="_blank" aria-label="Facebook"><Facebook class="w-6 h-6 hover:text-blue-500 transition" /></a>
					<a href="https://instagram.com" target="_blank" aria-label="Instagram"><Instagram class="w-6 h-6 hover:text-orange-400 transition" /></a>
				</div>
			</div>

			<!-- Feedback Form -->
			<form class="bg-base-200 p-8 rounded-lg shadow-md space-y-4" onsubmit={handleSubmit} method="POST">
                {#if submitted}
                    <div class="alert alert-success">
                        <span>Thank you for your message! We'll get back to you soon.</span>
                    </div>
                {/if}
				<h3 class="text-2xl font-semibold mb-4 text-green-500">Send Us a Message</h3>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<label class="label"><span class="label-text">Name</span></label>
					<input bind:value={name} name="name" type="text" class="input input-bordered w-full" placeholder="Your name" />
				</div>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<label class="label"><span class="label-text">Email</span></label>
					<input bind:value={email} name="email" type="email" class="input input-bordered w-full" placeholder="you@example.com" />
				</div>
				<div>
					<!-- svelte-ignore a11y_label_has_associated_control -->
					<label class="label"><span class="label-text">Message</span></label>
					<textarea bind:value={message} name="message" class="textarea textarea-bordered w-full" rows="5" placeholder="Your message..."></textarea>
				</div>
                {#if loading}
                    <button class="btn bg-green-500 w-full" disabled>
                        <span class="loading loading-spinner loading-lg"></span>
                        Sending...
                    </button>
                {:else}
				    <button type="submit" class="btn bg-green-500 w-full">Send Message</button>
                {/if}
			</form>
		</div>
	</div>
</section>