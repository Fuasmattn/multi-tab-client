import { signal } from "@preact/signals";

export const count = signal(0);
export const color = signal("light");

export const initStore = () => {
  count.subscribe((val) => postMessage("count", val));
  color.subscribe((val) => postMessage("color", val));

  const handler = async ({ data }) => {
    if (data.scope === "count") {
      count.value = JSON.parse(data.value);
    }
    if (data.scope === "color") {
      color.value = data.value;
    }
  };

  if (navigator.serviceWorker.ready) {
    navigator.serviceWorker.addEventListener("message", handler);
  }
};

const postMessage = (scope, value) => {
  navigator.serviceWorker.ready.then((registration) => {
    if (registration.active) {
      registration.active.postMessage({ scope, value });
    }
    if (registration.waiting) {
      registration.waiting.postMessage({ scope, value });
    }
  });
};
