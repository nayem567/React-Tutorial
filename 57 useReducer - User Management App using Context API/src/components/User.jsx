import { useUsersContext } from "../hooks/useUsersContext";

const User = ({user}) => {
  const { deleteUser} = useUsersContext();


  const handleDelete = (id) => {
    handleDeleteUser(id);
  };
  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  const { name, id } = user;

  return (
    <article className="userCard">
      <h2>Name : {name}</h2>
      <h3>ID : {id}</h3>
      <button className="btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </article>
  );
};

export default User;
