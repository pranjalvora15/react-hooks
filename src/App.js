import React, { useReducer } from "react";
import Reducer from "./Components/Reducer";
import "./App.css";
import CounterByReducer from "./Components/CounterByReducer";
import ComplexCounterByReducer from "./Components/ComplexCounterByReducer";
import MultipleReducer from "./Components/MultipleReducer";
import ComponentA from "./Components/useReducerWithuseContext/ComponentA";
import ComponentB from "./Components/useReducerWithuseContext/ComponentB";
import ComponentC from "./Components/useReducerWithuseContext/ComponentC";
import DataFetchingByReducer from "./Components/useReducerWithuseContext/DataFetchingByReducer";
import Parent from "./Components/useCallback/Parent";
import Counter from "./Components/useMemo/Counter";
import FocusInput from "./Components/useRef/FocusInput";
import ClassTimer from "./Components/useRef/ClassTimer";
import HookTimer from "./Components/useRef/HookTimer";
import DocTitleOne from "./Components/CustomHook/DocTitleOne";
import DocTitleTwo from "./Components/CustomHook/DocTitleTwo";
import CounterOne from "./Components/CustomHook/CounterOne";
import CounterTwo from "./Components/CustomHook/CounterTwo";
import UserForm from "./Components/CustomHook/UserForm";

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
  // console.log("App");
  /*----------------------------------------------------------------------
  // useReducerWithUseContext Code
  const [count, dispatch] = useReducer(reducer, initialState);

  // useReducerWithUseContext Code
--------------------------------------------------------------------------*/
  return (
    // useReducerWithUseContext Code -------------------------------
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    // {/* ---------------------- useReducerWithUseContext Code ----------------- */}
    <div className="App">
      {/* <Reducer /> */}
      {/* <CounterByReducer /> */}
      {/* <ComplexCounterByReducer/> */}
      {/* <MultipleReducer /> */}

      {/* -------- useReducerWithUseContext Code -------- */}
      {/* Global Count - {count}
          <ComponentA />
          <ComponentB />
          <ComponentC /> */}
      {/* -------- useReducerWithUseContext Code -------- */}
      {/* <DataFetchingByReducer /> */}
      {/* <Parent /> */}
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      {/* ----- useRef ------ */}
      {/* <ClassTimer /> */}
      {/* <HookTimer /> */}
      {/* ----- useRef ------ */}
      {/* ----- custom hooks ------ */}
      {/* <DocTitleOne />
      <DocTitleTwo/> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm/>
      {/* ----- custom hooks ------ */}
    </div>

    //{/* -------------------- useReducerWithUseContext Code -------------------- */}
    // </CountContext.Provider>

    // -------------------- useReducerWithUseContext Code --------------------
  );
}

export default App;
