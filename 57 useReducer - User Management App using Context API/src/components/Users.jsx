import User from "./User";
import { useUsersContext } from "../hooks/useUsersContext";

const Users = () => {
  const {users} = useUsersContext();
  return (
    <section>
        {users.map(user => <User key={user.id} user={user}  />)}
    </section>
  );
};

export default Users;
