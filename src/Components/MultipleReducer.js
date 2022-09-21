import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MultipleReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Counter 1 - {count}</div>
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>Counter 2 - {countTwo}</div>
      <div>
        <button onClick={() => dispatchTwo("increment")}>Increment</button>
        <button onClick={() => dispatchTwo("decrement")}>decrement</button>
        <button onClick={() => dispatchTwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default MultipleReducer;
