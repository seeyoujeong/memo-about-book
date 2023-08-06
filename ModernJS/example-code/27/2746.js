const arr = [1, 2];

let result = arr.push(3, 4);
console.log(result);

console.log(arr);

arr[arr.length] = 5; // push메서드보다 빠름
console.log(arr);

const newArr = [...arr, 6]; // 부수효과 없음
console.log(newArr);