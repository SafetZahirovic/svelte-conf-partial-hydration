<script>
	import Map from "./Map.svelte";
	export let API_KEY;

	let ready = true;
</script>

<svelte:head>
	<script defer async src="https://maps.googleapis.com/maps/api/js?key={API_KEY}&callback=initMap&v=weekly">
	</script>
</svelte:head>

{#if ready}
	<Map />
{/if}

<style>
	:global(body) {
		padding: 0;
	}
</style>
