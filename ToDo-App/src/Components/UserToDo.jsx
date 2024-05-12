import { useState } from "react";

function UserToDo() {
  const [userValue, setUserValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (event) => {
    setUserValue(event.target.value);
  };

  const handleSubmit = (event) => {
    setTodos([...todos, userValue]);
    event.preventDefault();
    setUserValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add Your To Do : </label>
        </div>

        <input type="text" onChange={handleInput} value={userValue} />

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <ol>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
export default UserToDo;
