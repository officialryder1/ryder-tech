<script>
	import { Mail, Facebook, Twitter, Linkedin, Instagram } from '@lucide/svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-base-200 text-base-content border-t border-base-300 py-10">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
		<!-- Branding -->
		<div>
			<h2 class="text-xl font-bold mb-2">RyderTech</h2>
			<p class="text-sm opacity-70">
				Empowering businesses through modern design, development, and growth strategies.
			</p>
		</div>

		<!-- Navigation -->
		<div>
			<h3 class="font-semibold mb-2">Quick Links</h3>
			<ul class="space-y-1 text-sm">
				<li><a href="/" class="hover:underline">Home</a></li>
				<li><a href="../#about" class="hover:underline">About</a></li>
				<li><a href="/blog" class="hover:underline">Blog</a></li>
				<li><a href="../#contact" class="hover:underline">Contact</a></li>
			</ul>
		</div>

		<!-- Services -->
		<div>
			<h3 class="font-semibold mb-2">Services</h3>
			<ul class="space-y-1 text-sm">
				<li><a href="../#service" class="hover:underline">Web Development</a></li>
				<li><a href="../#service" class="hover:underline">Branding</a></li>
				<li><a href="../#service" class="hover:underline">SEO</a></li>
				<li><a href="/skill" class="hover:underline">Content Creation</a></li>
			</ul>
		</div>

		<!-- Contact & Social -->
		<div>
			<h3 class="font-semibold mb-2">Connect</h3>
			<p class="flex items-center gap-2 text-sm mb-2"><Mail size={16} /> officialvictor07@gmail.com</p>
			<div class="flex gap-3 mt-4">
				<a href="https://facebook.com" target="_blank" rel="noopener"><Facebook size={18} /></a>
				<a href="https://twitter.com" target="_blank" rel="noopener"><Twitter size={18} /></a>
				<a href="https://linkedin.com" target="_blank" rel="noopener"><Linkedin size={18} /></a>
				<a href="https://instagram.com" target="_blank" rel="noopener"><Instagram size={18} /></a>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="mt-10 border-t border-base-300 pt-6 text-center text-sm opacity-60">
		&copy; {currentYear} RyderTech. All rights reserved.
	</div>
</footer>
