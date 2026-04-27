import React, { useState, useEffect } from 'react';

function Effect() {
  let [a, seta] = useState([]);

  useEffect(()=>{
    console.log(a)
  },[a])
  useEffect(() => {
    console.log("Hello");
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((d)=>d.json())
    .then((d)=>
      seta(d)
      // console.log(d)
      // console.log(typeof(d))
      // console.log(Array.isArray(d))
    )
  }, [])
  console.log(a[0])
  // console.log(a[0].title)

  return (
    <div>
      <h2>Effect</h2>
      {/* {a}
      <h1>{a[1]?.title}</h1>
      <h2>{a[1]?.id}</h2>
      <h3>{a[1]?.userId}</h3>
      <h1>{a[2]?.title}</h1>
      <h2>{a[2]?.id}</h2>
      <h3>{a[2]?.userId}</h3>
      <h1>{a[3]?.title}</h1>
      <h2>{a[3]?.id}</h2>
      <h3>{a[3]?.userId}</h3> */}
      {a.map((b) => {
  return (
    <div
      key={b.id}
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5"
      }}
    >
      <h1 style={{ color: "Green" }}>{b.title}</h1>
      <h2 style={{ color: "red" }}>ID: {b.id}</h2>
    </div>
    );
    })}
      <button onClick={() => console.log("Button clicked")}>
        Change
      </button>
    </div>
  );
}

export default Effect;