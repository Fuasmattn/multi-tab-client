import "./style.css";
import { count } from "../../store";

export function Second() {
  const value = count.value;
  return (
    <div>
      <h1>Second</h1>
      <p>Current Count: {value}</p>
    </div>
  );
}
