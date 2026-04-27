import React from "react";
import Child1 from "./Child1";

function Parent7(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child1 name={props.name} />
    </div>
  );
}

export default Parent7;