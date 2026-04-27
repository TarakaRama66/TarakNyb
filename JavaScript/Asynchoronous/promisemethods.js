//promise methods
// then()	Handle success
// catch()	Handle error
// Promise.all()	Handle multiple promises
//.then()
let promise1 = new Promise((resolve, reject) => {
  resolve("Data received");
});

promise1.then((result) => {
  console.log(result);
});

//chaining then()
let promise = new Promise((resolve) => {
  resolve(5);
});

promise
  .then((num) => num * 2)
  .then((result) => console.log(result));


//catch() Error Handling

let promise2 = new Promise((resolve, reject) => {
  reject(" Something Wrongg");
});

promise2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


//promise.all()

// First set of promises (all resolved)
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);
let p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values); // [10, 20, 30]
  })
  .catch((error) => {
    console.log(error);
  });


// Second set of promises (one rejected)
let p4 = Promise.resolve("Success");
let p5 = Promise.reject("Failed");
let p6 = Promise.resolve("Success");

Promise.all([p4, p5, p6])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error); // Failed
  });








