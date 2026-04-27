import React from "react";
import E from "./E";

function C({value}) {
  console.log(value)
  return (
    <div>
      C
      <E />
      <F/>
    </div>
  );
}

export default C;