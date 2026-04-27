import React, { useState } from "react";
import Child from "./Child";

function Parent3() {

  const [message, setMessage] = useState("Hello Parent");

  return (
    <div>
      <h1>Parent Component</h1>

      <p>Message: {message}</p>

      <Child updateMessage={setMessage} />

    </div>
  );
}

export default Parent3;