<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon
	} from 'flowbite-svelte';
</script>

<Footer class="w-full bg-primary-200 dark:bg-primary-950" footerType="socialmedia">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand
				href="/"
				src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
				alt="Logo"
				name="Sissi.dk"
			/>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
			<div>
				<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
					Sociale medier
				</h2>
				<FooterLinkGroup>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="/">Facebook</FooterLink>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="/">Instagram</FooterLink>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="/">Snapchat</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Sider</h2>
				<FooterLinkGroup>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="/strikning"
						>strikning</FooterLink
					>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="/syning">syning</FooterLink>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="/om">Om mig</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Kontakt</h2>
				<FooterLinkGroup>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="mailto:sissi@tdcadsl.dk"
						>sissi@tdcadsl.dk</FooterLink
					>
					<FooterLink aClass="text-primary-500" liClass="mb-4" href="tlf:20301551"
						>+45 20 30 15 51</FooterLink
					>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright aClass="text-primary-500" href="/" by="Flowbite™" />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
				<i class="fa-brands fa-facebook" />
			</FooterIcon>
			<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
				<i class="fa-brands fa-instagram" />
			</FooterIcon>
			<FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
				<i class="fa-brands fa-snapchat" />
			</FooterIcon>
		</div>
	</div>
</Footer>
