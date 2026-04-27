//Normalcopy
const listA = [1, 2, 3];
const listB = listA;

listB.push(4);

console.log(listA);
console.log(listB);

//Shallowcopy
const data1 = [1, [2, 3]];
const data2 = [...data1];

data2[1].push(4);

console.log(data1);
console.log(data2);

//Deepcopy
const prices1 = [100, [200, 300]];
const prices2 = structuredClone(prices1);

prices2[1].push(400);

console.log(prices1);
console.log(prices2);

