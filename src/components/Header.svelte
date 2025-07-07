<script>
  import Logo from '$lib/assets/largelogo.png';

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ];
</script>

<header class="sticky top-0 z-50 shadow-lg">
  <nav class="flex flex-row items-center justify-evenly bg-black">
    <img src={Logo} width="350" alt="D & Z Motorsports Logo" />
    <ul class="flex space-x-5 text-3xl font-semibold text-stone-100">
      {#each pages as { href, name } (name)}
        <li>
          <a {href} class="text-text-50 duration-300 hover:text-red-400">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
