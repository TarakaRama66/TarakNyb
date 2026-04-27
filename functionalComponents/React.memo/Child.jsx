import React from "react";

function Child({ name }) {
  console.log("Child Rendered");

  return <h2>Child: {name}</h2>;
}

export default React.memo(Child);