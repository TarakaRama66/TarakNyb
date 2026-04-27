import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name="Tarak" age="23" />
    </div>
  );
}

export default Parent;