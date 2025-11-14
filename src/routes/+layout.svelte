<script lang="ts">
	let { children } = $props();
</script>

<a href="/a">Go to Route A</a>
<br />
<a href="/b">Go to Route B</a>

{@render children()}
