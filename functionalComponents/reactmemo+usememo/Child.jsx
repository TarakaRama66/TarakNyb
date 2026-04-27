import React from "react";

function memo1({ items }) {
  console.log("Child Rendered");

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default React.memo(memo1);