import React from "react";
import useFetch from "../useFetch";
import useWindowSize from "../useWindowSize";

function Dashboard({ onLogout }) {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts");
  const width = useWindowSize();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Screen Width: {width}px</p>

      <button onClick={onLogout}>Logout</button>

      <h3>Posts:</h3>
      {data.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Dashboard;