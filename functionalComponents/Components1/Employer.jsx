import React from "react";

function Employer({ onLogout }) {
  return (
    <div>
      <h2>Employer Profile </h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Employer;