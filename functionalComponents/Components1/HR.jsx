import React from "react";

function HR({ onLogout }) {
  return (
    <div>
      <h2>HR Profile </h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default HR;