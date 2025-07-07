export async function handleError({ error, event, message, status }) {
  console.error(`${status} ${message}: ${event.request.method} ${event.url.pathname}`);

  if (status !== 404) {
    console.error(error);
  }
}
