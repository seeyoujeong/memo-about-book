let arr = [1, 2, 3];

arr.fill(0);
console.log(arr);

arr = [1, 2, 3];

arr.fill(0, 1);
console.log(arr);

arr = [1, 2, 3, 4, 5];

arr.fill(0, 1, 3);
console.log(arr);

const newArr = new Array(3);
console.log(newArr);

const result = newArr.fill(1);

console.log(newArr);
console.log(result);

const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
// const sequences = (length = 0) => Array.form(new Array(length), (_, i) => i);

console.log(sequences(3));