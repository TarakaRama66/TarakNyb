// GET request
// Get data from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);       
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

// POST request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "My first post"
  })
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Data sent:", data);
});

// PUT request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Updated Title"
  })
})
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log("Updated:", data);
});
// DELETE request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(function() {
  console.log("Data deleted");
});
// Using Fetch with Async/Await
async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();

