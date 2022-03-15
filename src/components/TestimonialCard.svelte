<script>
	export let testimonial;
</script>

<div class="bg-white p-6 rounded-md h-fit">
	<div class="flex justify-between mb-3">
		<div class="flex items-center">
			<img src={`Assets/${testimonial.avatar}`} class="mr-3" alt={testimonial.name} />
			<div>
				<p class="font-bold">{testimonial.name}</p>
				<p class="text-gray-500 text-sm">{testimonial.username}</p>
			</div>
		</div>
		<img src="Assets/Twitter (Blue).svg" alt="Twitter" />
	</div>
	<p class="text-gray-500 mb-4">{testimonial.tweet}</p>
	<div class="flex justify-between text-gray-500">
		<button>
			<img src="Assets/Like.svg" class="inline mr-1" alt="Like" />
			{testimonial.like}
		</button>
		<p aria-label="Tweet date">March 2, 2021</p>
	</div>
</div>
