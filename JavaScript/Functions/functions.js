function sayHeyy() {
  return "Heyy";
}

let greeting = sayHeyy();
console.log(greeting);


//multiply two numbers
function multiply(a, b) {
  return a * b;
}

console.log("The result is " + multiply(8, 8));
//    function can be used many times
function add(t, g) {
  return t + g;
}

let sum1 = add(8, 8);
let sum2 = add(80, 90);

console.log("The results are " + sum1 + " and " + sum2);

//Using Return Value
function Hello() {
  return "Hello World";
}

console.log(Hello());