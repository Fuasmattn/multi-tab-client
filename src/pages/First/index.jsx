import "./style.css";
import { count } from "../../store";

export function First() {
  const value = count.value;

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
