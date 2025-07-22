<script lang="ts">
  interface Props {
    title: string;
    url: string;
  }

  let { title, url }: Props = $props();
</script>

<svelte:head>
  <title>D & Z Motorsports | {title}</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="In need of an auto repair or upgrade? At D & Z Motorsports, we are committed to providing a
				fast and effective environment for automobiles and their needs."
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="Welcome to D & Z Motorsports." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://dandzmotorsports.com/{url}" />
  <meta property="og:image" content="https://dandzmotorsports.com/favicon.png" />
  <meta content="#AD0302" data-react-helmet="true" name="theme-color" />
</svelte:head>
