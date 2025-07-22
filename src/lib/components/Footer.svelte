<script lang="ts">
  import DZLogo from '$lib/assets/largelogo.png';
</script>

<footer
  class="mt-auto flex flex-col justify-around space-y-10 bg-black px-10 pt-10 pb-20 md:flex-row md:space-y-0"
>
  <div class="flex flex-col space-x-5 sm:max-w-1/3 sm:flex-row">
    <img src={DZLogo} alt="DZLogo Logo" class="w-[250px] select-none" />
    <div>
      <p class="text-xl font-semibold">D & Z Motorsports</p>
      <p>Automotive repair. Aftermarket accessories. Custom fabrication.</p>
      <p class="text-xs">
        © D & Z Motorsports 2021-{new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  </div>
  <div>
    <p class=" text-xl font-semibold text-red-400">Legal</p>
    <ul>
      <li>
        <a href="/privacy" class="duration-100 hover:text-red-400">Privacy Policy</a>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-xl font-semibold text-red-400">Services</p>
    <ul>
      <li>
        <a href="/services#steering" class="duration-100 hover:text-red-400">Steering</a>
      </li>
      <li>
        <a href="/services#frame" class="duration-100 hover:text-red-400">Frame</a>
      </li>
    </ul>
  </div>
  <div>
    <p class="0 text-xl font-semibold text-red-400">Find Us</p>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100090799030040"
          target="_blank"
          rel="noopener noreferrer"
          class="duration-100 hover:text-red-400">Facebook</a
        >
      </li>
      <li>
        <a href="mailto:dandzmotorsport@gmail.com" class="duration-100 hover:text-red-400">Email</a>
      </li>
    </ul>
  </div>
</footer>
