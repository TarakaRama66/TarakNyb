import { useState } from "react";

function useAuth() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "1234") {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, login, logout };
}

export default useAuth;