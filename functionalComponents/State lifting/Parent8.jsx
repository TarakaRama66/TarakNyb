import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Praent8() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Component</h2>

      <Child1 setCount={setCount} />
      <Child2 count={count} />

    </div>
  );
}

export default Praent8;