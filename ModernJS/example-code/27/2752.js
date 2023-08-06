const arr = [1, 2];

let result = arr.unshift(4, 5);
console.log(result);

console.log(arr);

const newArr = [3, ...arr];
console.log(newArr);