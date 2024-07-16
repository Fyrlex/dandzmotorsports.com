<script lang="ts">
	import '../app.css';
	import Transition from '../components/transition.svelte';

	export let data;
</script>

<Transition {data}>
	<div class="flex flex-col h-screen">
		<main class="flex-grow">
			<slot />
		</main>
		<footer class="h-auto text-center text-gray-200 py-5">
			© D & Z Motorsports 2024 - All rights reserved
		</footer>
	</div>
</Transition>
