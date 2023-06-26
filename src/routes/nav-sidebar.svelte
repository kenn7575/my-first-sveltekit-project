<script>
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, DarkMode } from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<Sidebar>
	<SidebarWrapper
		class="h-screen flex rounded-none justify-between flex-col bg-primary-200 dark:bg-primary-900"
	>
		<SidebarGroup>
			<SidebarItem
				aClass="flex hover:no-underline items-center p-2 text-base font-normal text-primary-900 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
				href="/"
				label="Hjem"
			>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-house" />
				</svelte:fragment>
			</SidebarItem>

			<SidebarItem
				aClass="flex hover:no-underline items-center p-2 text-base font-normal text-primary-900 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
				href="strikning"
				label="Strikning"
				{spanClass}
			>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-ribbon" />
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-950 bg-primary-300 rounded-full dark:bg-primary-600 dark:text-primary-50"
						>3</span
					>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem
				aClass="flex hover:no-underline items-center p-2 text-base font-normal text-primary-900 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
				href="/syning"
				label="Sygning"
			>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-vest-patches" />
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
		<SidebarGroup border borderClass="pt-4 mt-4 border-t border-primary-500">
			<SidebarItem
				aClass="flex pointer-events-none hover:no-underline items-center p-2 text-base font-normal text-primary-900 rounded-lg dark:text-white "
				label="Darkmode"
				{spanClass}
			>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-circle-half-stroke" />
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<DarkMode
						btnClass="pointer-events-auto text-primary-500 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-700 rounded-lg text-sm p-2.5"
					/>
				</svelte:fragment>
			</SidebarItem>

			<SidebarItem
				aClass="flex hover:no-underline items-center p-2 text-base font-normal text-primary-900 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-primary-700"
				href="/om"
				label="Om mig"
			>
				<svelte:fragment slot="icon">
					<i class="fa-solid fa-circle-question" />
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>
