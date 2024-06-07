// 29th May, 2024
// 30th May, 2024
import { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleLoading = () =>{
    setIsLoading(!isLoading);
  }

  return (
    <div>
      {console.log("rendering")}
      <h3>Count : {count}</h3>
      <button onClick={handleClick}>Plus + </button>
      <button onClick={handleLoading}>Is Loading </button>
    </div>
  );
};

export default UseEffectExample;
