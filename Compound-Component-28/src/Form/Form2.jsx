// 5h May, 2024
// 28 : Controlled component

import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form2() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const { name, email, password } = user;

  const handleChange = (event) => {
    setUser({...user, [event.target.name]:event.target.value});
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form 2 Submitted");
    console.log(user);
  };

  return (
    <div>
      <h2>Controlled Component - useState with Object</h2>
      <form action="" onSubmit={submitHandler}>
        <div className={styles.form_div}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>

        <div className={styles.form_div}>
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={email}
          />
        </div>

        <div className={styles.form_div}>
          <label htmlFor="password">Password: </label>
          <input
            onChange={handleChange}
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
