import { useSelector } from "react-redux";
import "./style.css";
import counterSlice from "../../counterSlice";

export function Second() {
  // @ts-ignore
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Second</h1>
      <p>Current Count: {count}</p>
    </div>
  );
}
