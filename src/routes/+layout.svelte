<script lang="ts">
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  let { children } = $props();
</script>

<Header />
<main class="flex min-h-screen flex-col bg-stone-900 bg-gradient-to-br">
  {@render children()}
</main>
<Footer />
