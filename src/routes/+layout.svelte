<script lang="ts">
  import '../app.css';
  import Logo from '$lib/assets/largelogo.png';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <nav class="bg-black">
    <img src={Logo} width="500" alt="D & Z Motorsports Logo" class="mx-auto" />
  </nav>
  {@render children()}
  <footer class="h-auto py-5 text-center text-gray-200">
    © D & Z Motorsports 2024 - All rights reserved
  </footer>
</div>
