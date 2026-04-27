// Array Destructuring (ES6)
// Basic
const arr = [10, 20, 30];

const [a, b, c] = arr;
console.log(a, b, c);
// skip the values
const [x, , z] = [1, 2, 3];
console.log(x, z);

// Default values
const [p = 5, q = 10] = [7];
console.log(p, q);

// Rest operator
const [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest); 

// Object Destructuring
// Basic
const user = { name: "Gupta", age: 23 };

const { name, age } = user;
console.log(name, age);

// Rename Variables
const { name: username, age: userAge } = user;
console.log(username, userAge);

// Default Values
const { city = "Palakollu" } = user;
console.log(city);

// Nested destructuring
const emp = {
  id: 1,
  address: { state: "AP", pin: 534260 }
};

const { address: { state, pin } } = emp;
console.log(state, pin);









