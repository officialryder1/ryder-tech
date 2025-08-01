<script>
	import { browser } from '$app/environment';

	export let title = '';
	export let url = '';

	let currentUrl = '';

	if (browser) {
		currentUrl = url || window.location.href;
	}

	const encodedTitle = encodeURIComponent(title);
	const encodedUrl = encodeURIComponent(currentUrl);

	function copyToClipboard() {
		if (!browser) return;
		navigator.clipboard.writeText(currentUrl)
			.then(() => alert("🔗 Link copied to clipboard!"))
			.catch(() => alert("Failed to copy link."));
	}
</script>

{#if browser}
	<div class="mt-10 flex flex-wrap gap-3 items-center">
		<span class="font-semibold text-sm text-base-content/70">Share this post:</span>

		<!-- WhatsApp -->
		<a href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`} target="_blank" rel="noopener" class="btn btn-sm btn-success">
			WhatsApp
		</a>

		<!-- Twitter/X -->
		<a href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`} target="_blank" rel="noopener" class="btn btn-sm btn-primary">
			Twitter
		</a>

		<!-- LinkedIn -->
		<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener" class="btn btn-sm btn-info">
			LinkedIn
		</a>

		<!-- Facebook -->
		<a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener" class="btn btn-sm btn-accent">
			Facebook
		</a>

		<!-- Copy to Clipboard -->
		<button on:click={copyToClipboard} class="btn btn-sm btn-outline">
			Copy Link
		</button>
	</div>
{/if}
