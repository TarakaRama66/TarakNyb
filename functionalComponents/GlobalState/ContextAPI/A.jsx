import React, { createContext, useState } from "react";
import B from "./B";
import C from "./C";

export let context=createContext()
function A() {
  let [a,seta]=useState(10)
  return (
    <div>
      A
      <context.Provider value={a}>
        <B />
        <C/>
      </context.Provider>
      
    </div>
  );
}

export default A;