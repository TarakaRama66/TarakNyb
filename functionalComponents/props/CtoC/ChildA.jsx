import React from "react";

function ChildA(props) {
  return (
    <div>
      <button onClick={() => props.send("Hello from Child A")}>
        Send Message
      </button>
    </div>
  );
}

export default ChildA;