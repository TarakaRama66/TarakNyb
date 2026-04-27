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
