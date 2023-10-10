import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";
import "./style.css";

const count = signal(0);

export function Second() {
  const value = count.value;

  useEffect(() => {
    const handler = async (event) => {
      count.value = JSON.parse(event.data);
    };

    if (navigator.serviceWorker.ready) {
      navigator.serviceWorker.addEventListener("message", handler);
    }

    return () =>
      navigator.serviceWorker.removeEventListener("message", handler);
  }, [navigator.serviceWorker.getRegistration()]);

  return (
    <div>
      <h1>Second</h1>
      <p>Current Count: {value}</p>
    </div>
  );
}
