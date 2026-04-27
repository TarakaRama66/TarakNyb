import React from "react";
import useLocalStorage from "./useLocalStorage";

function LocalStorage() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default LocalStorage;