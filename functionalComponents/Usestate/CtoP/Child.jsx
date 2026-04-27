import React from "react";

function Child(props) {

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={() => props.updateMessage("Hello from Child")}>
        Send Data to Parent
      </button>

    </div>
  );
}

export default Child;