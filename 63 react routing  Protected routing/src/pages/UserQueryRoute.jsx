import { useSearchParams } from "react-router-dom";
const UserQueryRoute = () => {
  const [searchParams, setSearchParmas] = useSearchParams();
  return (
    <div>
        <h3>users?</h3>
      <h2>id = {searchParams.get("id")}</h2>
      <h2>name = {searchParams.get("name")}</h2>
      <h2>age = {searchParams.get("age")}</h2>
    </div>
  );
};

export default UserQueryRoute;
