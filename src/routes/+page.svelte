<script>
  import Metadata from '../lib/components/Metadata.svelte';
  import LeftSidebar from '../lib/components/LeftSidebar.svelte';
  import Slideshow from '../lib/components/Slideshow.svelte';

  import { Card } from 'flowbite-svelte';
</script>

<Metadata title="Autoshop" url="" />
<div class="container mx-auto">
  <div class="my-5 grid grid-flow-row gap-10 lg:grid-flow-col">
    <div class="order-2 flex w-fit flex-col space-y-10 sm:order-1">
      <LeftSidebar />
    </div>
    <div class="order-1 w-fit space-y-10 text-center">
      <h1 class="my-3 text-left text-5xl lg:text-7xl">D & Z Motorsports</h1>
      <h2 class="text-left indent-12 text-xl lg:text-3xl">
        In need of an auto repair or upgrade? At D & Z Motorsports, we are committed to providing a
        fast and effective environment for automobiles and their needs.
      </h2>
      <div class="grid grid-cols-3 gap-10">
        <Card class="p-4 sm:p-6 md:p-8" color="secondary">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Repair</h5>
          <p class="leading-tight font-normal text-gray-300">
            We offer a wide range of services, from basic maintenance to complex repairs. Our team
            of experienced technicians is here to help you get back on the road quickly and safely.
          </p>
        </Card>
        <Card class="p-4 sm:p-6 md:p-8" color="secondary">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Customization</h5>
          <p class="leading-tight font-normal text-gray-300">
            Fabrication, welding, and custom builds are our specialties. Whether you want to enhance
            your vehicle's performance or give it a unique look, we have the expertise to bring your
            vision to life.
          </p>
        </Card>
        <Card class="p-4 sm:p-6 md:p-8" color="secondary">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Maintenance</h5>
          <p class="leading-tight font-normal text-gray-300">
            Regular maintenance is key to keeping your vehicle running smoothly. We offer a variety
            of maintenance services to ensure your car stays in top condition.
          </p>
        </Card>
      </div>
      <Slideshow />
    </div>
    <div class="order-3 hidden lg:flex">
      <iframe
        class="rounded-sm"
        title="Facebook Page"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100090799030040&tabs=timeline&width=320&height=800&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
        width="320"
        height="800"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
    <div class="order-3 mx-auto flex lg:hidden">
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
  </div>
</div>
