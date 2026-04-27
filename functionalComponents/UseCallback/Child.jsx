import React from "react";

function Child({ handleClick }) {
  console.log("Child Rendered");

  return <button onClick={handleClick}>Click Me</button>;
}

export default React.memo(Child);