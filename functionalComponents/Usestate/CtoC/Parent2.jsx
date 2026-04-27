import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent2() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>

      <Child1 count={count} setCount={setCount} />
      <Child2 count={count} />

    </div>
  );
}

export default Parent2;