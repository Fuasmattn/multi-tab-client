import { signal } from "@preact/signals";
import "./style.css";
import { useEffect } from "preact/hooks";

const count = signal(0);

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

export function First() {
  const value = count.value;

  const increment = async () => {
    count.value++;
  };

  useEffect(() => {
    count.subscribe(postMessage);
  }, []);

  return (
    <div>
      <h1>First</h1>
      <p>Count: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
