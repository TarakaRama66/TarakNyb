import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const increment = (payload) => {
    setCount(count + payload);
  };

  const decrement = (payload) => {
    setCount(count - payload);
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => increment(1)}>
        Increment
      </button>

      <button onClick={() => decrement(1)}>
        Decrement
      </button>

    </div>
  );
}

export default Counter;