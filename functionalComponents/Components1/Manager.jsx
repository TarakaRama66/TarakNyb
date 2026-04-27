import React from "react";

function Manager({ onLogout }) {
  return (
    <div>
      <h2>Manager Profile </h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Manager;