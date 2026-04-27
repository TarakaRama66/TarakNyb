import React from "react";

function Login({ onSelectRole }) {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Select Your Role</h2>

      <button onClick={() => onSelectRole("Employer")}>Employer</button>
      {/* <br /><br /> */}

      <button onClick={() => onSelectRole("HR")}>HR</button>
      {/* <br /><br /> */}

      <button onClick={() => onSelectRole("Manager")}>Manager</button>
      {/* <br /><br /> */}

      <button onClick={() => onSelectRole("Admin")}>Admin</button>
    </div>
  );
}

export default Login;