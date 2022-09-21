import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement1":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ComplexCounterByReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
          Increment Counter1 by 1{" "}
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
          decrement Counter1 by 1
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
          Increment Counter2 by 10{" "}
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
          decrement Counter2 by 10
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default ComplexCounterByReducer;
