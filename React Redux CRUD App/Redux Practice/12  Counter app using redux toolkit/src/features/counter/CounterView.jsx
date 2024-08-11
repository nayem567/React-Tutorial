import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice';

const CounterView = () => {

  const count = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter : {count} </h2>
      <button onClick={() => dispatch(increment())}>Increase + </button>
    </div>
  )
}

export default CounterView