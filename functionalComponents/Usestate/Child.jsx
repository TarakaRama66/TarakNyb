import React from "react";

function Child(props) {

  return (
    <div>
      <h2>Child Component</h2>

      <p>Count: {props.number}</p>

      <button onClick={() => props.setNumber(props.number + 1)}>
        Increase
      </button>

    </div>
  );
}

export default Child;