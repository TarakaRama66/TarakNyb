import { useState } from "react";
import Buttonclick from "../../../EventHandling/Buttonclick";

function Field() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
    </div>
  );
}
export default Field;