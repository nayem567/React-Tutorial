//  12th May, 2024
import { useState } from "react";

function Signup() {

   

    const [userName, setUserName ] = useState("");
    const [userEmail, setUserEmail ] = useState("");
    const [userPassword, setUserPassword ] = useState("");

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    }

    const handleEmailChange = (event) =>{
        setUserEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setUserPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo)
    }

    const userInfo = {
        userName,
        userEmail,
        userPassword
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input onChange={handleNameChange} type="text" name="name" id="name" value={userName}/>
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input onChange={handleEmailChange} type="email" name="email" id="email" value={userEmail} />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input onChange={handlePasswordChange} type="password" name="password" id="password" value={userPassword} />
        </div>
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
}

export default Signup;
