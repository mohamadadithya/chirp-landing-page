<script>
	import SignInButton from './../components/SignInButton.svelte';
	import Container from './../components/Container.svelte';
	import FeatureCard from '../components/FeatureCard.svelte';
	import TestimonialCard from '../components/TestimonialCard.svelte';
	import OfferCard from '../components/OfferCard.svelte';
	import Navbar from '../components/Navbar.svelte';

	const avatars = [
		'userAvatar01.svg',
		'userAvatar02.svg',
		'userAvatar03.svg',
		'userAvatar04.svg',
		'userAvatar05.svg',
		'userAvatar06.svg',
		'userAvatar07.svg',
		'userAvatar08.svg',
		'userAvatar09.svg'
	];
	avatars.reverse();

	const features = [
		{
			icon: '📈',
			name: 'Analytics',
			description: `We constantly monitor your audience as it grows -- so you can Tweet when your followers are most
		likely to be online and ready to engage with your content.`
		},
		{
			icon: '🤓',
			name: 'Smart Analyzer',
			description: `Chirp automatically recognizes your followers' most active times and automatically sends you notifications if you're missing out on an oppoturnity.`
		},
		{
			icon: '📅',
			name: 'Scheduled Your Tweets',
			description: `Quality Tweets drive tons of engagement. With Chirp, you can write tweets in an advace and schedule them when your audience is most likely to read.`
		},
		{
			icon: '🔆',
			name: 'Dark Mode',
			description: `Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease at all times.`
		}
	];

	const testimonials = [
		{
			avatar: 'userAvatar01.svg',
			name: 'Sara May',
			username: '@sara_may',
			tweet: `I just tried out @chirp and it's amazing, love all the analytics I can see.`,
			like: 2
		},
		{
			avatar: 'userAvatar07.svg',
			name: 'Jack Scott',
			username: '@jackscott_',
			tweet: `I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.`,
			like: 32
		},
		{
			avatar: 'userAvatar08.svg',
			name: 'Jessica May',
			username: '@jmay98',
			tweet: `Absolutely love everything about Chirp, from the design to how everything works smoothly.`,
			like: 221
		}
	];

	let sectionOffset;
</script>

<svelte:head>
	<title>Chirp</title>
</svelte:head>

<Navbar {sectionOffset} />
<section class="pt-32 bg-vista-white pb-12">
	<Container classes="grid md:grid-cols-1 lg:grid-cols-2 gap-16">
		<div class="order-2 lg:order-1 mb-4 md:mb-0 lg:pt-10">
			<h1 class="text-5xl font-bold mb-4">Twitter analytics taken to a whole new level.</h1>
			<p class="text-gray-500 mb-3">
				Chirp is a suite of Twitter analytics that will help you better understand your audience,
				which tweets they like, and most importantly, when they are most active on Twitter.
			</p>
			<SignInButton classes="w-full md:w-auto text-center mb-4 md:text-left md:mb-0" />
			<a href="/" class="ml-4 text-dodger-blue font-bold block md:inline w-full text-center"
				>Learn more <span class="ml-2">&RightArrow;</span></a
			>
			<div class="flex mt-6 mb-4">
				{#each avatars as avatar, i}
					<img src={`Assets/${avatar}`} class="-mr-6" alt={`userAvatar${i}`} />
				{/each}
			</div>
			<p class="text-gray-500 lg:pr-40">
				Join <span class="text-dodger-blue font-bold">195</span> others who have analyzed their
				followers and scheduled <span class="text-dodger-blue font-bold">1342</span> tweets.
			</p>
		</div>
		<img src="Assets/Hero Image (Desktop View).png" class="w-full order-1 lg:order-2" alt="Hero" />
	</Container>
</section>
<section class="py-16" bind:offsetHeight={sectionOffset}>
	<Container>
		<h1 class="text-4xl font-bold mb-8">Features that help you Tweet smarter.</h1>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each features as feature}
				<FeatureCard {feature} />
			{/each}
		</div>
	</Container>
</section>
<section class="py-16 bg-iceberg">
	<Container>
		<h1 class="text-4xl font-bold mb-8">What our customers say</h1>
		<div class="grid lg:grid-cols-3 gap-8">
			{#each testimonials as testimonial}
				<TestimonialCard {testimonial} />
			{/each}
		</div>
	</Container>
</section>
<section class="py-16">
	<Container classes="grid place-items-center">
		<div class="text-center mb-8">
			<h1 class="font-bold text-4xl mb-3">One simple price plan</h1>
			<p class="text-gray-500">
				Start growing your Twitter account by analizing your follower's patterns.
			</p>
		</div>
		<OfferCard />
	</Container>
</section>
<footer class="bg-iceberg py-6">
	<Container classes="block md:flex justify-between items-center">
		<a href="/" class="italic font-bold text-dodger-blue text-2xl" aria-label="Logo">Chirp</a>
		<ul class="flex items-center mt-4 md:mt-0">
			<li class="mr-6">
				<img src="Assets/Twitter (Black).svg" alt="Twitter" />
			</li>
			<li class="mr-6">
				<a href="/">Privacy Policy</a>
			</li>
			<li>
				<a href="/">Terms of Use</a>
			</li>
		</ul>
	</Container>
</footer>
