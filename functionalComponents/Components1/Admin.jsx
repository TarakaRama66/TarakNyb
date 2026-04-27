import React from "react";

function Admin({ onLogout }) {
  return (
    <div>
      <h2>Admin Profile </h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Admin;