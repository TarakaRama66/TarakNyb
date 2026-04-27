import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const expensiveFunction = (n) => {
    console.log("Calculating...");
    return n * 1000;
  };

  const result = useMemo(() => {
    return expensiveFunction(num);
  }, [num]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Result: {result}</h2>
      <button onClick={() => setNum(num + 1)}>Change Num</button>
    </div>
  );
}

export default App;