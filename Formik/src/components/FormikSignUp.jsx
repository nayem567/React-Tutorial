//  12th May, 2024 - Formik , Form Rendering
// 13th May, 2024 - Yup , Form Validation
import { useFormik } from "formik";
import * as yup from "yup";

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup.string().min(2, "at least 2 characters name").required(),

      email: yup.string().email().required(),

      password: yup
        .string()
        .min(6, "at least 6 characters password")
        .required(),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const renderNameError = formik.touched.email && formik.errors && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );

  const renderEmailError = formik.touched.email && formik.errors && (
    <span>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password && formik.errors && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );

  const renderForm = (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name : </label>
        <input
          onChange={formik.handleChange}
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          required
        />
        <br />
        {renderNameError}
      </div>

      <div>
        <label htmlFor="email">Email : </label>
        <input
          onChange={formik.handleChange}
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          required
        />
        <br />
        {renderEmailError}
      </div>

      <div>
        <label htmlFor="password">Password : </label>
        <input
          onChange={formik.handleChange}
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          required
        />
        <br />
        {renderPasswordError}
      </div>
      <button type="submit">Sign Up </button>
    </form>
  );

  return(
    <div>
      {renderForm}
    </div>
  );
}

export default Signup;
