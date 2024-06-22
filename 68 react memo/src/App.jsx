import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Message from "./components/Message";

// * 21th June, 2024
// * Memo Function, useCallback Hook , useMemo Hook
// * 22th June, 2024
// * useMemo Hook
function App() {
  console.log("App Render");
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const toggleState = toggle ? <span>On</span> : <span>Off</span>;

  const handleIncrementMessage = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // * useMemo Hook
  const calculatedNumber = useMemo(() =>{
    let number = 0;
    for(let index = 0; number < 5000000000; index++){
      number++
    }
    return number;
  }, [])



  return (
    <>
      <p>Number : {calculatedNumber}</p>
      {toggleState}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <Message
        numberOfMessages={count}
        onHandleIncrement={handleIncrementMessage}
      />
    </>
  );
}

export default App;
