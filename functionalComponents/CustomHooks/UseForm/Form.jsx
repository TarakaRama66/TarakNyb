import React from "react";
import useForm from "./Useform";

function Form() {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", values);

    alert(`Email: ${values.email}\nPassword: ${values.password}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <br />

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">Login</button>
        <button type="button" onClick={resetForm} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;