import React, { useState, useCallback } from "react";
import Child from "./Child";

function Callback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <Child handleClick={handleClick} />
    </div>
  );
}

export default Callback;