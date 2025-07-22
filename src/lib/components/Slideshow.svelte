<script lang="ts">
  import Slide1 from '$lib/assets/slideshow/1.jpg';
  import Slide2 from '$lib/assets/slideshow/2.jpg';
  import Slide3 from '$lib/assets/slideshow/3.jpg';
  import Slide4 from '$lib/assets/slideshow/4.jpg';

  import ArrowLeft from '$lib/svg/ArrowLeft.svelte';
  import ArrowRight from '$lib/svg/ArrowRight.svelte';

  const slideshow = [Slide1, Slide2, Slide3, Slide4];

  let selected = $state(0);
</script>

<div class="relative flex flex-row">
  <button
    onclick={() =>
      (selected = ((selected % slideshow.length) - 1 + slideshow.length) % slideshow.length)}
    class="absolute left-0 flex h-full w-8 items-center justify-center rounded-l-sm bg-stone-800/50 opacity-50 duration-100 hover:cursor-pointer hover:opacity-100"
    ><ArrowLeft /></button
  >
  <img class="w-full rounded-sm" src={slideshow[selected]} alt="Slideshow" />
  <button
    onclick={() => (selected = (selected + 1) % slideshow.length)}
    class="absolute right-0 flex h-full w-8 items-center justify-center rounded-r-sm bg-stone-800/50 opacity-50 duration-100 hover:cursor-pointer hover:opacity-100"
    ><ArrowRight /></button
  >
</div>
