//Synchronous means line by line execution
console.log("Name");
console.log("Age");
console.log("Number");
//Asynchronous means non Blocking Execution
console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 1000);
console.log("End");
//setTimeout() means Executes once after a specified delay 1sec=1000 msec
//setTimeout(function, delayInMilliseconds); Syntax
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);
//setInterval()
//Syntax
//setInterval(function, delayInMilliseconds);
setInterval(() => {
  console.log("Taraka Rama Tialk Gupta");
//console.log("Tarak")
}, 1000);
//clearTimeout() Cancels a setTimeout

let timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 2000);

clearTimeout(timeoutId);
//clearInterval() cancels a setInterval
let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

//Normal Event
//A normal event executes the function every time the event is triggered.
window.addEventListener("scroll", () => {
  console.log("Scrolling...Hello");
});
//Throtting Event
function throttle(fn, limit) {
  let lastTime = 0;

  return function () {
    const now = Date.now();
    if (now - lastTime >= limit) {
      fn();
      lastTime = now;
    }
  };
}

window.addEventListener("scroll", throttle(() => {
  console.log("Throttled Scroll");
}, 500));


//Debouncing
function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

//input.addEventListener("keyup", debounce(() => {
  //console.log("Debounced Input");
//}, 500));



//promise methods
//.then()
const promise = new Promise((resolve, reject) => {
  resolve("Data received");
});

promise.then((result) => {
  console.log(result);
});










