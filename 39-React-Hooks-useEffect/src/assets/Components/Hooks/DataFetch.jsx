// 30th May, 2024
import { useState, useEffect } from "react";

const DataFetch = () => {
  const [todos, setTodos] = (useState([]));

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => {
        // return <p key={todo.id}>{todo.title}</p>;
        return(
          <div>
             <h3 key={todo.id}>{todo.title}</h3>
          <p>{todo.completed}</p>
          </div>
         
        )
      })}
    </div>
  );
};

export default DataFetch;
