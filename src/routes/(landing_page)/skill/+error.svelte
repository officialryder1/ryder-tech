<script>
    import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<p>Sorry, something went wrong while trying to load the page.</p>