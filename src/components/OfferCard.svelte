<script>
	import SignInButton from './SignInButton.svelte';
</script>

<div class="p-6 border border-butterscotch rounded-md">
	<div class="border-b-gray-300 border-b pb-6 mb-6">
		<h2 class="text-gray-500 mb-2">Monthly</h2>
		<p class="text-5xl font-bold">
			$9<span class="text-gray-500 text-base ml-1 font-normal">/mo</span>
		</p>
	</div>
	<ul class="text-gray-500 border-b pb-6 mb-4">
		<li class="flex items-center mb-3">
			<img src="Assets/Checkmark.svg" class="mr-2" alt="Checkmark" />
			<p>Unlimited* scheduled tweets and threads.</p>
		</li>
		<li class="flex items-center mb-3">
			<img src="Assets/Checkmark.svg" class="mr-2" alt="Checkmark" />
			<p>Schedule up to 3 weeks in advance</p>
		</li>
		<li class="flex items-center">
			<img src="Assets/Checkmark.svg" class="mr-2" alt="Checkmark" />
			<p>Real-time audience analytics tracking up to 5k followers.</p>
		</li>
	</ul>
	<SignInButton classes="w-full text-center" text="Start Trial with Twitter" />
</div>
