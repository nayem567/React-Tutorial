import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import PageTitle from "./components/PageTitle";
// Page Name Change with React Helmet

function App() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const response = await axios.get("http://localhost:8000/users");
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {/* Page Name Change with React Helmet */}
      <PageTitle title="Home Page" />

      {users.map((user) => {
        return (
          <article key={user.id}>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
          </article>
        );
      })}
    </>
  );
}

export default App;
