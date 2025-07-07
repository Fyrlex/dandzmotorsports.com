<script lang="ts">
  import DZLogo from '$lib/assets/largelogo.png';
</script>

<footer
  class="text-secondary-100 mt-auto flex flex-col justify-around space-y-10 bg-black px-10 pt-10 pb-20 md:flex-row md:space-y-0"
>
  <div class="flex max-w-1/3 flex-row space-x-5">
    <img src={DZLogo} alt="DZLogo Logo" width={200} class="select-none" />
    <div>
      <p class="text-primary-50 text-xl font-semibold">D & Z Motorsports</p>
      <p class="text-secondary-200">
        Automotive repair. Aftermarket accessories. Custom fabrication.
      </p>
      <p class="text-secondary-300 text-xs">
        © D & Z Motorsports 2021-{new Date().getFullYear()} - All rights reserved
      </p>
    </div>
  </div>
  <div>
    <p class="text-primary-500 text-xl font-semibold">Legal</p>
    <ul>
      <li>
        <a href="/terms" class="duration-100 hover:text-red-400">Terms of Service</a>
      </li>
      <li>
        <a href="/privacy" class="duration-100 hover:text-red-400">Privacy Policy</a>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-primary-500 text-xl font-semibold">Services</p>
    <ul>
      <li>
        <a href="/changelog" class="duration-100 hover:text-red-400">Changelog</a>
      </li>
      <li>
        <a href="/dashboard" class="duration-100 hover:text-red-400">Dashboard</a>
      </li>
      <li>
        <a href="/docs" class="duration-100 hover:text-red-400">Documentation</a>
      </li>
      <li>
        <a href="/premium" class="duration-100 hover:text-red-400">Premium</a>
      </li>
    </ul>
  </div>
  <div>
    <p class="text-primary-500 text-xl font-semibold">Find Us</p>
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
