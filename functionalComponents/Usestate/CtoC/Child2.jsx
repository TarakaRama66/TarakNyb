import React from "react";

function Child2(props) {

  return (
    <div>
      <h2>Child 2</h2>

      <p>Count from Child1: {props.count}</p>

    </div>
  );
}

export default Child2;