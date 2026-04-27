// itteration
// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// for...of (values)
const nums = [10, 20, 30];

for (let n of nums) {
  console.log(n);
}

// for...in (keys)
const obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}

// for Each
nums.forEach((value, index) => {
  console.log(index, value);
});

// map
const doubled = nums.map(n => n * 2);
console.log(doubled);

// filter
const even = nums.filter(n => n % 2 === 0);
console.log(even);

// Generators
function* generatorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunc();
console.log(gen.next());
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 

// Generator with loop
function* countUpTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

for (let num of countUpTo(5)) {
  console.log(num);
}
