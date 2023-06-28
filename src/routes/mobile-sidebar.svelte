<script>
	import DefaultSidebar from './default-sidebar.svelte';
	import {
		Drawer,
		DarkMode,
		CloseButton,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	let hidden2 = true;
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<div class="text-center">
	<button
		class:rotate-90={!hidden2}
		class="absolute text-3xl bg-transparent top-2 right-2"
		on:click={() => {
			hidden2 = !hidden2;
		}}><i class="fa-solid fa-bars" /></button
	>
</div>
<Drawer
	divClass="relative h-screen overflow-y-auto z-50  bg-primary-200 dark:bg-primary-900"
	transitionType="fly"
	{transitionParams}
	bind:hidden={hidden2}
	id="sidebar2"
	width="w-64"
>
	<div class="absolute -right-2 top-2 pr-6">
		<CloseButton
			on:click={() => (hidden2 = true)}
			class="hello_world text-primary-500 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700  "
		/>
	</div>

	<DefaultSidebar
		on:message={() => {
			hidden2 = true;
		}}
	/>
</Drawer>
