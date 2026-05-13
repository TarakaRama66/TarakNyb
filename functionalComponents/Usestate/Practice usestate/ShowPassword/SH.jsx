import { useState } from "react";

function SH() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default SH;