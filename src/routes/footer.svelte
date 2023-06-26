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

<Footer class="w-full bg-primary-100 dark:bg-primary-700 " footerType="socialmedia">
	<div class="md:flex md:justify-between">
		<div class="mb-6 md:mb-0">
			<FooterBrand
				spanClass="elf-center text-2xl font-semibold whitespace-nowrap text-primary-900 dark:text-primary-100 "
				href="/"
				src="https://i.pinimg.com/originals/6b/28/d7/6b28d7fb925370efd08537f2cf29be78.png"
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
					<FooterLink aClass="text-primary-400 dark:text-primary-200" liClass="mb-4" href="/"
						>Facebook</FooterLink
					>
					<FooterLink aClass="text-primary-400 dark:text-primary-200" liClass="mb-4" href="/"
						>Instagram</FooterLink
					>
					<FooterLink aClass="text-primary-400 dark:text-primary-200" liClass="mb-4" href="/"
						>Snapchat</FooterLink
					>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Sider</h2>
				<FooterLinkGroup>
					<FooterLink
						aClass="text-primary-400 dark:text-primary-200"
						liClass="mb-4"
						href="/strikning">strikning</FooterLink
					>
					<FooterLink aClass="text-primary-400 dark:text-primary-200" liClass="mb-4" href="/syning"
						>syning</FooterLink
					>
					<FooterLink aClass="text-primary-400 dark:text-primary-200" liClass="mb-4" href="/om"
						>Om mig</FooterLink
					>
				</FooterLinkGroup>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Kontakt</h2>
				<FooterLinkGroup>
					<FooterLink
						aClass="text-primary-400 dark:text-primary-200"
						liClass="mb-4"
						href="mailto:sissi@tdcadsl.dk">sissi@tdcadsl.dk</FooterLink
					>
					<FooterLink
						aClass="text-primary-400 dark:text-primary-200"
						liClass="mb-4"
						href="tlf:20301551">+45 20 30 15 51</FooterLink
					>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-primary-500 sm:mx-auto lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright
			spanClass="text-primary-600 dark:text-primary-300"
			aClass="text-primary-900 dark:text-primary-100"
			href="/"
			by="sissi.dk"
		/>
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href="/" class="text-primary-800 dark:text-primary-50">
				<i class="fa-brands fa-facebook" />
			</FooterIcon>
			<FooterIcon href="/" class="text-primary-800 dark:text-primary-50">
				<i class="fa-brands fa-instagram" />
			</FooterIcon>
			<FooterIcon href="/" class="text-primary-800 dark:text-primary-50">
				<i class="fa-brands fa-snapchat" />
			</FooterIcon>
		</div>
	</div>
</Footer>

<style>
</style>
