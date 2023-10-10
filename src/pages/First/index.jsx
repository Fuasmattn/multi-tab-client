import { signal } from "@preact/signals";
import "./style.css";

const count = signal(0);

export function First() {
  const { value } = count;

  const increment = () => {
    count.value++;
  };

  return (
    <div>
      <h1>First</h1>
      <p>Count: {value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
