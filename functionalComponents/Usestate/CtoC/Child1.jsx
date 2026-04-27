import React from "react";

function Child1(props) {

  return (
    <div>
      <h2>Child 1</h2>

      <p>Count: {props.count}</p>

      <button onClick={() => props.setCount(props.count + 2)}>
        IncreaseNumber
      </button>

    </div>
  );
}

export default Child1;