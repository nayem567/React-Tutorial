//  12th May, 2024
import { useState } from "react";
import { Formik, useFormik } from "formik";

function Signup() {

    const formik = useFormik({
      initialValues : {
        name: '',
        email: '',
        password: ''
      },

      onSubmit: values => {
        console.log(values)
      }
      
    })

    return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input onChange={formik.handleChange} type="text" name="name" id="name" value={formik.values.name}/>
        </div>

        <div>
          <label htmlFor="email">Email : </label>
          <input onChange={formik.handleChange} type="email" name="email" id="email" value={formik.values.email} />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input onChange={formik.handleChange} type="password" name="password" id="password" value={formik.values.password} />
        </div>
        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
}

export default Signup;
