const arr = [1, 2, 3, 4];

const result = arr.splice(1, 2, 20, 30);

console.log(result); // 제거한 요소가 배열로 반환
console.log(arr);

const arr1 = [1, 2, 3, 4];

const result1 = arr1.splice(1, 0, 100);

console.log(arr1);
console.log(result1);

const arr2 = [1, 2, 3, 4];

const result2 = arr2.splice(1, 2);

console.log(arr2);
console.log(result2);

const arr3 = [1, 2, 3, 4];

const result3 = arr3.splice(1);

console.log(arr3);
console.log(result3);