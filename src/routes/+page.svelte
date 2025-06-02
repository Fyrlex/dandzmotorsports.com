<script>
  import Metadata from '../components/Metadata.svelte';
  import Icon from '@iconify/svelte';
  import Logo from '$lib/assets/largelogo.png';
</script>

<Metadata title={'Home'} url={''} />

<div class="container mx-auto my-8 font-serif text-gray-200">
  <div class="my-5 flex flex-col space-x-6 lg:flex-row">
    <div class="hidden p-5 lg:flex lg:w-1/4">
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
    <div class="order-3 mx-auto flex p-5 lg:hidden">
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
    <div class="order-1 p-5 text-center lg:w-1/2">
      <h1 class="my-3 text-left text-4xl lg:text-7xl">D & Z Motorsports</h1>
      <p class="text-left indent-12 text-xl lg:text-3xl">
        In need of an auto repair or upgrade? At D & Z Motorsports, we are committed to providing a
        fast and effective environment for automobiles and their needs.
      </p>
    </div>
    <div class="order-2 flex flex-col space-y-10 p-5 lg:w-1/4">
      <div class="text-right">
        <div class="flex flex-row items-center justify-end space-x-1 text-3xl">
          <Icon icon="carbon:notification-new" />
          <h2 class="text-right">Latest News</h2>
        </div>
        <p class="text-lg">Our website has opened!</p>
      </div>
      <div class="text-right">
        <div class="flex flex-row items-center justify-end space-x-1 text-3xl">
          <Icon icon="carbon:time" />
          <h2 class="text-right">Hours</h2>
        </div>
        <p class="text-lg">Mon - Fri 9 AM to 6 PM</p>
        <p class="text-lg">Closed on holidays</p>
      </div>
      <div class="text-right">
        <div class="flex flex-row items-center justify-end space-x-1 text-3xl">
          <Icon icon="carbon:question-answering" />
          <h2 class="text-right">Contact Us</h2>
        </div>
        <div class="flex flex-row items-center justify-end space-x-1">
          <Icon icon="carbon:location" />
          <p>Winchester, VA</p>
        </div>
        <div class="flex flex-row items-center justify-end space-x-1">
          <Icon icon="carbon:email" />
          <a href="mailto:dandzmotorsports@gmail.com">dandzmotorsports@gmail.com</a>
        </div>
        <div class="flex flex-row items-center justify-end space-x-1">
          <Icon icon="carbon:phone" />
          <p>(540) 315-4562</p>
        </div>
        <p>*Appointment by call</p>
      </div>
    </div>
  </div>
</div>
