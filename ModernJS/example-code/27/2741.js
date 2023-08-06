const arr = [1];

arr.push(2);
console.log(arr);

const result = arr.concat(3);
console.log(arr);
console.log(result);

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));

console.log(Array.isArray({}));
console.log(Array.isArray({ 0: 1, length: 1 }));