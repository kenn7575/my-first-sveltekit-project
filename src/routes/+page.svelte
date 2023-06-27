<script>
	import { ImagePlaceholder, TextPlaceholder, Skeleton } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Home page</h1>
<div class="overflow-scroll pb-16">
	<Skeleton class="my-8" />
	<Skeleton class="my-8" />

	<ImagePlaceholder class="my-8" />
	<TextPlaceholder class="my-8" />
</div>

<style>
	h1 {
		width: 100%;
	}
</style>
