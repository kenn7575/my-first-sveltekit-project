<script>
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, DarkMode } from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<Sidebar>
	<SidebarWrapper class="h-screen flex justify-between flex-col">
		<SidebarGroup>
			<SidebarItem href="/" label="Hjem">
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-house" />
				</svelte:fragment>
			</SidebarItem>

			<SidebarItem label="Strikning" {spanClass}>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-ribbon" />
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
						>3</span
					>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Sygning">
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-vest-patches" />
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
		<SidebarGroup border>
			<SidebarItem label="Darkmode" {spanClass}>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-circle-half-stroke" />
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<DarkMode />
				</svelte:fragment>
			</SidebarItem>

			<SidebarItem href="/om" label="Om mig">
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-circle-question" />
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
