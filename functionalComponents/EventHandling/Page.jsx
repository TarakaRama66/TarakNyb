import React from "react";
import { Routes, Route } from "react-router-dom";
import Buttonclick from "./Buttonclick";
import Home from "./Home";

function Page() {
  return (
    <Routes>
      <Route path="/" element={<Buttonclick />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Page;