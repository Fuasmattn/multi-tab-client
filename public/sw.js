// @ts-nocheck
this.addEventListener("install", (event) => {
  console.log("installing service worker");
});

this.addEventListener("activate", (event) => {
  console.log("activating service worker");
});

self.addEventListener("message", async (event) => {
  const messageSource = event.source;
  const clients = await self.clients.matchAll({ includeUncontrolled: true });
  for (const client of clients) {
    if (client !== messageSource) {
      client.postMessage(event.data);
    }
  }
});
