const arr = [1, 2, 3];

console.log(arr.includes(2));
console.log(arr.includes(100));

console.log(arr.includes(1, 1));
console.log(arr.includes(3, -1)); // 인덱스 2(= arr.length - 1)부터 확인

console.log([NaN].indexOf(NaN) !== -1); // NaN이 포함되어 있는지 확인불가
console.log([NaN].includes(NaN));