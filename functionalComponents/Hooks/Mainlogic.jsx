import React from "react";
import useAuth from "./useAuth";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function Mainlogic() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <Dashboard onLogout={logout} />
      ) : (
        <Login onLogin={login} />
      )}
    </div>
  );
}

export default Mainlogic;