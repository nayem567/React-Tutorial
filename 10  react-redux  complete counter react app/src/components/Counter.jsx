import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/action/counterAction'

const Counter = () => {

    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(incrementCounter())
    }

    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }

    const handleReset = () =>{
        dispatch(resetCounter())
    }

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handleIncrement}>Increment + </button>
        <button onClick={handleDecrement}>Decrement - </button>
        <button onClick={handleReset}>Reset </button>
    </div>
  )
}

export default Counter