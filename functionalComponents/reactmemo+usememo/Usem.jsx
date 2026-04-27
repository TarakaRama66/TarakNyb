import React, { useState, useMemo } from "react";
import Child from "./Child";

function Usem() {
  const [count, setCount] = useState(0);

  const items = useMemo(() => {
    return ["Apple", "Banana", "Orange"];
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>

      <Child items={items} />
    </div>
  );
}
export default Usem;