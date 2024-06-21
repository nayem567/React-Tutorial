import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name});
    setName("")
  };

  return (
    <div>
      <h3>User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button type="submit">Find User</button>
      </form>
    </div>
  );
};

export default User;
