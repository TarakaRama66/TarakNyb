import React from "react";
import useForm from "../useForm";

function Login({ onLogin }) {
  const { values, handleChange } = useForm({
    email: "",
    password: ""
  });

  return (
    <div>
      <h2>Login</h2>

      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={() => onLogin(values.email, values.password)}>
        Login
      </button>
    </div>
  );
}

export default Login;