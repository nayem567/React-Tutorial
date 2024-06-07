// 30th May, 2024
// 31th May, 2024
import { ErrorMessage } from "formik";
import { useState, useEffect } from "react";

const loadingMessage = <p>Todos is Loading...</p>;

const DataFetch = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error("fetching is not successful");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setTodos(data);
          setIsLoading(false);
          setError(null)
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const todosElement = todos.map((todo) => {
    // return <p key={todo.id}>{todo.title}</p>;
    return <p key={todo.id}>{todo.title}</p>;
  });

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
