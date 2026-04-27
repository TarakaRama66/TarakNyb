import React, { useReducer } from "react";
import { counterReducer, initialState } from "../Reducers/counterReducer";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div style={{fontSize:"40px",textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {state.count}</h1>
      <button style={{ fontSize: "15px", padding: "5px 10px" }}onClick={() => dispatch({type: "INCREMENT" })}>
        Increment
      </button>
      <button style={{ fontSize: "15px", padding: "5px 10px" }}onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button style={{ fontSize: "15px", padding: "5px 10px" }} onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default Counter;