<script lang="ts">
	import '../app.css';
	import Transition from '../components/transition.svelte';

	export let data;
</script>

<Transition {data}>
	<div class="flex flex-col h-screen">
		<main>
			<slot />
		</main>
	</div>
</Transition>
