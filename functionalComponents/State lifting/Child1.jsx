import React from "react";

function Child1(props) {
  return (
    <div>
      <button onClick={() => props.setCount(prev => prev + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Child1;