// Fetch Data
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Send data
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "My Post"
  })
})
.then(response => response.json())
.then(data => console.log(data));


// Update data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Updated Post"
  })
})
.then(res => res.json())
.then(data => console.log(data));


// Delete data
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(() => console.log("Deleted"));
