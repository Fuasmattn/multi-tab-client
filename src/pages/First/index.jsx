import "./style.css";
import { count, color } from "../../store";

export function First() {
  const value = count.value;

  const increment = () => {
    count.value++;
  };

  const onSelectionChange = (event) => {
    color.value = event.target.value;
  };

  return (
    <div>
      <h1>First</h1>
      <p>Count: {value}</p>
      <button onClick={increment}>Increment</button>
      <select name="theme" onChange={(e) => onSelectionChange(e)}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
}
