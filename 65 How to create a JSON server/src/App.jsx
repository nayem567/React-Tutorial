import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";

// 21th June , 2024 - How to Create a JSON Server

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:5173/users");
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {users.map((user) => {
        return (<article key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </article>)
      })}
    </>
  );
}

export default App;
