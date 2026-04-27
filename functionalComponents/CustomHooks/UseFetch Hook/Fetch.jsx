import React from "react";
import useFetch from "./UseFetch";

function Fetch() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      {data.slice(0, 8).map(post => (
        <p key={post.id}>{post.title}{post.id}</p>
      ))}
    </div>
  );
}

export default Fetch;