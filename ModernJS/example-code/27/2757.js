const arr1 = [1, 2];
const arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result);

result = arr1.concat(3);
console.log(result);

result = arr1.concat(arr2, 5);
console.log(result);

console.log(arr1);

const arr3 = [3, 4];

arr3.unshift(1, 2);
console.log(arr3);

arr3.push(5, 6);
console.log(arr3);

result = [1, 2].concat(arr2);
console.log(result);

result = result.concat(5, 6);
console.log(result);

const arr = [3, 4];

arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr);

result = [1, 2].concat([3, 4]);
result = result.concat([5, 6]);

console.log(result);

result = [...[1, 2], ...[3, 4]];
console.log(result);