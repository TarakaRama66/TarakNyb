import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function App1() {

  const [data, setData] = useState("");

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildA send={setData} />

      <ChildB message={data} />

    </div>
  );
}

export default App1;