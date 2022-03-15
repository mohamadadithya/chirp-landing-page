<script>
	import Container from './Container.svelte';
	import SignInButton from './SignInButton.svelte';

	export let sectionOffset;
	let navbarState = false;
	let offsetY;
</script>

<svelte:window bind:scrollY={offsetY} />

<nav
	class={`py-5 z-10 fixed top-0 w-full ${offsetY < sectionOffset ? 'bg-vista-white' : 'bg-white'}`}
>
	<Container classes="block md:flex justify-between items-center">
		<div class="flex justify-between items-center mb-4 md:mb-0">
			<a href="/" aria-label="Logo" class="text-2xl text-dodger-blue font-bold italic">Chirp.</a>
			<button type="button" class="block md:hidden" on:click={() => (navbarState = !navbarState)}>
				<img src="Assets/Hamburger Menu.svg" alt="Hamburger Menu" />
			</button>
		</div>
		<ul class={`${navbarState ? 'block' : 'hidden'} md:flex items-center`}>
			<li class="mr-5 mb-3 md:mb-0">
				<a href="/" class="text-gray-500">Home</a>
			</li>
			<li class="mr-5 mb-3 md:mb-0">
				<a href="/" class="text-gray-500">Pricing</a>
			</li>
			<li class="mr-5 mb-3 md:mb-0">
				<a href="/" class="text-gray-500">FAQ</a>
			</li>
			<li>
				<SignInButton />
			</li>
		</ul>
	</Container>
</nav>
