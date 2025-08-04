<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Support Us | RyderTech</title>
  <meta name="description" content="Help us grow RyderTech. Your support fuels our mission to provide innovative tech services and tools." />
</svelte:head>

<section class="min-h-screen px-6 py-16 max-w-3xl mx-auto text-center" transition:fade>
  <h1 class="text-4xl font-bold text-green-400 mb-6">Support Our Mission 🚀</h1>

  <p class="text-base-content/80 text-lg leading-relaxed mb-10">
    RyderTech is on a mission to help small businesses and startups thrive by providing smart, affordable, and innovative digital solutions.
    Your support means the world to us — whether it’s a donation, spreading the word, or offering collaboration opportunities.
  </p>

  <!-- Support Options -->
  <div class="grid gap-8 sm:grid-cols-2">
    <!-- Option 1: Donate -->
    <div class="bg-base-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h2 class="text-xl font-semibold mb-3">💳 Make a Donation</h2>
      <p class="text-sm text-base-content/70 mb-4">
        Every contribution helps us grow our tools, improve support, and reach more businesses.
      </p>
      <a href="https://paystack.shop/pay/rydertech" target="_blank" class="btn btn-primary btn-sm">
        Donate Now
      </a>
    </div>

    <!-- Option 2: Share -->
    <div class="bg-base-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h2 class="text-xl font-semibold mb-3">📣 Share Our Mission</h2>
      <p class="text-sm text-base-content/70 mb-4">
        Spread the word on social media and help us reach more amazing people like you.
      </p>
      <button class="btn btn-outline btn-sm" on:click={() => navigator.clipboard.writeText(window.location.href)}>
        Copy Page Link
      </button>
    </div>

    <!-- Option 3: Partner With Us -->
    <div class="bg-base-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h2 class="text-xl font-semibold mb-3">🤝 Partner With Us</h2>
      <p class="text-sm text-base-content/70 mb-4">
        Got a business idea or want to work together? Let’s talk.
      </p>
      <a href="../#contact" class="btn btn-accent btn-sm">Get in Touch</a>
    </div>

    <!-- Option 4: Volunteer -->
    <div class="bg-base-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      <h2 class="text-xl font-semibold mb-3">🙌 Volunteer</h2>
      <p class="text-sm text-base-content/70 mb-4">
        Want to help out with outreach, writing, or tech? We’d love your input.
      </p>
      <a href="mailto:officialvictor@gmail.com" class="btn btn-secondary btn-sm">Email Us</a>
    </div>
  </div>

  <div class="mt-16 text-sm text-base-content/60">
    ❤️ Thank you for supporting RyderTech. Together, we build a better digital future.
  </div>
</section>
