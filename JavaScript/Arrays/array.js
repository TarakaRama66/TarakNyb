var arr = ["Tarak"]
console.log(arr)

function hai(){
    arr.push("Tilak")
}
hai()
console.log(arr)

arr.unshift("Kandula")
console.log(arr)

arr.splice(2,0,"Ram")
console.log(arr)

arr.push("Gupta")
console.log(arr)

var a=["kandula","Tarak","Ram","Tilak","Gupta"]
console.log("Gupta")

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.splice(1,1)
console.log(arr)

//Array search
//Array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log("Apple is found in position " + position)

//Array lastIndexOf()
const fruits1 = ["Apple", "Orange", "Apple", "Mango"];
let position1= fruits1.lastIndexOf("Apple") + 1;
console.log("Apple is found in position " + position);

//Array includes()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.includes("Mango"));

//Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(value => value > 18);
console.log("First number over 18 is " + first);

//Array findIndex()
const values = [4, 9, 16, 25, 29];
let result = values.find(num => num > 18);
console.log("First number over 18 is " + result);

//Array findLast()
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(t => t > 40);
console.log("The last temperature over 40 was " + high);

//Array findLastIndex()
const temperatures = [27, 28, 30, 40, 42, 35, 30];
let index = temperatures.findLastIndex(value => value > 40);
console.log("The last temperature over 40 was in position " + index);


//Alphabetic Sort
//Array sort()
const items = ["Banana", "Orange", "Apple", "Mango"];
console.log("Before sort:", items);
items.sort();
console.log("After sort:", items); //reverse
items.reverse();
console.log("Reverse:",items);
//Array toSorted()
const months = ["jan","feb","mar","apr"];
const sorted = months.toSorted();
console.log("toSorted:",sorted);
//Array toReversed()
//Sorting Objects
//Numeric Sort
//Numeric Sort
//Random Sort
//Math.min()
//Math.max()
//Home made Min()
//Home made Max()


//Array itterations
//forEach()
const values1 = [45, 4, 9, 16, 25];
numbers.forEach(num => {
  console.log(num);
});

//Array Map
const values0 = [45, 4, 9, 16, 25];
const doubledValues = values0.map(num => num * 2);
console.log(doubledValues);

//Arrayflatmap()
const myArr = [1, 2, 3, 4, 5,6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr);

//Arrayfilter()
const nums = [29, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;

}
console.log(over18);

//Array Reduce()
const vals = [29, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value

}
console.log(sum);

//Array flat()

let digits = [1, 2, [3, 4], 5];
let result1 = digits.flat();
console.log(result1);

//Remove dupliates
const num = [1,2,2,3,4,4,5,6,7,7];
const uniqueNumbers = [...new Set(num)];
console.log(uniqueNumbers);

//using indexof()
let t = [1, 2, 2, 3, 4, 4, 5];

let r = [];

for (i of t) {
  if (r.indexOf(t[i]) === -1) {
    r.push(t[i]);
  }
}

console.log(r);


