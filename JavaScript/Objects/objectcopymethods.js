//objets copying methods
//Normal copy:
let userA = { name: "Ravi", age: 25 };
let userB = userA;
userB.age = 30;
console.log(userA.age);
console.log(userB.age);

//Shallow copy:
let employee1 = {
  name: "Tarak",
  address: { city: "Hyderabad" }
};
let employee2 = Object.assign({}, employee1);
employee2.name = "Gupta";
employee2.address.city = "Bangalore";
console.log(employee1);
console.log(employee2);

//deep copy:
let student1 = {
  name: "Tarak",
  marks: { math: 90, science: 85 }
};
let student2 = JSON.parse(JSON.stringify(student1));
student2.marks.math = 100;

console.log(student1.marks.math);
console.log(student2.marks.math);



