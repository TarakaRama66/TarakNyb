import React from "react";
import Child from "./Child";

function Parent4() {

  const name = "Gupta";
  const age = 25;

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} age={age} />
    </div>
  );
}

export default Parent4;