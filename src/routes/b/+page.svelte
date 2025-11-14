<script lang="ts">
	// imports
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data = $bindable() }: Props = $props();

	$effect(() => {
		(async () => {
			const routeData = await data.routeB;
			console.log('Data for Route B:', routeData.response);
		})();
	});
</script>

<h1>Route B</h1>
<p>{data.message}</p>

{#await data.routeB}
	<p class="loading">Loading data...</p>
{:then routeData}
	{#if routeData.response}
		<p>{routeData.response}</p>
		<p class="timestamp">Loaded at: {routeData.timestamp}</p>
	{:else}
		<p class="cancelled">Request was cancelled</p>
	{/if}
{:catch error}
	<p class="error">Error: {error.message}</p>
{/await}

<style>
	.loading {
		color: #666;
		font-style: italic;
	}
	.timestamp {
		color: #999;
		font-size: 0.9em;
	}
	.error {
		color: red;
	}
	.cancelled {
		color: #f90;
		font-style: italic;
	}
</style>