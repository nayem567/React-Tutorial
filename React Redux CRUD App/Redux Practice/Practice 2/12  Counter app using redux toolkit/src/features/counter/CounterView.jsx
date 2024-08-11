import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

const CounterView = () => {

  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment + </button>
      <button onClick={() => dispatch(decrement())}>Decrement - </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
      <button onClick={() => dispatch(incrementByAmount(5))}> Add by 5 </button>
    </>
  )
}

export default CounterView