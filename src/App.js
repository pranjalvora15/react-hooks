import React, { useReducer } from "react";
import Reducer from "./Components/Reducer";
import "./App.css";
import CounterByReducer from "./Components/CounterByReducer";
import ComplexCounterByReducer from "./Components/ComplexCounterByReducer";
import MultipleReducer from "./Components/MultipleReducer";
import ComponentA from "./Components/useReducerWithuseContext/ComponentA";
import ComponentB from "./Components/useReducerWithuseContext/ComponentB";
import ComponentC from "./Components/useReducerWithuseContext/ComponentC";

// useReducerWithUseContext Code

export const CountContext = React.createContext();

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

// useReducerWithUseContext Code

function App() {
  // useReducerWithUseContext Code
  const [count, dispatch] = useReducer(reducer, initialState);

  // useReducerWithUseContext Code
  return (
    // useReducerWithUseContext Code
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      {/* // useReducerWithUseContext Code */}
      <div className="App">
        {/* <Reducer /> */}
        {/* <CounterByReducer /> */}
        {/* <ComplexCounterByReducer/> */}
        {/* <MultipleReducer /> */}
        {/* -------- useReducerWithUseContext Code -------- */}
        Global Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        {/* -------- useReducerWithUseContext Code -------- */}
      </div>

      {/* // useReducerWithUseContext Code */}
    </CountContext.Provider>

    // useReducerWithUseContext Code
  );
}

export default App;
