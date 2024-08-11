import React, { useReducer, useState } from 'react'

const App = () => {

  const reducer = (state, action) =>{
    switch(action.type){
      case 'increment':
        return {count: state.count + 1}
      case 'decrement':
        return {count: state.count - 1}
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {count:0})

  const increment = () => {
    dispatch({type: 'increment'})
  }

  const decrement = () =>{
    dispatch({type: 'decrement'})
  }

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App