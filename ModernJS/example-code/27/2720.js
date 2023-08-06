const arr = [1, , 3];

console.log(arr.length);
console.log(arr);
console.log(arr[1]);

const arr1 = new Array(10);

console.log(arr1);
console.log(arr1.length);

console.log(new Array());
console.log(new Array(1, 2, 3)); // 인수가 2개 이상
console.log(Array(1, 2, 3)); // 인수가 2개 이상

console.log(Array.of(1));
console.log(Array.of('string'));