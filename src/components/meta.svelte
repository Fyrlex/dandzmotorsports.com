<script lang="ts">
	export let data: {
		title: string;
		url: string;
	};
</script>

<title>D & Z Motorsports | {data.title}</title>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta
	name="description"
	content="D & Z Motorsports services and repairs all makes and models of vehicles."
/>
<!-- <link
	rel="shortcut icon"
	href="https://cdn.discordapp.com/avatars/292821168833036288/3284fe8baadfec0fa38834643ff8a8f5.png"
	type="image/png"
/> -->
<meta property="og:title" content={data.title} />
<meta property="og:description" content="Welcome to D & Z Motorsports." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://dandzmotorsports.com/{data.url}" />
<!-- <meta
	property="og:image"
	content="https://cdn.discordapp.com/avatars/292821168833036288/3284fe8baadfec0fa38834643ff8a8f5.png"
/> -->
<meta content="#06B6D4" data-react-helmet="true" name="theme-color" />
