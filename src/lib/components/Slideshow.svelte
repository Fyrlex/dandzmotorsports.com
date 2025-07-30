<script lang="ts">
  import { Carousel, CarouselIndicators } from 'flowbite-svelte';
  import Slide1 from '$lib/assets/slideshow/1.jpg';
  import Slide2 from '$lib/assets/slideshow/2.jpg';
  import Slide3 from '$lib/assets/slideshow/3.jpg';
  import Slide4 from '$lib/assets/slideshow/4.jpg';

  const slideshow = [{ src: Slide1 }, { src: Slide2 }, { src: Slide3 }, { src: Slide4 }];
</script>

<div class="max-w-4xl">
  <Carousel images={slideshow} duration={3000}>
    <CarouselIndicators />
  </Carousel>
</div>
