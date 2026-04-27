import React, { useState, useEffect } from "react";
import Home from "./Home";
function Buttonclick() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      ("Welcome back ");
    }
  }, []);

  const handleLogin = () => {
    if (!email.includes("@gmail.com")) {
      setMessage("Invalid Credentials");
    } 
    else if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
    } 
    else {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("isLoggedIn", "true");

      setMessage("Login Successful ");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("isLoggedIn");
    setMessage("Logged out");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <p>{message}</p>
    </div>
  );
}

export default Buttonclick;