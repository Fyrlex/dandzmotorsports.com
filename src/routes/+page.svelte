<script>
	import Meta from '../components/meta.svelte';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<Meta data={{ title: 'Home', url: '' }} />
</svelte:head>

<div class="container mx-auto m-8 text-gray-200 font-serif">
	<h1 class="text-5xl text-center">D & Z Motorsports</h1>
	<div class="flex flex-col lg:flex-row m-5 space-x-6">
		<div class="hidden lg:contents m-5 lg:m-0 lg:w-1/4 order-3">
			<iframe
				class="rounded-sm"
				title="Facebook Page"
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100090799030040&tabs=timeline&width=300&height=800&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
				width="300"
				height="800"
				style="border:none;overflow:hidden"
				scrolling="no"
				frameborder="0"
				allowfullscreen={true}
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></iframe>
		</div>
		<div class="order-3 m-5 lg:m-0 lg:hidden flex mx-auto">
			<iframe
				class="rounded-sm"
				title="Facebook Page"
				src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100090799030040&tabs=timeline&width=200&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
				width="200"
				height="70"
				style="border:none;overflow:hidden"
				scrolling="no"
				frameborder="0"
				allowfullscreen={true}
				allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
			></iframe>
		</div>
		<div class="lg:w-1/2 text-center order-1">
			Sample Text: A full-service automotive repair shop located in the heart of the Midwest. We
			service and repair all makes and models of vehicles. We are a family-owned and operated
			business that has been serving the community for over 20 years. Our team of experienced
			technicians is dedicated to providing you with the highest quality service at an affordable
			price. Whether you need routine maintenance or major repairs, we have the skills and expertise
			to get the job done right. Contact us today to schedule an appointment!
		</div>
		<div class="lg:w-1/4 m-5 lg:m-0 flex flex-col space-y-10 order-2">
			<div class="text-right">
				<h2 class="text-3xl text-right">Latest News</h2>
				<p>Our website has opened!</p>
			</div>
			<div class="text-right">
				<h2 class="text-3xl">Contact Us</h2>
				<div class="flex flex-row items-center justify-end space-x-1">
					<Icon icon="carbon:location" />
					<p>Winchester, VA</p>
				</div>
				<div class="flex flex-row items-center justify-end space-x-1">
					<Icon icon="carbon:phone" />
					<p>(540) 315-4562</p>
				</div>
			</div>
		</div>
	</div>
</div>
<footer class="text-gray-500 text-center">Made by Jaren G. and Elyaas R.</footer>
