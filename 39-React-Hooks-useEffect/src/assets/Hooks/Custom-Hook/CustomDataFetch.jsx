// 30th May, 2024
// 31th May, 2024
import useFetch from "./useFetch";

const CustomDataFetch = () => {

  const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos"); 

  const loadingMessage = <p>Todos is Loading...</p>;
  const errorMessage = <p>{error}</p>;

  const todosElement = 
  data && 
  data.map((todo) => {
    // return <p key={todo.id}>{todo.title}</p>;
    return <p key={todo.id}>{todo.title}</p>;
  });

  return (
    <div>
      <h1>Todos</h1>
      {error && {errorMessage} }
      {isLoading && loadingMessage}
      {todosElement}
    </div>
  );
};

export default CustomDataFetch;
