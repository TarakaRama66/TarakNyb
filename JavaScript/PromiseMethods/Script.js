// PROMISE.RESOLVE()

const resolvedPromise = Promise.resolve("Resolved Data");

resolvedPromise.then(data => {
  console.log("Promise.resolve():", data);
});


// PROMISE.REJECT()

const rejectedPromise = Promise.reject("Rejected Error");

rejectedPromise.catch(error => {
  console.log("Promise.reject():", error);
});


// PROMISE.ALL()

const api1 = Promise.resolve("Users API");
const api2 = Promise.resolve("Products API");
const api3 = Promise.resolve("Orders API");

Promise.all([api1, api2, api3])
  .then(result => {
    console.log("Promise.all():", result);
  })
  .catch(error => {
    console.log(error);
  });


// PROMISE.RACE()

const fastAPI = new Promise(resolve => {
  setTimeout(() => {
    resolve("Fast API Response");
  }, 1000);
});

const slowAPI = new Promise(resolve => {
  setTimeout(() => {
    resolve("Slow API Response");
  }, 3000);
});

Promise.race([fastAPI, slowAPI])
  .then(result => {
    console.log("Promise.race():", result);
  });


// PROMISE.ALLSETTLED()

const successPromise = Promise.resolve("Login Success");

const failedPromise = Promise.reject("Payment Failed");

Promise.allSettled([successPromise, failedPromise])
  .then(result => {
    console.log("Promise.allSettled():", result);
  });


// PROMISE.ANY()

const error1 = Promise.reject("Server Error");

const success1 = new Promise(resolve => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});

const error2 = Promise.reject("Network Error");

Promise.any([error1, success1, error2])
  .then(result => {
    console.log("Promise.any():", result);
  })
  .catch(error => {
    console.log(error);
  });


// ASYNC / AWAIT

function fetchData() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      let success = true;

      if (success) {
        resolve("Fetched User Data");
      } else {
        reject("Fetch Failed");
      }

    }, 2000);

  });

}

async function getData() {

  try {

    console.log("Loading Data...");

    const result = await fetchData();

    console.log("Async/Await:", result);

  } catch (error) {

    console.log("Error:", error);

  } finally {

    console.log("Async Operation Finished");

  }

}

getData();


// CHAINING PROMISES

Promise.resolve(10)

  .then(num => {
    console.log("Step 1:", num);
    return num * 2;
  })

  .then(num => {
    console.log("Step 2:", num);
    return num * 3;
  })

  .then(num => {
    console.log("Step 3:", num);
  })

  .catch(error => {
    console.log(error);
  });


// REAL-TIME FETCH API

async function getUsers() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    console.log("Users Data:", users);

  } catch (error) {

    console.log("Fetch Error:", error);

  }

}

getUsers();

// CUSTOM DELAY FUNCTION

function delay(ms) {

  return new Promise(resolve => {

    setTimeout(() => {
      resolve(`Waited ${ms / 1000} seconds`);
    }, ms);

  });

}

delay(3000)
  .then(result => {
    console.log("Delay Function:", result);
  });


// ======================================
// 12. MULTIPLE ASYNC TASKS
// ======================================

async function multipleTasks() {

  try {

    const result1 = await Promise.resolve("Task 1 Done");
    console.log(result1);

    const result2 = await Promise.resolve("Task 2 Done");
    console.log(result2);

    const result3 = await Promise.resolve("Task 3 Done");
    console.log(result3);

  } catch (error) {

    console.log(error);

  }

}

multipleTasks();


console.log("END");