<script>
    import { updated } from "$app/state";
    
    let {message = "A new version is available now"} = $props()

</script>

{#if updated.current}
    <div class="alert alert-info flex justify-end">
         <p>{message}</p>

        <button onclick={() => location.reload()} class="btn">
            reload the page
        </button>
    </div>
{/if}