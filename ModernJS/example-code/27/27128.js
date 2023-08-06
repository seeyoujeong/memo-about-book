console.log([5, 10, 15].some(item => item > 10));

console.log([5, 10, 15].some(item => item < 0));

console.log(['apple', 'banana', 'mango'].some(item => item === 'banana'));

console.log([].some(item => item > 3)); // 빈 배열인 경우 언제나 false

console.log([5, 10, 15].every(item => item > 3));

console.log([5, 10, 15].every(item => item > 10));

console.log([].every(item => item > 3)); // 빈 배열인 경우 언제나 true