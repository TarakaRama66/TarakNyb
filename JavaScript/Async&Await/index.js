// async is a keyword used before a function.
// An async function always returns a Promise
// async always returns a Promise
// await only works inside async functions
// await pauses execution (non-blocking to event loop)
// Use try/catch for error handling
// Use Promise.all() for parallel execution
// Avoid overusing await inside loops
// Async
async function greet() {
  return "Hello";
}

greet().then((data) => console.log(data));

// Await
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 3000);
  });
}
async function getData() {
  const result = await fetchData();
  console.log(result);
}
getData();

// Error Handling with Try/Catch
async function example() {
  try {
    let data = await Promise.reject("Error occurred");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
example();

// Multiple Awaits
async function example() {
  const x = await Promise.resolve(10);
  const y = await Promise.resolve(20);
  const z = await Promise.resolve(30);

  console.log(x + y + z);
}
example();

//Running in Parallel
async function example() {
  const p1 = Promise.resolve(10);
  const p2 = Promise.resolve(20);
  const [a, b] = await Promise.all([p1, p2]);

  console.log(a + b);
}
example();

// // Await in Loops
// const promises = [];

// for (let i = 0; i < 3; i++) {
//   promises.push(fetchData());
// }
// await Promise.all(promises);
// console.log(promises);










