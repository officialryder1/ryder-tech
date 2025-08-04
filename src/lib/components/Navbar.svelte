<script>
    import {fade, fly} from 'svelte/transition';
    import { User } from '@lucide/svelte';

	import ThemeToggler from './ThemeToggler.svelte';
	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed z-50 w-full px-4 py-3 flex justify-between items-center bg-base-100/70 sm:bg-base-300/70 shadow-lg transition-all duration-300 ease-in-out">
	<!-- Brand -->
	<a href="/"><div class="text-2xl font-extrabold tracking-wide pr-5 sm:text-2xl md:text-2xl sm:font-bold md:font-bold flex gap-2"><img src="/logos/rydertech.webp" alt="logo" class="h-[50px] rounded-b-full" loading="lazy">RyderTech</div></a>
   <ThemeToggler class="hidden sm:block" />
	<!-- Hamburger Button -->
	<button
		class="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
		on:click={toggleMenu}
		aria-label="Toggle Menu"
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div class="w-8 h-[2px] bg-white my-1 transition-all duration-300 ease-in-out"
			class:is-open={isOpen}
			class:rotate-45={isOpen}
			class:translate-y-[8px]={isOpen}
		/>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div class="w-8 h-[2px] bg-white my-1 transition-all duration-300 ease-in-out"
			class:opacity-0={isOpen}
		/>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div class="w-8 h-[2px] bg-white my-1 transition-all duration-300 ease-in-out"
			class:is-open={isOpen}
			class:-rotate-45={isOpen}
			class:-translate-y-[8px]={isOpen}
		/>
	</button>

	<!-- Desktop Menu -->
	<ul class="hidden md:flex space-x-6 text-lg font-medium pr-5">
		<li><a href="/blog" class="hover:text-green-400 uppercase ">blog</a></li>
		<li><a href="../#service" class="hover:text-green-400 uppercase tracking-wide">Services</a></li>
		<li><a href="../#about" class="hover:text-green-400 uppercase tracking-wide">About</a></li>
		<li><a href="../#contact" class="hover:text-green-400 uppercase tracking-wide ">Contact</a></li>
		<li><a href="support" class="hover:text-green-400 uppercase tracking-wide ">Support us</a></li>
        <li hidden><a href="/" class="flex btn bg-accent-content hover:bg-green-900 transition-all duration-300 text-green-400 font-bold"><User /> Login</a></li>
	</ul>

	<!-- Mobile Fullscreen Menu -->
	{#if isOpen}
		<div class="fixed inset-0 bg-[#06265d]/100 text-white flex flex-col items-center justify-center space-y-8 text-2xl font-semibold transition-all duration-500 z-40" in:fade={{ duration: 300 }} out:fly>
			<a href="/blog" on:click={toggleMenu} class="hover:text-green-500 uppercase font-bold tracking-wide">Blog</a>
			<a href="../#service" on:click={toggleMenu} class="hover:text-green-500 uppercase font-bold tracking-wide">Services</a>
			<a href="../#about" on:click={toggleMenu} class="hover:text-green-500 uppercase font-bold tracking-wide">About</a>
			<a href="../#contact" on:click={toggleMenu} class="hover:text-green-500 uppercase font-bold tracking-wide">Contact</a>
			<a href="/support" on:click={toggleMenu} class="hover:text-green-500 uppercase font-bold tracking-wide">Support us</a>
            <a href="/login" class="flex btn btn-primary btn-lg w-md hover:bg-green-700 transition-all duration-500 uppercase" on:click={toggleMenu}><User /> Login</a>
		</div>
	{/if}
</nav>

<style>
	/* Optional: Smooth transitions for rotate/translate/opacity */
	.is-open {
		transform-origin: center;
	}
</style>
