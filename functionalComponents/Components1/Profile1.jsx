import React, { useState } from "react";
import Login from "./Login";
import Employer from "./Employer";
import HR from "./HR";
import Manager from "./Manager";
import Admin from "./Admin";

function Profile1() {
  const [role, setRole] = useState("");

  const handleLogout = () => {
    setRole("");
  };

  return (
    <div style={{ textAlign: "left", marginTop: "10px" }}>

      {role === "" && <Login onSelectRole={setRole} />}
      {role === "Employer" && <Employer onLogout={handleLogout} />}
      {role === "HR" && <HR onLogout={handleLogout} />}
      {role === "Manager" && <Manager onLogout={handleLogout} />}
      {role === "Admin" && <Admin onLogout={handleLogout} />}
    </div>
  );
}

export default Profile1;