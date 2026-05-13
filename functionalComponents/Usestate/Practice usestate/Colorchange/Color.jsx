import { useState } from "react";

function Color() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
      }}
    >
      <button onClick={() => setColor("red")}>
        Red
      </button>
      <button onClick={() => setColor("Violet")}>
        Violet
      </button>
      <button onClick={() => setColor("Green")}>
        Green
      </button>
      <button onClick={() => setColor("Black")}>
        Black
      </button>
      <button onClick={() => setColor("Orange")}>
        Orange
      </button>
      <button onClick={() => setColor("blue")}>
        Blue
      </button>
    </div>
  );
}

export default Color;