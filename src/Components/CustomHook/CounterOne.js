import React, { useState } from "react";
import useCounter from "./Hooks/useCounter";

function CounterOne() {
  //   const [count, setCount] = useState(0);
  //   const incrementCount = () => {
  //     setCount((prevCount) => prevCount + 1);
  //   };
  //   const decrementCount = () => {
  //     setCount((prevCount) => prevCount - 1);
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
