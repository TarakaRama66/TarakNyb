import React, { useState } from "react";
import Child from "./Child";

function Parent1() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>

      <Child number={count} setNumber={setCount} />

    </div>
  );
}

export default Parent1;