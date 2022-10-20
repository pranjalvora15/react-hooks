import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    // const interval = setInterval(()=>{
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  // useRef can hold reference to DOM node using ref attribute,
  //useRef can be used to store any mutuable value
  return (
    <>
      <div>Hook Timer - {timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>
         Clear Timer
      </button>
    </>
  );
}

export default HookTimer;
