<script lang="ts">
	import NavSidebar from './nav-sidebar.svelte';
	import Footer from './footer.svelte';

	import '../app.postcss';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';

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
	<header>
		<NavSidebar />
	</header>
	<div class="content">
		<main>
			<slot />
		</main>

		<footer>
			<Footer />
		</footer>
	</div>
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
