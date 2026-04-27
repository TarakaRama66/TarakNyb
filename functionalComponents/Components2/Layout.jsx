// components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header />

      <main style={{ padding: "20px", minHeight: "70vh" }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;