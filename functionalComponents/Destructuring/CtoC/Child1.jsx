import React from "react";
import Child2 from "./Child2";

function Child1() {

  const city = "Hyderabad";
  const country = "India";

  return (
    <div>
      <h2>Child1 Component</h2>
      <Child2 city={city} country={country} />
    </div>
  );
}

export default Child1;