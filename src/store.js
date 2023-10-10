import { signal } from "@preact/signals";

export const count = signal(0);

export const initStore = () => {
  count.subscribe(postMessage);

  const handler = async ({ data }) => {
    count.value = JSON.parse(data);
  };

  if (navigator.serviceWorker.ready) {
    navigator.serviceWorker.addEventListener("message", handler);
  }
};

const postMessage = (value) => {
  navigator.serviceWorker.ready.then((registration) => {
    if (registration.active) {
      registration.active.postMessage(value);
    }
    if (registration.waiting) {
      registration.waiting.postMessage(value);
    }
  });
};
