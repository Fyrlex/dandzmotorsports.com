<script lang="ts">
  import Logo from '$lib/assets/largelogo.png';
  import { slide } from 'svelte/transition';
  import Hamburger from '../svg/Hamburger.svelte';
  import { onMount } from 'svelte';

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
  ];

  let openDropDown = $state(false);

  onMount(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  function toggleDropDown() {
    openDropDown = !openDropDown;
  }

  function handleClickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.nav-dropdown')) {
      openDropDown = false;
    }
  }
</script>

<header class="sticky top-0 z-50 border-b border-b-stone-600 shadow-lg">
  <nav class="nav-dropdown flex flex-row items-center justify-evenly bg-black">
    <a href="/"
      ><img
        src={Logo}
        class="w-[250px] hover:cursor-pointer sm:w-[350px]"
        alt="D & Z Motorsports Logo"
      /></a
    >
    <ul class="hidden space-x-5 text-3xl font-semibold md:flex">
      {#each pages as { href, name } (name)}
        <li>
          <a {href} class="text-text-50 duration-300 hover:text-red-400">{name}</a>
        </li>
      {/each}
    </ul>
    <button
      class="sm:hidden"
      aria-haspopup="true"
      aria-expanded={openDropDown}
      onclick={toggleDropDown}><Hamburger /></button
    >
    {#if openDropDown}
      <div
        transition:slide={{ axis: 'y' }}
        class="fixed top-[145px] left-0 z-30 h-[20vh] w-screen border-b border-b-stone-600 bg-black px-5 font-semibold sm:hidden"
      >
        <div class="flex flex-row justify-between">
          <ul>
            <li><a href="/" onclick={() => (openDropDown = false)}>Home</a></li>
            <li><a href="/privacy" onclick={() => (openDropDown = false)}>Privacy Policy</a></li>
          </ul>
          <ul>
            <li class="text-red-400">Services</li>
            <li>
              <a href="/services#steering" onclick={() => (openDropDown = false)}>Steering</a>
            </li>
            <li><a href="/services#frame" onclick={() => (openDropDown = false)}>Frame</a></li>
          </ul>
        </div>
      </div>
    {/if}
  </nav>
</header>
