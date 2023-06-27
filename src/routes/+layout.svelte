<script lang="ts">
	import DefaultSidebar from './default-sidebar.svelte';
	import Footer from './footer.svelte';
	import MediaQuery from 'svelte-media-queries';
	import '../app.postcss';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import MobileSidebar from './mobile-sidebar.svelte';

	import './styles.css';

	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}
</script>

<div class="app">
	<MediaQuery query="(max-width: 850px)" let:matches>
		{#if matches}
			<header>
				<MobileSidebar />
			</header>
		{:else}
			<header>
				<DefaultSidebar />
			</header>
		{/if}
		<div class="content">
			<main>
				<slot />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	</MediaQuery>
</div>

<style>
	.app {
		display: flex;
		min-height: 100vh;
	}
	.content {
		width: 100%;
		max-height: 100vh;
		overflow-y: auto;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		box-sizing: border-box;
	}
	header {
		height: 100%;
	}
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
</style>
