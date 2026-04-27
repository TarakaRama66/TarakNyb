// BASIC PROMISE
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise Resolved");
  } else {
    reject("Promise Rejected");
  }
});

// then(), catch(), finally()
promise
  .then(result => console.log("then:", result))
  .catch(error => console.log("catch:", error))
  .finally(() => console.log("finally: completed"));


//Promise.resolve()
let p1 = Promise.resolve(10);

//Promise.reject()
let p2 = Promise.reject("Error");

p1.then(res => console.log("resolve:", res));
p2.catch(err => console.log("reject:", err));

// Promise.all()
let a1 = Promise.resolve(1);
let a2 = Promise.resolve(2);
let a3 = Promise.resolve(3);
Promise.all([a1, a2, a3])
  .then(values => console.log("all:", values))
  .catch(err => console.log("all error:", err));

//Promise.allSettled()
let s1 = Promise.resolve("Success");
let s2 = Promise.reject("Failed");
Promise.allSettled([s1, s2])
  .then(results => console.log("allSettled:", results));

// Promise.race() 
let r1 = new Promise(resolve => setTimeout(() => resolve("First"), 100));
let r2 = new Promise(resolve => setTimeout(() => resolve("Second"), 200));
Promise.race([r1, r2])
  .then(result => console.log("race:", result));

//Promise.any()
let any1 = Promise.reject("Error");
let any2 = Promise.resolve("Winner");
Promise.any([any1, any2])
  .then(result => console.log("any:", result))
  .catch(err => console.log("any error:", err));

// async / await
async function asyncDemo() {
  try {
    let result = await Promise.resolve("Async/Await Success");
    console.log("async/await:", result);
  } catch (err) {
    console.log(err);
  }
}
asyncDemo();
