new Date()                       
new Date("2026-02-03")            
new Date(20002, 11, 6)              
new Date(2026, 1, 3, 10, 30, 0)   

console.log(new Date);
//getfullyear()
const d = new Date();
console.log(d.getFullYear());

//getmonth()
console.log(d.getMonth());

//setmonth()
d.setMonth(5); // June

//getdate ofmonth
console.log(d.getDate());

//getday of week
console.log(d.getDay());

//hours,minutes,seconds
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
//setmin
d.setMinutes(42);
//templatestring
//old way
let name = "Gupta";
let age = 22;

console.log("My name is " + name + " and my age is " + age);
//new way
let name1 = "Gupta";
let age1 = 22;

console.log(`My name is ${name} and my age is ${age}`);

//variable inside string
let city = "Hyderabad";
console.log(`I live in ${city}`);

//Expression inside template string
let a = 10;
let b = 5;

console.log(`Sum is ${a + b}`);
// Function inside template string
function greet() {
  return "Good Morning";
}
console.log(`${greet()}, have a nice day`);







