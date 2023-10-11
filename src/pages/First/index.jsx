// @ts-nocheck
import "./style.css";
import { useGetPokemonByNameQuery } from "../../services/pokemon";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../counterSlice";

export function First() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h1>First</h1>
      <p>Count: {count}</p>
      <button onClick={inc}>Increment</button>
    </div>
  );
}
