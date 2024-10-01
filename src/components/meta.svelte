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
	content="In need of an auto repair or upgrade? At D & Z Motorsports, we are committed to providing a
				fast and effective environment for automobiles and their needs."
/>
<link rel="shortcut icon" href="https://dandzmotorsports.com/favicon.png" type="image/png" />
<meta property="og:title" content={data.title} />
<meta property="og:description" content="Welcome to D & Z Motorsports." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://dandzmotorsports.com/{data.url}" />
<meta property="og:image" content="https://dandzmotorsports.com/favicon.png" />
<meta content="#AD0302" data-react-helmet="true" name="theme-color" />
