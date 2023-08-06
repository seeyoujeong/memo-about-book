// ES5
let arr = [1, 2].concat([3, 4]);
console.log(arr);

// ES6 
arr = [...[1, 2], ...[3, 4]];
console.log(arr);

// ES5
let arr1 = [1, 4];
let arr2 = [2, 3];

arr1.splice(1, 0, arr2);

console.log(arr1);

// ES5
arr1 = [1, 4];
arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1);

// ES6
arr1 = [1, 4];
arr2 = [2, 3];

arr1.splice(1, 0, ...arr2);
console.log(arr1);