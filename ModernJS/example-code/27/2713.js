const arr = [1, 2, 3];
console.log(arr.length);

arr.push(4);
console.log(arr.length);
console.log(arr);

arr.pop();
console.log(arr.length);
console.log(arr);

arr.length = 2;
console.log(arr);

arr.length = 5;
console.log(arr.length);
console.log(arr);
console.log(Object.getOwnPropertyDescriptors(arr));

const sparse = [, 2, , 4];

console.log(sparse.length);
console.log(sparse);

console.log(Object.getOwnPropertyDescriptors(sparse));