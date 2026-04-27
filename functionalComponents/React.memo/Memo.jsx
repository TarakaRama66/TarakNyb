import React, { useState } from "react";
import Child from "./Child";

function Memo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child name="Gupta" />
    </div>
  );
}

export default Memo;