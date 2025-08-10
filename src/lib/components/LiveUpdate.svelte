<script>
    import { updated } from "$app/state";
    
    let {message = "A new version is available now"} = $props()

</script>

{#if updated.current}
    <div class="alert alert-success flex justify-between items-center">
         <p>{message}.</p>

        <button onclick={() => location.reload()} class="btn btn-rounded">
            reload the page
        </button>
    </div>
{/if}