import React, { useState } from "react";
import Layout from "./Layout";
import Home from "./Pages/Home";

function About() {
  return <h2> This is my About Page</h2>;
}
function Display() {
  const [page, setPage] = useState("home");
  return (
    <Layout>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>

      <hr />

      {page === "home" && <Home />}
      {page === "about" && <About />}
    </Layout>
  );
}

export default Display;