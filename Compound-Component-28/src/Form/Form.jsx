// 5h May, 2024
// 28 : Controlled component

import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    console.log("Form is Submitted!");
    let userInfo = {
      name: name,
      email: email,
      password: password,
    };
    console.log(userInfo);
  };

  return (
    <div>
      <h2>Controlled Component</h2>
      <form action="" onSubmit={formHandler}>
        <div className={styles.form_div}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={nameHandler}
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>

        <div className={styles.form_div}>
          <label htmlFor="email">Email: </label>
          <input
            onChange={emailHandler}
            type="email"
            name="email"
            id="email"
            value={email}
          />
        </div>

        <div className={styles.form_div}>
          <label htmlFor="password">Password: </label>
          <input
            onChange={passwordHandler}
            type="password"
            name="password"
            id="password"
            value={password}
          />
        </div>

        <div className={styles.form_div}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
