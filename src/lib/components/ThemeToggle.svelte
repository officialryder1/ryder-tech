<script>
    import { onMount } from 'svelte';
    
    let theme = 'light'; // Default theme

    onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
		applyTheme();
	});

    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        applyTheme();
    }

    function applyTheme() {
        document.documentElement.setAttribute('data-theme', theme);
    }
</script>

<!-- Theme Toggle Button -->
<button
	class="btn btn-circle text-xl"
	aria-label="Toggle Theme"
	on:click={toggleTheme}
>
	{#if theme === 'light'}
		<!-- Moon Icon -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
		</svg>
	{:else}
		<!-- Sun Icon -->
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				d="M12 3v1m0 16v1m8.66-13.66l-.7.7M4.34 17.66l-.7.7M21 12h-1M4 12H3m16.66 4.66l-.7-.7M6.34 6.34l-.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
		</svg>
	{/if}
</button>