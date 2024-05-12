/* 4th May, 2024 */

/* React Hook - useState */

import React,{useState} from "react";

function UseState(){
    
    const [count, setCount] = useState(0);
    const increaseHandler = () =>{
        setCount(count => count+1);
    }
    const reset = () =>{
        setCount(0);
    }
    return(
        <div>
            <h2>useState Hook</h2>
            <h3>Count: {count}</h3>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}


export default UseState;